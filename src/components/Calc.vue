<template>
  <div class="container container-calc">
    <div class="calc-main">
      <h1 class="title">Гематрический калькулятор</h1>
      <div class="result">Сумма: {{ result }}</div>

      <textarea
        class="custom-area"
        v-model="msg"
        @input="calcSum(msg)"
        cols="30"
        rows="10"
      ></textarea>

      <div class="calc-btns">
        <button class="btn-danger" :disabled="!msg.length" @click="clearText">
          Очистить поле
        </button>
        <button :disabled="!msg.length" @click="addText">
          Сохранить текст
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import RUDATA from '@/constants/ru-data.js'
export default {
  name: 'Calc',
  data() {
    return {
      result: 0,
      data: { ...RUDATA },
      msg: '',
    }
  },
  watch: {
    msg: {
      handler: function (val) {
        this.calcSum(val)
      },
      deep: true,
    },
    getCurrentText: {
      handler(val) {
        this.msg = val
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(['getCurrentText']),
  },
  methods: {
    ...mapMutations(['ADD_TEXT', 'SET_CURRENT_TEXT']),
    calcSum(msg) {
      const arrMsg = String(msg)
        .replace(/[^а-яА-ЯёЁ]/g, '')
        // .replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '')
        .split('')

      const numbers = arrMsg.map((item) => this.data[item.toLowerCase()])
      const totalSum = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
      this.result = totalSum
    },
    async clearText() {
      const res = await this.swalCancel(
        'Введённый текст не сохранится. Очистить поле?'
      )
      if (res.isConfirmed) {
        this.msg = ''
      }
    },
    addText() {
      const newText = {
        id: Date.now(),
        body: this.msg,
        sum: this.result,
      }
      console.log(newText)
      this.ADD_TEXT(newText)
      this.swalSuccess('Текст успешно сохранён!')
    },
  },
  beforeUnmount() {
    this.SET_CURRENT_TEXT(this.msg)
  },
}
</script>

<style scoped lang="scss">
.container-calc {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
}
.calc {
  &-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px 0;
  }
  &-btns {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0;
    button {
      width: calc(50% - 10px);
    }
  }
}

@media (max-width: 700px) {
  .calc {
    &-main {
      padding: 10px 0;
    }
    &-btns {
      margin: 0;
      button {
        width: calc(50% - 5px);
      }
    }
  }
}
</style>

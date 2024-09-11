<template>
  <div class="container container-calc">
    <div class="calc-main">
      <h1 class="title">Гематрический калькулятор</h1>
      <div class="calc-header">
        <div class="calc-header-spacer"></div>
        <div class="calc-header-sum">
          <div class="result">Сумма: {{ result }}</div>
        </div>
        <div class="calc-header-font">
          Размер шрифта:
          <select name="font-size" id="font-size">
            <option v-for="font in fontsArray" :key="font" :value="font" :selected="font == getCurrentSize" @click="setFontSize(font)">
              {{ font }}
            </option>
          </select>
        </div>
      </div>

      <textarea
        class="custom-area"
        :style="{fontSize: getCurrentSize + 'px' }"
        v-model="msg"
        @input="calcSum(msg)"
        cols="30"
        rows="10"
      ></textarea>

      <div class="calc-btns">
        <button class="btn-primary" :disabled="!msg.length" @click="copyText">
          Копировать текст
        </button>
        <button class="btn-danger" :disabled="!msg.length" @click="clearText">
          Очистить поле
        </button>
        <button :disabled="!msg.length" @click="addText">
          Сохранить текст
        </button>
      </div>
    </div>

    <notice :class="{'active': showCopyInfo}">Весь текст скопирован в буфер обмена!</notice>
  </div>
</template>

<script>
import Notice from './Notice.vue'
import { mapMutations, mapGetters } from 'vuex'
import RUDATA from '@/constants/ru-data.js'
export default {
  name: 'Calc',
  components: { Notice },
  data() {
    return {
      result: 0,
      data: { ...RUDATA },
      msg: '',
      showCopyInfo: false,
      fontsArray: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42]
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
    ...mapGetters(['getCurrentText', 'getCurrentSize']),
  },
  methods: {
    ...mapMutations(['ADD_TEXT', 'SET_CURRENT_TEXT', 'SET_CURRENT_SIZE']),
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
    copyText() {
      navigator.clipboard.writeText(this.msg);
      this.showCopyInfo = true
      setTimeout(() => {
        this.showCopyInfo = false
      }, 2000)
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
    setFontSize(size) {
      this.SET_CURRENT_SIZE(size)
    }
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
  &-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 0 15px;
    &-sum {
      text-align: center;
    }
    &-font {
      display: flex;
      align-items: center;
      justify-content: end;
      font-size: 24px;
      font-weight: 500;
      select {
        margin-left: 15px;
      }
    }
    > * {
      flex-grow: 1;
    }
  }
  &-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px 0;
  }
  &-btns {
    display: flex;
    gap: 20px;
    margin: 10px 0 0;
    button {
      flex-grow: 1;
    }
  }
}

@media (max-width: 1000px) {
  .calc {
    &-header {
      grid-template-columns: 1fr 1fr;
      &-spacer {
        display: none;
      }
    }
  }
}

@media (max-width: 700px) {
  .calc {
    &-header {
      grid-template-columns: 1fr;
      &-font {
        display: none;
      }
    }
    &-main {
      padding: 10px 0;
    }
    &-btns {
      gap: 10px;
      flex-wrap: wrap;
      margin: 0;
    }
  }
}
</style>
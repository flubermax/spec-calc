<template>
  <div class="text-item">
    <div class="text-item-body">
      <div>{{ text.body }}</div>
    </div>
    <div class="text-item-bottom">
      <div class="text-item-sum">
        Сумма: {{ text.sum }}
      </div>
      <div class="text-item-btns">
        <button class="btn-danger" @click="setText(text.body)">Перенести в калькулятор</button>
        <button class="btn-danger" @click="removeText(text)">Удалить</button>
      </div>
    </div>
    <notice :class="{'active': isNoticeShow}">Текст перенесён в калькулятор</notice>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Notice from './Notice.vue'
export default {
  components: { Notice },
  props: {
    text: {
      type: Object,
    },
  },
  data() {
    return {
      isNoticeShow: false
    }
  },
  watch: {},
  methods: {
    ...mapMutations(['REMOVE_TEXT', 'SET_CURRENT_TEXT']),
    async removeText(text) {
      const res = await this.swalCancel('Вы уверены, что хотите удалить сохранённый текст?')
      if (res.isConfirmed) {
        this.REMOVE_TEXT(text)
      }
    },
    setText(text) {
      this.SET_CURRENT_TEXT(text)
      this.isNoticeShow = true
      setTimeout(() => {
        this.isNoticeShow = false  
      }, 2000);
    }
  },
}
</script>

<style lang="scss">
.text-item {
  background-color: #fff;
  border: 1px solid #158b00;
  border-radius: 5px;
  text-align: left;
  padding: 15px 10px;
  margin: 20px 0 0;

  &-body {
    font-size: 28px;
  }

  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0 0;
  }

  &-btns {
    display: flex;
    button {
      font-size: 16px;
      padding: 5px 10px;
      margin: 0 0 0 15px;
    }
  }
  &-sum {
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    position: relative;
    margin: 8px 0 0;
    &::after {
      content: '';
      width: 140px;
      height: 2px;
      background-color: #158b00;
      position: absolute;
      top: -6px;
      left: 0;
    }
  }
}

@media (max-width: 550px) {
  .text-item  {
    &-bottom {
      display: block;
    }
    &-btns {
      justify-content: flex-end;
      margin: 8px 0 0;
      button {
        margin: 0 5px;        
      }
    }
  }
}
</style>

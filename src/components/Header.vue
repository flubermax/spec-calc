<template>
  <div class="header">
    <div>
      <router-link to="/calc">Калькулятор</router-link>
      <router-link to="/texts">Сохраненные тексты</router-link>
    </div>

    <button v-if="getIsAuth" class="btn-danger" @click="handleLogaut">
      Выйти
    </button>
    <button v-else class="header-btn" @click="handleLogaut">Войти</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: mapGetters(['getUser', 'getIsAuth']),
  methods: {
    ...mapMutations(['SET_AUTH']),
    async handleLogaut() {
      const res = await this.swalCancel('Вы уверены, что хотите выйти?')
      if (res.isConfirmed) {
        localStorage.removeItem('calcAuth')
        this.SET_AUTH()
        this.$router.push({ path: '/login', replace: true })
      }
    },
  },
}
</script>

<style lang="scss"></style>

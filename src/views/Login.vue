<template>
  <div class="login-screen">
    <div class="form">
      <input type="text" v-model="login" placeholder="Введите логин" />
      <input type="text" v-model="password" placeholder="Введите пароль" />
      <button @click="handleLogin">Войти</button>
      <div class="error" v-if="invalidForm">Неверный логин или пароль!</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
      user: {
        login: '123',
        password: '123',
      },
      invalidForm: false,
    }
  },
  computed: {
    ...mapGetters([''])
  },
  methods: {
    ...mapMutations(['SET_AUTH']),
    handleLogin() {
      if (
        this.login !== this.user.login ||
        this.password !== this.user.password
      ) {
        return (this.invalidForm = true)
      }
      this.invalidForm = false
      this.login = this.password = ''
      localStorage.setItem('calcAuth', 'true')
      this.SET_AUTH()
      this.$router.push({ path: '/calc', replace: true })
    },
  },
}
</script>

<style lang="scss">
.login-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.form {
  width: 350px;
}
</style>
<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: { Header },
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>

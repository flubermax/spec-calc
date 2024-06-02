<template>
  <div class="container container-texts">
    <div v-if="getAllTexts.length">
      <h2>Список текстов</h2>
      <h3>(Сбросится после перезагрузки страницы)</h3>
      <texts-item v-for="text in getAllTexts" :key="text.id" :text="text" />
    </div>
    <h2 v-else>Сохраненных текстов нет</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextsItem from './TextsItem.vue'
export default {
  components: { TextsItem },
  computed: {
    ...mapGetters(['getAllTexts']),
  },
}
</script>

<style lang="scss">
.container-texts {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

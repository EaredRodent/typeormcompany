<script setup lang="ts">

import FirstScreen from "~/components/FirstScreen.vue";

const canShow = ref(false)
const isMobile = ref(false)

if (window?.document?.readyState === 'complete') {
  canShow.value = true
} else {
  window?.addEventListener('load', () => {
    canShow.value = true
  })
}

isMobile.value = window?.innerWidth < 768;

window?.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
})
</script>

<template>
  <template v-if="canShow">
    <template v-if="isMobile">
      <div class="mobile">
        Мобильная версия пока в разработке!<br>
        Заходите на сайт с ПК.
      </div>
    </template>
    <template v-else>
      <FirstScreen/>
      <SecondScreen/>
      <ThirdScreen/>
      <FourthScreen/>
      <NavBar/>
    </template>
  </template>
  <template class="loading" v-else>
    <div class="loading">
      Loading...
    </div>
  </template>
</template>

<style scoped>
.loading, .mobile {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>

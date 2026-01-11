<script setup lang="ts">

import FirstScreen from "~/components/FirstScreen.vue";

const canShow = ref(false)

if (window?.document?.readyState === 'complete') {
  canShow.value = true
} else {
  window?.document?.addEventListener('DOMContentLoaded', () => {
    canShow.value = true
  })
}
</script>

<template>
  <template v-if="canShow">
    <FirstScreen/>
    <SecondScreen/>
    <ThirdScreen/>
    <FourthScreen/>
    <NavBar/>
  </template>
  <template class="loading" v-else>
    <div class="loading">
      Loading...
    </div>
  </template>
</template>

<style scoped>
.loading {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

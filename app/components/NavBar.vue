<script setup lang="ts">
const isNavBarBackground = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isNavBarBackground.value = window.scrollY > 100;
  })
})

const onOrderClick = () => {
  window.orderForm.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}
</script>

<template>
<div class="navbar" :show-background="isNavBarBackground">
  <div class="brand">
    <img src="/logo.png" alt="Logo">
    TypeORM
  </div>
  <div class="nav-links">
    <div>Выгода</div>
    <div>Заявка</div>
    <div>Контакты</div>
  </div>
  <div class="send-order">
    <button type="submit" class="send-button" @click="onOrderClick">
        ОТПРАВИТЬ ЗАЯВКУ
    </button>
  </div>
</div>
</template>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vh;

  &[show-background=true] {
    background-color: #000124;
  }
}

.brand {
  width: 10vw;
  font-size: 1.5vw;
  font-weight: bold;
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    width: 2vw;
    margin-right: .5vw;
    filter: hue-rotate(336deg);
  }
}

.nav-links {
  display: flex;

  > *:not(:first-child) {
    margin-left: 3vw;
  }
}

.send-order {
  width: 10vw;
  display: flex;
  justify-content: end;
}

.send-button {
  border: 2px solid rgb(255, 37, 80);
  background: transparent;
  width: 10vw;
  height: 2.5vw;
  border-radius: 20px;
  font-size: 0.9vh;

  &:hover {
    background-color: rgb(187, 18, 55);
  }
}
</style>

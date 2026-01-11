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

const onTabClick = (id) => {
  window[id].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
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
    <div class="link" @click="onTabClick('facts')">Выгода</div>
    <div class="link" @click="onTabClick('callUs')">Заявка</div>
    <div class="link" @click="onTabClick('contacts')">Контакты</div>
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
  z-index: 2;

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

  .link:not(:first-child) {
    margin-left: 3vw;
  }

  .link {
    cursor: pointer;

    &:hover {
      color: rgb(255, 52, 99);
    }
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

<script setup lang="ts">
interface Window {
  form: HTMLFormElement
}

const onOrderClick = () => {
  window.orderForm.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}
</script>

<template>
  <div class="screen">
    <div class="container">
      <div class="header">
        <img src="/logo.png" alt="logo">
        TypeORM Support
      </div>
      <div class="about">
        Мы превращаем работу с базой данных из рутины — в искусство.<br>
        Наша команда превратит вашу базу данных в типизированное API, где каждое поле — это строгий контракт.<br>
        Наша реализация API — это не просто обёртка,<br>
        это ваш проводник в мир типобезопасных запросов и элегантного кода.
      </div>
      <div class="actions">
        <button class="order-button" @click="onOrderClick">ОТПРАВИТЬ ЗАЯВКУ</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .screen {
    display: flex;
    justify-content: center;
    height: 80vh;
    background-image: url(/wrap-1.png);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      height: 325px;
      width: 100%;
      background: linear-gradient(rgba(18, 24, 77, 0) 69.91%, rgb(0, 1, 36) 94.95%);
    }
  }

  .container {
    padding-top: 12%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .header {
    font-size: 3.5vw;
    font-weight: bold;
    display: flex;
    align-items: center;

    img {
      width: 5vw;
      margin-right: 1vw;
      filter: hue-rotate(336deg);
    }
  }

  .about {
    text-align: center;
    margin-top: 5%;
  }

  .actions {
    padding-top: 5%;
  }

  .order-button {
    background-color: rgb(255, 37, 80);
    width: 22vw;
    height: 3.5vw;
    border-radius: 20px;

    &:hover {
      background-color: rgb(187, 18, 55);
    }
  }
</style>

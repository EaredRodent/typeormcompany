<script setup lang="ts">
useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/clapping-congrats.gif' }
  ]
})

const submitted = ref(false)
const waiting = ref(false)
const orderNumber = ref(0)

const onSubmit = () => {
  const orderNumberSaved = Number(localStorage.getItem('orderNumber') ?? Math.floor(Math.random() * 1000))
  localStorage.setItem('orderNumber', String(orderNumberSaved + 1))
  orderNumber.value = orderNumberSaved

  waiting.value = true
  setTimeout(() => {
    submitted.value = true
  }, 1200)
}
</script>

<template>
  <div class="screen">
    <form id="orderForm" class="container" @submit.prevent="onSubmit">
      <h1 id="callUs" class="header">
        Свяжитесь с нами!
      </h1>
      <div class="about">
        Упростите разработку API с нашей экспертной поддержкой — заполните заявку,<br>
        и ваша команда получит персонального архитектора для решения сложных задач 🚀
      </div>
      <template v-if="submitted">
        <div class="feedback">
          Спасибо за заявку! Мы свяжемся с вами в ближайшее время!<br>
          Ваш номер заявки: SID{{ orderNumber }}
        </div>
        <img class="congrats" src="/clapping-congrats.gif" alt="">
      </template>
      <template v-else>
        <div class="form">
          <div class="fields">
            <div class="field">
              <label for="firstName">
                Имя
              </label>
              <input required id="firstName" type="text" placeholder=" ">
            </div>

            <div class="field">
              <label for="lastName">
                Фамилия
              </label>
              <input required id="lastName" type="text" placeholder=" ">
            </div>
          </div>

          <div class="fields">
            <div class="field">
              <label for="phone">
                Телефон
              </label>
              <input required id="phone" type="text" placeholder=" ">
            </div>

            <div class="field">
              <label for="email">
                E-mail
              </label>
              <input required id="email" type="text" placeholder=" ">
            </div>
          </div>

          <div class="fields">
            <div class="field">
              <label for="text">
                Ваше сообщение
              </label>
              <input id="text" type="text" placeholder=" ">
            </div>
          </div>
        </div>
        <div class="shine"></div>
        <button type="submit" class="send-button">
          <template v-if="waiting">
            <span class="spinner">◌</span>
          </template>
          <template v-else>
            ОТПРАВИТЬ ЗАЯВКУ
          </template>
        </button>
      </template>
    </form>
  </div>
</template>

<style scoped>
.screen {
  margin-top: 10vh;
  height: 85vh;
}

.container {
  padding-top: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.header {
  font-size: 3vw;
}

.about {
  margin-top: 5vh;
  text-align: center;
}

.form {
  background: #000124;
  border: 1px solid rgba(64, 64, 92, .679442);
  width: 35vw;
  padding: 3vw;
  margin-top: 5vh;
}

.shine {
  width: 50vw;
  box-shadow: 0 0 120px 8px white;
  z-index: -1;
  transform: translateY(-10vh);
}

label {
  cursor: text;
  transition: transform .2s ease-out;
  opacity: 0.5;

  &:has(+ input:placeholder-shown:not(:focus)) {
    opacity: 1;
    transform: translateY(2.75vh);
  }
}

input {
  outline: none;
  border: none;
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  border-bottom: 1px solid rgba(64, 64, 92, .679442);
  margin-top: 0.75vh;

  &:user-invalid {
    border-color: red;
  }
}

.fields {
  display: flex;

  &:not(:first-child) {
    margin-top: 5vh;
  }
}

.field {
  flex: 1;
  display: flex;
  flex-flow: column;

  &:not(:first-child) {
    margin-left: 3vw;
  }
}

.send-button {
  border: 2px solid rgb(255, 37, 80);
  background: transparent;
  width: 22vw;
  height: 3.5vw;
  border-radius: 20px;
  margin-top: 8vh;
  line-height: 1;

  &:hover {
    background-color: rgb(187, 18, 55);
  }
}

.feedback {
  margin-top: 5vh;
  color: #0f08;
  text-align: center;
}

.congrats {
  margin-top: 5vh;
}

.spinner {
  display: inline-block;
  font-family: "JetBrains Mono", monospace;
  transform: scale(3);
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg) scale(3);
  }

  100% {
    transform: rotateZ(360deg) scale(3);
  }
}
</style>

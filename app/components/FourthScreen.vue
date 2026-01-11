<script setup lang="ts">
  const hostName = window?.location?.hostname ?? ''
</script>

<template>
  <div class="screen">
    <div class="container">
      <h1 id="contacts" class="header">
        Контакты
      </h1>
      <div class="small-header">
        Для клиентов
      </div>
      <div class="contacts">
        <div>Телефон: <a href="tel:+79281120742">+79281120742</a></div>
        <div>E-mail: <a :href="'mailto:business@' + hostName">business@{{hostName}}</a></div>
      </div>
      <div class="small-header">
        Для соискателей
      </div>
      <div class="contacts">
        <div>Телефон: <a href="tel:+79281120742">+79281120742</a></div>
        <div>E-mail: <a :href="'mailto:hr@' + hostName">hr@{{hostName}}</a></div>
      </div>

      <div class="trademark">TypeORM Support</div>
    </div>
  </div>
</template>

<style scoped>
.screen {
  display: flex;
  justify-content: center;
  position: relative;
  background-image: url('/technologii5.jpg');
  background-position: left bottom;
  background-size: 150%;
  background-repeat: no-repeat;
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

.small-header {
  margin-top: 5vh;
  font-size: 1.7vw;
}

.contacts {
  margin-top: 2vh;
  display: flex;
  align-self: start;

  & > div:not(:first-child) {
    margin-left: 5vw;
  }
}

a {
  color: #ccff;
}

.trademark {
  margin-top: 30vh;
  font-size: 12px;
  padding: 10px;
}
</style>

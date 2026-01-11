<script setup lang="ts">

</script>

<template>
<div class="screen">
  <div class="container">
    <h1 id="facts" class="header">
      Факты и цифры
    </h1>
    <div class="benefits">
      <div class="benefit">
        <div class="needle">
          Снижение затрат на разработку
        </div>
        <div class="details">
          <div class="plus">
            TypeORM: Прототип за 2-3 дня
          </div>
          <div class="minus">
            Plain JS: Аналогичный функционал за 1-2 недели
          </div>
        </div>
      </div>

      <div class="benefit">
        <div class="needle">
          Скорость написания кода
        </div>
        <div class="details">
          <div class="plus">
            TypeORM: CRUD-операции за 15-30 строк с готовыми методами
          </div>
          <div class="minus">
            Plain JS: Тот же функционал требует 50-100 строк с ручным написанием SQL, валидацией и маппингом
          </div>
        </div>
      </div>

      <div class="benefit">
        <div class="needle">
          Снижение ошибок
        </div>
        <div class="details">
          <div class="plus">
            TypeORM: ~70% меньше runtime-ошибок благодаря проверке типов на этапе компиляции
          </div>
          <div class="minus">
            Plain JS: Большинство ошибок обнаруживаются только при тестировании или в продакшене
          </div>
        </div>
      </div>

      <div class="benefit">
        <div class="needle">
          SQL-инъекции
        </div>
        <div class="details">
          <div class="plus">
            TypeORM: Автоматическая экранизация параметров через <span class="code">QueryBuilder</span> и параметризованные запросы
          </div>
          <div class="minus">
            Plain JS: Риск уязвимостей при ручной конкатенации строк
          </div>
        </div>
      </div>

      <div class="benefit">
        <div class="needle">
          Поддержка схемы БД
        </div>
        <div class="details">
          <div class="plus">
            TypeORM: Автоматические миграции при изменении моделей
          </div>
          <div class="minus">
            Plain JS: Ручное обновление схемы на каждой инстансе БД
          </div>
        </div>
      </div>

      <div class="benefit">
        <div class="needle">
          Технический долг
        </div>
        <div class="details">
          <div class="plus">
            TypeORM: Стандартизированные паттерны уменьшают долг на 40-60%
          </div>
          <div class="minus">
            Plain JS: Индивидуальные решения каждого разработчика увеличивают долг
          </div>
        </div>
      </div>

      <div class="benefit">
        <div class="needle">
          Статистика использования
        </div>
        <div class="details">
          <div class="plus">
            TypeORM: 57k+ ⭐ на GitHub, 600k+ еженедельных загрузок npm.<br>
            400+ контрибьюторов, регулярные обновления
          </div>
          <div class="minus">
            Plain JS: Онбординг осложняется необходимостью параллельного изучения SQL, архитектуры БД, драйверов и ручного написания большого объема кода для типовых операций.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.screen {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10vw;
  background-image: url('/technologii5.jpg');
  background-size: cover;
  background-position: left;
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

.benefit {
  display: flex;
  flex-flow: column;
  margin-top: 5vh;
  max-width: 60vw;

  .needle {
    text-wrap: nowrap;
    font-size: 1.8vw;
    border-left: 1px #ff3c3c solid;
    padding-left: 1vw;
  }

  .details {
    margin-top: 2vh;
    margin-left: 5vh;
  }

  .plus {
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: -1.5vw;
      color: #0f0a;
    }
  }

  .minus {
    margin-top: 1.5vh;
    position: relative;

    &::before {
      content: '✗';
      position: absolute;
      left: -1.5vw;
      color: #f00a;
    }
  }

  .code {
    margin-left: 0.5vw;
    font-family: JetBrains Mono, monospace;
    background-color: #88f2;
    padding: 0 0.3vw;
    text-wrap: nowrap;
    border-radius: 5px;
    color: wheat;
  }
}
</style>

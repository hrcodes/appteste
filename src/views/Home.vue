<template>
  <main id="home">
    <header class="header">
      <input class="header__search" type="search"  placeholder="Search"/>
      <time class="header__time">{{ myDate }}</time>
      <!-- tag <time datetime> mdn -->
      <img class="header__image" src="/img/equilizer.png" id="btnConfig" />
    </header>
    <section class="task-list">
      <h1 class="title">My Task</h1>
      <h2 class="subtitle subtitle--red">Task List</h2>

      <ul class="task-list__indicator">
        <li class="indicator indicator--high">high</li>
        <li class="indicator indicator--medium">medium</li>
        <li class="indicator indicator--low">low</li>
      </ul>

      <ol>
        <li v-for="(card, idx) in card" :key="idx" :class="card.class">{{card.title}}</li>
      </ol>
    </section>
    <section class="task-done">
      <h2 class="subtitle subtitle--red">Task Done</h2>
      <ol>
        <li v-for="(card, idx) in card" :key="idx" :class="card.class">{{card.title}}</li>
      </ol>
    </section>
  </main>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    const dtdata = new Date();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return {
      myDate: `${months[dtdata.getMonth()]} ${dtdata.getDay()} - ${dtdata.getFullYear()}`,
      card: [
        {
          class: 'card',
          title: '1',
        },
        {
          class: 'card',
          title: '2',
        },
        {
          class: 'card',
          title: '3',
        },
        {
          class: 'card',
          title: '4',
        },
        {
          class: 'card',
          title: '5',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Sniglet&display=swap");

main#home {
  background-color: rgba(255, 255, 255, 0.3);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin: 10px;
  margin-left: 0px;
  /*opacity: 0.3   -- mudaria todos os elementos da section*/
  /*border: solid;*/
}

.header {
  display: flex;
  justify-content: flex-start;

  &__search {
    background: #fff url(/img/search.png) no-repeat 12px;
    border-radius: 30px;
    border-style: hidden;
    height: 40px; //vamos mudar isso
    margin-top: 20px;
    margin-left: 30px;
    padding-left: 50px;
    padding-right: 10px;
    font-size: 15px;
    outline-style: none;
  }

  &__time {
    margin-top: 30px;
    margin-right: 20px;
    font-size: 13px;
  }

  &__image {
    margin-top: 30px;
    margin-right: 40px;
    outline-style: none;
  }
}

.title {
  margin-left: 35px;
  font-size: 25px;
}

.subtitle {
  margin-left: 35px;
  font-size: 13px;
}

.subtitle--red {
  color: rgb(252, 87, 10);
}

.task-list__indicator {
  display: flex;
  justify-content: flex-end;
}

.indicator {
  border-radius: 30px;
  color: white;
  font-size: 11px;
  height: 20px;
  line-height: 20px; // centraliza o texto ao height
  margin-left: 20px;
  width: 50px;
  // padding: 0px 20px;  Usaria caso o usuario informasse o label
  text-align: center;

  &--low {
    background-color: #7fc7fc;
  }

  &--medium {
    background-color: #f9a51a;
  }

  &--high {
    background-color: #f5450d;
  }
}

.card {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  width: 180px;
  height: 100px;
  margin: 30px;
  /* float: left; */
}
</style>

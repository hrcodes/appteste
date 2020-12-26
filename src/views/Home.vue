<template>
  <main id='home'>
    <header class='header'>
      <input class='header__search' type='search' placeholder='Search' />
        <time class='header__time'>{{ myDate }}</time>
        <!-- tag <time datetime> mdn -->
      <img class='header__image' src='/img/equilizer.png' />
    </header>

    <h1 class='title magin-bot'>My Task</h1>
    <h2 class='subtitle subtitle--red'>Task List</h2>

    <section class='task-list'>
      <ul class='task-list__indicator'>
        <li class='indicator indicator--low indicator--spacing'>low</li>
        <li class='indicator indicator--medium indicator--spacing'>medium</li>
        <li class='indicator indicator--high indicator--spacing'>high</li>
      </ul>
      <ol class='task-list__cards'>
        <li v-for='(card, idx) in card' :key='idx' :class='card.class'>
          <ul class='card-item__titles card-item__spacing'>
            <li class='card-item__title'>{{ card.title }}</li>
            <li class='card-item__subtitle'>{{ card.subtitle }}</li>
          </ul>
          <div class='card-item__last-line'>
            <ul class='card-item__faces card-item__spacing'>
              <li>{{ card.face1 }}</li>
              <li>{{ card.face2 }}</li>
              <li>{{ card.face3 }}</li>
              <li>{{ card.face4 }}</li>
              <li>{{ card.morefaces }}</li>
            </ul>
            <div :class='card.indicator'></div>
          </div>
        </li>
      </ol>
    </section>

    <section class='task-list'>
      <h2 class='subtitle subtitle--red'>Task Done</h2>
      <ol class='task-list__cards'>
        <li v-for='(card, idx) in card' :key='idx' :class='card.class'>
          {{ card.title }}
        </li>
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
      myDate: `${
        months[dtdata.getMonth()]
      } ${dtdata.getDay()} - ${dtdata.getFullYear()}`,
      card: [
        {
          class: 'card-item',
          title: 'Molly Moreas',
          subtitle: 'Photo Shoot',
          face1: '@',
          face2: '@',
          face3: '@',
          face4: '@',
          morefaces: '...',
          indicator: 'indicator indicator--high card-item__indicator',
        },
        {
          class: 'card-item',
          title: 'Nike Lebron',
          subtitle: 'Loading Page',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'BCA',
          subtitle: 'Website Developer',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'Plainthing',
          subtitle: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: '',
          subtitle: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'Pharmacy Illustration',
          subtitle: 'Ilustration',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'ESDM Video',
          subtitle: 'Motion Graphic',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'Minerba',
          subtitle: 'Motion Graphic',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
      ],
    };
  },
});
</script>

<style lang='scss'>
@charset 'UTF-8';
@import url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap');

main#home {
  background-color: rgba(255, 255, 255, 0.3);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin: 10px;
  margin-left: 0px;
  max-width: 1050px;
  /*opacity: 0.3   -- mudaria todos os elementos da section*/
}

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;

  &__search {
    background: #fff url(/img/search.png) no-repeat 12px;
    border-radius: 30px;
    border-style: hidden;
    height: 40px; //vamos mudar isso
    width: 46%;
    padding-left: 50px;
    padding-right: 10px;
    margin-right: auto;
    font-size: 15px;
    outline-style: none;
  }

  &__time {
    font-size: 13px;
  }

  &__image {
    outline-style: none;
    padding-left: 20px;
  }
}

.title {
  margin-left: 35px;
  margin-bottom: 30px;
  font-size: 25px;
}

.subtitle {
  margin-left: 35px;
  font-size: 13px;
}

.subtitle--red {
  color: rgb(252, 87, 10);
}

.indicator {
  display: inherit;
  justify-content: center;
  border-radius: 30px;
  color: white;
  font-size: 11px;
  height: 18px;
  line-height: 20px; // centraliza o texto ao height
  width: 45px;

  &--low {
    background-color: #7fc7fc;
  }

  &--medium {
    background-color: #f9a51a;
  }

  &--high {
    background-color: #f5450d;
  }

  &--spacing {
    margin-left: 1%;
  }
}

.task-list {
  display: flex;
  flex-direction: column;

  &__indicator {
    //agrupamento dos indicators
    display: inherit;
    justify-content: flex-end;
    margin-right: 7.5%;
  }

  &__cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.card-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border-radius: 20px;
  height: 100px;
  margin: 30px;
  width: 190px;
  padding: 0px;

  &__title {
    font-size: 13px;
    margin-top: 5px;
  }

  &__subtitle {
    font-size: 9px;
    margin-top: 10px;
  }

  &__last-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__faces {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  }

  &__indicator {
    margin-right: 9%;
  }

  &__spacing {
    margin-left: 9%;
  }
}
</style>

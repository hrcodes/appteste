<template>
  <main id="home">
    <header class="header">
      <input class="header__search" type="search" placeholder="Search" />
      <time class="header__time">{{ myDate }}</time>
      <!-- tag <time datetime> mdn -->
      <img class="header__image" src="/img/equilizer.png" />
    </header>

    <h1 class="text text--title">My Task</h1>
    <h2 class="text text--subtitle text--red">Task List</h2>

    <section class="task-list">
      <Indicator class="task-list__indicator" @selected="filter($event)" />
      <ol class="task-list__cards">
        <li v-for="(card, idx) in card" :key="idx" :class="card.class">
          <header class="card-item__titles card-item__spacing">
            <h4 class="card-item__title">{{ card.title }}</h4>
            <p class="card-item__subtitle">{{ card.subtitle }}</p>
          </header>
          <footer class="card-item__last-line">
            <ul class="card-item__faces card-item__spacing">
              <li>{{ card.face1 }}</li>
              <li>{{ card.face2 }}</li>
              <li>{{ card.face3 }}</li>
              <li>{{ card.face4 }}</li>
              <li>{{ card.morefaces }}</li>
            </ul>
            <div :class="card.indicator"></div>
          </footer>
        </li>
      </ol>
    </section>

    <section class="task-list">
      <h2 class="text text--subtitle text--red">Task Done</h2>
      <ol class="task-list__cards">
        <li v-for="(card, idx) in card" :key="idx" :class="card.class">
          <h4 class="card-item__title">{{ card.title }}</h4>
        </li>
      </ol>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Indicator from '@/components/Indicator.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Indicator,
  },
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

  methods: {
    send() {
      //
    },
    filter(level: string) {
      console.log(level);
      // FILTRAR CARDS POR LEVEL
    },
  },
});
</script>

<style lang="scss" scop>
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
    margin-right: 3.4%;
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
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  height: 100px;
  margin: 30px;
  width: 190px;
  padding: 15px;

  &__title {
    font-size: 13px;
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
  }
}
</style>

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
      <Indicator @selected="filter($event)" />
      <Task :tasks="dataApi" @clicktitle="showdescription($event)"/>
    </section>

    <section class="task-list">
      <h2 class="text text--subtitle text--red">Task Done</h2>
      <Task :tasks="dataApi" @clicktitle="showdescription($event)"/>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Indicator from '@/components/Indicator.vue';
import Task from '@/components/Task.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Indicator,
    Task,
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
      dataApi: [] as any,
      myDate: `${months[dtdata.getMonth()]} ${dtdata.getDay()} - ${dtdata.getFullYear()}`,
    };
  },

  // Estudar os hooks do lifecycle
  created() {
    setTimeout(() => {
      this.dataApi = [
        {
          class: 'card-item',
          title: 'Molly Moreas',
          subtitle: 'Photo Shoot',
          description: 'This is a card to make a photo shoot of the project and test out descriptions',
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
          description: '',
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
          description: '',
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
          description: '',
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
          description: '',
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
          description: '',
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
          description: '',
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
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
      ];
    }, 1000);
  },

  methods: {
    send() {
      //
    },
    filter(level: string) {
      // console.log(level);
      alert(level);
      // FILTRAR CARDS POR LEVEL
    },
    showdescription(description: string) {
      alert(description);
    },
  },
});
</script>

<style lang='scss' scoped>
main#home {
  background-color: rgba(255, 255, 255, 0.3);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px;
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
}

.indicator-list {
  justify-content: flex-end;
}

.sidebar{
  background-color: black;
}

</style>

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
    <!-- <SvgExample /> -->
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Indicator from '@/components/Indicator.vue';
import Task from '@/components/Task.vue';
// import SvgExample from '@/components/SvgExample.vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Home',
  components: {
    Indicator,
    Task,
    // SvgExample,
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
      dataApi: [] as array,
      myDate: `${months[dtdata.getMonth()]} ${dtdata.getDay()} - ${dtdata.getFullYear()}`,
      info: null,
    };
  },

  created() {
  // fetch('https://api-node.codermarcos.repl.co/tasks')
  //   .then((response) => response.json())
  //   .then((banana) => { this.dataApi = banana; })
  //   .catch((error) => { console.log(error); });

    axios
      .get('https://api-node.codermarcos.repl.co/tasks')
      .then((response) => { this.dataApi = response.data; }) // console.log(response.data)); // )
      .catch((error) => { console.log(error); });
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

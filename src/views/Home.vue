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
    <ApiCalls />
    <div class="api">
      <input id="InputTask" type="search" class="api__buttons"/>
      <input id="InputSearch" type="button" class="api__buttons"
        value="Buscar" v-on:click="search()"
      >
      <input id="InputDelete" type="button" class="api__buttons" value="Deletar" v-on:click="del()">
      <input id="InputCreate" type="button" class="api__buttons" value="Criar" v-on:click="send()">
      <input id="InputRefresh" type="button" class="api__buttons api__refresh"
        value="Refresh" v-on:click="reload()"
      >
      <p id="res"></p>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  getTasks,
  getTask,
  delTask,
  createTask,
} from '@/services/api';
import Task from '@/components/Task.vue';
import Indicator from '@/components/Indicator.vue';
import ApiCalls from '@/components/ApiCalls.vue';
// import SvgExample from '@/components/SvgExample.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Indicator,
    Task,
    ApiCalls,
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
      dataApi: [] as Array,
      myDate: `${months[dtdata.getMonth()]} ${dtdata.getDay()} - ${dtdata.getFullYear()}`,
      info: null,
    };
  },

  created() {
  // fetch('https://api-node.codermarcos.repl.co/tasks')
  //   .then((response) => response.json())
  //   .then((banana) => { this.dataApi = banana; })
  //   .catch((error) => { console.log(error); });
    getTasks() // usgin axios
      .then((data) => {
        this.dataApi = data;
      });
  },

  methods: {
    send() {
      // post
      const newTask = {
        class: 'card-item',
        title: 'NovoCard',
        subtitle: 'Este é um novo Card',
        description: 'Nada',
        indicator: 'low',
      };

      createTask(newTask);
    },

    search() {
      const id = document.getElementById('InputTask').value;
      getTask(id)
        .then((data) => {
          console.log(data);
        });
    },

    del() {
      const id = document.getElementById('InputTask').value;
      delTask(id);
      console.log(`id ${id} was deleted`);

      // PORQUE ELE NAO RESPEITOU MEU TIMEOUT?
      setTimeout((getTasks().then((e) => { console.log(e); }), 5000));
    },

    reload() {
      // TERIA QUE RENDERIZAR DE NOVO?
      // getTasks().then((data) => { this.dataApi = data; });
      // this.$forceUpdate();
    },

    filter(level: string) {
      alert(level);
      // filtrar cards por level
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

.api {
  display: flex;
  margin-top: 2%;

  &__buttons {
    padding: 8px;
    margin: 5px;
  }

  &__refresh {
    margin-left: auto;
  }
}

</style>

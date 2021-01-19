<template>
  <main id="home">
    <header class="header">
      <input
        class="header__search"
        type="search"
        placeholder="Search"
        :value="inputSearch"
        @input.prevent="headerSearch($event.target.value)"
      />
      <time class="header__time">{{ myDate }}</time>
      <!-- tag <time datetime> mdn -->
      <img class="header__image" src="/img/equilizer.png" />
    </header>

    <h1 class="text text--title">My Task</h1>
    <h2 class="text text--subtitle text--red">Task List</h2>

    <section class="task-list">
      <Indicator @selected="filter($event)" />
      <TaskList
        :tasks="dataApi"
        @todelete="deletetask($event)"
      />
    </section>

    <section class="task-list">
      <h2 class="text text--subtitle text--red">Task Done</h2>
      <TaskList
        :tasks="dataApi"
        @todelete="deletetask($event)"
      />
    </section>
    <!-- <SvgExample /> -->
    <!-- <ApiCalls /> -->
    <!-- <p>{{ res }}</p> -->
    <VModal>
      <template v-slot:title>
        <h1>It's time do create a new Taks!</h1>
      </template>
      <FormTask />
      <template v-slot:footer>
        <p class="footer-description">Create a new card</p>
      </template>
    </VModal>
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
import { Task } from '@/models/tasks';
import TaskList from '@/components/TaskList.vue';
import Indicator from '@/components/Indicator.vue';
import FormTask from '@/components/FormTask.vue';
// import SvgExample from '@/components/SvgExample.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Indicator,
    TaskList,
    FormTask,
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
      dataApi: new Array<Task>(),
      myDate: `${months[dtdata.getMonth()]} ${dtdata.getDay()} - ${dtdata.getFullYear()}`,
      info: null,
      inputTask: '',
      inputSearch: '',
      // res: '',
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
      /* -- o que estamos fazendo - ainda não é o ideal
         1- O Estado local é o meu data = this.dataApi
         2- Criar nova task local
         3- Envio para a API - post
         4- Atualizando meu estado local
      */
      // post
      const newTask: Task = {
        class: 'card-item',
        title: 'NovoCard',
        subtitle: 'Este é um novo Card',
        description: 'Nada',
        indicator: 'low',
        responsible: [],
      };

      createTask(newTask)
        .then((id) => {
          const task = { ...newTask, id };
          this.dataApi.push(task);
        });
    },

    search() {
      // if (this.inputTask) {
      getTask(this.inputTask)
        .then((data) => {
          console.log(data);
        });
      // } else {
      //   alert('Valor Invalido');
      // }
    },

    del() {
      // const id = document.getElementById('InputTask').value; nao usa assim
      delTask(this.inputTask)
        .then((data) => {
          console.log(data);
          this.dataApi = data;
        });
      console.log(`id ${this.inputTask} was deleted`);
    },

    reload() { // ficou sem necessidade pq atualizei o dataApi no retorno do delTaks
      getTasks().then((data) => { this.dataApi = data; });
    },

    // filter(level: string) {
    // alert(level);
    // filtrar cards por level
    // },

    // showdescription(description: string) {
    //  alert(description);
    // },

    deletetask(id: string) {
      delTask(id)
        .then((data) => {
          console.log(data);
          this.dataApi = data;
        });
      console.log(`id ${id} was deleted`);
    },

    headerSearch(value: string) {
      // if (value.length > this.inputSearch.length) {
      //   this.inputSearch = `${value}.`;
      // } else {
      //   this.inputSearch = value.substring(0, value.length - 1);
      // }

      // isso faz com que meu input seja atualizado quando eu digito algo
      this.inputSearch = value;
      console.log(this.inputSearch);

      if (this.inputSearch) {
        getTask(this.inputSearch)
          .then((data) => {
            console.log(data);
            this.dataApi = [data]; // [ cria um array automatico ]
          });
      } else {
        getTasks()
          .then((data) => {
            this.dataApi = data;
          });
      }
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

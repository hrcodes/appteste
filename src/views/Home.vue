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

    <h1 class="text text--title" @click="showdescription">My Task</h1>
    <h2 class="text text--subtitle text--red">Task List</h2>

    <section class="task-list">
      <Indicator @selected="filter($event)" />
      <TaskList
        :tasks="$store.state.tasks"
        @todelete="deletetask($event)"
        @clicktitle="showdescription($event)"
      />
    </section>

    <section class="task-list">
      <h2 class="text text--subtitle text--red">Task Done</h2>
      <TaskList
        :tasks="$store.state.tasks"
        @todelete="deletetask($event)"
        @clicktitle="showdescription($event)"
      />
    </section>
    <!-- {{ $store.state.name }} chamada da stores -->
    <!-- <SvgExample /> -->
    <!-- <ApiCalls /> -->
    <!-- <VModal style="display: none"> -->
    <VModal>
      <!-- porque o overlay nao ficou oculto? -->
      <template v-slot:title>
        <h1>It's time do create a new Taks!</h1>
      </template>

      <!-- O "data" que eu passei aqui vem da referencia do slot da VModal
      <slot :show="show" :close="close"/> -->

      <template v-slot:default="data">
      <!-- <template v-slot:default="{ close }"> -->
      <!-- { close } é o mesmo que trazer do VModal a funcao close() -->

        <FormTask @createTask="send($event, data);" />
        <!-- <FormTask @createTask="send($event);  close()" /> -->
      </template>

      <template v-slot:footer>
        <p class="footer-description">Create a new card</p>
      </template>
    </VModal>

    <form class="authentication" @submit.prevent="login">
      <label for="txtUser">User :</label>
      <input v-model="inputUser" />
      <label for="txtSenha">Senha:</label>
      <input v-model="inputPwd" type="password" />
      <button type="submit">Enviar</button>
    </form>

  </main>
</template>

<script lang="ts">
import Vue from 'vue';
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
      inputSearch: '',
      inputUser: '',
      inputPwd: '',
      // res: '',
    };
  },

  created() {
    // carrega os tasks da API
    this.$store.dispatch('getTasks');
  },

  methods: {

    // ----------- criar uma nova task
    send(newTask: Task, data: {show: boolean; close: () => void}) {
      this.$store.dispatch('createTask', newTask);
      data.close(); // data:{...} pra fechar o modal

      /* -- o que estamos fazendo - ainda não é o ideal
         1- O Estado local é o meu data = this.dataApi
         2- Criar nova task local
         3- Envio para a API - post
         4- Atualizando meu estado local
      */
    },

    // ----------- deletar uma task
    deletetask(id: string) {
      this.$store.dispatch('deleteTask', id);
    },

    // ----------- pesquisa por id da task
    headerSearch(value: string) {
      // isso faz com que meu input seja atualizado quando eu digito algo
      this.inputSearch = value;

      if (this.inputSearch) {
        this.$store.dispatch('getTaskBySearch', this.inputSearch);
      } else {
        this.$store.dispatch('getTasks');
      }
    },

    // ----------- mostrar a descrição do card
    showdescription(description: string) {
      alert(description);
    },

    login() {
      const token = btoa(`${this.inputUser}:${this.inputPwd}`);
      localStorage.setItem('token', token);
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
    font-size: 15px;
    height: 40px; //vamos mudar isso
    margin-right: auto;
    min-width: 200px;
    outline-style: none;
    padding-left: 50px;
    padding-right: 10px;
    width: 46%;
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

.authentication {
  display: flex;
  flex-direction: column;
  width: 50%;
}

</style>

<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
import {
  getTasks,
  getTask,
  delTask,
  createTask,
} from '@/services/api';

export default Vue.extend({
  // created() {
  //   getTasks() // usgin axios
  //     .then((data) => {
  //       this.dataApi = data;
  //     });
  // },

  // data() {
  //
  // },

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
  },
});

</script>

<style lang='scss'>

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

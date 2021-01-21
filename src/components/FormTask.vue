<template>
  <form class="formulary" @submit.prevent="checkForm">
    <!-- v-model é só para twoWayBind -->
    <label v-if="errosFormulario.length" class="formulary__description">
      Please confirm:
      <ul class="list">
        <li  v-for="(error, idx) in errosFormulario" :key="idx">{{ error }}</li>
      </ul>
    </label>
    <label v-else class="formulary__description"></label>

    <fieldset class="formulary__fieldset">
      <label for="inputTitle" class="formulary__fieldset-label">Title: </label>
      <input id="inputTitle" v-model="newTask.title" class="formulary__fieldset-input" required />
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label for ="inputSubtitle" class="formulary__fieldset-label">SubTitle: </label>
      <input id="inputSubtitle" v-model="newTask.subtitle" class="formulary__fieldset-input" />
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label for="txtDescription" class="formulary__fieldset-label">Description: </label>
      <textarea
        v-model="newTask.description"
        class="formulary__fieldset-input" rows="4" cols="30" required></textarea>
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label class="formulary__fieldset-label">Responsable: </label>
      <select v-model="newTask.responsible"
        :class="['formulary__fieldset-select', ErrorResponsible]"
      >
        <option v-for="(ppl, idx) in people" :key="idx">{{ ppl }}</option>
      </select>
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label class="formulary__fieldset-label">Priority: </label>
      <select v-model="newTask.indicator"
        :class="['formulary__fieldset-select', ErrorPriority]"
      >
        <option
          v-for="(prio, idx) in priority"
          :key="idx"
          :value="prio.class">
            {{ prio.level }}
        </option>
      </select>
    </fieldset>

    <fieldset class="formulary__fieldset-buttons">
      <button type="submit" class="formulary__button">
        Criar
      </button>
      <button type="reset" class="formulary__button" @click="resetForm">
        Cancelar
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
// import { Task } from '@/models/tasks';

export default Vue.extend({
  data() {
    const people = [
      'Helder',
      'Marcos',
      'Joana',
    ];

    const priority = [
      {
        level: 'Low',
        class: 'indicator--low',
      },
      {
        level: 'Medium',
        class: 'indicator--medium',
      },
      {
        level: 'High',
        class: 'indicator--high',
      },
    ];

    return {
      people,
      priority,
      errosFormulario: [] as Array<string>,
      ErrorResponsible: '',
      ErrorPriority: '',
      // newTask: new Object<Task>(),
      newTask: {
        class: 'card-item',
        title: '',
        subtitle: '',
        description: '',
        indicator: '',
        responsible: [],
      },
    };
  },

  methods: {
    checkForm() {
      this.errosFormulario = [];
      this.ErrorResponsible = '';
      this.ErrorPriority = '';
      this.newTask.class = 'card-item';

      if (!this.newTask.responsible[0]) {
        this.errosFormulario.push('You need to select a Responsible!');
        this.ErrorResponsible = 'formulary__fieldset-input-error';
      }
      if (!this.newTask.indicator) {
        this.errosFormulario.push('You need to select a Priority!');
        this.ErrorPriority = 'formulary__fieldset-input-error';
      }

      if (this.newTask.responsible[0] && this.newTask.indicator) {
        // console.log(this.newTask);
        this.$emit('createTask', this.newTask);
      }
    },

    resetForm() {
      this.errosFormulario = [];
      // this.newTask.responsible[0] = '';
      // this.newTask.indicator = '';
      // COMO EU LIMPARIA ISSO?
    },
  },
});

</script>

<style lang='scss' scoped>

.formulary {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // border: solid;

  &__description {
    // color: #777;
    color: red;
    font-size: 10pt;
    padding: 20px;
    width: 100%;
    padding-bottom: 50px;
    // border: solid red;
  }

  &__fieldset {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 7px;
    // border: solid blue;
  }

  &__fieldset-label {
    width: 120px;
    color: #555;
  }

  &__fieldset-input {
    border-radius: 6px;
    border-color: rgb(224, 224, 224) ;
    border-style: solid;
    font-size: 11pt;
    padding: 6px;
    outline-color: orange;
    width: 250px;
  }

  &__fieldset-select {
    border-radius: 6px;
    border-color: rgb(224, 224, 224) ;
    border-style: solid;
    background-color: white;
    font-size: 11pt;
    padding: 6px;
    width: 267px;
  }

  &__fieldset-input-error {
    border-color: red;
  }

  &__fieldset-buttons {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    padding-top: 50px;
    width: 100%;
  }

  &__button {
    border-radius: 6px;
    border-style: none;
    font-weight: bold;
    margin-left: 15px;
    padding: 6px;
    width: 80px;
    outline-style: none;
  }

  &__button:hover {
    background-color: rgb(91, 91, 199);
    color: white;
  }
}

.list {
  list-style-type: circle;
  padding: 5px;
  padding-left: 10px;
  color: #777;
}

</style>

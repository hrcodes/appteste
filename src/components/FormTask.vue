<template>
  <form class="formulary"> <!-- @submit="checkForm"> -->
    <!-- v-model é só para twoWayBind -->
    <label v-if="errosFormulario.length" class="formulary__description">
      Please confirm:
      <ul class="list">
        <li  v-for="(error, idx) in errosFormulario" :key="idx">{{ error }}</li>
      </ul>
    </label>

    <fieldset class="formulary__fieldset">
      <label for="inputTitle" class="formulary__fieldset-label">Title: </label>
      <input id="inputTitle" class="formulary__fieldset-input" required />
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label for ="inputSubtitle" class="formulary__fieldset-label">SubTitle: </label>
      <input id="inputSubtitle" class="formulary__fieldset-input" />
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label for="txtDescription" class="formulary__fieldset-label">Description: </label>
      <textarea
        id="txtDescription"
        class="formulary__fieldset-input" rows="4" cols="30" required></textarea>
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label class="formulary__fieldset-label">Responsable: </label>
      <select v-model="selectedPeople" class="formulary__fieldset-select" re>
        <option selected></option>
        <option v-for="(ppl, idx) in people" :key="idx">{{ ppl }}</option>
      </select>
    </fieldset>

    <fieldset class="formulary__fieldset">
      <label class="formulary__fieldset-label">Priority: </label>
      <select v-model="selectedPriority" class="formulary__fieldset-select">
        <option v-for="(prio, idx) in priority" :key="idx">{{ prio }}</option>
      </select>
    </fieldset>

    <fieldset class="formulary__fieldset-buttons">
      <button type="submit" class="formulary__button" @click="checkForm">
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

export default Vue.extend({
  data() {
    const people = [
      'Helder',
      'Marcos',
      'Joana',
    ];

    const priority = [
      'Low',
      'Medium',
      'Hight',
    ];
    return {
      people,
      priority,
      selectedPeople: null,
      selectedPriority: null,
      errosFormulario: [] as Array<string>,
    };
  },

  methods: {
    checkForm() {
      this.errosFormulario = [];

      if (!this.selectedPeople) {
        this.errosFormulario.push('You need to select a Responsible!');
      }
      if (!this.selectedPriority) {
        this.errosFormulario.push('You need to select a Priority!');
      }
      // e.preventDefault();
    },

    resetForm() {
      this.errosFormulario = [];
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

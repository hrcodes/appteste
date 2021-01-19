<template>
  <ol class="card-list">
    <li v-for="(task, idx) in tasks" :key="idx" :class="task.class">
      <header class="card-item__titles card-item__spacing">
        <section class="card-item__first-line">
          <h4 class="card-item__title" @click="$emit('clicktitle', task.description)">
              #{{ task.id }} - {{ task.title }}
          </h4>
          <img class="card-item__title-img"
            :src="require('../assets/img/trash.svg')"
            @click="$emit('todelete', task.id)"
          >
        </section>
        <p class="card-item__subtitle">{{ task.subtitle }}</p>
      </header>
      <footer class="card-item__last-line">
        <ul class="card-item__faces card-item__spacing">
          <li v-for="(responsible, idx) in task.responsible" :key="idx" >{{ responsible }}</li>
        </ul>
        <div :class="`indicator ${task.indicator}`"></div>
      </footer>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    //
  },
});

</script>

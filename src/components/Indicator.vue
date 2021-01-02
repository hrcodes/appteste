<template>
  <ul class="indicator-list">
    <li v-for="level in levels"
      :key="level"
      @click="handleClick(level)"
      :class="`indicator indicator--spacing indicator--${level}`"
    >
      {{ level }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      levels: [
        'low',
        'medium',
        'high',
      ],
    };
  },
  methods: {
    handleClick(level: string) {
      this.$emit('selected', level);
    },
  },
});
</script>

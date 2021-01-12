<template>
  <div id="svgexemple">
    <svg> <!-- viewBox="0 0 700 700" -->
     <!-- porque o x = 200 corta o quadrado no meio? vuebox-->
     <rect
      width="200"
      height="100"
      fill="red"
      x="10"
      y="10"
      stroke="green"
      stroke-width="5"
     />
     <!-- <circle
      r="30"
      cx="50"
      cy="40"
      fill="blue"
      stroke="orange"
      stroke-width="5"
     /> -->

     <!-- REF caso extremo -->
     <circle
      style="r:30"
      class="meu-circulo"
      ref='meu-circulo'
      @click='increase($event)'
      @contextmenu='decrease($event)' ></circle>

    </svg>
    <img class="file"
      :src="require('../assets/img/file.svg')"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SvgExample',

  methods: {
    increase(e: any) {
      // const circle = this.$refs['meu-circulo'];  -- nao é boa pratica
      const circle = e.target; // o emissor de qualquer evento é target
      circle.style.r = parseInt(circle.style.r, 10) + 10;
    },
    decrease(e: any) {
      const circle = e.target;
      e.preventDefault();
      circle.style.r = 30;
    },
  },
});
</script>

<style lang='scss' scoped>
div {
  border: solid gray 0.5px;
}

.meu-circulo { // eu poderia fazer o indicator num SVG? seria um circulo modificado via css?
  cx: 50;
  cy: 40;
  fill: lightgreen;
  stroke: orange;
  stroke-width: 5;
  transition: all 1s ease;
}

.meu-circulo:hover {
  cx: 70;
  fill: green;
  stroke-width: 10;
}

.file {
  width: 200px;
}

</style>

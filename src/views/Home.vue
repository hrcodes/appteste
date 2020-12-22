<template>
  <main id="home">
    <header id="cabecalho">
      <input type="search" id="pesquisa" placeholder="Search"/>
      <!--<img>-->
      <label id="data" class="direita">DATA </label> <!--{{ mydate }}</label> -->
      <!-- tag timing -->
      <img src="/img/equilizer.png" id="btnConfig" class="direita"/>
    </header>
    <section class="title" id="TaskList">
      <h1>My Task</h1>
      <h2>Task List</h2>

      <div class="highIndicator" id="divhigh">high</div>
      <div class="mediumIndicator" id="divmedium">medium</div>
      <div class="lowIndicator" id="divlow">low</div>
      <ol v-for="(card, idx) in card" :key="idx">
        <li :class="card.class"> {{card.title}} </li>
      </ol>
    </section>
    <section class="title" id="TaskDone">
      <h2>Task Done</h2>
      <ol>
        <li class="card"></li>
        <li class="card"></li>
        <li class="card"></li>
      </ol>
    </section>
  </main>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      mydate: () => {
        const month = [
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
          'December'];
        const dtdata = new Date();
        const txtdate = `${month[dtdata.getMonth()]} ${dtdata.getDay()} - ${dtdata.getFullYear()}`;
        return txtdate;
      },
      card: [
        {
          class: 'card',
          title: '1',
        },
        {
          class: 'card',
          title: '2',
        },
        {
          class: 'card',
          title: '3',
        },
        {
          class: 'card',
          title: '4',
        },
        {
          class: 'card',
          title: '5',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Sniglet&display=swap");
main#home {
  background-color: rgba(255, 255, 255, 0.3);
  width: 1000px;
  height: 768px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  float: left;
  margin: 10px;
  margin-left: 0px;
  /*opacity: 0.3   -- mudaria todos os elementos da section*/
  /*border: solid;*/
}

header {
  display: flex;
  justify-content: flex-start;
  border: solid;
}

.direita {
  border: solid;
  justify-self: flex-end;
}

header input#pesquisa {
  background: #fff url(/img/search.png) no-repeat 12px;
  border-radius: 30px;
  border-style: hidden;
  height: 40px;
  width: 550px;
  margin-top: 20px;
  margin-left: 30px;
  padding-left: 50px;
  padding-right: 10px;
  font-size: 15px;
  outline-style: none;
}

header label#data {
  margin-top: 30px;
  margin-right: 20px;
  font-size: 13px;
}

header img#btnConfig {
  margin-top: 30px;
  margin-right: 40px;
  outline-style: none;
}

.title h1 {
  margin-left: 35px;
  font-size: 25px;
}

.title h2 {
  margin-left: 35px;
  font-size: 13px;
  color: rgb(252, 87, 10);
  /* border: solid; */
}

section#TaskList div {
  color: white;
  border-radius: 30px;
  width: 50px;
  height: 20px;
  font-size: 11px;
  text-align: center;
  vertical-align: center;
  float: right;
  margin-right: 30px;
}

.lowIndicator {
  background-color: #7fc7fc;
}

.mediumIndicator {
  background-color: #f9a51a;
}

.highIndicator {
  background-color: #f5450d;
}
.card {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  width: 180px;
  height: 100px;
  margin: 30px;
  /* float: left; */
}
</style>

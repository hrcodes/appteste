<template>
  <div id="app">
    <aside class="sidebar">
      <img
        class="sidebar__image"
        :src="require('./assets/img/logo.png')"
      /> <!-- srcset="" definir tamanhos por resolução -->
      <nav class="sidebar__navigation">
        <ul class="sidebar__items">
          <li class="sidebar__item" v-for="(link, idx) in links" :key="idx">
            <img :src="link.img" :alt="link.title" />
            <router-link :to="link.path">
              <!-- no view usa "router-link to" no lugar de <a href!-->
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      links: [
        {
          title: 'Dashboard',
          img: '/img/dashboard.png',
          path: '/',
        },
        {
          title: 'My Taks',
          img: '/img/my-task.png',
          path: '/',
        },
        {
          title: 'Message',
          img: '/img/message.png',
          path: '/',
        },
        {
          title: 'Notification',
          img: '/img/notification.png',
          path: '/',
        },
        {
          title: 'Statistik',
          img: '/img/statistik.png',
          path: '/',
        },
        {
          title: 'My File',
          img: '/img/my-file.png',
          path: '/',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@charset "UTF-8";
@import '@/styles/reset';
@import url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap');

body {
  display: flex;
  justify-content: center;
  background-attachment: fixed;
  background-color: #eef1f3;
  background-image: linear-gradient(to bottom, #eef1f3, #fbe6d6, #f3d8cd);
  font-family: 'Sniglet', cursive;
}

#app {
  max-width: 600px;
  display: flex;
}

.sidebar {
  background-color: #f7f7f7;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 10px;
  width: 200px;
  opacity: 0.8;

  &__image {
    width: 100%;
    height: 100px;
  }

  &__items {
    list-style: none;
    margin-top: 80px;
    margin-left: 0px;
    padding: 0px;
  }

  &__item {
    display: flex;
    align-items: center;
    padding-bottom: 45px;

    img {
      margin-right: 8px;
    }

    a {
      text-decoration: none;
      color: #5a5858;

      &:hover {
        text-decoration: none;
        color: red;
      }
    }
  }
}
</style>

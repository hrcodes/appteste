<template>
  <div id="app">
    <aside class="sidebar">
      <nav class="sidebar__navigation">
        <img
          class="sidebar__image"
          :src="require('./assets/img/logo.png')"
        />  <!-- srcset="" definir tamanhos por resolução -->
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

      <img
        class='sidebar__loggout'
        :src="require('./assets/img/logout.png')"
      />

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

@import '@/styles/text';
@import '@/styles/indicator';

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
  max-width: 1280px;
  display: flex;
}

.sidebar {
  align-items: center;
  background-color: #f7f7f7;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 25px 25px;
  text-align: center;
  width: 200px;
  opacity: 0.8;

  &__image {
    margin-top: 10%;
    width: 90%;
  }

  &__items {
    margin-top: 45px;
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

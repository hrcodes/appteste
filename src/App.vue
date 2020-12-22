<template>
  <div id="app">
    <aside id="barraLateral">
      <img id="logo" src="/img/logo.png" />
      <nav id="menuLateral">
        <ul id="menuList">
          <li v-for="(link, idx) in links" :key="idx">
            <router-link :to="link.path"> <!-- no view usa "router-link to" no lugar de <a href!-->
                <img :src="link.img" :alt="link.title" /> {{ link.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <router-view />
  </div>
</template>

<script lang='ts'>
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
@import url("https://fonts.googleapis.com/css2?family=Sniglet&display=swap");
body {
  font-family: "Sniglet", cursive;
  background-color: #eef1f3;
  background-image: linear-gradient(to bottom, #eef1f3, #fbe6d6, #f3d8cd);
  background-attachment: fixed;
}

#app{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

aside#barraLateral {
  background-color: #f7f7f7;
  width: 200px;
  height: 768px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin: 10px;
  margin-right: 0px;
  float: left;
  opacity: 0.8;
  /*border: solid;*/
}

nav#menuLateral {
  display: block;
  margin-left: 40px;
  /*border: solid;*/
}

img#logo {
  /*color: #5A5858; funciona nao*/
  margin-left: 20px;
  margin-top: 9px;
}

nav#menuLateral ul {
  list-style: none;
  margin-top: 80px;
  margin-left: 0px;
  padding: 0px;
  /*border: solid;*/
}

nav#menuLateral li {
  padding-bottom: 45px;
  /*border: solid;*/
}

nav#menuLateral img {
  margin-right: 8px;
}

nav#menuLateral a {
  text-decoration: none;
  color: #5a5858;
}

nav#menuLateral a:hover {
  text-decoration: none;
  color: red;
}
</style>

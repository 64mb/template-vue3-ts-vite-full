<template>
  <div>
    <a href="https://64mb.ru" target="_blank">
      <img :src="Img64mb" class="logo class64mb" alt="64mb logo" />
    </a>
  </div>
  <div>
    <a href="https://bun.sh" target="_blank">
      <img :src="ImgBun" class="logo bun" alt="Bun logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img :src="ImgVite" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org" target="_blank">
      <img :src="ImgVue" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Caption msg="Bun + Vite + Vue" />
</template>

<script setup lang="ts">
  import Caption from '~/components/caption.vue'
  import ImgVue from '~/assets/vue.svg'
  import ImgVite from '~/assets/vite.svg'
  import ImgBun from '~/assets/bun.svg'
  import Img64mb from '~/assets/64mb.svg'
</script>

<style>
  :root {
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.87);

    color-scheme: light dark;
    background-color: #242424;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    display: flex;
    place-items: center;

    min-width: 320px;
    min-height: 100vh;
    margin: 0;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  .card {
    padding: 2em;
  }

  #app {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    text-align: center;
  }

  .logo {
    will-change: filter;
    height: 6em;
    padding: 1.5em;
    transition: filter 300ms;
  }

  .logo.bun:hover {
    filter: drop-shadow(0 0 2em #fbf0df);
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

  .logo.class64mb:hover {
    filter: drop-shadow(0 0 2em #bbec6c);
  }
</style>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>
    <a class="image-link" href="https://v-tol.com" target="_blank">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    </a>
    <div class="wrapper"><div>Neuron JSA</div></div>

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <!-- <RouterView /> -->
  <HomeView />
  <footer>
    <div>
      <a href="https://v-tol.com" target="_blank">
        © {{ new Date().getFullYear() }} V-TOL Aerospace</a
      >
    </div>
  </footer>
</template>

<style scoped>
header {
  max-height: 5em;
  background-color: var(--color-background-soft);
  padding: 1rex;
  gap: 1rex;
  display: flex;
}

.image-link {
  padding: 0;
  margin: 0;
}

footer {
  background-color: var(--vt-c-black-full);
  color: var(--vt-c-text-dark-2);
  gap: 1rex;
  justify-content: center;
  align-items: center;
  display: flex;
}

footer a {
  color: var(--vt-c-text-dark-2);
  padding: 0 1ex;
}

.logo {
  display: block;
  margin: 0;
  height: 2em;
}

.wrapper {
  display: flex;
  /* place-items: flex-start;
  flex-wrap: wrap; */
  align-items: center;
  margin-left: 1rem;
}

.wrapper > * {
  flex: auto;
  font-weight: bold;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* header { */
  /* display: flex; */
  /* place-items: center; */
  /* padding-right: calc(var(--section-gap) / 2); */
  /* } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

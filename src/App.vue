<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue'

function is_true(value: string) {
  return value.toLowerCase() == 'true'
}

function go_to_next() {
  const matches = document.querySelectorAll('[name^="check-"]') as NodeListOf<HTMLElement>
  for (const item of matches) {
    console.log(`${item.id} => ${item.dataset.checked}`)
    if (!item.dataset.checked || !is_true(item.dataset.checked)) {
      item.scrollIntoView(true)

      // now account for fixed header
      const scrolledY = window.scrollY
      const header = document.getElementsByTagName('header')[0]
      if (scrolledY && header) {
        const gap = 10
        window.scroll(0, scrolledY - header.offsetHeight - gap)
      }

      return
    }
  }

  //Scroll to the bottom if all are done
  console.log('All items checked')
  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <header>
    <a class="image-link" href="https://v-tol.com" target="_blank">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    </a>
    <div class="wrapper">Neuron JSA</div>
    <div class="wrapper spacer"></div>
    <button class="wrapper" @click="(event) => go_to_next()">Next Item</button>

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
  position: sticky;
  top: 0;
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

button.wrapper {
  background-color: var(--color-feedback-mutual);
  font-weight: bold;
  color: var(--color-text);
  border: 0;
  cursor: pointer;
  padding: 0 1ex;
}

button.wrapper:hover {
  background-color: var(--color-feedback-mutual-highlight);
}

.spacer {
  flex-grow: 1;
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

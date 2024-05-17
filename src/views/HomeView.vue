<script setup lang="ts">
import { ref } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
import { checklist } from '../libraries/checklist'
import CheckItem from '@/components/CheckItem.vue'

const checks = ref(checklist)
</script>

<template>
  <main class="list-layout">
    <div class="list-layout list-section" v-for="section in checks" :key="section.title">
      <h2>{{ section.title }}</h2>
      <CheckItem
        class="item"
        v-for="(item, index) in section.checks"
        :key="item.id"
        :index="index"
        :data="item"
      />
    </div>
  </main>
</template>

<style scoped>
list-layout {
  display: flex;
  /* flex-direction: row;
  flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1ex;
}

.list-section {
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
}

.item {
  margin: 1ex;
  width: 100%;
  max-width: 80em;
}

@media (orientation: portrait) {
  main {
    flex-direction: column;
  }

  .item {
    max-width: 40em;
  }
}

/*
TODO:
@media print {
}
*/
</style>

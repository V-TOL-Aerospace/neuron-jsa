<script setup lang="ts">
import { ref } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
import { checklist } from '../libraries/checklist'
import CheckItem from '@/components/CheckItem.vue'
import type { CheckPrerequisites } from '@/libraries/common'

const checks = ref(checklist)

function meets_prereqs(prereqs: CheckPrerequisites) {
  let met = prereqs.method == 'and' ? true : prereqs.method == 'or' ? false : false

  for (const [id, req] of prereqs.prerequisites) {
    const item = document.getElementById(id)
    if (!item) {
      // console.warn(`Could not find prereq: ${id}`)
      continue
    }

    const match = (item.dataset.checked === 'true') == req
    // console.log(`${item.id} => ${match}`)

    if (prereqs.method == 'or') {
      met = met || match
      //Shortcut if possible
      if (met) return met
    } else if (prereqs.method == 'and') {
      met = met && match
      //Shortcut if possible
      if (!met) return met
    } else {
      console.warn(`Unknown prereq method: ${prereqs.method}`)
    }
  }

  return met
}
</script>

<template>
  <main class="list-layout">
    <div class="list-layout list-section" v-for="section in checks" :key="section.title">
      <h2>{{ section.title }}</h2>
      <CheckItem
        class="item"
        v-for="(item, index) in section.checks.filter((item) =>
          item.show_if ? meets_prereqs(item.show_if) : true
        )"
        :key="item.id"
        :id="item.id"
        :index="index"
        :data="item"
        @checked="
          (value: boolean) => {
            console.log(`Changed: ${item.id} => ${value}`)
            //Trigger update to get the v-for to recalculate
            $forceUpdate()
          }
        "
        @removed="
          () => {
            console.log(`Removed: ${item.id}`)
            //Trigger update to get the v-for to recalculate
            $forceUpdate()
          }
        "
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

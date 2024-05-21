<script setup lang="ts">
import { ref } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
import { checklist, type ChecklistSection } from '../libraries/checklist'
import CheckItem from '@/components/CheckItem.vue'
import type { CheckPrerequisites } from '@/libraries/common'

const checks = ref(checklist)

function find_check(list: ChecklistSection[], id: string) {
  for (const section of list) {
    for (const item of section.checks) {
      if (item.id == id) {
        return item
      }
    }
  }

  return null
}

function meets_prereqs(prereqs: CheckPrerequisites) {
  let met = prereqs.method == 'and' ? true : prereqs.method == 'or' ? false : false

  for (const [id, req] of prereqs.prerequisites) {
    const item = find_check(checks.value, id)
    if (!item) {
      console.warn(`Could not find prereq: ${id}`)
      continue
    }

    const match = item.checked == req
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

function update_checked(id: string, value: boolean) {
  // console.log(`Updating checked state: ${id} => ${value}`)

  for (const section of checks.value) {
    for (const item of section.checks) {
      if (item.id == id) {
        item.checked = value
        // console.log(`Check state updated for: ${id}`)
        return
      }
    }
  }

  console.warn(`Could not update check for: ${id}`)
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
        @checked="(event) => update_checked(item.id, event)"
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

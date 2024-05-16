<script setup lang="ts">
import { ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

const items = ref([
  {
    id: self.crypto.randomUUID(),
    question:
      'Check the task location on any of the CASA-approved apps - the information on these apps can be relied on absolutely.',
    options: [
      'AALTI',
      'Aerologix',
      'AEROphoria',
      'RPA Manager',
      'Curo by Sphere Drones',
      'FlyFreely',
      'Fly.Yobe',
      'ok2fly',
      'OpenSky',
      'ScaleFlyt',
      'SmartSkies'
    ],
    comments: false
  },
  {
    id: self.crypto.randomUUID(),
    question: 'Are there any issues with flying in this area?',
    comments: true
  }
])
</script>

<template>
  <main>
    <div class="check" v-for="(item, index) in items" :key="item.id">
      {{ index + 1 }}: {{ item.question }}
      <div v-if="item.options">
        <div v-for="option in item.options" :key="option">
          <input
            type="checkbox"
            :key="option"
            :id="option"
            :name="`options-${item.id}`"
            :value="option"
          />
          <label :for="`options-${item.id}`">{{ option }}</label>
        </div>
      </div>
      <div v-else>
        <input
          type="radio"
          :id="`select-${item.id}-yes`"
          :name="`select-${item.id}`"
          value="true"
        />
        <label :for="`select-${item.id}-yes`">Yes</label>
        <input
          type="radio"
          :id="`select-${item.id}-no`"
          :name="`select-${item.id}`"
          value="true"
          checked="true"
        />
        <label :for="`select-${item.id}-no`">No</label>
      </div>
      <input
        class="comments"
        v-if="item.comments"
        type="text"
        :id="`comments-${item.id}`"
        :name="`comments-${item.id}`"
      /><br />
      <div v-if="item.comments"></div>
    </div>
  </main>
</template>

<style scoped>
.check {
  margin: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
  max-width: 600px;
  background-color: var(--color-background-soft);
  display: flex;
  flex-direction: column;
}

.comments {
  flex: auto;
  min-height: 5em;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
import { checklist } from '../libraries/checklist'

const checks = ref(checklist)
</script>

<template>
  <main>
    <div class="check" v-for="(item, index) in checks" :key="item.id">
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

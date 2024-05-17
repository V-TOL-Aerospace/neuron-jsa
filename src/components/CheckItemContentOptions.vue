<script setup lang="ts">
import type { CheckOptions } from '@/libraries/common'

defineProps<{
  data: CheckOptions
}>()
</script>

<template>
  <div class="check-options">
    <div v-for="option in data.options" :key="option" class="options-container">
      <input
        type="checkbox"
        :key="option"
        :id="`options-${data.id}-${option}`"
        :name="`options-${data.id}`"
        :value="option"
      />
      <label :for="`options-${data.id}-${option}`">{{ option }}</label>
    </div>
  </div>
</template>

<style scoped>
.check-options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1ex;
}

.options-container {
  flex: auto;
  background-color: var(--color-background-mute);
  border-radius: 1ex;
  display: flex;
  gap: 1ex;
}

.options-container > *:last-child {
  flex-grow: 1;
}
</style>

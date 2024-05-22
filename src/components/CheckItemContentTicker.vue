<script setup lang="ts">
import type { CheckTicker } from '@/libraries/common'
import { ref } from 'vue'

defineProps<{
  data: CheckTicker
}>()

const emit = defineEmits<{
  checked: [value: boolean]
  answered: [value: boolean]
}>()

function is_number(text: string) {
  return !isNaN(+Number(text))
}

const complete = ref(false)

function update_content(number_set: boolean) {
  complete.value = number_set
  emit('checked', number_set)
  emit('answered', number_set)
}
</script>

<template>
  <label :for="`options-${data.id}`" :class="['check-ticker', complete ? 'check-complete' : '']">
    <span>{{ data.label }}:</span>
    <input
      type="number"
      :id="`ticker-${data.id}`"
      :name="`ticker-${data.id}`"
      @input="
        (event) => {
          update_content(is_number((event.currentTarget as HTMLInputElement).value))
        }
      "
    />
  </label>
</template>

<style scoped>
.check-ticker {
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 1ex;
  border-radius: 0.5ex;
  padding: 0.5ex;
}

.check-ticker > * {
  flex: auto;
}

.check-complete {
  background-color: var(--color-feedback-positive);
}

@media (orientation: portrait) {
  .check-ticker {
    flex-direction: row;
  }
}
</style>

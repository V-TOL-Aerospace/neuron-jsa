<script setup lang="ts">
import type { CheckTicker } from '@/libraries/common'

defineProps<{
  data: CheckTicker
}>()

defineEmits<{
  checked: [value: boolean]
  answered: [value: boolean]
}>()

function is_number(text: string) {
  return !isNaN(+Number(text))
}
</script>

<template>
  <div class="check-ticker">
    <label :for="`options-${data.id}`">{{ data.label }}:</label>
    <input
      type="number"
      :id="`ticker-${data.id}`"
      :name="`ticker-${data.id}`"
      @input="
        (event) => {
          $emit('checked', is_number((event.currentTarget as HTMLInputElement).value))
          $emit('answered', is_number((event.currentTarget as HTMLInputElement).value))
        }
      "
    />
  </div>
</template>

<style scoped>
.check-ticker {
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 1ex;
}

.check-ticker > * {
  flex: auto;
}

@media (orientation: portrait) {
  .check-ticker {
    flex-direction: row;
  }
}
</style>

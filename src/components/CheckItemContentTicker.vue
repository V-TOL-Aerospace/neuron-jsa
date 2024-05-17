<script setup lang="ts">
import type { CheckTicker } from '@/libraries/common'

defineProps<{
  data: CheckTicker
}>()
</script>

<template>
  <div class="check-ticker">
    <label :for="`options-${data.id}`">{{ data.label }}:</label>
    <input type="number" :id="`ticker-${data.id}`" :name="`ticker-${data.id}`" />
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

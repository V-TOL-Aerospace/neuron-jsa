<script setup lang="ts">
import type { CheckSelection } from '@/libraries/common'

defineProps<{
  data: CheckSelection
}>()

defineEmits<{
  (e: 'checked', value: boolean): void
  (e: 'answered', value: boolean): void
}>()
</script>

<template>
  <div class="check-selection">
    <select
      :id="`select-${data.id}`"
      :name="`select-${data.id}`"
      @input="
        (event) => {
          $emit('checked', Boolean((event.currentTarget as HTMLInputElement).value))
          $emit('answered', Boolean((event.currentTarget as HTMLInputElement).value))
        }
      "
    >
      <option disabled selected value style="display: none">-- select an option --</option>
      <option v-for="selection in data.selection" :key="selection" :value="selection">
        {{ selection }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.check-selection > * {
  width: 100%;
}
</style>

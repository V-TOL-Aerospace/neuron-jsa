<script setup lang="ts">
import type { CheckSelection } from '@/libraries/common'

defineProps<{
  data: CheckSelection
}>()
</script>

<template>
  <div class="check-selection">
    <select :id="`select-${data.id}`" :name="`select-${data.id}`">
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

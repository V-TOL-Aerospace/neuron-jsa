<script setup lang="ts">
import type { CheckSelection } from '@/libraries/common'
import { ref } from 'vue'

defineProps<{
  data: CheckSelection
}>()

const emit = defineEmits<{
  checked: [value: boolean]
  answered: [value: boolean]
}>()

const complete = ref(false)

function update_content(selected: boolean) {
  complete.value = selected
  emit('checked', selected)
  emit('answered', selected)
}
</script>

<template>
  <div class="check-selection">
    <select
      :id="`select-${data.id}`"
      :name="`select-${data.id}`"
      :class="complete ? 'check-complete' : ''"
      @input="
        (event) => {
          update_content(Boolean((event.currentTarget as HTMLInputElement).value))
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

.check-complete {
  background-color: var(--color-feedback-positive);
}
</style>

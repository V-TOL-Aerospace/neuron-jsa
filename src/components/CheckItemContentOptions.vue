<script setup lang="ts">
import type { CheckOptions } from '@/libraries/common'
import { ref } from 'vue'

const props = defineProps<{
  data: CheckOptions
}>()

const complete = ref(false)

const emit = defineEmits<{
  checked: [value: boolean]
  answered: [value: boolean]
}>()

function scan_options() {
  const options = document.getElementsByName(
    `options-${props.data.id}`
  ) as NodeListOf<HTMLInputElement>

  let checked = false

  //Scan all of our options and figure out if any are checked
  for (const o of options) {
    if (o.checked) {
      checked = true
      break
    }
  }

  complete.value = checked

  emit('checked', checked)
  emit('answered', checked)
}
</script>

<template>
  <div :class="['check-options', complete ? 'check-answered' : '']">
    <label
      v-for="option in data.options"
      :key="option"
      :for="`options-${data.id}-${option}`"
      class="options-container"
      ><input
        type="checkbox"
        :key="option"
        :id="`options-${data.id}-${option}`"
        :name="`options-${data.id}`"
        :value="option"
        @input="
          (event) => {
            scan_options()
          }
        "
      />
      <span>{{ option }}</span>
    </label>
  </div>
</template>

<style scoped>
.check-options {
  background-color: var(--color-background-mute);
  padding: 1ex;
  border-radius: 1ex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1ex;
}

.options-container {
  flex: auto;
  background-color: var(--color-background);
  border-radius: 0.5ex;
  display: flex;
  gap: 1ex;
  cursor: pointer;
  padding: 0 1ex;
}

.options-container > * {
  cursor: pointer;
}

.check-answered {
  background-color: var(--color-feedback-positive);
}

.options-container > *:last-child {
  flex-grow: 1;
}
</style>

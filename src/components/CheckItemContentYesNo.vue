<script setup lang="ts">
import type { CheckYesNo } from '@/libraries/common'
import { ref } from 'vue'

defineProps<{
  data: CheckYesNo
}>()

const answered = ref(false)
const checked_yes = ref(false)

const emit = defineEmits<{
  checked: [value: boolean]
  answered: [value: boolean]
}>()

function is_true(value: string) {
  return value.toLowerCase() == 'true'
}

function do_update(event: Event) {
  answered.value = true
  checked_yes.value = is_true((event.currentTarget as HTMLInputElement).value)
  emit('checked', checked_yes.value)
  emit('answered', true)
}
</script>

<template>
  <div class="check-yes-no">
    <label
      :for="`select-${data.id}-yes`"
      :class="['answer', answered && checked_yes ? 'answered-yes' : '']"
      ><input
        type="radio"
        :id="`select-${data.id}-yes`"
        :name="`select-${data.id}`"
        value="true"
        @input="do_update"
      />
      <span>Yes</span>
    </label>
    <label
      :for="`select-${data.id}-no`"
      :class="['answer', answered && !checked_yes ? 'answered-no' : '']"
    >
      <input
        type="radio"
        :id="`select-${data.id}-no`"
        :name="`select-${data.id}`"
        value="false"
        @input="do_update"
      />
      <span>No</span>
    </label>
  </div>
</template>

<style scoped>
.check-yes-no {
  display: flex;
  gap: 1ex;
  flex-direction: column;
}

.check-yes-no > * {
  display: flex;
  flex: auto;
  gap: 1ex;
  background-color: var(--color-background-mute);
  border-radius: 1ex;
  padding: 0.5ex;
}

.check-yes-no > input {
  flex-grow: 0;
}

.answer,
.answer > * {
  cursor: pointer;
}

.answered-yes > *,
.answered-no > * {
  font-weight: bold;
}

.answered-yes {
  background-color: var(--color-feedback-positive);
}

.answered-no {
  background-color: var(--color-feedback-negative);
}

@media (orientation: portrait) {
  .check-yes-no {
    flex-direction: row;
  }
}
</style>

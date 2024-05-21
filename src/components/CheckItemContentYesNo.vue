<script setup lang="ts">
import type { CheckYesNo } from '@/libraries/common'

defineProps<{
  data: CheckYesNo
}>()

defineEmits<{
  checked: [value: boolean]
  answered: [value: boolean]
}>()

function is_true(value: string) {
  return value.toLowerCase() == 'true'
}
</script>

<template>
  <div class="check-yes-no">
    <div>
      <input
        type="radio"
        :id="`select-${data.id}-yes`"
        :name="`select-${data.id}`"
        value="true"
        @input="
          (event) => {
            $emit('checked', is_true((event.currentTarget as HTMLInputElement).value))
            $emit('answered', true)
          }
        "
      />
      <label :for="`select-${data.id}-yes`">Yes</label>
    </div>
    <div>
      <input
        type="radio"
        :id="`select-${data.id}-no`"
        :name="`select-${data.id}`"
        value="false"
        @input="
          (event) => {
            $emit('checked', is_true((event.currentTarget as HTMLInputElement).value))
            $emit('answered', true)
          }
        "
      />
      <label :for="`select-${data.id}-no`">No</label>
    </div>
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
  background-color: var(--color-background-mute);
  border-radius: 1ex;
}

.check-yes-no > * > * {
  flex: auto;
  margin: 0.5ex;
}

.check-yes-no > * > *:first-child {
  flex-grow: 0;
}

@media (orientation: portrait) {
  .check-yes-no {
    flex-direction: row;
  }
}
</style>

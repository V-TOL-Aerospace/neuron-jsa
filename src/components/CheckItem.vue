<script setup lang="ts">
import type { Checks } from '@/libraries/common'
import {
  is_check_number,
  is_check_options,
  is_check_selection,
  is_check_yes_no
  // check_has_custom_comment_text
} from '@/libraries/common'
import CheckItemContentYesNo from '@/components/CheckItemContentYesNo.vue'
import CheckItemContentSelection from './CheckItemContentSelection.vue'
import CheckItemContentOptions from './CheckItemContentOptions.vue'
import CheckItemContentTicker from './CheckItemContentTicker.vue'
import { ref } from 'vue'

defineProps<{
  index: number
  data: Checks
}>()

defineEmits<{
  (e: 'checked', value: boolean): void
}>()

const checked = ref(false)
const answered = ref(false)
</script>

<template>
  <div :class="['check', answered ? (checked ? 'answered-good' : 'answered-bad') : '']">
    <div class="question-wrapper">
      <div class="check-title">Check {{ index + 1 }}</div>
      <div class="check-question">{{ data.question }}</div>
    </div>
    <div class="answer-wrapper">
      <CheckItemContentOptions
        v-if="is_check_options(data)"
        :data="data"
        @answered="
          (value: boolean) => {
            answered = value
          }
        "
        @checked="
          (value: boolean) => {
            checked = value
            $emit('checked', value)
          }
        "
      />
      <CheckItemContentSelection
        v-else-if="is_check_selection(data)"
        :data="data"
        @answered="
          (value: boolean) => {
            answered = value
          }
        "
        @checked="
          (value: boolean) => {
            checked = value
            $emit('checked', value)
          }
        "
      />
      <CheckItemContentTicker
        v-else-if="is_check_number(data)"
        :data="data"
        @answered="
          (value: boolean) => {
            answered = value
          }
        "
        @checked="
          (value: boolean) => {
            checked = value
            $emit('checked', value)
          }
        "
      />
      <CheckItemContentYesNo
        v-else-if="is_check_yes_no(data)"
        :data="data"
        @answered="
          (value: boolean) => {
            answered = value
          }
        "
        @checked="
          (value: boolean) => {
            checked = value
            $emit('checked', value)
          }
        "
      />
    </div>
    <textarea
      class="comments"
      v-if="typeof data.comments === 'string' || Boolean(data.comments)"
      type="text"
      :id="`comments-${data.id}`"
      :name="`comments-${data.id}`"
      :placeholder="typeof data.comments === 'string' ? data.comments : `Additional comments...`"
      multiline="true"
    />
    <div v-if="data.comments"></div>
  </div>
</template>

<style scoped>
.check {
  padding: 1ex;
  border-radius: 2ex;
  gap: 1ex;
  background-color: var(--color-background-soft);
  display: flex;
  flex-direction: row;
  /* align-items: center; */
}

.answered-good {
  background-color: var(--color-feedback-positive);
}

.answered-bad {
  background-color: var(--color-feedback-negative);
}

.question-wrapper {
  height: 100%;
  flex: auto;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  gap: 1ex;
}

.answer-wrapper {
  height: 100%;
  flex: auto;
  flex-basis: 20%;
  flex-grow: 0;
}

.check-title {
  font-weight: bold;
}

.check-question {
  background-color: var(--color-background-mute);
  border-radius: 1ex;
  padding: 1ex;
}

.comments {
  flex: auto;
  flex-grow: 0;
  flex-basis: 20%;
  min-height: 3em;
  width: 20% !important;
}

@media (orientation: portrait) {
  .check {
    flex-direction: column;
  }

  .answer-wrapper,
  .question-wrapper,
  .comments {
    flex: auto;
    width: 100% !important;
  }
}
</style>

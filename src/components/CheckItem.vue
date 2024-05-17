<script setup lang="ts">
import type { Checks } from '@/libraries/common'
import {
  is_check_number,
  is_check_options,
  is_check_selection,
  is_check_yes_no,
  check_has_custom_comment_text
} from '@/libraries/common'
import CheckItemContentYesNo from '@/components/CheckItemContentYesNo.vue'
import CheckItemContentSelection from './CheckItemContentSelection.vue'
import CheckItemContentOptions from './CheckItemContentOptions.vue'
import CheckItemContentTicker from './CheckItemContentTicker.vue'

defineProps<{
  index: number
  data: Checks
}>()
</script>

<template>
  <div class="check">
    <div class="question-wrapper">
      <div class="check-title">Check {{ index + 1 }}</div>
      <div class="check-question">{{ data.question }}</div>
    </div>
    <div class="answer-wrapper">
      <CheckItemContentOptions v-if="is_check_options(data)" :data="data" />
      <CheckItemContentSelection v-else-if="is_check_selection(data)" :data="data" />
      <CheckItemContentTicker v-else-if="is_check_number(data)" :data="data" />
      <CheckItemContentYesNo v-else-if="is_check_yes_no(data)" :data="data" />
    </div>
    <textarea
      class="comments"
      v-if="data.comments"
      type="text"
      :id="`comments-${data.id}`"
      :name="`comments-${data.id}`"
      :placeholder="check_has_custom_comment_text(data) ? data.comments : `Additional comments...`"
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

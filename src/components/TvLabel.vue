<script setup>
import { useLabel } from '../composable/useLabel.js';

const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
  isRemove: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value),
  },
  textLabel: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: 'inherit',
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
});

const emit = defineEmits(['clickLabel', 'click']);

const {
  colorWithOpacity,
  iconContent,
  handleClick ,
} = useLabel(props, emit);
</script>

<template>
  <div
    class="tv-label"
    :class="[`tv-label-${size}`]"
    :style="{
      backgroundColor: colorWithOpacity,
      border: `2px solid ${color}`,
      color: textColor,
    }"
    @click="handleClick"
  >
    <template v-if="textLabel">{{ textLabel }}</template>
    <slot v-else></slot>
    <span
      v-if="isEdit || isRemove"
      v-html="iconContent"
      class="tv-label-icon"
      :class="`tv-icon-position-${iconPosition}`"
    />
  </div>
</template>

<style></style>

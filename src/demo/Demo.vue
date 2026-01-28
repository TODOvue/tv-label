<script setup>
import { defineAsyncComponent } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import { demos } from './utils/mocks.js'

const TvLabel = defineAsyncComponent(() => import('../components/TvLabel.vue'))
</script>

<template>
  <TvDemo
    :component="TvLabel"
    :manual-emits="['clickLabel']"
    :variants="demos"
    component-name="TvLabel"
    npm-install="@todovue/tv-label"
    source-link="https://github.com/TODOvue/tv-label"
    url-clone="https://github.com/TODOvue/tv-label.git"
    version="1.2.4"
  />
</template>

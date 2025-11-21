<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvLabel = defineAsyncComponent(() => import('../components/TvLabel.vue'))
</script>

<template>
  <TvDemo
    :component="TvLabel"
    :variants="demos"
    component-name="TvLabel"
    npm-install="@todovue/tv-label"
    source-link="https://github.com/TODOvue/tv-label"
    url-clone="https://github.com/TODOvue/tv-label.git"
    version="1.1.1"
  />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import { demos } from '../utils/mocks.js'

const TvLabel = defineAsyncComponent(() => import('../components/TvLabel.vue'))
</script>

<template>
  <tv-demo
    :component="TvLabel"
    :variants="demos"
    nameComponent="TvLabel"
    npmInstall="@todovue/tv-label"
    sourceLink="https://github.com/TODOvue/tv-label"
    urlClone="https://github.com/TODOvue/tv-label.git"
    version="1.0.1"
  ></tv-demo>
</template>

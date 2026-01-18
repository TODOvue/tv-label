<template>
  <tv-label @click="clickHandler">
    Default
  </tv-label>
</template>

<script setup>
import { TvLabel } from '@todovue/tv-label';
import '@todovue/tv-label/style.css';

const clickHandler = () => {
  console.log("clicked");
}
</script>

<template>
  <tv-label @click="clickHandler">
    Default
  </tv-label>
</template>

<script setup>
import { TvLabel } from '@todovue/tv-label';

const clickHandler = () => {
  console.log("clicked");
}
</script>

<template>
  <tv-label
    color="#4FC08D"
    size="lg"
    @click="clickHandler"
  >
    Large Label
  </tv-label>
</template>

<script setup>
import { TvLabel } from '@todovue/tv-label';
import '@todovue/tv-label/style.css';

const clickHandler = () => {
  console.log("clicked");
}
</script>

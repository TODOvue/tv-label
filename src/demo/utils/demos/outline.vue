<template>
  <tv-label
    color="#38B2AC"
    is-outline
    @click="clickHandler"
  >
    Tailwind
  </tv-label>
</template>

<script setup>
import { TvLabel } from '@todovue/tv-label';
import '@todovue/tv-label/style.css';

const clickHandler = () => {
  console.log("clicked");
}
</script>

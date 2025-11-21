<template>
  <tv-label color="#61DAFB" @click="clickHandler">
    HTML
  </tv-label>
</template>

<script setup>
import { TvLabel } from '@todovue/tv-label';

const clickHandler = () => {
  console.log("clicked");
}
</script>

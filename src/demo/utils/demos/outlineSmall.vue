<template>
  <tv-label
    color="#CB3837"
    is-outline
    size="sm"
    @click="clickHandler"
  >
    NPM
  </tv-label>
</template>

<script setup>
import { TvLabel } from '@todovue/tv-label';
import '@todovue/tv-label/style.css';

const clickHandler = () => {
  console.log("clicked");
}
</script>

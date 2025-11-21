<template>
  <tv-label is-edit color="#F0DB4F" color-text="#000000" @click="clickHandler">
    Javascript
  </tv-label>
</template>

<script setup>
import { TvLabel } from '@todovue/tv-label';

const clickHandler = () => {
  console.log("clicked");
}
</script>

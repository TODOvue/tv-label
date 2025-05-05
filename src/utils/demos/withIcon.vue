<template>
  <tv-label isEdit color="#F0DB4F" @click="clickHandler">
    Javascript
  </tv-label>
</template>

<script setup>
import TvLabel from '@todovue/tv-label';

const clickHandler = () => {
  console.log("clicked");
}
</script>

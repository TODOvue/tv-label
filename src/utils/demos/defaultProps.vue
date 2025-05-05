<template>
  <tv-label
    :textLabel="properties.name"
    :color="properties.color"
    @click="clickHandler"
  />
</template>

<script setup>
import { ref } from 'vue'
import TvLabel from '@todovue/tv-label';

const properties = ref({
  name: "Default",
  color: "#4FB7C0",
});

const clickHandler = () => {
  console.log("clicked");
}
</script>

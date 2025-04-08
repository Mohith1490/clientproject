<template>
    <img :src="`/img/svg/${src}.svg`" :alt="src" :width="width" :height="height" />
  </template>
  
  <script setup >
  import { defineProps } from 'vue'
  
  const props = defineProps({
    src: String,
    width: String,
    height: String,
  })
  </script>
  
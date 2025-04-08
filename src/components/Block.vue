<template>
    <div class="relative max-w-[700px]">
      <h6 class="text-lg font-semibold">{{ title }}</h6>
      <div class="mt-6 max-w-[400px] rounded-[3rem]">
        <p>{{ content }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  defineProps<{
    title: string;
    content: string;
  }>();
  </script>
  
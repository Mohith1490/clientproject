<template>
    <div
      :class="[
        'relative w-full mx-auto overflow-hidden',
        border ? 'border-t border-[#CDD1D4]' : '',
        'lg:max-w-[calc(100%-68px)] md:max-w-[calc(100%-38px)] sm:max-w-full',
        'lg:px-15 md:px-8 sm:px-4'
      ]"
    >
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  interface ContainerProps {
    border?: boolean
  }
  
  const props = defineProps<ContainerProps>()
  </script>
  
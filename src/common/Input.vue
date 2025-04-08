<template>
    <div class="inline-block w-full py-2 px-1">
      <label :for="name" class="block text-sm font-medium">{{ name}}</label>
      <input
        :placeholder="placeholder"
        :name="name"
        :id="name"
        @input="onChange"
        class="text-sm px-3 py-2 mt-1 bg-gray-200 w-full border border-gray-300 rounded-md"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  interface InputProps {
    name: string
    placeholder: string
    onChange: (e: Event) => void
  }
  
  const props = defineProps<InputProps>()
  </script>
  
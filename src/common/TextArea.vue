<template>
    <div class="inline-block w-full px-2 mb-[-0.625rem]">
      <label :for="name" class="block pb-2 capitalize">{{ name }}</label>
      <textarea
        :placeholder="placeholder"
        :id="name"
        :name="name"
        @input="handleInput"
        class="resize-none text-sm h-48 w-full p-2 bg-gray-200 "
      ></textarea>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    name: String,
    placeholder: String,
    t: Function
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement
    emit('update:modelValue', target.value)
  }
  </script>
  
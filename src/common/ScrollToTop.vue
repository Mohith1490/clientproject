
<template>
    <div
      @click="scrollUp"
      v-show="showScroll"
      class="fixed bottom-8 right-8 z-10 p-2 cursor-pointer bg-gray-200 text-center flex items-center rounded-md transition-all duration-300 hover:bg-gray-300 focus:outline-none"
    >
      <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import  SvgIcon  from './SvgIcon.vue'
  
  const showScroll = ref(false)
  
  const checkScrollTop = () => {
    const offsetFromTop = window.scrollY
    showScroll.value = offsetFromTop > 350
  }
  
  const scrollUp = () => {
    const element = document.getElementById('intro') as HTMLDivElement
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', checkScrollTop)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollTop)
  })
  </script>
  
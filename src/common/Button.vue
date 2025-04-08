<template>
  <button
    :class="[
      'font-bold py-3 px-4 rounded-md transition-all shadow-xl ease-in-out duration-300',
      colorClass,
      'hover:bg-[#ff825c] hover:border-[#ff825c]',
      'focus:outline-none focus:ring-2 focus:ring-[#ff825c] ml-5',
      textColorClass
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface ButtonProps {
  color?: string
  onClick: () => void
}

const props = defineProps<ButtonProps>()

const colorClass = props.color ? `bg-[${props.color}]` : 'bg-[#2e186a] border-[#edf3f5]'

const textColorClass = props.color && (props.color === '#0000ff' ? 'text-blue' : 'text-white') || 'text-white'
</script>

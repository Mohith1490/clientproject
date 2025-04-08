<template>
  <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 items-center justify-center">
    <div @click="() => scrollTo('about')" class="text-xl text-indigo-800 hover:text-orange-500 transition cursor-pointer hover:underline decoration-wavy">
      {{ 'About' }}
    </div>
    <div @click="() => scrollTo('mission')" class="text-xl text-indigo-800 hover:text-orange-500 transition cursor-pointer hover:underline decoration-wavy">
      {{ 'Mission' }}
    </div>
    <div @click="() => scrollTo('product')" class="text-xl text-indigo-800 hover:text-orange-500 transition cursor-pointer hover:underline decoration-wavy">
      {{ 'Product' }}
    </div>
    <div @click="() => scrollTo('contact')" class="text-xl text-indigo-800 hover:text-orange-500 transition cursor-pointer">
      <button class="px-8 hover:bg-orange-500/70 py-2 bg-blue-900 text-white rounded-lg">
        {{ 'Contact' }}
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuItem',
  props: {
    scrollTo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return {
      scrollTo: props.scrollTo,
    };
  },
};
</script>

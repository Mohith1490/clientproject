<template>
  <header class="py-4 px-2 flex items-center justify-center ">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Section -->
      <router-link to="/" aria-label="homepage" class="flex">
        <img src="/img/svg/logo.svg" width="101px" height="64px" />
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex space-x-8">
        <MenuItem :scrollTo="scrollTo" />
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden" @click="toggleVisibility">
        <Outline class="text-2xl" />
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Drawer :visible="visible" @close="toggleVisibility">
      <div class="flex justify-between items-center mb-10">
        <div class="text-xl font-semibold">Menu</div>
        <Outline @click="toggleVisibility" class="cursor-pointer" />
      </div>
      <MenuItem :scrollTo="scrollTo" />
    </Drawer>
  </header>
</template>

<script>
import { ref } from 'vue';
import { Drawer } from 'ant-design-vue';
import Outline from '@ant-design/icons-vue/lib/icons/MenuOutlined';
import MenuItem from './MenuItem.vue';

export default {
  name: 'Header',
  components: {
    Drawer,
    Outline,
    MenuItem,
  },
  setup() {
    const visible = ref(false);

    const toggleVisibility = () => {
      visible.value = !visible.value;
    };

    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        visible.value = false;
      }
    };

    return {
      visible,
      toggleVisibility,
      scrollTo,
    };
  },
};
</script>

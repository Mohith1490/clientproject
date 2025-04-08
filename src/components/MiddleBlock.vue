<template>
  <section class="relative py-20 md:py-32 pb-12 text-center flex justify-center">
    <div class="max-w-[570px] w-full">
      <div class="flex justify-center items-center">
        <div class="w-full text-center">
          <h6 class="text-4xl md:text-7xl text-blue-700 font-bold">{{ title }}</h6>
          <p class="py-3 text-base md:text-lg">{{ content }}</p>
          <Button v-if="button" @click="scrollTo('mission')" class="mt-4">
            {{ button }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../common/Button.vue';

export default {
  name: 'MiddleBlock',
  components: { Button },
  props: {
    title: String,
    content: String,
    button: String,
  },
  setup(props) {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      scrollTo,
      title: props.title,
      content: props.content,
      button: props.button,
    };
  },
};
</script>

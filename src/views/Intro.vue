<template>
  <section id="intro" class="relative py-40 md:py-16">
    <div data-aos="fade-up">
      <div class="flex flex-col lg:flex-row-reverse justify-between items-center">
        <div class="lg:w-5/12 md:w-5/12 sm:w-6/12 xs:w-full">
          <img :src="`/img/svg/developer.svg`" alt="logo" class="w-full h-auto" />
        </div>
        <div class="lg:w-5/12 md:w-5/12 sm:w-5/12 xs:w-full">
          <div class="relative max-w-[540px] md:pt-16">
            <h6 class="text-5xl font-bold text-blue-900">
              Landing page template for developers & startups
            </h6>
            <p class="mt-6 mb-8 text-lg text-blue-600">
              Beautifully designed templates using React.js, ant design, and styled-components! Save weeks of time and build your landing page in minutes.
            </p>

            <div v-if="'right' === 'right'" class="flex justify-between">
              <ButtonWrapper>
                <Button
                  v-for="(item, idx) in button"
                  :key="idx"
                  :color="item.color"
                  @click="scrollTo('about')"
                >
                  {{ item.title }}
                </Button>
              </ButtonWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '@/common/Button.vue';

const button = [
  {
    "title": "Explore"
  },
  {
    "title": "Learn more",
    "color": "#0000ff"
  }
];
</script>

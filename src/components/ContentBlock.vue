<template>
  <section :id="id" class="relative py-20 md:py-16">
    <div data-aos="fade-up">
      <div :class="['flex', direction === 'left' ? 'flex-row' : 'flex-row-reverse', 'justify-between items-center flex-wrap']">
        <div class="lg:w-5/12 md:w-5/12 sm:w-6/12 xs:w-full mb-8 md:mb-0">
          <SvgIcon :src="src" width="100%" height="100%" />
        </div>
        <div class="lg:w-5/12 md:w-5/12 sm:w-5/12 xs:w-full">
          <div class="relative max-w-[540px] md:pt-16">
            <h6 class="text-3xl md:text-4xl font-bold text-blue-900">{{ title }}</h6>
            <p class="mt-6 mb-8 text-base md:text-lg text-blue-600">{{ content }}</p>

            <div v-if="direction === 'right'" class="flex justify-between flex-wrap">
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

            <div v-else class="flex justify-between max-w-full flex-wrap">
              <div v-for="(item, idx) in section" :key="idx" class="w-full sm:w-5/12 lg:w-5/12 mb-8 sm:mb-0">
                <SvgIcon :src="item.icon" width="60px" height="60px" />
                <h6 class="text-xs font-light uppercase py-2 text-black">{{ item.title }}</h6>
                <p class="text-xs">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SvgIcon from '../common/SvgIcon.vue'
import Button from '../common/Button.vue'

const scrollTo = (id) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

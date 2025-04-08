<template>
  <section id="intro" class="relative py-40 md:py-16">
    <div data-aos="fade-up">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Image Section -->
        <div class="w-full md:w-5/12 lg:w-5/12 mb-8 md:mb-0">
          <img :src="`/img/svg/graphs.svg`" alt="logo" class="w-full h-auto" />
        </div>

        <!-- Content Section -->
        <div class="w-full md:w-5/12 lg:w-5/12">
          <div class="relative max-w-[540px] md:pt-16">
            <h6 class="text-5xl text-blue-700">Light, fast & responsive</h6>
            <p class="mt-6 mb-8">This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>

            <!-- Features List -->
            <div class="flex flex-wrap justify-between">
              <div v-for="(item, idx) in section" :key="idx" class="w-full sm:w-5/12 md:w-5/12 lg:w-5/12 mb-8">
                <img :src="`/img/svg/notes.svg`" :alt="src" class="w-16 h-16 mx-auto" />
                <h6 class="text-[15px] font-light uppercase py-2 text-black text-center">{{ item.title }}</h6>
                <p class="text-xs text-blue-700 text-center">{{ item.content }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const section = [
    {
      "title": "Why Antd?",
      "content": "Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.",
      "icon": "notes"
    },
    {
      "title": "Why styled-components?",
      "content": "Styled Components gives you total control over your components.",
      "icon": "notes"
    }
  ]
</script>

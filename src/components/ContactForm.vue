<template>
  <section :id="id" class="py-20 md:py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div data-aos="fade-right">
        <div class="relative max-w-[700px] mx-auto md:mx-0">
          <h6 class="text-4xl md:text-7xl text-blue-900 font-semibold">Contact form</h6>
          <div class="mt-6 text-base md:text-lg text-blue-600 max-w-[400px] rounded-[3rem] mx-auto md:mx-0">
            <p>The following form demonstrates form validation in action. Contact form component reduces the amount of
              time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any
              unnecessary performance penalty.</p>
          </div>
        </div>
      </div>

      <div data-aos="fade-left">
        <form @submit.prevent="handleSubmit" autocomplete="off" class="w-full max-w-[520px] mt-8 md:mt-0 mx-auto md:mx-0">
          <div class="mb-4">
            <Input type="text" name="name" placeholder="Your Name" v-model="values.name" />
            <ValidationType type="name" />
          </div>

          <div class="mb-4">
            <Input type="text" name="email" placeholder="Your Email" v-model="values.email" />
            <ValidationType type="email" />
          </div>

          <div class="mb-4">
            <TextArea name="message" placeholder="Your Message" v-model="values.message" />
            <ValidationType type="message" />
          </div>

          <div class="text-end relative pt-3 sm:pt-0">
            <Button>{{ "Submit" }}</Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="jsx">
import Input from '../common/Input.vue'
import TextArea from '../common/TextArea.vue'
import Button from '../common/Button.vue'
import useForm from '../common/utils/useForm.js'
import validate from '../common/utils/validationRules.js'

const { values, errors, handleChange, handleSubmit } = useForm(validate)

function ValidationType({ type }) {
  const error = errors.value?.[type]
  return error ? (
    <span class="block font-semibold text-[#ff825c] text-sm px-2">{{ error }}</span>
  ) : null;
}
</script>

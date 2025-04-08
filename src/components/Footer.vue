<template>
  <footer class="bg-gray-300/50 text-blue-600">
    <div class="container mx-auto px-6 py-8">
      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mb-8">
        <!-- Contact Section -->
        <div>
          <h2 class="text-lg font-semibold">{{ "Contact" }}</h2>
          <h3 class="text-xl font-bold hover:underline decoration-wavy">Tell us everything</h3>
          <p class="text-gray-400">{{ "Do you have any question? Feel free to reach out." }}</p>
          <a href="mailto:l.qqbadze@gmail.com" class="text-blue-500 text-xl underline hover:text-orange-500/50">{{ "Let's Chat" }}</a>
        </div>
        
        <!-- Policy Section -->
        <div>
          <h3 class="text-lg font-semibold">{{ "Policy" }}</h3>
          <ul>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "Application Security" }}</a></li>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "Software Principles" }}</a></li>
          </ul>
        </div>
        
        <!-- Support Section -->
        <div>
          <div class="h-8"></div>
          <ul>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "Support Center" }}</a></li>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "Customer Support" }}</a></li>
          </ul>
        </div>
      </div>

      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
        <!-- Address Section -->
        <div>
          <div class="h-8"></div>
          <h2 class="text-lg font-semibold">{{ "Address" }}</h2>
          <p class="text-gray-400">Rancho Santa Margarita</p>
          <p class="text-gray-400">2131 Elk Street</p>
          <p class="text-gray-400">California</p>
        </div>
        
        <!-- Company Section -->
        <div>
          <h3 class="text-lg font-semibold">{{ "Company" }}</h3>
          <ul>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "About" }}</a></li>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "Blog" }}</a></li>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "Press" }}</a></li>
            <li><a href="/" class="text-blue-500 hover:underline decoration-wavy">{{ "Careers & Culture" }}</a></li>
          </ul>
        </div>
        
        <!-- Language Section -->
        <div>
          <label for="select-lang" class="text-lg font-semibold">{{ "Language" }}</label>
          <div class="flex space-x-4">
            <button @click="handleChange('en')" class="flex items-center justify-center p-2 rounded-full bg-white">
              <img src="`/img/svg/united-states.svg`" alt="spain" width="30px" height="30px" />
            </button>
            <button @click="handleChange('es')" class="flex items-center justify-center p-2 rounded-full bg-white">
              <img src="`/img/svg/spain.svg`" alt="spain" width="30px" height="30px" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-200 py-6">
      <div class="container mx-auto px-6 flex justify-between items-center flex-wrap">
        <RouterLink to="/" class="flex items-center">
          <img src="`/img/svg/logo.svg`" alt="logo" width="101px" height="64px" />
        </RouterLink>
        <div class="flex space-x-6 mt-4 sm:mt-0">
          <SocialLink href="https://github.com/Adrinlol/create-react-app-adrinlol" src="github" />
          <SocialLink href="https://twitter.com/Adrinlolx" src="twitter" />
          <SocialLink href="https://www.linkedin.com/in/lasha-kakabadze/" src="linkedin" />
          <SocialLink href="https://medium.com/@lashakakabadze/" src="medium" />
          <a href="https://ko-fi.com/Y8Y7H8BNJ" target="_blank" rel="noopener noreferrer">
            <img height="12" class="w-35 h-10" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="jsx">
import { RouterLink } from "vue-router";

export default {
  name: "Footer",
  components: {
    RouterLink
  },
  setup() {
    const handleChange = (language) => {
      changeLanguage(language);
    };

    const SocialLink = ({ href, src }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-500">
          <SvgIcon src={src} width="25px" height="25px" />
        </a>
      );
    };

    return {
      handleChange,
      SocialLink,
      RouterLink,
    };
  }
};
</script>

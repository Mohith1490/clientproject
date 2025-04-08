<template>
  <Container>
    <ScrollToTop />
    <Intro/>
    <MiddleBlock
      :title="middleBlockContent.title"
      :content="middleBlockContent.text"
      :button="middleBlockContent.button"
    />
    <About/>
    <Mission/>
    <Product/>
    <Contact
      :title="contactContent.title"
      :content="contactContent.text"
      id="contact"
    />
  </Container>
</template>

<script>
import { defineComponent } from 'vue';
import ScrollToTop from '../common/ScrollToTop.vue';
import Container from '../common/Container.vue';
import MiddleBlock from '../components/MiddleBlock.vue';
import Contact from '../components/ContactForm.vue';
import Intro from './Intro.vue';
import About from './About.vue';
import Mission from './Mission.vue';
import Product from './Product.vue';

import MiddleBlockContent from '../content/MiddleBlockContent.json';
import ContactContent from '../content/ContactContent.json';

export default defineComponent({
  name: 'Home',
  components: {
    ScrollToTop,
    Container,
    MiddleBlock,
    Contact,
    Intro,
    About,
    Mission,
    Product
  },
  setup() {
    const middleBlockContent = MiddleBlockContent;
    const contactContent = ContactContent;

    return {
      middleBlockContent,
      contactContent,
    };
  },
});
</script>

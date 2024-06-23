<template>
  <div>
    <NavTwo />
    <SliderTwo />
    <ClientsLogo />
    <OfferTwo />
    <CasesCarousel />
    <Testimonial />
    <FunFact />
    <ThinkArea />
    <Blog />
    <Meet />
    <Footer />
  </div>
</template>

<script>
  import Footer from "../components/Footer";
  import NavTwo from "../components/NavTwo";
  import SliderTwo from "../components/SliderTwo";
  import ClientsLogo from "../components/ClientsLogo";
  import OfferTwo from "../components/OfferTwo";
  import CasesCarousel from "../components/CasesCarousel";
  import Testimonial from "../components/Testimonial";
  import FunFact from "../components/FunFact";
  import ThinkArea from "../components/ThinkArea";
  import Blog from "../components/Blog";
  import Meet from "../components/Meet";
  export default {
    components: {
      Meet,
      Blog,
      ThinkArea,
      FunFact,
      Testimonial,
      CasesCarousel,
      OfferTwo,
      ClientsLogo,
      SliderTwo,
      NavTwo,
      Footer,
    },
    head(){
      return {
        title: "Avivon | Home 2"
      }
    }
  }
</script>

<style>
</style>

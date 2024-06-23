<template>
  <div>
    <NavOne />
    <PageHeader title="about style 2" />
    <ChooseTwo />
    <Skills />
    <Steps />
    <Trusted />
    <ClientsLogo />
    <Testimonial />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import Skills from "../components/Skills";
  import ChooseTwo from "../components/ChooseTwo";
  import Steps from "../components/Steps";
  import Trusted from "../components/Trusted";
  import ClientsLogo from "../components/ClientsLogo";
  import Testimonial from "../components/Testimonial";
  import CallToAction from "../components/CallToAction";

  export default {
    components: {
      CallToAction,
      Testimonial,
      ClientsLogo,
      Trusted,
      Steps,
      ChooseTwo,
      Skills,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | About 2"
      }
    }

  }
</script>

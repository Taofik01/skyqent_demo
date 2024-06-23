<template>
  <div>
    <NavOne />
    <SliderOne />
    <Offer />
    <Choose />
    <Team />
    <Trusted />
    <ClientsLogo />
    <Service />
    <Blog />
    <CallToAction />
    <OfficeCarousel />
    <MapG />

    <Footer />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import SliderOne from "../components/SliderOne";
  import Offer from "../components/Offer";
  import Choose from "../components/Choose";
  import Team from "../components/Team";
  import Trusted from "../components/Trusted";
  import ClientsLogo from "../components/ClientsLogo";
  import Service from "../components/Service";
  import Blog from "../components/Blog";
  import CallToAction from "../components/CallToAction";
  import OfficeCarousel from "../components/OfficeCarousel";
  import MapG from "../components/MapG";
  export default {
    components: {
      MapG,
      OfficeCarousel,
      CallToAction,
      Blog,
      Service,
      ClientsLogo,
      Trusted,
      Team,
      Choose,
      Offer,
      SliderOne,
      Footer,
      NavOne
    }
  }
</script>

<style>
</style>

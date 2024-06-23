<template>
  <div>
    <NavOne />
    <PageHeader title="contact us" />
    <Contact />
    <OfficeCarousel />
    <MapG />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import OfficeCarousel from "../components/OfficeCarousel";
  import MapG from "../components/MapG";
  import Contact from "../components/Contact";
  export default {
    components: {Contact, MapG, OfficeCarousel, Footer, PageHeader, NavOne}
  }
</script>

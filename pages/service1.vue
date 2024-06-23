<template>
  <div>
    <NavOne />
    <PageHeader title="service style 1" />
    <ServicePage />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ServicePage from "../components/ServicePage";
  export default {
    components: {
      ServicePage,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Services"
      }
    }

  }
</script>

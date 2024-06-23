<template>
  <section class="client-logo-area avivon-pt text-center">
      <div class="client-logo-fluid">
          <div class="container">
              <div class="row client-logo-box theme-btb avivon-pb">
                  <div class="col-md-12">
                      <div class="client-logo">

                        <swiper :options="swiperOptions">
                        <swiper-slide>
                         <div class="client-logo-item">
                             <img class="client__logo-brand" src="/images/e-logo.png" alt="client brand logo">
                         </div><!-- end client-logo-item -->
                        </swiper-slide>
                        <swiper-slide>
                          <div class="client-logo-item">
                             <img class="client__logo-brand" src="/images/e-logo.png" alt="client brand logo">
                         </div><!-- end client-logo-item -->
                        </swiper-slide>
                        <swiper-slide>
                          <div class="client-logo-item">
                             <img class="client__logo-brand" src="/images/e-logo.png" alt="client brand logo">
                         </div><!-- end client-logo-item -->
                        </swiper-slide>
                          <swiper-slide>
                          <div class="client-logo-item">
                             <img class="client__logo-brand" src="/images/e-logo.png" alt="client brand logo">
                         </div><!-- end client-logo-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="client-logo-item">
                             <img class="client__logo-brand" src="/images/e-logo.png" alt="client brand logo">
                         </div><!-- end client-logo-item -->
                          </swiper-slide>
                        </swiper>
                      </div><!-- end client-logo -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end client-logo-fluid -->
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

    export default {
      name: "ClientsLogo",
      components: {
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          swiperOptions: {
            slidesPerView : 5,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Responsive breakpoints
            breakpoints: {
              1024:{
                  slidesPerView : 5
              },
              768:{
                  slidesPerView : 2
              },
              640:{
                  slidesPerView : 2
              },
              320:{
                  slidesPerView : 1
              }
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>

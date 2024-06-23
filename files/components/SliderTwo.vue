<template>
  <!-- Site Slider Start -->
  <section class="slider-one">
    <div class="slider-one__carousel">
      <swiper :options="swiperOptions">
      <swiper-slide>
      <div class="item slider-one__slider-1" style="background-image: url(/images/home2-slidebg-2.jpg);">
        <div class="container slider__content" style="text-align: center">
          <a class="mediabox video-play-btn" href="https://www.youtube.com/watch?v=dFBKl1pYn0w" title="Play Video" style="transition: none 0s ease 0s; text-align: inherit; line-height: 134px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 30px;">
              <span class="fontello icon-play" style="color: #ff7e00; text-align: inherit; line-height: 134px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 30px;"></span>
          </a>
          <div class="slider-one__title tp-caption tp-resizeme">we provide solution to<br> grow businesses</div>
          <a href="#" class="get-btn" style=""><span>get started</span></a>
          <!-- /.slider-one__text -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
      </swiper-slide>
      </swiper>
    </div>
  </section>
    <!-- /.slider-one__carousel -->
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

    export default {
        name: "SliderTwo",
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
            slidesPerView : 1,
            loop: false,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

          }
        }
      },
      mounted() {
        MediaBox('.mediabox');
      }


    }
</script>

<style scoped>

</style>

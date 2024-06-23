<template>
    <div>
      <section class="footer-area responsive-content theme-bg-dark">
          <div class="footer-fluid">
              <div class="container">
                  <div class="row footer-list">
                      <div class="col-md-3 col-sm-6 col-xs-12">
                          <div class="footer-shared rpd-content">
                              <div class="footer__title">
                                  <h3 class="footer__title-title">our address</h3>
                              </div><!-- end footer__title -->
                              <div class="ftp__links">
                                  <ul>
                                      <li>
                                          <a href="#"><i class="fas fa-phone-square"></i> 888 999 0000</a>
                                      </li>
                                      <li>
                                          <a href="mailto:needhelp@avivon.com"><i class="fas fa-envelope"></i>
                                              needhelp@avivon.com</a>
                                      </li>
                                      <li>
                                          <p class="add__para-desc"><i class="fas fa-map"></i> 855 road, broklyn street,</p>
                                          <p class="add__para-desc">new york 600</p>
                                      </li>
                                  </ul>
                              </div><!-- end ftp__links -->
                          </div><!-- end footer-shared -->
                      </div><!-- end col-md-3 -->
                      <div class="col-md-4 col-sm-6 col-xs-12">
                          <div class="footer-shared">
                              <div class="footer__title">
                                  <h3 class="footer__title-title">extra links</h3>
                              </div><!-- end footer__title -->
                              <div class="ftp__links menu__links clearfix">
                                  <ul class="ftp__menu-links pull-left">
                                      <li><a href="/about-us1">about</a></li>
                                      <li><a href="#">careers</a></li>
                                      <li><a href="#">our team</a></li>
                                      <li><a href="#">approach</a></li>
                                      <li><a href="/cases1">case studies</a></li>
                                  </ul>
                                  <ul class="ftp__menu-links ftp__menu--links pull-left">
                                      <li><a href="/service1">services</a></li>
                                      <li><a href="#">locations</a></li>
                                      <li><a href="#">clients</a></li>
                                      <li><a href="#">help</a></li>
                                      <li><a href="/contact">contact</a></li>
                                  </ul>
                              </div><!-- end ftp__links -->
                          </div><!-- end footer-shared -->
                      </div><!-- end col-md-4 -->
                      <div class="col-md-5 col-sm-6 col-xs-12">
                          <div class="footer-shared">
                              <div class="footer__title">
                                  <h3 class="footer__title-title">sign up for email alerts</h3>
                              </div><!-- end footer__title -->
                              <div class="ftp__links">
                                  <div class="ftp__form-subs">
                                      <p class="ftp__links-desc__desc">subscribe for latest articles and resources</p>
                                      <form action="#">
                                          <input type="email" placeholder="enter email">
                                          <button class="email__subscriber-btn"><i class="fas fa-envelope"></i></button>
                                      </form>
                                  </div><!-- end ftp__form-subs -->
                              </div><!-- end ftp__links -->
                          </div><!-- end footer-shared -->
                      </div><!-- end col-md-5 -->
                  </div><!-- end row -->
                  <div class="row">
                      <div class="col-md-12">
                          <div class="copyright-shared">
                              <div class="col-md-8 no-padding-lr">
                                  <p class="copy__desc">&copy;copyright 2020 by <a href="mailto:layerdrops@gmail.com">Layerdrops.com</a></p>
                              </div><!-- end col-md-8 -->
                              <div class="col-md-4 text-right no-padding-lr">
                                  <ul class="copy__links">
                                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                      <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                      <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                  </ul>
                              </div><!-- end col-md-4 -->
                          </div><!-- end copyright-shared -->
                      </div><!-- end col-md-12 -->
                  </div><!-- end row -->
              </div><!-- container -->
          </div><!-- end footer-fluid -->
      </section>

      <div @click="scrollTop" id="scroll-top" :style="`display: ${scrollBtn ? 'block' : 'none'}`">
          <i class="fas fa-arrow-up" title="Go top"></i>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false,
        }
      },
      mounted(){
        window.addEventListener('scroll', this.handleScroll);
      },
      methods: {

        handleScroll () {
          if (window.scrollY > 100) {
            this.scrollBtn  = true
          }
          else if (window.scrollY < 100) {
            this.scrollBtn  = false
          }
        },

        scrollTop () {
            window.scrollTo(0, 0);
        }

      }
    }
</script>

<style scoped>

</style>

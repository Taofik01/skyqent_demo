<template>
  <section v-observe-visibility="onVisibilityChange" class="offer-area responsive-content inspire-area area-padding">
      <div class="offer-fluid">
          <div class="container">
              <div class="row offer-content">
                  <div class="inspire-list-box">
                      <div class="inspire-img mb-30px"></div><!-- end inspire-img -->
                      <div class="story-content">
                          <div class="top-story">
                              <span class="fontello icon-achievement success__icon"></span>
                              <span class="story__numbr counter">
                                <countTo :startVal='0' :endVal='startCounter ? 98903 : 0' :duration='3000'></countTo>
                              </span>
                              <span class="story__numbr">+</span>
                          </div><!-- end top-story -->
                          <p class="success__desc">client success stories by the help of avivon</p>
                      </div><!-- end story-content -->
                  </div><!-- end col-md-6 -->
                  <div class="offer-list-box">
                      <div class="offer-list">
                          <div class="avivon-heading">
                              <h2 class="avivon__title inspire-title">
                                  we inspire and help <br>
                                  our customers</h2>
                              <p class="avivon__desc mt-45px mb-40px">
                                  we inspire and help our customers expand their markets there are many
                                  variations of passages of lorem ipsum is simply free text available but
                                  majority have suffered alteration in some area that is not form by injected humour or
                                  randomised words don’t know which don't look even slightly believable.
                              </p>
                              <a href="#" class="get__btn">get started
                                  <span class="fontello icon-angle-double-right"></span>
                              </a>
                          </div><!-- end avivon-heading -->
                      </div><!-- end offer-list -->
                  </div><!-- end offer-list-box -->
              </div><!-- end row -->
          </div><!-- container-fluid -->
      </div><!-- end offer-fluid -->
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

    export default {
      name: "OfferTwo",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false
        }
      },
      methods: {
        onVisibilityChange (isVisible) {
          if (isVisible){
            this.startCounter = true;
          }

        },
      },
    }
</script>


<style scoped>

</style>

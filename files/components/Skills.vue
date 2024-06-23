<template>
  <section class="offer-area offer--area responsive-content skill-area theme-bg-gray">
      <div class="offer-fluid">
          <div class="container-fluid">
              <div class="row offer-content">
                  <div class="offer-list-box skill-list-box">
                      <div class="offer-list">
                          <div class="avivon-heading skill-title mb-50px">
                              <h2 class="avivon__title">
                                  professional skills</h2>
                              <p class="avivon__desc mt-25px">
                                  tincidunt elit magnis nulla facilisis sagittis maecenas. <br>
                                  sapien nunc amet ultrices dolores sit ipsum.</p>
                          </div><!-- end avivon-heading -->
                          <div class="offer-item">
                              <div class="same-offer">
                                  <div class="skills">
                                      <!--skill 1-->
                                      <div class="skill">
                                        <skill-bar skill="consultancy" barSize="small" level="98" barColor="#ff7e00" />
                                      </div>
                                      <!--skill 2-->
                                      <div class="skill">
                                        <skill-bar skill="marketing" barSize="small" level="88" barColor="#ff7e00" />
                                      </div>
                                      <!--skill 3-->
                                      <div class="skill">
                                        <skill-bar skill="technology" barSize="small" level="78" barColor="#ff7e00" />
                                      </div>
                                  </div><!-- end skills-->
                              </div><!-- end same-offer -->
                          </div><!-- end offer-item -->
                      </div><!-- end offer-list -->
                  </div><!-- end offer-list-box -->
                  <div class="skill-bg-area">
                      <div class="offer-quote"></div><!-- end offer-quote -->
                  </div><!-- end skill-bg-area -->
              </div><!-- end row -->
          </div><!-- container-fluid -->
      </div><!-- end offer-fluid -->
  </section>
</template>

<script>
  import { SkillBar } from 'vue-skill-bar'

    export default {
      name: "Skills",
      components: {
        'skill-bar': SkillBar
      },

    }
</script>

<style scoped>

</style>

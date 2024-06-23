<template>
  <section class="contact-area responsive-content area-padding">
      <div class="contact-fluid">
          <div class="container contact-info avivon-pb">
              <div class="row">
                  <div class="col-md-4 primary-padding">
                      <div class="avivon-heading">
                          <h2 class="avivon__title">feel free to write us a message</h2>
                          <p class="avivon__desc contact__desc mt-50px">
                              sed quia lipsum dolor sit atur adip scing elit is
                              nunc quis tellus sed ligula porta ultricies quis nec neulla.
                          </p>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-4 -->
                  <div class="col-md-8">
                      <div class="comment__form contact__form">
                          <form action="#">
                              <div class="input__box-input">
                                  <input type="text" placeholder="your name">
                              </div>
                              <div class="input__box-input email-box">
                                  <input type="email" placeholder="email address">
                              </div>
                              <textarea name="message" placeholder="message"></textarea>
                              <button class="submit__btn-btn">send message
                                  <span class="fontello icon-angle-double-right"></span>
                              </button>
                          </form>
                      </div><!-- end comment__form -->
                  </div><!-- end col-md-8 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end contact-fluid -->
  </section>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>

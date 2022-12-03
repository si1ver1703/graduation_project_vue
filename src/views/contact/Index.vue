<template>
  <main class="overflow-hidden ">
    <!--Start Breadcrumb Style2-->
    <section class="breadcrumb-area" style="background-image: url(src/assets/images/inner-pages/kolesa.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-content text-center wow fadeInUp animated">
              <h2>Наши контакты</h2>
              <div class="breadcrumb-menu">
                <ul>
                  <li><router-link to="/"><i class="flaticon-home pe-2"></i>Главная</router-link>></li>
                  <li> <i class="flaticon-next"></i> </li>
                  <li class="active">Контакты</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Breadcrumb Style2-->
    <!--Start Contact Page Info-->
    <section class="contact-page-info pt-120 pb-60">
      <div class="container">
        <div class="row mt--30">
          <div class="col-xl-4 col-lg-6 wow fadeInUp animated">
            <div class="contact-page-info__single mt-30">
              <div class="thumb"> <img src="assets/images/inner-pages/location.png" alt=""> </div>
              <div class="contact-box">
                <h4>Адресс</h4>
                <p class="text1"> 273 дом 1 этаж, улица Алматинская </p>
                <p class="text2"> пересечение 166 дома <br> улицы Чесночной </p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 wow fadeInUp animated">
            <div class="contact-page-info__single mt-30">
              <div class="thumb"> <img src="assets/images/inner-pages/contact.png" alt=""> </div>
              <div class="contact-box">
                <h4>Контакты</h4>
                <ul>
                  <li>
                    <p>Телефон: <a href="tel:123456789">87775552200</a></p>
                  </li>
                  <li>
                    <p>Городской: <a href="tel:123456789">395 55 25</a></p>
                  </li>
                  <li>
                    <p>E-mail: <a href="mailto:yourmail@email.com">autoparts_almaty@google.com</a></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 wow fadeInUp animated">
            <div class="contact-page-info__single mt-30 ">
              <div class="thumb"> <img src="assets/images/inner-pages/clockt.png" alt=""> </div>
              <div class="contact-box">
                <h4>Режим работы</h4>
                <p class="text1">Понедельник - Пятница: 08:30 - 20:00</p>
                <p class="text2">Выходные: 09:30 -<br> 20:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Contact Page Info-->
    <!-- Contact box Start -->
    <section class="contact-box pt-60 pb-120">
      <div class="container">
        <div class="row g-0 background align-items-center wow fadeInUp animated">
          <div class="col-lg-5">
            <div class="map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.0331322815574!2d76.90583163490547!3d43.23926907596599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883693aedadfeb3%3A0xce1a75dbb1758de3!2z0L_RgC3Rgi4g0JDQsdCw0Y8gNjgsINCQ0LvQvNCw0YLRiyAwNTAwMDg!5e0!3m2!1sru!2skz!4v1662980775522!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div>
          </div>
          <div class="col-lg-7">
            <div class="contact-form">
              <h3>Оставить нам заявку</h3>
              <form action="#" class="common-form">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group"> <label for="name"> Ваше имя</label> <input type="text"
                                                                                         id="name" class="form-control" placeholder="Ваше имя"> </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group"> <label for="number"> Номер телефона </label> <input
                        type="text" id="number" class="form-control" placeholder="+7"> </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group"> <label for="email"> Email Address </label> <input
                        type="text" id="email" class="form-control"
                        placeholder="support@gmail.com"> </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group m-0"> <label for="email"> Ваше сообщение </label>
                      <textarea placeholder="Ваще сообщение"></textarea> </div>
                  </div>
                </div> <button type="submit" class="btn--primary style2 ">Отправить сообщение </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section> <!-- Contact box End -->
  </main>
</template>

<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('change')
  }
}
</script>

<style scoped>

</style>
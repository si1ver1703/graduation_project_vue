<template>
  <main class="overflow-hidden">

    <!-- newsLetter_popup Start -->
    <button data-mfp-src="#newsLetter-popup" class="modal-btn d-none"></button>
    <div id="newsLetter-popup" class="mfp-hide p-4" role="dialog">
      <div class="row align-items-center justify-content-sm-between">
        <div class="col-lg-5 d-lg-block d-none">
          <div class="newsLetter-popup__thumb imgenews">
            <img src="src/assets/images/home-three/products-1.jpg" alt="newsletter">
          </div>
        </div>
        <div class="col-lg-7 col-md-8 col-sm-10">
          <div class="newsLetter-popup__content mb-4">
            <div class="text-center"> <a href="index.html" class="logo"> <img
                src="src/assets/images/logo/logo.png" alt="logo"> </a>
              <h2> Join <span>with us.</span> </h2>
              <p> Subscribe to receive news from Karte In a free hour </p>
            </div>
            <form action="#0" class="newsLetter-popup__subscrib-form">
              <div class="input_box"> <input type="email" placeholder="Enter your email Address"
                                             name="email"> <button type="submit" class="subscribe_btn"> Submit </button> </div>
              <div class="form-group "> <input type="checkbox" id="html"> <label for="html"> By providing
                my information, I agree to Karte <a href="#0"> Privacy Policy</a> and <a href="#0">
                  Legal Statement</a> </label> </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    <!-- Start Main Slider -->
    <section class="banner-style-3 overflow-hidden">
      <!-- Banner Carousel -->
      <div class="banner-slide3 slick" data-slick='{"dots": true, "infinite": true, "speed": 600, "slidesToShow": 1,
                "slidesToScroll": 1, "arrows": false, "autoplay": true, "autoplaySpeed": 6000,
                 "fade": false, "pauseOnHover": false}'>

        <!-- Slide -->
        <div class="slide">
          <div class="contant-box position-relative">

            <img class="bg-img hundread-vh" src="src/assets/images/home-three/autoparts1.png" alt="image">

          </div>
        </div>
      </div>
    </section>
    <!-- End Main Slider -->


    <!--Start Products Six-->
    <section class="products-three pt-60 pb-60 overflow-hidden">
      <div class="auto-container container">
        <div class="section-header style3 text-center wow fadeInUp animated">
          <h2>Последнее поступление </h2>
          <p> Топ продукты </p>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="products-three__inner">
              <ul>
                <!--Start Products Six Single-->
                <li class="products-three-single wow fadeInUp animated" v-for="product in products">
                  <div class="products-three-single-img">
                    <a href="shop-details-3.html" class="d-block"> <img
                        :src="product.imageUrl" class="first-img"
                        alt="" /> <img src="src/assets/images/home-three/productss2-hover-1.png"
                                       alt="" class="hover-img" /> </a>
                    <div class="products-grid-one__badge-box"> <span
                        class="bg_base badge new ">New</span> </div> <a href="cart.html"
                                                                        class="addcart btn--primary style2"> Add To Cart </a>
                    <div class="products-grid__usefull-links">
                      <ul>
                        <li><a href="wishlist.html"> <i class="flaticon-heart"> </i> <span>
                                                            wishlist</span> </a> </li>
                        <li><a href="compare.html"> <i
                            class="flaticon-left-and-right-arrows"></i> <span>
                                                            compare</span> </a> </li>
                        <li><a href="#popup5" class="popup_link"> <i
                            class="flaticon-visibility"></i> <span> quick view</span>
                        </a> </li>
                      </ul>
                    </div>
                  </div>
                  <div id="popup5" class="product-gird__quick-view-popup mfp-hide">
                    <div class="container">
                      <div class="row justify-content-between align-items-center">
                        <div class="col-lg-6">
                          <div class="quick-view__left-content">
                            <div class="tabs">
                              <div class="popup-product-thumb-box">
                                <ul>
                                  <li class="tab-nav popup-product-thumb"> <a
                                      href="#tabb1"> <img
                                      src="src/assets/images/shop/products-v6-img5.jpg"
                                      alt="" /> </a> </li>
                                  <li class="tab-nav popup-product-thumb "> <a
                                      href="#tabb2"> <img
                                      src="src/assets/images/shop/products-v6-img6.jpg"
                                      alt="" /> </a> </li>
                                  <li class="tab-nav popup-product-thumb "> <a
                                      href="#tabb3"> <img
                                      src="src/assets/images/shop/products-v6-img7.jpg"
                                      alt="" /> </a> </li>
                                </ul>
                              </div>
                              <div class="popup-product-main-image-box">
                                <div id="tabb1" class="tab-item popup-product-image">
                                  <div class="popup-product-single-image"> <img
                                      src="src/assets/images/shop/products-v6-img5.jpg"
                                      alt="" /> </div>
                                </div>
                                <div id="tabb2" class="tab-item popup-product-image">
                                  <div class="popup-product-single-image"> <img
                                      src="src/assets/images/shop/products-v6-img6.jpg"
                                      alt="" /> </div>
                                </div>
                                <div id="tabb3" class="tab-item popup-product-image">
                                  <div class="popup-product-single-image"> <img
                                      src="src/assets/images/shop/products-v6-img7.jpg"
                                      alt="" /> </div>
                                </div> <button class="prev"> <i
                                  class="flaticon-back"></i> </button> <button
                                  class="next"> <i class="flaticon-next"></i>
                              </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="popup-right-content">
                            <h3>Brown Office Shoe</h3>
                            <div class="ratting"> <i class="flaticon-star"></i> <i
                                class="flaticon-star"></i> <i class="flaticon-star"></i>
                              <i class="flaticon-star"></i> <i class="flaticon-star"></i>
                              <span>(112)</span> </div>
                            <p class="text"> Hydrating Plumping Intense Shine Lip Colour
                            </p>
                            <div class="price">
                              <h2> $42 USD <del> $65 USD</del></h2>
                              <h6> In stuck</h6>
                            </div>
                            <div class="color-varient"> <a href="#0"
                                                           class="color-name pink"> <span>Pink</span> </a> <a
                                href="#0" class="color-name red"> <span>Red</span> </a>
                              <a href="#0" class="color-name yellow"><span>Yellow</span>
                              </a> <a href="#0" class="color-name blue"> <span>Blue</span>
                              </a> <a href="#0" class="color-name black">
                                <span>Black</span> </a> </div>
                            <div class="add-product">
                              <h6>Qty:</h6>
                              <div class="button-group">
                                <div class="qtySelector text-center"> <span
                                    class="decreaseQty"><i
                                    class="flaticon-minus"></i> </span> <input
                                    type="number" class="qtyValue" value="1" />
                                  <span class="increaseQty"> <i
                                      class="flaticon-plus"></i> </span> </div>
                                <button class="btn--primary "> Add to Cart </button>
                              </div>
                            </div>
                            <div class="payment-method"> <a href="#0"> <img
                                src="src/assets/images/payment_method/method_1.png"
                                alt=""> </a> <a href="#0"> <img
                                src="src/assets/images/payment_method/method_2.png"
                                alt=""> </a> <a href="#0"> <img
                                src="src/assets/images/payment_method/method_3.png"
                                alt=""> </a> <a href="#0"> <img
                                src="src/assets/images/payment_method/method_4.png"
                                alt=""> </a> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="products-three-single-content text-center"> <span>{{ product.category.title }}</span>
                    <h5><a href="shop-details-3.html"> {{ product.title }} </a></h5>
                    <p> {{ product.price }}</p>
                  </div>
                </li>
                <!--End Products Six Single-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Products Six-->

    <!-- newsLetter-one style-two Start -->
    <section class="newsLetter-one border-0 style-two pt-60 pb-60 overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="newsLetter-one__content-box d-flex align-items-center justify-content-md-start justify-content-center wow fadeInUp animated"
                 data-wow-delay="0.1s">
              <div class="thumb"> <img src="src/assets/images/logo/logoauto.png" alt=""> </div>
              <h3 class="t36"> <span>Japan </span> Auto Parts </h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="newsLetter-one__content-box d-flex align-items-center justify-content-md-start justify-content-center wow fadeInUp animated "
                 data-wow-delay="0.2s">
              <h6 class="text-md-start text-center"> Подпишитесь на последние обновления новых товаров </h6>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="newsLetter-one__content-box three d-flex align-items-center justify-content-md-start justify-content-center wow fadeInUp animated"
                 data-wow-delay="0.3s">
              <form action="#0" class="form">
                <div class="newsLetter-one__subscribe-box"> <input type="email"
                                                                   placeholder="Email address" name="email"> <button type="submit"
                                                                                                                     class="subscrib-btn"> Подписаться </button> </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- newsLetter-one style-two End -->

    <!-- core-features Start -->
    <section class="core-features pt-120 mb-60 overflow-hidden">
      <div class="container auto-container">
        <div class="row mt--30">
          <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.2s">
            <div class="core-features__box d-flex ms-0"> <span class="one"></span> <span class="two"></span>
              <div class="icon"> <img src="src/assets/images/icon/f-icon-1.png" alt=""> </div>
              <div class="core-features__box-content"> <a href="login.html" class="d-block">
                <h4> Безопасная оплата </h4>
              </a>
                <p> Все разные, поэтому предлагаем оплату каждого типа.</p>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.3s">
            <div class="core-features__box d-flex "> <span class="one"></span> <span class="two"></span>
              <div class="icon"> <img src="src/assets/images/icon/f-icon-2.png" alt=""> </div>
              <div class="core-features__box-content"> <a href="login.html" class="d-block">
                <h4> 27/7 быстрая доставка </h4>
              </a>
                <p>Разные варианты, поэтому предлагаем доставку даже до дома</p>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.4s">
            <div class="core-features__box d-flex "> <span class="one"></span> <span class="two"></span>
              <div class="icon"> <img src="src/assets/images/icon/f-icon-3.png" alt=""> </div>
              <div class="core-features__box-content"> <a href="login.html" class="d-block">
                <h4>Возврат и замена </h4>
              </a>
                <p>Возвратим товар и заменим если не подошёл</p>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-md-6 mt-30 wow fadeInUp animated " data-wow-delay="0.5s">
            <div class="core-features__box d-flex me-0"> <span class="one"></span> <span class="two"></span>
              <div class="icon"> <img src="src/assets/images/icon/f-icon-4.png" alt=""> </div>
              <div class="core-features__box-content"> <a href="login.html" class="d-block">
                <h4> Поддержка </h4>
              </a>
                <p>Ответим на любой вопрос перезвоним</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </main>
</template>

<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('change')
    this.getProducts()
  },
  data() {
    return {
      products: [],
    }
  },

  methods: {
    getProducts(){
      this.axios.get('http://127.0.0.1:8000/api/products')
          .then(res => {
            this.products = res.data.data
          })
    },
  }
}
</script>

<style scoped>

</style>
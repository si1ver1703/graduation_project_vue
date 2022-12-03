<template>
  <main class="overflow-hidden ">
    <!--Start Breadcrumb Style2-->
    <div class="breadcrumb-area" style="background-image: url(src/assets/images/inner-pages/iner.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
              <h2>Автозапчасти</h2>
              <div class="breadcrumb-menu">
                <ul>
                  <li><a href="index.html"><i class="flaticon-home pe-2"></i>Главная</a></li>
                  <li> <i class="flaticon-next"></i> </li>
                  <li class="active">Автозапчасти</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-grid pt-60 pb-120">
      <div class="container">
        <div class="row gx-4">
          <div class="col-xl-3 col-lg-4">
            <div class="shop-grid-sidebar"> <button class="remove-sidebar d-lg-none d-block"> <i
                class="flaticon-cross"> </i> </button>
              <div class="sidebar-holder">
                <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
                  <div class="footer-input-box p-0 "> <input type="text" v-model="search"/></div>
                </form>
                <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
                  <h4>Выберите категорию</h4>
                  <div class="checkbox-item">
                    <form>
                      <div class="form-group">
                        <label v-for="category in categories">
                          <input type="checkbox" v-model="searchCategory" :value="category.title">
                          {{ category.title }}
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-8">
            <div class="row">
              <div class="col-xl-12">
                <div
                    class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                  <div class="left-box wow fadeInUp animated">
                    <p>Просмотр товара</p>
                  </div>
                  <div
                      class="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                    <div class="short-by">
                      <div class="select-box">
                        <select class="wide">
                          <option data-display="Short by latest">Featured </option>
                          <option value="1">Лучшая цена </option>
                          <option value="2">Alphabetically, A-Z</option>
                          <option value="3">Alphabetically, Z-A</option>
                          <option value="3">Цена убывает</option>
                          <option value="3">Цена возрастает</option>
                          <option value="3">Новое поступление</option>
                        </select>
                      </div>
                    </div>
                    <div class="product-view-style d-flex justify-content-md-between justify-content-center">
                      <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-grid-tab"
                                  data-bs-toggle="pill" data-bs-target="#pills-grid" type="button"
                                  role="tab"  aria-selected="true">
                            <i class="flaticon-grid"></i>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link"  id="pills-list-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-list" type="button" role="tab"
                                  aria-selected="false">
                            <i class="flaticon-list"></i>
                          </button>
                        </li>
                      </ul>
                      <button class="slidebarfilter d-lg-none d-flex"><i  class="flaticon-edit"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-grid" role="tabpanel"
                       aria-labelledby="pills-grid-tab">
                    <div class="row">
                      <div v-for="product in products" class="col-xl-4 col-lg-6 col-6 ">
                        <div class="products-three-single w-100  mt-30">
                          <div class="products-three-single-img"> <a
                              href="shop-details-3.html" class="d-block"> <img
                              :src="product.imageUrl"
                              class="first-img" alt="" /> <img
                              src="src/assets/images/home-three/productss2-hover-1.png"
                              alt="" class="hover-img" />
                          </a>
                            <div class="products-grid-one__badge-box"> <span
                                class="bg_base badge new ">New</span>
                            </div> <a href="cart.html" class="addcart btn--primary style2">
                              Add To Cart </a>
                            <div class="products-grid__usefull-links">
                              <ul>
                                <li><a href="wishlist.html"> <i class="flaticon-heart">
                                </i> <span>
                                                                            wishlist</span> </a> </li>
                                <li><a href="compare.html"> <i
                                    class="flaticon-left-and-right-arrows"></i>
                                  <span>
                                                                            compare</span> </a> </li>
                                <li><a href="#popup5" class="popup_link"> <i
                                    class="flaticon-visibility"></i>
                                  <span> quick view</span>
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
                                          <li
                                              class="tab-nav popup-product-thumb">
                                            <a href="#tabb1">
                                              <img src="src/assets/images/shop/products-v6-img5.jpg"
                                                   alt="" /> </a> </li>
                                          <li
                                              class="tab-nav popup-product-thumb ">
                                            <a href="#tabb2">
                                              <img src="src/assets/images/shop/products-v6-img6.jpg"
                                                   alt="" /> </a> </li>
                                          <li
                                              class="tab-nav popup-product-thumb ">
                                            <a href="#tabb3">
                                              <img src="src/assets/images/shop/products-v6-img7.jpg"
                                                   alt="" /> </a> </li>
                                        </ul>
                                      </div>
                                      <div class="popup-product-main-image-box">
                                        <div id="tabb1"
                                             class="tab-item popup-product-image">
                                          <div
                                              class="popup-product-single-image">
                                            <img src="src/assets/images/shop/products-v6-img5.jpg"
                                                 alt="" /> </div>
                                        </div>
                                        <div id="tabb2"
                                             class="tab-item popup-product-image">
                                          <div
                                              class="popup-product-single-image">
                                            <img src="src/assets/images/shop/products-v6-img6.jpg"
                                                 alt="" /> </div>
                                        </div>
                                        <div id="tabb3"
                                             class="tab-item popup-product-image">
                                          <div
                                              class="popup-product-single-image">
                                            <img src="src/assets/images/shop/products-v6-img7.jpg"
                                                 alt="" /> </div>
                                        </div> <button class="prev"> <i
                                          class="flaticon-back"></i>
                                      </button> <button class="next"> <i
                                          class="flaticon-next"></i>
                                      </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="popup-right-content">
                                    <h3>Brown Office Shoe</h3>
                                    <div class="ratting"> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i>
                                      <i class="flaticon-star"></i> <i
                                          class="flaticon-star"></i>
                                      <span>(112)</span> </div>
                                    <p class="text"> Hydrating Plumping Intense
                                      Shine Lip Colour
                                    </p>
                                    <div class="price">
                                      <h2> $42 USD <del> $65 USD</del></h2>
                                      <h6> In stuck</h6>
                                    </div>
                                    <div class="color-varient"> <a href="#0"
                                                                   class="color-name pink">
                                      <span>Pink</span> </a> <a href="#0"
                                                                class="color-name red">
                                      <span>Red</span> </a>
                                      <a href="#0"
                                         class="color-name yellow"><span>Yellow</span>
                                      </a> <a href="#0" class="color-name blue">
                                        <span>Blue</span>
                                      </a> <a href="#0" class="color-name black">
                                        <span>Black</span> </a> </div>
                                    <div class="add-product">
                                      <h6>Qty:</h6>
                                      <div class="button-group">
                                        <div class="qtySelector text-center">
                                                                                    <span class="decreaseQty"><i
                                                                                        class="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                                   class="qtyValue" value="1" />
                                          <span class="increaseQty"> <i
                                              class="flaticon-plus"></i>
                                                                                    </span> </div>
                                        <button class="btn--primary "> Add to
                                          Cart </button>
                                      </div>
                                    </div>
                                    <div class="payment-method"> <a href="#0"> <img
                                        src="src/assets/images/payment_method/method_1.png"
                                        alt=""> </a>
                                      <a href="#0"> <img
                                          src="src/assets/images/payment_method/method_2.png"
                                          alt=""> </a> <a href="#0"> <img
                                          src="src/assets/images/payment_method/method_3.png"
                                          alt=""> </a>
                                      <a href="#0"> <img
                                          src="src/assets/images/payment_method/method_4.png"
                                          alt=""> </a> </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="products-three-single-content text-center"> <span>{{ product.category.title }}</span>
                            <h5><a href="shop-details-3.html"> {{ product.title }} </a>
                            </h5>
                            <p>{{product.price}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-list" role="tabpanel"
                       aria-labelledby="pills-list-tab">
                    <div class="row ">
                      <div class="col-12">
                        <div class="product-grid-two list mt-30">
                          <div class="product-grid-two__img">
                            <a href="shop-details-2.html" class="d-block">
                              <img src="src/assets/images/home-three/products-2.jpg" alt="" />
                            </a> </div>
                          <div id="popup2z" class="product-gird__quick-view-popup mfp-hide">
                            <div class="container">
                              <div class="row justify-content-between align-items-center">
                                <div class="col-lg-6">
                                  <div class="quick-view__left-content">
                                    <div class="tabs">
                                      <div class="popup-product-thumb-box">
                                        <ul>
                                          <li
                                              class="tab-nav popup-product-thumb">
                                            <a href="#tab1z"> <img
                                                src="src/assets/images/shop/shop-grid-page-img2.jpg"
                                                alt="" /> </a> </li>
                                          <li
                                              class="tab-nav popup-product-thumb ">
                                            <a href="#tab2z"> <img
                                                src="src/assets/images/shop/shop-grid-page-img3.jpg"
                                                alt="" /> </a> </li>
                                          <li
                                              class="tab-nav popup-product-thumb ">
                                            <a href="#tab3z"> <img
                                                src="src/assets/images/shop/shop-grid-page-img4.jpg"
                                                alt="" /> </a> </li>
                                        </ul>
                                      </div>
                                      <div class="popup-product-main-image-box">
                                        <div id="tab1z"
                                             class="tab-item popup-product-image">
                                          <div
                                              class="popup-product-single-image">
                                            <img src="src/assets/images/shop/shop-grid-page-img2.jpg"
                                                 alt="" /> </div>
                                        </div>
                                        <div id="tab2z"
                                             class="tab-item popup-product-image">
                                          <div
                                              class="popup-product-single-image">
                                            <img src="src/assets/images/shop/shop-grid-page-img3.jpg"
                                                 alt="" /> </div>
                                        </div>
                                        <div id="tab3z"
                                             class="tab-item popup-product-image">
                                          <div
                                              class="popup-product-single-image">
                                            <img src="src/assets/images/shop/shop-grid-page-img4.jpg"
                                                 alt="" /> </div>
                                        </div> <button class="prev"> <i
                                          class="flaticon-back"></i>
                                      </button> <button class="next"> <i
                                          class="flaticon-next"></i>
                                      </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="popup-right-content">
                                    <h3>Diamond Ring Coyo</h3>
                                    <div class="ratting"> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i> <i
                                        class="flaticon-star"></i>
                                      <span>(123)</span> </div>
                                    <p class="text"> Wooden Tables to Brighten Your
                                      Dining Room </p>
                                    <div class="price">
                                      <h2> $50 USD <del> $105 USD</del></h2>
                                      <h6> In stuck</h6>
                                    </div>
                                    <div class="color-varient"> <a href="#0"
                                                                   class="color-name pink">
                                      <span>Pink</span> </a> <a href="#0"
                                                                class="color-name red"> <span>Red</span>
                                    </a> <a href="#0"
                                            class="color-name yellow"><span>Yellow</span>
                                    </a> <a href="#0" class="color-name blue">
                                      <span>Blue</span> </a> <a href="#0"
                                                                class="color-name black">
                                      <span>Black</span> </a> </div>
                                    <div class="add-product">
                                      <h6>Qty:</h6>
                                      <div class="button-group">
                                        <div class="qtySelector text-center">
                                                                                    <span class="decreaseQty"><i
                                                                                        class="flaticon-minus"></i>
                                                                                    </span> <input type="number"
                                                                                                   class="qtyValue" value="1" />
                                          <span class="increaseQty"> <i
                                              class="flaticon-plus"></i>
                                                                                    </span> </div> <button
                                          class="btn--primary "> Add to Cart
                                      </button>
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
                          <div v-for="product in products" class="product-grid-two-content text-center">
                            <span>New</span>
                            <h5>{{product.title}}</h5>
                            <p>{{ product.price }}</p>
                            <p class="text"> Typi non habent claritatem insitam usus
                              legentis qui facit eorum claritatem Investigationes
                              demonstraverunt lectores legere mele lius quod legunt
                              saepius Claritas est etiam processus a capitalize on low
                              hanging </p>
                            <div class="product-grid-two__overlay-box">
                              <div class="title">
                                <h6><a href="cart.html">Add To Cart</a></h6>
                              </div>
                              <div class="icon">
                                <ul>
                                  <li><a href="#popup2z" class="popup_link"><i
                                      class="flaticon-eye"></i></a> </li>
                                  <li><a href="wishlist.html"><i
                                      class="flaticon-heart"></i></a> </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End product-grid-->
  </main>
</template>

<script>
export default {
  name: "Index",
  mounted() {
    $(document).trigger('change')
    this.getProducts()
    this.getCategories()
  },

  data(){
    return{
      products: [],
      categories: [],
      search: '',
      searchCategory: ''
    }
  },

  computed: {
    products() {
      return this.products.filter(item => item.title.indexOf(this.search) !== -1)
    },
    selectedItemsColor: function () {
      return this.products.filter(function (item) {
        return this.categories.includes(searchCategory);
      }, this);
    },
  },

  methods: {
    getProducts(){
      this.axios.get('http://127.0.0.1:8000/api/products')
          .then(res => {
            this.products = res.data.data
          })
    },
    getCategories(){
      this.axios.get('http://127.0.0.1:8000/api/categories')
          .then(res =>{
            this.categories = res.data.data
          })
    },
  }
}
</script>

<style scoped>

</style>
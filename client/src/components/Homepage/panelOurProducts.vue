<template>
  <div class="panelExpertise paral">
    <header-component headerLabel="Out Products" class="colorSF pt-md-3"/>
    <div class="container p-md-0 pb-3">
      <div class="slideShowProduct">
        <div class="carousel-wrap pb-2">
          <div class="owl-carousel owl-theme owl-product">
            <div class="item text-center ">
              <img class="position-relative" src="../../assets/black-chana.jpg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Black Chana</h3>
            </div>
            <div class="item">
              <img class="position-relative" src="../../assets/cashew-kernels.jpg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Cashwe Kernels</h3>
            </div>
            <div class="item">
              <img class="position-relative" src="../../assets/cassia.jpg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Cassia</h3>
            </div>
            <div class="item">
              <img class="position-relative" src="../../assets/castor.jpg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Castor</h3>
            </div>
          </div>
        </div>
        <div class="carousel-wrap pb-5 d-md-block d-none">
          <div class="owl-carousel owl-theme owl-product">
            <div class="item text-center">
              <img class="position-relative" src="../../assets/cinamon.jpg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Cinamon</h3>
            </div>
            <div class="item">
              <img class="position-relative" src="../../assets/cocoa-powder.jpg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Cocoa Powder</h3>
            </div>
            <div class="item">
              <img class="position-relative" src="../../assets/corn-starch.jpeg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Corn Starch</h3>
            </div>
            <div class="item">
              <img class="position-relative" src="../../assets/cotton-seed-oils.jpg" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">Cotton Seed Oils </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './headerComponent'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel'

export default {
  name: 'panelOurProducts',
  components: { HeaderComponent },
  data () {
    return {}
  },
  mounted () {
    $('.owl-product').owlCarousel({
      margin: 50,
      navText: ['<div class=\'nav-btn prev-slide\'></div>', '<div class=\'nav-btn next-slide\'></div>'],
      autoplay: true,
      autoplayTimeout: 2000,
      lazyLoad: true,
      autoPlay: 2500,
      multipleRow: true,
      rows: 2,
      lazyLoadEager: 500,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        }
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .panelExpertise {
    background-image: url("../../assets/backgroundProduct.jpg");

    .h3CenterDiv {
      right: 16%;
      width: 65%;
      top: 35%;
      font-size: 1.4rem;
      @media (max-width: 1200px) {
        font-size: 1.2rem;
      }
      @media (max-width: 991px) {
        font-size: 1rem;
      }
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    .owl-carousel .owl-stage {
       display: flex;
     }
    .owl-carousel .owl-item img {
      max-width: 380px;
      max-height: 223px !important;
    }
  }
</style>

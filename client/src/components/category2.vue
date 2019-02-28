<template>
  <div class="categoryPanel">
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <panel-about/>
    <h2 class="text-uppercase text-center w-100 pt-5 pb-5 header">beans</h2>
    <div class="categoryDescription">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product1.png"/>
            <p class="pt-2">Pulses</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>
          <div class="col-12 col-md-3 productDetails pb-5">
            <img src="../assets/product2.png"/>
            <p class="pt-2">Lentils</p>
          </div>

        </div>
      </div>
    </div>
    <div class="slideProduct pr-5 pl-5">
      <div class="slider owl-carousel owl-theme owl-product">
        <div class="product">
          <img src="../assets/black-chana.jpg"/>
          <p class="pt-2">Black Chana</p>
        </div>
        <div class="product">
          <img src="../assets/product2.png"/>
          <p class="pt-2">Lentils</p>
        </div>
        <div class="product">
          <img src="../assets/product2.png"/>
          <p class="pt-2">Lentils</p>
        </div>
      </div>
    </div>
    <panel-categories/>
    <panel-footer></panel-footer>
  </div>
</template>

<script>
import HomeIndex from '../view/home'
import PanelAbout from './Homepage/panelAbout'
import NavTop from './Homepage/navTop'
import NavigationBar from './Homepage/navigationBar'
import PanelCategories from './Homepage/panelCategories'
import PanelFooter from './Homepage/panelFooter'

export default {
  name: 'category2',
  components: { PanelFooter, PanelCategories, NavigationBar, NavTop, PanelAbout },
  created () {
    this.$emit(`update:layout`, HomeIndex)
  },
  mounted () {
    $('.owl-product').owlCarousel({
      margin: 40,
      autoplay: true,
      autoplayTimeout: 2000,
      lazyLoad: true,
      autoPlay: 2500,
      multipleRow: true,
      rows: 2,
      lazyLoadEager: 500,
      smartSpeed: 1000,
      dots: false,
      responsive: {
        0: {
          items: 1
        }
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .categoryPanel {
    .owl-carousel .owl-item img {
      max-width: 380px;
      max-height: 223px !important;
    }
    .header {
      font-family: Roboto;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #444444;
      font-size: 3rem;
    }

    .slideProduct {
      display: none;
    }

    @media (max-width: 767px) {
      .slideProduct {
        display: block;

        p {
          font-size: 1.5rem;
        }
      }
      .categoryDescription {
        display: none;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #222222;
    }
  }
</style>

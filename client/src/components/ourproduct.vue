<template>
  <div id="ourproduct" class="ourProduct">
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <panel-about/>
    <div class="container-fluid pl-5 pr-5">
      <div class="row pl-md-5 pr-md-5">
        <h2 class="titleProduct headerProduct text-center text-uppercase w-100 p-md-4 p-2">out product</h2>
        <h4 class="subtitleProduct headerProduct text-center text-uppercase w-100 pb-2">export</h4>
        <div class="carousel-wrap pl-md-5 pr-md-5 col-12">
          <div class="owl-carousel owl-theme">
            <div class="item">
              <img src="http://lorempixel.com/640/480/nightlife/"/>
              <span class="img-text">nightlife</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/abstract/"/>
              <span class="img-text">abstract</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/animals/"/>
              <span class="img-text">animals</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/nature/"/>
              <span class="img-text">nature</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/business/"/>
              <span class="img-text">business</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/cats/"/>
              <span class="img-text">cats</span>
            </div>

            <div class="item">
              <img src="http://lorempixel.com/640/480/food/"/>
              <span class="img-text">food</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/fashion/"/>
              <span class="img-text">fashion</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/people/"/>
              <span class="img-text">people</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/sports/"/>
              <span class="img-text">sports</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/technics/"/>
              <span class="img-text">technics</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/transport/"/>
              <span class="img-text">transport</span>
            </div>
          </div>
        </div>
        <h4 class="subtitleProduct headerProduct text-center text-uppercase w-100 pt-md-4 pb-2">import</h4>
        <div class="carousel-wrap pl-md-5 pr-md-5 col-12 pb-md-4 pb-2">
          <div class="owl-carousel owl-theme">
            <div class="item">
              <img src="http://lorempixel.com/640/480/nightlife/"/>
              <span class="img-text">nightlife</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/abstract/"/>
              <span class="img-text">abstract</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/animals/"/>
              <span class="img-text">animals</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/nature/"/>
              <span class="img-text">nature</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/business/"/>
              <span class="img-text">business</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/cats/"/>
              <span class="img-text">cats</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/city/"/>
              <span class="img-text">city</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/food/"/>
              <span class="img-text">food</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/fashion/"/>
              <span class="img-text">fashion</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/people/"/>
              <span class="img-text">people</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/sports/"/>
              <span class="img-text">sports</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/technics/"/>
              <span class="img-text">technics</span>
            </div>
            <div class="item">
              <img src="http://lorempixel.com/640/480/transport/"/>
              <span class="img-text">transport</span>
            </div>
          </div>
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
  name: 'ourproduct',
  components: { PanelFooter, PanelCategories, NavigationBar, NavTop, PanelAbout },
  created () {
    this.$emit(`update:layout`, HomeIndex)
  },
  mounted () {
    $('.owl-carousel').owlCarousel({
      margin: 40,
      nav: true,
      navText: ['<div class=\'nav-btn prev-slide\'></div>', '<div class=\'nav-btn next-slide\'></div>'],
      autoplay: true,
      autoplayTimeout: 4000,
      lazyLoad: true,
      dots: false,
      autoPlay: 2500,
      lazyLoadEager: 1000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        677: {
          items: 2
        },
        768: {
          items: 4
        }
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .ourProduct {

    .headerProduct {
      color: #444444;
      font-weight: 300;
    }

    .carousel-wrap {
      width: 100%;
      margin: auto;
      position: relative;
    }

    .owl-carousel .owl-nav {
      overflow: hidden;
      height: 0px;
    }

    .owl-stage-outer {
      padding-top: 2rem;
      @media (max-width: 991px) {
        padding-top: 46px;
      }
    }

    .owl-theme .owl-dots .owl-dot.active span,
    .owl-theme .owl-dots .owl-dot:hover span {
      background: #2caae1;
    }

    .owl-carousel .item {
      text-align: center;

      img, span {
        @media (max-width: 767px) {
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    .owl-carousel .owl-item img {
      display: block;
      width: 100%;
    }

    @media (max-width: 767px) {
      .owl-carousel .owl-item img {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .owl-carousel .nav-btn {
      height: 47px;
      position: absolute;
      width: 26px;
      cursor: pointer;
      top: 100px !important;
    }

    .owl-carousel .owl-prev.disabled,
    .owl-carousel .owl-next.disabled {
      pointer-events: none;
      opacity: 0.2;
    }

    .owl-carousel .prev-slide {
      background: url("../assets/nav-icon.png") no-repeat scroll 0 0;
      left: -66px;
    }

    .owl-carousel .next-slide {
      background: url("../assets/nav-icon.png") no-repeat scroll -24px 0px;
      right: -66px;
    }

    .owl-carousel .prev-slide:hover {
      background-position: 0px -53px;
    }

    .owl-carousel .next-slide:hover {
      background-position: -24px -53px;
    }

    .owl-dots {
      display: none;
    }

    span.img-text {
      text-decoration: none;
      text-align: left;
      font-weight: 500;
      font-size: .8rem;
      outline: none;
      transition: all 0.4s ease;
      -webkit-transition: all 0.4s ease;
      -moz-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      cursor: pointer;
      width: 100%;
      display: block;
      text-transform: capitalize;
      padding-top: 1rem;
    }

    span.img-text:hover {
      color: #2caae1;
    }

    @media (max-width: 767px) {
      .nav-btn {
      }
    }
  }

</style>

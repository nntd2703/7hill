<template>
  <div class="panelExpertise paral">
    <header-component headerLabel="Out Products" class="colorSF pt-md-3"/>
    <div class="container p-md-0 pb-3">
      <div class="slideShowProduct">
        <div class="carousel-wrap pb-5 d-md-block d-none">
          <carousel :loop="true" :autoplay="true" :autoplayTimeout="3000" :per-page-custom="[[768, 3]]"
                    :navigation-enabled="false" :paginationEnabled="false" :speed="2300"
                    class="d-flex justify-content-around">
            <slide class="item" v-for="item in listItem1" v-bind:key="item['.key']">
              <router-link :to="{ name: 'PDP', params: { productID: item.id } }">
                <vue-load-image>
                  <img slot="image" class="position-relative" :src="item.imageUrl" alt=""/>
                  <img slot="preloader" src="../../assets/image-loader.gif" height="200" width="200"/>
                  <div slot="error">error message</div>
                </vue-load-image>
                <h3 class="position-absolute text-white h3CenterDiv">{{item.name}}</h3>
              </router-link>
            </slide>
          </carousel>
        </div>
        <div class="carousel-wrap pb-5 d-md-block d-none">
          <carousel :loop="true" :autoplay="true" :autoplayTimeout="5000" :per-page-custom="[[768, 3]]"
                    :navigationEnabled="true" :paginationEnabled="false" :navigationPrevLabel="null"
                    :navigationNextLabel="null" :speed="2300" class="d-flex justify-content-around">
            <slide class="item" v-for="item in listItem2" v-bind:key="item['.key']">
              <router-link :to="{ name: 'PDP', params: { productID: item.id } }">
                <vue-load-image>
                  <img slot="image" class="position-relative" :src="item.imageUrl" alt=""/>
                  <img slot="preloader" src="../../assets/image-loader.gif" height="200" width="200"/>
                  <div slot="error">error message</div>
                </vue-load-image>
                <h3 class="position-absolute text-white h3CenterDiv">{{item.name}}</h3>
              </router-link>
            </slide>
          </carousel>
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
import VueLoadImage from 'vue-load-image'

export default {
  name: 'panelOurProducts',
  components: { HeaderComponent, 'vue-load-image': VueLoadImage },
  watch: {},
  props: [
    'listItem1',
    'listItem2'
  ],
  data () {
    return {}
  },
  mounted () {
  },
  created () {

  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .panelExpertise {
    background-image: url("../../assets/backgroundProduct.jpg");

    .item img {
      width: 90%;
      max-height: 223px !important;
    }

    .h3CenterDiv {
      font-size: 1.4rem;
      top: 46%;
      padding-left: 113px;
    }

    @media (max-width: 1200px) {
      .h3CenterDiv {
        font-size: 1.2rem;
      }
    }
    @media (max-width: 991px) {
      .h3CenterDiv {
        font-size: 1rem;
      }
    }
    @media (max-width: 768px) {
      .h3CenterDiv {
        font-size: 2rem;
      }
    }
    @media (max-width: 600px) {
      .item img {
        width: 50%;
      }
    }
  }
</style>

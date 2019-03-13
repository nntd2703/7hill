<template>
  <div class="content">
  <div class="loading w-100 h-100" v-if="loading">
    <div class="item">
      <cube-shadow></cube-shadow>
    </div>
  </div>
  <div class="categoryPanel" v-else>
    <nav-top></nav-top>
    <navigation-bar productID="productID"></navigation-bar>
    <panel-about/>
    <h2 class="text-uppercase text-center w-100 pt-5 pb-5 header">beans</h2>
    <div class="categoryDescription">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 productDetails pb-5" v-for="item in listItemProduct">
            <router-link :to="{ name: 'PDP', params: { productID: item.key } }"><a>
              <img :src="item.imageUrl"/>
              <p class="pt-2 productName">{{item.name}}</p>
            </a></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="slideProduct pr-5 pl-5">
      <carousel  :loop="true" :autoplay="true" :autoplayTimeout="4000" :per-page="1" :navigationEnabled="true" :paginationEnabled="false" :navigationPrevLabel="null" :navigationNextLabel="null" :speed="1500"  >
        <slide class="product"  v-for="item in listItemProduct">
          <a>
            <img :src="item.imageUrl"/>
            <div class="pt-3 text-center productName">{{item.name}}</div>
          </a>
        </slide>
      </carousel>
    </div>
    <panel-categories/>
    <panel-footer></panel-footer>
  </div>
  </div>
</template>

<script>
import HomeIndex from '../view/home'
import PanelAbout from './Homepage/panelAbout'
import NavTop from './Homepage/navTop'
import NavigationBar from './Homepage/navigationBar'
import PanelCategories from './Homepage/panelCategories'
import PanelFooter from './Homepage/panelFooter'
import {firebase} from '@/services/firebaseConfig'
import CubeShadow from "vue-loading-spinner/src/components/Circle9";

export default {
  name: 'category2',
  components: {CubeShadow, PanelFooter, PanelCategories, NavigationBar, NavTop, PanelAbout },
  created () {
    this.$emit(`update:layout`, HomeIndex)
    this.ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.listItemProduct.push({
          'id': doc.id,
          'key': doc.data().key,
          'name': doc.data().name,
          'imageUrl': doc.data().imageUrl
        })
      })
    })
    setTimeout(() => {
      this.loading = false
    }, 1700)
  },
  data () {
    return {
      listItemProduct: [],
      loading: true,
      productID: null,
      ref: firebase.firestore().collection('items')
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  .categoryPanel {
    .owl-carousel .owl-item img {
      max-width: 380px;
      max-height: 223px !important;
    }
    .slideProduct {
      display: none;
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
    a {
      .productName {
        font-size: 1rem;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #222222;
      }
    }
  }
</style>

<template>
  <div>
    <div class="loading w-100 h-100" v-if="loading">
      <div class="item">
        <cube-shadow size="120px"></cube-shadow>
      </div>
    </div>
    <div v-else>
      <nav-top></nav-top>
      <navigation-bar></navigation-bar>
      <panel-about/>
      <div class="childContent p-5">
        <img src="../assets/404error.png" class="panelContext" height="179" width="579"/>
        <div class="product p-2  d-md-flex justify-content-center" v-if="productDetails">
          <vue-load-image class="imageProduct">
            <img slot="image" :src="productDetails.imageUrl"/>
            <img slot="preloader" src="../assets/image-loader.gif"/>
            <div slot="error">error message</div>
          </vue-load-image>
          <h2 class="jumbotron productName">{{productDetails.name}}</h2>
        </div>
      </div>
      <panel-categories/>
      <panel-footer></panel-footer>
    </div>
  </div>
</template>

<script>
import { firebase } from '@/services/firebaseConfig'
import VueLoadImage from 'vue-load-image'
import NavTop from './Homepage/navTop'
import NavigationBar from './Homepage/navigationBar'
import PanelAbout from './Homepage/panelAbout'
import PanelCategories from './Homepage/panelCategories'
import PanelFooter from './Homepage/panelFooter'
import CubeShadow from 'vue-loading-spinner/src/components/Circle9'

export default {
  name: 'errorPage',
  components: {
    CubeShadow,
    PanelFooter,
    PanelCategories,
    PanelAbout,
    NavigationBar,
    NavTop,
    'vue-load-image': VueLoadImage
  },
  data () {
    return {
      productDetails: {},
      listItemProduct: [],
      loading: true,
      ref: firebase.firestore().collection('items')
    }
  },
  watch: {
    listItemProduct () {
      this.productDetails = this.listItemProduct[Math.floor(Math.random() * this.listItemProduct.length)]
      setTimeout(() => {
        this.loading = false
      }, 1300)
    }
  },
  created () {
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
  }
}
</script>

<style scoped lang="scss">
  .childContent {
    display: block;
    margin: auto;
    .panelContext {
      display: block;
      margin: auto;
    }
    .imageProduct {
      width: 10%;
      height: auto;
    }
    @media (max-width: 768px) {
      .product {
        .productName,
        .imageProduct{
          text-align: center;
          padding: 0;
        }
        .imageProduct {
          margin-bottom: 20px;
          width: 100%;
        }
      }
    }
  }
</style>

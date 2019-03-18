<template>
  <div id="pdpContent">
  <div id="content" v-if="productID">
  <div class="loading w-100 h-100" v-if="isLoading">
    <div class="item">
      <cube-shadow size="120px"></cube-shadow>
    </div>
  </div>
  <div class="contentPDP" v-else>
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <panel-about/>
    <div class="container-fluid">
      <div class="row d-flex">
        <div
          class="imagePDP col-12 col-md-6 justify-content-center align-content-center pt-3 pt-md-5 pb-3 pb-md-5 h-auto position-relative">
          <h2 class="titleImage text-center text-uppercase">{{productDetails.name}}</h2>
          <vue-load-image class="imageProduct">
            <img slot="image" :src="productDetails.imageUrl" class="p-2 imgPDP" id="imgPDP"/>
            <img slot="preloader" src="../assets/image-loader.gif"/>
            <div slot="error">error message</div>
          </vue-load-image>
        </div>
        <div class="col-12 col-md-6 pt-5">
          <h2 class="titleTable text-center text-uppercase">SPECIFICATIONS</h2>
          <div class="tableDetails pt-2 pb-5">
            <div class="tableDetailsProduct pr-5 pl-5">
              <table class="table table-hover">
                <tbody>
                <tr class="first row">
                  <td class="col-6">Quality</td>
                  <td class="col-6">Silky Polished and Sortex clean Non</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Length of Rice</td>
                  <td class="col-6">4.50 mm before cookin</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Broken</td>
                  <td class="col-6">5% maximum</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Damage & Discol</td>
                  <td class="col-6">2%</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Black grains</td>
                  <td class="col-6">Nil</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Foreign matter</td>
                  <td class="col-6">1%</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Yellow Grains</td>
                  <td class="col-6">1.5% maximum</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Chalky Grains</td>
                  <td class="col-6">4-5% maximum</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Taste</td>
                  <td class="col-6">Sweet</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Moisture</td>
                  <td class="col-6">14% maximum</td>
                </tr>
                <tr class="row">
                  <td class="col-6">Insect/Weevils</td>
                  <td class="col-6">Nil</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="contactFor text-center w-100">
            <h2>Contact for best Price</h2>
            <a href="#" class="btn">
              <span class="btn-inner text-white">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <panel-categories/>
    <panel-footer></panel-footer>
  </div>
  </div>
  <div v-else>
    <error-page></error-page>
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
import { firebase } from '@/services/firebaseConfig'
import CubeShadow from 'vue-loading-spinner/src/components/Circle9'
import ErrorPage from './errorPage'
import VueLoadImage from 'vue-load-image'

export default {
  name: 'pdp',
  components: { ErrorPage, CubeShadow, PanelFooter, PanelCategories, NavigationBar, NavTop, PanelAbout, 'vue-load-image': VueLoadImage },
  mounted () {
  },
  watch: {
    isLoading () {
      console.log('isloadingChange', this.isLoading)
    }
  },
  data () {
    return {
      ref: firebase.firestore().collection('items'),
      productDetails: {},
      isLoading: true,
      productID: this.$route.params.productID
    }
  },
  updated () {

  },
  created () {
    this.isLoading = true
    this.$emit(`update:layout`, HomeIndex)
    if (this.$route.params.productID) {
      this.ref.doc(this.$route.params.productID).get().then(doc => {
        if (!doc.exists) {
          console.log('No such document!')
        } else {
          this.productDetails = doc.data()
        }
      })
    }
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  }
}
</script>

<style scoped lang="scss">
  body {
    font-family: Roboto;
  }

  .titleImage,
  .titleTable {
    color: #444444;
    font-weight: 300;
    font-size: 2rem!important;
  }

  .tableDetailsProduct {
    height: 450px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    overflow: auto;
  }

  .imgPDP {
    display: block;
    margin: auto;
  }

  .col {
    flex: 1;
  }

  .contactFor {
    h2 {
      color: #666666;
      font-weight: bold;
      text-transform: none;
      font-size: 2rem !important;
    }

    .btn {
      padding: 0.375rem 1.75rem;
    }
  }

  table {
    td {
      font-size: .85rem;
    }

    .first {
      td {
        border: none;
        color: #444444;
      }
    }

    td:first-child {
      font-weight: 500;
    }
  }

</style>

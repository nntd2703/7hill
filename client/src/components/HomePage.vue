<template>
  <div id="HomePage">
    <div class="loading w-100 h-100" v-if="loading">
      <div class="item">
        <cube-shadow></cube-shadow>
      </div>
    </div>
    <div v-else>
      <nav-top></nav-top>
      <navigation-bar></navigation-bar>
      <slide-show/>
      <panel-our-service/>
      <panel-our-products :listItem1="listItem1" :listItem2="listItem2"/>
      <panel-contact/>
      <panel-content-about/>
      <founder-panel/>
      <panel-categories></panel-categories>
      <panel-footer></panel-footer>
    </div>
  </div>
</template>

<script>
import SlideShow from '../components/Homepage/slideShow'
import PanelOurService from '../components/Homepage/panelOurService'
import PanelOurProducts from '../components/Homepage/panelOurProducts'
import PanelContact from '../components/Homepage/panelContact'
import PanelContentAbout from '../components/Homepage/panelContentAbout'
import FounderPanel from '../components/Homepage/founderPanel'
import HomeIndex from '../view/home'
import NavTop from './Homepage/navTop'
import NavigationBar from './Homepage/navigationBar'
import PanelCategories from './Homepage/panelCategories'
import PanelFooter from './Homepage/panelFooter'
import CubeShadow from "vue-loading-spinner/src/components/Circle9";
import {firebase} from '@/services/firebaseConfig'

export default {
  name: 'app',
  components: {CubeShadow, PanelFooter, PanelCategories, NavigationBar, NavTop, FounderPanel, PanelContentAbout, PanelContact, PanelOurProducts, PanelOurService, SlideShow },
  watch: {
    listItemProduct() {
      this.loading = true
      let count = this.listItemProduct.length
      let key = 0
      this.listItemProduct.forEach((item) => {
        if (key <= count/2 || count <= 3) {
          this.listItem1.push(item)
          key++
        } else {
          this.listItem2.push(item)
          key++
        }
      })
      setTimeout(() => {
        if(this.isLoadingDataDone) {
          this.loading = false
        }
      }, 1700)
    },
    isLoadingDataDone () {
      if(this.isLoadingDataDone) {
        this.loading = false
      }
    }
  },
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
    this.isLoadingDataDone = true
  },
  data () {
    return {
      listItemProduct: [],
      listItem1: [],
      listItem2: [],
      loading: true,
      isLoadingDataDone: false,
      ref: firebase.firestore().collection('items')
    }
  }
}

</script>

<style lang="scss">

</style>

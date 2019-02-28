<template>
  <div id="HomePage">
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <slide-show/>
    <panel-our-service/>
    <panel-our-products/>
    <panel-contact/>
    <panel-content-about/>
    <founder-panel/>
    <panel-categories></panel-categories>
    <panel-footer></panel-footer>
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

export default {
  name: 'app',
  components: { PanelFooter, PanelCategories, NavigationBar, NavTop, FounderPanel, PanelContentAbout, PanelContact, PanelOurProducts, PanelOurService, SlideShow },
  created () {
    this.$emit(`update:layout`, HomeIndex)
  }
}

</script>

<style lang="scss">

</style>

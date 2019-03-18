<template>
  <div>
    <div class="loading w-100 h-100" v-if="loading">
      <div class="item">
        <cube-shadow size="120px"></cube-shadow>
      </div>
    </div>
  <div class="category1" v-else>
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <panel-about/>
    <div class="categoryPanel">
      <h2 class="text-uppercase text-center w-100 pt-5 header">Machinery & Raw Materials</h2>
      <div class="categoryDescription">
        <div class="container">
          <div class="row">
            <div class="description p-5">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page
                when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here',
                <br>
                <br>
                Making it look like readable English. Many desktop publishing packages and web page editors now
                use
                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                sites
                still in their infancy. Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).</p>
            </div>
          </div>
        </div>
      </div>
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
import CubeShadow from 'vue-loading-spinner/src/components/Circle9'

export default {
  name: 'category1',
  components: { CubeShadow, PanelFooter, PanelCategories, NavigationBar, NavTop, PanelAbout },
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.$emit(`update:layout`, HomeIndex)
    setTimeout(() => {
      this.loading = false
    }, 1300)
  }
}
</script>

<style scoped lang="scss">
  .categoryPanel {
    .categoryDescription {
      header {
        font-size: 1.5rem;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.32;
        letter-spacing: normal;
        color: #444444;
      }
      p {
        font-size: .8rem;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.75;
        letter-spacing: normal;
        color: #222222;
      }
      .description {
        right: 0;
        left: 0;
        margin-right: auto;
        margin-left: auto;
        min-height: 10em;
        width: 70%;
        top: 5em;
        @media (max-width: 991px) {
          width: 100%;
        }
      }
    }
  }
</style>

<template>
  <div class="panelExpertise paral">

    <header-component headerLabel="Out Products" class="colorSF pt-md-3"/>
    <div class="container p-md-0 pb-3">
      <div class="slideShowProduct">
        <div class="carousel-wrap pb-5 d-md-block d-none">
          <carousel  :loop="true" :autoplay="true" :autoplayTimeout="8000" :perPageCustom="[[480, 2], [768, 3]]"  :perPage="1" :navigationEnabled="true" :paginationEnabled="false" :navigationPrevLabel="null" :navigationNextLabel="null" :speed="2000" class="d-flex justify-content-around" >
            <slide class="item" v-for="item in listItem1" v-bind:key="item['.key']">
              <img class="position-relative" :src="item.imageUrl" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">{{item.name}}</h3>
            </slide>
          </carousel>
        </div>
        <div class="carousel-wrap pb-5 d-md-block d-none">
          <carousel  :loop="true" :autoplay="true" :autoplayTimeout="8000" :perPageCustom="[[480, 2], [768, 3]]" :perPage="1" :navigationEnabled="true" :paginationEnabled="false" :navigationPrevLabel="null" :navigationNextLabel="null" :speed="2000" class="d-flex justify-content-around">
            <slide class="item" v-for="item in listItem2" v-bind:key="item['.key']">
              <img class="position-relative" :src="item.imageUrl" alt="">
              <h3 class="position-absolute text-white h3CenterDiv">{{item.name}}</h3>
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
  import {firebase} from '@/services/firebaseConfig'

  export default {
    name: 'panelOurProducts',
    components: { HeaderComponent },
    watch: {
      listItemProduct() {
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
      }
    },
    data() {
      return {
        listItemProduct: [],
        listItem1: [],
        listItem2: [],
        errors: [],
        ref: firebase.firestore().collection('items'),
      }
    },
    mounted() {

    },
    created() {
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
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .panelExpertise {
    background-image: url("../../assets/backgroundProduct.jpg");
    .item img{
      width: 90%;
      max-width: 380px;
      max-height: 223px !important;
    }
    .h3CenterDiv {
      font-size: 1.4rem;
      top: 46%;
      padding-left: 113px;
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
  }
</style>

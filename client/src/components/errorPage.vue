<template>
  <div>
    <div class="errorContent">
      <img src="../assets/404error.png" height="179" width="579"/>
      <div class="product p-2 row" v-if="productDetails">
        <img :src="productDetails.imageUrl" class="col-md-6 col-12 w-25" />
        <h2 class="jumbotron col-md-6 col-12">{{productDetails.name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from '@/services/firebaseConfig'
  export default {
    name: "errorPage",
    data () {
      return {
        productDetails: {},
        listItemProduct: [],
        ref: firebase.firestore().collection('items'),
      }
    },
    watch: {
      listItemProduct() {
        this.productDetails = this.listItemProduct[Math.floor(Math.random()  * this.listItemProduct.length)];
        console.log('productDetails', this.productDetails)
        console.log(' this.listItemProduct', this.listItemProduct.length)
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

<style scoped type="scss">
.errorContent {
  display: block;
  margin: auto;
  .product {
    img {
      transform: scale(0.5, 0.5);
      -ms-transform: scale(0.5, 0.5);
      -webkit-transform: scale(0.5, 0.5);
    }
  }
}
</style>

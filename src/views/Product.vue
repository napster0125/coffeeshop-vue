<template>
  <div class="product">
    <Navbar />
    <b-container fluid>
      <b-row>
        <b-col xl="4" lg="4" sm="12">
          <Coupon />
        </b-col>
        <b-col xl="8" lg="8" sm="12">
          <ProductCard />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import ProductCard from '../components/_base/ProductCard'
import Coupon from '../components/_base/coupon'
// import axios from 'axios'

export default {
  name: 'Product',
  components: {
    Navbar,
    ProductCard,
    Coupon
  }
  // data() {
  //   return {
  //     products: []
  //   }
  // },
  // created() {
  //   this.getProduct()
  // }
  // methods: {
  //   getProduct() {
  //     axios
  //       .get('http://localhost:3000/product?page=1&limit=8')
  //       .then(response => {
  //         console.log(response)
  //         this.products = response.data.data
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>

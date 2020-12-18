<template>
  <div class="product">
    <div class="centered">
      <Navbar />
      <b-container fluid>
        <b-row>
          <b-col cols="4">
            component coupon
          </b-col>
          <b-col cols="8">
            <ProductCard />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import ProductCard from '../components/_base/ProductCard'
// import axios from 'axios'

export default {
  name: 'Product',
  components: {
    Navbar,
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProduct()
  }
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

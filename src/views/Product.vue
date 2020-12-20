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
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import ProductCard from '../components/_base/ProductCard'
import Coupon from '../components/_base/coupon'
import Footer from '../components/_base/footer'
// import axios from 'axios'

export default {
  name: 'Product',
  components: {
    Navbar,
    ProductCard,
    Coupon,
    Footer
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>

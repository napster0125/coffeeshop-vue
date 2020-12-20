<template>
  <div>
    <Navbar />
    <CartComponent />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer.vue'
import CartComponent from '../components/_base/CartComponent'
export default {
  components: {
    Navbar,
    CartComponent,
    Footer
  }
}
</script>

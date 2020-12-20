<template>
  <div>
    <Navbar />
    <ProdDet />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import ProdDet from '../components/_base/ProdDet.vue'
import Footer from '../components/_base/footer.vue'
export default {
  name: 'ProductDetail',
  components: {
    Navbar,
    ProdDet,
    Footer
  }
}
</script>

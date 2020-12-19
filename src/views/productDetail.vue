<template>
  <div>
    <Navbar />
    <ProdDet />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import ProdDet from '../components/_base/ProdDet.vue'

export default {
  name: 'ProductDetail',
  components: {
    Navbar,
    ProdDet
  }
}
</script>

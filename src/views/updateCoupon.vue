<template>
  <div class="home">
    <b-container fluid>
      <Navbar />
      <div id="main">
        <Main />
      </div>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer'
import Main from '../components/_base/MainUpdateCoupon'

export default {
  name: 'updateCoupon',
  components: {
    Navbar,
    Footer,
    Main
  },
  data() {
    return {
      rule: 1
    }
  }
}
</script>

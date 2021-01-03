<template>
  <div class="home">
    <b-container fluid class="centered">
      <Navbar />
      <div id="main">
        <MainCoupon />
      </div>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer'
import MainCoupon from '../components/_base/MainPostCoupon'

export default {
  name: 'postCoupon',
  components: {
    Navbar,
    Footer,
    MainCoupon
  },
  data() {
    return {
      rule: 1
    }
  }
}
</script>

<style scoped>
#welcome {
  font-size: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
  color: white;
  text-shadow: black 2px 2px;
}
</style>

<template>
  <div class="home">
    <b-container fluid class="centered">
      <Navbar />
      <div id="main">
        <div id="welcome" v-show="user.user_role === 1">
          Welcome to Coffee-Shop, Admin
          <br />
          <br />
          <router-link to="/PostProduct">
            <button>Post a Product</button> <br />
          </router-link>
          <br />
          <router-link to="/PostCoupon">
            <button>Post a Coupon</button>
          </router-link>
        </div>
        <div id="welcome" v-show="user.user_role !== 1">
          Welcome to Coffee-Shop, User <br />
          <br />
          <button>Check Today's Favourite</button> <br />
          <br />
          <button>Check History</button>
        </div>
      </div>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  // data() {
  //   return {
  //     rule: 1
  //   }
  // },
  computed: {
    ...mapGetters({ user: 'setUser' })
  }
}
</script>

<style scoped>
#main {
  height: 500px;
  text-align: center;
  background-image: url('../../src/assets/bg1.png');
}
#welcome {
  font-size: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
  color: white;
  text-shadow: black 2px 2px;
}
</style>

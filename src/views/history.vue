<template>
  <div class="home">
    <b-container fluid class="centered">
      <Navbar />
      <HistoryComponent />
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer'
import HistoryComponent from '../components/_base/historyComponent'

export default {
  name: 'history',
  components: {
    Navbar,
    HistoryComponent,
    Footer
  },
  data() {
    return {
      rule: 1
    }
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

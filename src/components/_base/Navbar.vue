<template>
  <b-container fluid class="container-header">
    <b-row>
      <b-col id="header-logo">
        <img src="@/assets/coffee1.png" /> Coffee Shop
      </b-col>
      <b-col cols="8" id="header-menu">
        <b-container fluid class="container-header-menu">
          <b-row>
            <b-col lg="3" sm="6" xs="12" id="home">
              <router-link to="/">
                Home
              </router-link>
            </b-col>
            <b-col lg="3" sm="6" xs="12" id="product">
              <router-link to="/product">
                Product
              </router-link>
            </b-col>
            <b-col lg="3" sm="6" xs="12" id="cart">
              <router-link to="/cart">
                Your cart
              </router-link>
            </b-col>
            <b-col lg="3" sm="6" xs="12" id="history">
              <router-link to="/history">
                History
              </router-link>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col id="header-account">
        <b-row>
          <b-col>
            <router-link to="/search">
              <img src="@/assets/Vector.png" />
            </router-link>
          </b-col>
          <b-col>
            <a href="url"><img src="@/assets/chat.png"/></a>
          </b-col>
          <b-col>
            <a href="profile.html"
              ><img src="@/assets/prof.png" style="border-radius: 50%;"
            /></a>
          </b-col>
        </b-row>
        <div id="logout">
          <button @click="handleLogout">Logout</button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout()
    }
  }
}
</script>

<style scoped>
#logout {
  text-align: center;
}
#logout button {
  background-color: wheat;
  font-family: Georgia, 'Times New Roman', Times, serif;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
  font-size: 12px;
  border-radius: 12px;
  margin-top: 10px;
}
.container-header a:link,
.container-header a:visited {
  color: black;
  text-decoration: none;
}
.container-header {
  font-family: 'Rubik', sans-serif;
  background-color: white;
  padding: 20px;
  border-bottom: lightgray solid 3px;
}
#header-logo {
  font-weight: bold;
  font-size: 20px;
  padding-top: 20px;
}
#header-menu {
  color: black;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 20px;
}
#header-menu div {
  padding-left: 10px;
  text-align: center;
}
#header-account img {
  background-color: white;
  margin-top: 10px;
}
#home:hover,
#product:hover,
#cart:hover,
#history:hover {
  font-weight: bold;
  border-bottom: 3px solid black;
}
@media (max-width: 550px) {
  #header-account {
    border-top: 2px black solid;
  }
}
</style>

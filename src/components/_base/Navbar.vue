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
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
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
#header-account {
  background-color: white;
  padding-top: 20px;
}
#home:hover,
#product:hover,
#cart:hover,
#history:hover {
  font-weight: bold;
  border-bottom: 3px solid black;
}
</style>

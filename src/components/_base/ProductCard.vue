<template>
  <div>
    <div id="top">
      <div id="fav">
        <b-link v-on:click="getProduct()">Favourite</b-link>
      </div>
      <div id="cof">
        <b-link v-on:click="getProductByCat(1)">Coffee</b-link>
      </div>
      <div id="noncof">
        <b-link v-on:click="getProductByCat(2)">Non Coffee</b-link>
      </div>
      <div id="food">
        <b-link v-on:click="getProductByCat(3)">Foods</b-link>
      </div>
      <div id="addon">
        <b-link v-on:click="getProductByCat(4)">Add On</b-link>
      </div>
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          xl="3"
          lg="4"
          md="6"
          sm="12"
          v-for="(item, index) in products"
          :key="index"
        >
          <div id="productCard" @click="detailProduct(item.product_id)">
            <img src="@/assets/cold.png" style="border-radius: 50%;" />
            <p id="name">{{ item.product_name }}</p>
            <p id="price">IDR {{ item.product_price }}</p>
          </div>

          <!-- <b-card
            v-bind:title="item.product_name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 10rem; height: 300px;"
            class="mb-2"
            id="prodcard"
          >
            <b-card-text> Rp. {{ item.product_price }} </b-card-text>

            <b-button href="#" variant="primary">Add To Cart</b-button>
            <b-button href="#" variant="success">Update</b-button>
            <b-button href="#" variant="danger">Delete</b-button>
          </b-card> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductCard',
  data() {
    return {
      products: [],
      category: ''
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    detailProduct(product_id) {
      this.$router.push({ name: 'ProductDetail', params: { id: product_id } })
    },
    getProduct() {
      axios
        .get('http://localhost:3000/product?page=1&limit=8')
        .then(response => {
          console.log(response)
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getProductByCat(id) {
      axios
        .get(`http://localhost:3000/product?page=1&limit=8&category=${id}`)
        .then(response => {
          console.log(response)
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
#productCard {
  width: 140px;
  height: 200px;
  margin-left: 50px;
  margin-top: 60px;
  text-align: center;
  border-radius: 15px;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#productCard img {
  position: relative;
  left: 0;
  top: -50px;
  width: 120px;
  height: 120px;
}
#productCard p {
  position: relative;
  bottom: 30px;
}
#prodcard {
  border-radius: 20px;
}
#top {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  line-height: 24px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
#top div {
  margin-left: 5px;
}
#top a:link,
#top a:visited {
  color: #9f9f9f;
  text-decoration: none;
}
#top a:hover {
  color: black;
  text-shadow: 2px 2px lightgray;
}
#fav:hover,
#cof:hover,
#noncof:hover,
#fav:hover,
#food:hover,
#addon:hover {
  font-weight: bold;
  border-bottom: 3px solid black;
}
</style>

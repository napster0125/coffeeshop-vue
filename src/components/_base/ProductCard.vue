<template>
  <div>
    <div id="top">
      <div id="fav" v-bind:class="this.activePage == 0 ? 'bold' : 'normal'">
        <b-link v-on:click="get()">Favourite</b-link>
      </div>
      <div id="cof" v-bind:class="this.activePage == 1 ? 'bold' : 'normal'">
        <b-link v-on:click="get(1)">Coffee</b-link>
      </div>
      <div id="noncof" v-bind:class="this.activePage == 2 ? 'bold' : 'normal'">
        <b-link v-on:click="get(2)">Non Coffee</b-link>
      </div>
      <div id="food" v-bind:class="this.activePage == 3 ? 'bold' : 'normal'">
        <b-link v-on:click="get(3)">Foods</b-link>
      </div>
      <div id="addon" v-bind:class="this.activePage == 4 ? 'bold' : 'normal'">
        <b-link v-on:click="get(4)">Add On</b-link>
      </div>
      <div id="addon" v-bind:class="this.sortShow == 1 ? 'bold' : 'normal'">
        <b-link v-on:click="showSort()">Sort</b-link>
      </div>
    </div>
    <div id="sort" v-if="this.sortShow === 1">
      <div>
        Sort :
        <button @click="sort('product_name asc')">By Name A-Z</button>
        <button @click="sort('product_price')">By Cheapest Price</button>
        <button @click="sort('product_created_at')">By Oldest Product</button>
      </div>
      <div>
        <button @click="sort('product_name desc')">By Name Z-A</button>
        <button @click="sort('product_price desc')">By Most Expensive</button>
        <button @click="sort('product_created_at')">By Newest Product</button>
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
        </b-col>
      </b-row>
    </b-container>
    <div id="page">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="limit"
        @change="handlePageChange"
      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductCard',
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: [],
      sortShow: 0,
      category: '',
      currentPage: 1,
      totalRows: null,
      limit: 5,
      page: 1,
      activePage: 0,
      isSorted: 0,
      sortType: '',
      bold: 'color : black;',
      normal: ' '
    }
  },
  created() {
    this.getProduct()
  },
  mounted() {},
  methods: {
    sort(param) {
      if (this.activePage) {
        axios
          .get(
            `http://${process.env.VUE_APP_URL}/product?page=${this.page}&limit=${this.limit}&category=${this.activePage}&sort=${param}`
          )
          .then(response => {
            console.log(response)
            this.products = response.data.data
            this.totalRows = response.data.pagination.totalData
            this.isSorted = 1
            this.sortType = param
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        axios
          .get(
            `http://${process.env.VUE_APP_URL}/product?page=${this.page}&limit=${this.limit}&sort=${param}`
          )
          .then(response => {
            console.log(response)

            this.products = response.data.data
            this.totalRows = response.data.pagination.totalData
            this.isSorted = 1
            this.sortType = param
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    detailProduct(product_id) {
      this.$router.push({ name: 'ProductDetail', params: { id: product_id } })
    },
    showSort() {
      this.sortShow === 0 ? (this.sortShow = 1) : (this.sortShow = 0)
    },
    get(id) {
      this.page = 1
      this.currentPage = 1
      this.getProduct(id)
    },
    getProduct(id) {
      if (id) {
        axios
          .get(
            `http://${process.env.VUE_APP_URL}/product?page=${this.page}&limit=${this.limit}&category=${id}`
          )
          .then(response => {
            console.log(response)
            this.totalRows = response.data.pagination.totalData
            this.products = response.data.data
            this.activePage = id
            this.isSorted = 0
            this.sortType = null
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        axios
          .get(
            `http://${process.env.VUE_APP_URL}/product?page=${this.page}&limit=${this.limit}`
          )
          .then(response => {
            this.totalRows = response.data.pagination.totalData
            this.products = response.data.data
            this.activePage = 0
            this.isSorted = 0
            this.sortType = null
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    handlePageChange(numberPage) {
      this.page = numberPage
      if (this.isSorted === 0) {
        if (this.activePage) {
          this.getProduct(this.activePage)
        } else {
          this.getProduct()
        }
      } else if (this.isSorted === 1) {
        this.sort(this.sortType)
      }
    }
  }
}
</script>

<style scoped>
#sort {
  margin-left: 13%;
  margin-bottom: 20px;
}
#sort button {
  font-family: 'Rubik', sans-serif;
  background-color: white;
  border-top: none;
  margin: 10px;
}
#sort button:hover {
  background-color: wheat;
}
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
#productCard:hover {
  background-color: wheat;
  border: black 2px solid;
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
.normal a:link,
.normal a:visited {
  color: #9f9f9f;
  text-decoration: none;
}
.bold a:link,
.bold a:visited {
  color: black;
  font-weight: bold;
  text-shadow: 2px 2px lightgray;
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
#page {
  margin-top: 30px;
}
</style>

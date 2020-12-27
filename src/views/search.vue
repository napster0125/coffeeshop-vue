<template>
  <div>
    <Navbar />
    <div class="flex-container">
      <div class="search">
        <input
          v-model="name"
          placeholder="Search Product . ."
          v-on:keyup.enter="get(name)"
        />
        <button @click="get(name)">Search</button>
        <div id="addon" v-bind:class="this.sortShow == 1 ? 'bold' : 'normal'">
          <b-link
            v-bind:class="this.sortShow == 1 ? 'bold' : 'normal'"
            v-on:click="showSort()"
            >Sort</b-link
          >
        </div>
        <div id="sort" v-if="this.sortShow === 1">
          <div>
            Sort :
            <button @click="sort('product_name asc')">By Name A-Z</button>
            <button @click="sort('product_price')">By Cheapest Price</button>
            <button @click="sort('product_created_at')">
              By Oldest Product
            </button>
          </div>
          <div>
            <button @click="sort('product_name desc')">By Name Z-A</button>
            <button @click="sort('product_price desc')">
              By Most Expensive
            </button>
            <button @click="sort('product_created_at desc')">
              By Newest Product
            </button>
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
        <div
          v-if="this.searchValue === 1 && this.products.length === 0"
          id="notFound"
        >
          Product Not Found
        </div>
        <div id="page" v-if="this.products.length > 0">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="limit"
            @change="handlePageChange"
          >
          </b-pagination>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer'
import axios from 'axios'
export default {
  name: 'Search',
  components: {
    Navbar,
    Footer
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: [],
      searchValue: 0,
      currentPage: 1,
      totalRows: null,
      limit: 4,
      page: 1,
      sortShow: 0,
      isSorted: 0,
      sortType: '',
      name
    }
  },
  mounted() {
    console.log(process.env.VUE_APP_URL)
  },
  methods: {
    detailProduct(product_id) {
      this.$router.push({ name: 'ProductDetail', params: { id: product_id } })
    },
    showSort() {
      this.sortShow === 0 ? (this.sortShow = 1) : (this.sortShow = 0)
    },
    sort(param) {
      axios
        .get(
          `http://${process.env.VUE_APP_URL}/product?page=${this.page}&limit=${this.limit}&productName=${this.name}&sort=${param}`
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
    },
    get(name) {
      this.page = 1
      this.currentPage = 1
      this.getProduct(name)
    },
    getProduct(name) {
      this.products = []
      this.searchValue = 1
      axios
        .get(
          `http://${process.env.VUE_APP_URL}/product?page=${this.page}&limit=${this.limit}&productName=${name}`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.products = response.data.data
          this.isSorted = 0
          this.sortType = null
        })
        .catch(error => {
          console.log(error)
        })
    },
    handlePageChange(numberPage) {
      this.page = numberPage
      this.currentPage = numberPage
      if (this.isSorted === 0) {
        this.getProduct(this.name)
      } else if (this.isSorted === 1) {
        this.sort(this.sortType)
      }
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  background-image: url('../assets/bg1.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.search {
  text-align: center;
  width: 100%;
  margin-top: 30px;
  font-family: 'Rubik', sans-serif;
}
.search input {
  border-radius: 10px;
  font-size: 30px;
}
.search button {
  margin-left: 10px;
  border-radius: 10px;
  background-color: wheat;
  font-size: 30px;
}
#notFound {
  margin-top: 30px;
  background-color: white;
  font-size: 30px;
}
#sort {
  margin-bottom: 20px;
}
#sort div button {
  font-size: 20px;
  margin: 2px;
}
#productCard {
  width: 140px;
  height: 200px;
  margin-left: 50px;
  margin-top: 60px;
  text-align: center;
  border-radius: 15px;
  color: black;
  background-color: white;
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
  color: white;
  text-decoration: none;
}
.bold a:link,
.bold a:visited {
  color: white;
  font-weight: bold;
}
#top a:hover {
  color: white;
  text-shadow: 2px 2px lightgray;
}
#addon {
  background-color: black;
  border: 2px solid white;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}

#addon:hover {
  font-weight: bold;
  border-bottom: 3px solid black;
}
#page {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  margin-top: 30px;
}
</style>

<template>
  <!-- <div class="productDetail">
    <h1>This is an Detail page</h1>
    <p id="name">{{ products[0].product_name }}</p>
    <p id="price">IDR {{ products[0].product_price }}</p>
    <p id="desc">Description : {{ products[0].product_desc }}</p>
  </div> -->
  <div class="main flex-container">
    <b-container fluid>
      <b-row>
        <div class="kiri">
          <div class="top">
            <b>> {{ products[0].product_name }}</b>
          </div>
          <div class="mid">
            <img src="@/assets/cold.png" id="cold" alt="" />
            <a href="url">
              <img src="@/assets/chat.png" id="chat" alt="" />
            </a>
          </div>
          <div class="bot">
            Delivery only on <b>Monday to friday</b> at <b>1 - 7 pm </b>
          </div>
        </div>
        <div class="kanan">
          <div class="line1">
            <!-- <div class="flex-container"> -->
            <div class="order">
              <img src="@/assets/ceklis.png" />
              <p>Order</p>
            </div>
            <div class="garis1"></div>
            <div class="checkout">
              <img src="@/assets/ceklis.png" />
              <p>Checkout</p>
            </div>
            <div class="garis2"></div>
            <div class="payment">
              <img src="@/assets/circle.png" />
              <p>Payment</p>
            </div>
            <!-- </div> -->
          </div>
          <div class="line2">
            <p class="atas">{{ products[0].product_name }}</p>
            <p class="bawah">IDR {{ products[0].product_price }}</p>
          </div>
          <div class="line3">
            {{ products[0].product_desc }}
          </div>
          <div class="line4">
            <form>
              <div class="form-group">
                <select
                  class="custom-select"
                  v-show="products[0].size_id === 1"
                >
                  <option selected>Select Size</option>
                  <option value="1">R</option>
                  <option value="2">L</option>
                  <option value="3">XL</option>
                </select>
                <select
                  class="custom-select"
                  v-show="products[0].size_id === 2"
                >
                  <option selected>Select Size</option>
                  <option value="1">300 Grams</option>
                  <option value="2">400 Grams</option>
                  <option value="3">500 Grams</option>
                </select>
              </div>
            </form>
            <form>
              <div class="form-group">
                <select class="custom-select">
                  <option selected>Select Delivery Method</option>
                  <option
                    value="1"
                    v-show="
                      products[0].deliver_id == 7 ||
                        products[0].deliver_id == 1 ||
                        products[0].deliver_id == 4 ||
                        products[0].deliver_id == 5
                    "
                    >Home Delivery</option
                  >
                  <option
                    value="2"
                    v-show="
                      products[0].deliver_id == 7 ||
                        products[0].deliver_id == 2 ||
                        products[0].deliver_id == 6 ||
                        products[0].deliver_id == 4
                    "
                    >Dine In</option
                  >
                  <option
                    value="3"
                    v-show="
                      products[0].deliver_id == 7 ||
                        products[0].deliver_id == 3 ||
                        products[0].deliver_id == 6 ||
                        products[0].deliver_id == 5
                    "
                    >Take Away</option
                  >
                </select>
              </div>
            </form>
            <form>
              <div class="form-row">
                <div class="col-6">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                  />
                </div>
                <div class="col-6">
                  <button id="chart" class="btn btn-primary" type="submit">
                    Add To Cart
                  </button>
                </div>
              </div>
              <form>
                <div class="bot">
                  <a class="btn btn-primary" href="cart.html" role="button"
                    >Checkout</a
                  >
                </div>
              </form>
            </form>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      product_id: '',
      products: [{}]
    }
  },
  created() {
    this.product_id = this.$route.params.id
    this.getProductById()
  },
  methods: {
    getProductById() {
      axios
        .get(`http://localhost:3000/product?productId=${this.product_id}`)
        .then(response => {
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
/* main.flex-container {
  display: flex;
  margin-top: 150px;
} */
/* .kiri {
  
} */
.kiri .top {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  padding: 7%;
}
.kiri .mid img#cold {
  width: 70%;
  height: auto;
  margin-left: 10%;
}
.mid img#chat {
  position: relative;
  right: 12%;
  background-color: white;
  border-radius: 50%;
  border: orange 4px solid;
  padding: 2px;
}
.kiri .bot {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  padding: 7%;
  letter-spacing: 0.02em;
  width: 80%;
}
.main.flex-container .kanan {
  flex: 4;
  margin-left: 5%;
  margin-bottom: 20px;
}
.kanan .line1 {
  display: flex;
  justify-content: start;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
}
.line1 img {
  background-color: #6a4029;
  border: #6a4029 solid 6px;
  border-radius: 100%;
  width: 40px;
}
.line1 .payment {
  font-weight: bold;
}
.line1 .garis1 {
  position: relative;
  border-top: gray solid 3px;
  width: 120px;
  top: 20px;
  margin-left: 10px;
}
.line1 .garis2 {
  position: relative;
  border-top: gray solid 3px;
  width: 120px;
  top: 20px;
}
.line2 {
  display: flex;
  flex-direction: column;
}
.line2 .atas {
  font-family: 'Poppins', sans-serif;
  font-weight: bolder;
  font-size: 65px;
  line-height: 97px;
}
.line2 .bawah {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 97px;
}
.line3 {
  margin-left: 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 138.84%;
  letter-spacing: 0.03em;
  margin-right: 10%;
}
.line4 {
  width: 50%;
  margin-top: 40px;
}
.line4 form {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #9f9f9f;
}
.line4 form input {
  height: 80%;
}
.line4 form button {
  width: 100%;
  color: black;
  background-color: #ffba33;
  border-color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  height: 80%;
  padding-bottom: 20px;
  text-align: center;
}
.line4 form .bot a,
.line4 form .bot a:visited {
  width: 100%;
  color: white;
  background-color: #6a4029;
  border-color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  height: 80%;
  text-align: center;
}
.line4 form .bot a:hover {
  color: black;
}
@media (max-width: 500px) {
  .line1 .garis1 {
    width: 60px;
    top: 20px;
    margin-left: 10px;
  }
  .line1 .garis2 {
    position: relative;
    border-top: gray solid 3px;
    width: 60px;
    top: 20px;
  }
  .line4 form button {
    font-size: 15px;
  }
  .line4 form {
    font-size: 15px;
  }
  .line2 .atas {
    font-size: 45px;
    line-height: 57px;
  }
  .line2 .bawah {
    font-size: 30px;
    line-height: 47px;
  }
}
</style>

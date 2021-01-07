<template>
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
                  v-model="form.size_choice"
                >
                  <option value="0" disabled selected>Select Size</option>
                  <option value="1">R</option>
                  <option value="2">L</option>
                  <option value="3">XL</option>
                </select>
                <select
                  class="custom-select"
                  v-show="products[0].size_id === 2"
                  v-model="form.size_choice"
                >
                  <option value="0" disabled selected>Select Size</option>
                  <option value="4">250 Grams</option>
                  <option value="5">300 Grams</option>
                  <option value="6">500 Grams</option>
                </select>
              </div>
            </form>
            <form>
              <div class="form-group">
                <select class="custom-select" v-model="form.deliver_id">
                  <option value="0" disabled selected
                    >Select Delivery Method</option
                  >
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
                    min="1"
                    max="100"
                    v-model="form.quantity"
                    class="form-control"
                    placeholder="Quantity"
                  />
                </div>
                <div class="col-6">
                  <button
                    id="chart"
                    @click="addToCart(products[0])"
                    type="button"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <form>
                <div class="bot">
                  <a class="btn btn-primary" href="/cart" role="button"
                    >Checkout</a
                  >
                </div>
              </form>
              <div v-if="role === 1" class="form-row" id="updel">
                <div class="col-6">
                  <button
                    id="update"
                    type="button"
                    @click="updateProduct(products[0].product_id)"
                  >
                    Update
                  </button>
                </div>
                <div class="col-6">
                  <button id="delete" type="button" @click="showModal">
                    Delete
                  </button>
                  <b-modal
                    ref="my-modal"
                    hide-footer
                    title="Delete Confirmation"
                  >
                    <div class="d-block text-center">
                      <h3>Are you sure to delete this product?</h3>
                    </div>
                    <b-button
                      class="mt-3"
                      variant="outline-danger"
                      block
                      @click="deleteProduct()"
                      >Delete Product</b-button
                    >
                    <b-button
                      class="mt-2"
                      variant="outline-warning"
                      block
                      @click="hideModal"
                      >Cancel</b-button
                    >
                  </b-modal>
                </div>
              </div>
            </form>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      role: 1,
      product_id: '',
      cart: [],
      form: {
        size_choice: 0,
        deliver_id: 0,
        quantity: null
      }
    }
  },
  created() {
    this.product_id = this.$route.params.id
    this.getProductById()
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
  },
  computed: {
    ...mapGetters({
      products: 'getDataProductById'
    })
  },
  methods: {
    ...mapActions(['getProductsById', 'deletesProduct']),
    ...mapGetters(['getDataProductById']),
    getProductById() {
      this.getProductsById(this.product_id)
    },
    deleteProduct() {
      this.deletesProduct(this.product_id)
      this.$refs['my-modal'].hide()
      this.toast3()
      this.$router.push({ name: 'Product' })
    },
    updateProduct(product_id) {
      this.$router.push({ name: 'Update', params: { id: product_id } })
    },
    addToCart(data) {
      let totals = data.product_price * this.form.quantity
      if (!this.form.quantity) {
        this.toast2('b-toaster-top-full', 'Please input quantity')
      } else if (!this.form.size_choice) {
        this.toast2('b-toaster-top-full', 'Please input size choice')
      } else if (!this.form.deliver_id) {
        this.toast2('b-toaster-top-full', 'Please input delivery method')
      } else {
        const setCart = {
          product_id: data.product_id,
          product_name: data.product_name,
          product_price: data.product_price,
          product_qty: this.form.quantity,
          product_size: this.form.size_choice,
          product_deliver: this.form.deliver_id,
          product_total: totals
        }
        this.cart = [...this.cart, setCart]
        localStorage.setItem('cart', JSON.stringify(this.cart))
        console.log(this.cart)
        this.toast1('b-toaster-top-full')
      }
    },
    toast1(toaster, append = false) {
      this.$bvToast.toast('Product added to cart', {
        title: 'Success',
        toaster: toaster,
        solid: true,
        variant: 'success',
        appendToast: append
      })
    },
    toast2(toaster, msg, append = false) {
      this.$bvToast.toast(`${msg}`, {
        title: 'Warning',
        toaster: toaster,
        solid: true,
        variant: 'warning',
        appendToast: append
      })
    },
    toast3(toaster, append = false) {
      this.$bvToast.toast('Product Deleted', {
        title: 'Success deletting product',
        toaster: toaster,
        solid: true,
        variant: 'warning',
        appendToast: append
      })
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

<style scoped>
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
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
}
.line1 img {
  background-color: #6a4029;
  border: #6a4029 solid 6px;
  border-radius: 100%;
  width: 30px;
}
.line1 .payment {
  font-weight: bold;
}
.line1 .garis1 {
  position: relative;
  border-top: gray solid 3px;
  width: 100px;
  top: 20px;
  margin-left: 10px;
}
.line1 .garis2 {
  position: relative;
  border-top: gray solid 3px;
  width: 100px;
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
#updel {
  margin-top: 10px;
}
#update {
  background-color: wheat;
  border-radius: 15px;
  padding-top: 5px;
}
#delete {
  background-color: red;
  border-radius: 15px;
  padding-top: 5px;
}
#update:hover,
#delete:hover,
.line4 form button:hover {
  color: white;
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

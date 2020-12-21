<template>
  <div class="flex-container main">
    <div class="kiri">
      <div class="top">
        Checkout your item now!
      </div>
      <div class="bot">
        <div class="line1">Order Summary</div>
        <div class="line2">
          <div class="wrapper">
            <div
              class="flex-container"
              v-for="(item, index) in cart"
              :key="index"
            >
              <div class="img">
                <img src="@/assets/haz.png" />
              </div>
              <div class="det">
                <p>{{ item.product_name }}</p>
                <p>x {{ item.product_qty }}</p>
                <p v-show="item.product_size == 1">Regular</p>
                <p v-show="item.product_size == 2">Large</p>
                <p v-show="item.product_size == 3">Xtra Large</p>
                <p v-show="item.product_size == 4">250 Grams</p>
                <p v-show="item.product_size == 5">300 Grams</p>
                <p v-show="item.product_size == 6">500 Grams</p>
              </div>
              <div class="price">IDR {{ item.product_price }}</div>
            </div>
          </div>
        </div>
        <div class="line3">
          <div class="wrapper">
            <div class="kiri line3">
              <p>SUBTOTAL</p>
              <p>TAX & FEES</p>
              <p>SHIPPING</p>
            </div>
            <div class="kanan line3">
              <p>IDR {{ subtotal }}</p>
              <p>IDR {{ tax }}</p>
              <p>IDR {{ shipping }}</p>
            </div>
          </div>
        </div>
        <div class="line4">
          <div class="wrapper">
            <div class="kiri line4">
              <p>TOTAL</p>
            </div>
            <div class="kanan line4">
              <p>IDR {{ total }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kanan main">
      <div class="address">
        <div class="top">
          <div class="address">Address details</div>
          <div class="edit">edit</div>
        </div>
        <div class="bot">
          <p><b>Delivery</b> to Iskandar Street</p>
          <div class="mid">
            <p>Km 5 refinery road oppsite re public road, effurun, Jakarta</p>
          </div>
          <p>+62 81348287878</p>
        </div>
      </div>
      <div class="payment">
        <div class="top payment">
          Payment&ensp;Method
        </div>
        <div class="bot payment">
          <div class="form-check kartu">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2">
              <img src="@/assets/card.png" alt="" />
              Card
            </label>
          </div>
          <div class="form-check bank">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2">
              <img src="@/assets/bank.png" alt="" />
              Bank Account
            </label>
          </div>
          <div class="form-check cod">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value="option3"
            />
            <label class="form-check-label" for="gridRadios3">
              <img src="@/assets/delivery.png" alt="" />
              Cash On Delivery
            </label>
          </div>
        </div>
      </div>
      <div class="confirm">
        <button type="submit" class="btn btn-dark">Confirm and Pay</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      cart: [],
      subtotal: 0,
      tax: 0,
      shipping: 0,
      total: 0
    }
  },
  methods: {
    getTotal() {
      for (let x = 0; x < this.cart.length; x++) {
        this.subtotal += this.cart[x].product_price
      }
      this.tax = this.subtotal * 0.1
      this.shipping = this.subtotal * 0.05
      this.total = this.subtotal + this.tax + this.shipping
      this.subtotal = this.subtotal
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      this.tax = this.tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      this.shipping = this.shipping
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      this.total = this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return this.total
    }
  },
  created() {
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
    this.getTotal()
  }
}
</script>
<style scoped>
.flex-container.main {
  display: flex;
  flex-direction: row;
  background-image: url('../../assets/bg1.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.kiri {
  flex: 1;
  margin-bottom: 20px;
}
.det {
  text-align: center;
}
.kiri .top {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  color: white;
  text-shadow: 3px 4px black;
  padding: 5%;
  margin-left: 7%;
  width: 50%;
}
.kiri .bot {
  width: 70%;
  background-color: white;
  border-radius: 15px;
  margin-left: 12%;
}
.kiri .bot .line1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  text-align: center;
  padding-top: 10%;
  color: #362115;
}
.kiri .bot .line2 .wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  padding-bottom: 40px;
  padding-top: 20px;
  margin-left: 5%;
  border-bottom: lightgray solid 4px;
  width: 90%;
}
.kiri .bot .flex-container {
  height: 110px;
  display: flex;
  justify-content: space-between;
}
.kiri .bot .flex-container img {
  height: auto;
  width: 80%;
  border-radius: 15%;
}
.kiri .bot .flex-container div {
  font-family: Poppins;
  font-size: 17px;
}
.kiri .bot .line3 .wrapper,
.kiri .bot .line4 .wrapper {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
  padding-top: 20px;
  padding-bottom: 30px;
}
.kanan.line3,
.kanan.line4 {
  text-align: right;
}
.kiri .line3 {
  font-family: 'Poppins';
  font-size: 20px;
  line-height: 30px;
  color: #362115;
}
.kiri .line4 {
  font-family: Poppins;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  color: #362115;
}
.kanan.main {
  flex: 1;
  margin-top: 170px;
  margin-right: 10%;
  margin-bottom: 20px;
}
.kanan .address .top {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 15px;
}
.address .top .address {
  font-family: Poppins;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 0.1ch;
  color: white;
  text-shadow: 2px 2px black;
}
.address .top .edit {
  font-family: Poppins;
  font-weight: 500;
  font-size: 15px;
  color: white;
}
.address .bot {
  background-color: white;
  width: 80%;
  border-radius: 15px;
  height: 200px;
  padding-left: 5%;
  padding-right: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.59);
}
.address .bot p {
  font-family: Poppins;
  font-size: 18px;
  line-height: 30px;
  padding-top: 10px;
}
.address .bot .mid {
  border-top: gray solid 3px;
  border-bottom: gray solid 3px;
}
.address .bot .mid p {
  padding-top: 10px;
  width: 90%;
}
.top.payment {
  font-family: Poppins;
  font-weight: 550;
  font-size: 25px;
  color: white;
  text-shadow: black 2px 2px;
  margin-top: 20px;
}
.bot.payment {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  background-color: white;
  border-radius: 15px;
  width: 80%;
  padding: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.59);
}
.bot.payment div {
  margin-top: 10px;
  margin-bottom: 10px;
}
.bot.payment .form-check.cod img {
  background-color: #ffba33;
  padding: 10px;
  border-radius: 10px;
  height: 45px;
  width: 45px;
}
.bot.payment .form-check.kartu img {
  background-color: #f47b0a;
  padding: 10px;
  border-radius: 10px;
  width: 45px;
  height: 40px;
}
.bot.payment .form-check.bank img {
  background-color: #895537;
  padding: 10px;
  border-radius: 10px;
  width: 45px;
  height: 40px;
}
.confirm {
  margin-top: 50px;
  width: 80%;
}
.confirm button {
  width: 100%;
  height: 70px;
  border-radius: 15px;
  background-color: #6a4029;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.59);
  font-family: Poppins;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

@media (max-width: 1150px) {
  .kiri .top {
    font-size: 30px;
    width: 70%;
  }
  .kiri .bot .line1 {
    font-size: 25px;
  }
  .kiri .bot .flex-container div {
    font-family: Poppins;
    font-size: 12px;
    line-height: 15px;
    margin-right: 7px;
  }
  .kiri .line3 {
    font-size: 15px;
  }
  .kiri .line4 {
    font-size: 19px;
  }
  .kanan.main {
    flex: 1;
    margin-top: 170px;
    margin-right: 10%;
    padding-left: 5%;
  }
  .address .top .address {
    font-size: 18px;
  }
  .address .top .edit {
    font-size: 10px;
  }
  .address .bot {
    height: 250px;
  }
  .address .bot p {
    font-size: 12px;
  }
  .top.payment {
    font-size: 18px;
  }
  .bot.payment {
    font-size: 13px;
  }
  .bot.payment .form-check.cod img {
    padding: 5px;
    height: 30px;
    width: 30px;
  }
  .bot.payment .form-check.kartu img {
    padding: 5px;
    width: 32px;
    height: 30px;
  }
  .bot.payment .form-check.bank img {
    padding: 5px;
    width: 30px;
    height: 30px;
  }
  .confirm button {
    font-size: 15px;
  }
}

@media (max-width: 800px) {
  .flex-container.main {
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
  }
  .kanan.main {
    margin-top: 20px;
  }
}
</style>

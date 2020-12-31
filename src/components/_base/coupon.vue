<template>
  <div class="main-promo">
    <div class="line1">Promo For You</div>
    <div class="line2">
      <li>Coupons will be updated every weeks.</li>
      <li>Check them out!</li>
    </div>
    <div class="line3">
      <div class="flex-container">
        <div class="rec3"></div>
        <div class="rec2"></div>
        <div class="rec1">
          <div class="top">
            <div class="one"><img src="@/assets/img29.png" /></div>
            <div class="two">
              <div class="atas">
                {{ couponData[couponArr].coupon_name }}
              </div>
              <div class="bawah">
                Discounted : IDR {{ couponData[couponArr].coupon_price }}
              </div>
            </div>
            <div class="three">
              {{ couponData[couponArr].coupon_desc }}
            </div>
            <br />
          </div>
          <div class="bottom">
            <div class="one">
              Coupon Code
            </div>
            <div class="two">
              {{ couponData[couponArr].coupon_code }}
            </div>
            <div class="three">
              Valid untill {{ couponData[couponArr].end_date }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="changeCoupon">
      <button v-if="this.couponArr > 0" @click="prevCoupon()">
        Prev Coupon
      </button>
      <button
        v-if="this.couponArr < this.couponData.length - 1"
        @click="nextCoupon()"
      >
        Next Coupon
      </button>
    </div>
    <div>
      <button type="button" class="line4">Apply Coupon</button>
    </div>
    <div class="line5">
      Terms and Condition
      <li>1. You can only apply 1 coupon per day</li>
      <li>2. It only for dine in</li>
      <li>3. Buy 1 get 1 only for new user</li>
      <li>4. Should make member card to apply coupon</li>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'coupon',
  data() {
    return {
      couponArr: 0,
      couponData: []
    }
  },
  //   computed: {
  //     nextCoupon() {
  //       return (couponArr = 1)
  //     }
  //   },
  created() {
    this.getCoupon()
  },
  methods: {
    prevCoupon() {
      this.couponArr -= 1
    },
    nextCoupon() {
      this.couponArr += 1
    },
    getCoupon() {
      axios
        .get(`http://${process.env.VUE_APP_URL}/coupon`)
        .then(response => {
          this.couponData = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.main-promo {
  border-right: #f8f8f8 solid 5px;
  /* height: 1005px; */
  background-color: white;
}

#changeCoupon button {
  position: relative;
  width: 284px;
  height: 64px;
  margin-left: 10%;
  background: #ffcb65;
  border-radius: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 5px;
}
.line1 {
  color: #6a4029;
  margin-top: 30px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
}
.line2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  padding: 20px;
  text-align: center;
}
.line2 li {
  list-style-type: none;
}
.line3 .flex-container {
  background-color: white;
  height: 500px;
  display: flex;
}
.rec1 {
  position: relative;
  height: 472px;
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffcb65;
  border-radius: 15px;
}
.rec1 .top {
  height: 320px;
  border-bottom: black dashed 2px;
}
.top .one {
  margin-top: 50px;
  margin-left: 75px;
  border-radius: 50%;
}
.top .two {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin-top: 20px;
}
.top .three {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}
.rec1 .bottom {
  height: 150px;
}
.bottom .one {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
}
.bottom .two {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  text-align: center;
}
.bottom .three {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 101.34%;
  text-align: center;
}
.rec2 {
  position: absolute;
  width: 284px;
  height: 400px;
  background-color: black;
  margin-top: 40px;
  margin-left: 10%;
  margin-right: 90%;
  border-radius: 15px;
}
.rec3 {
  position: absolute;
  background-color: #895537;
  width: 284px;
  height: 338px;
  margin-top: 70px;
  left: 40px;
  border-radius: 15px;
}
.line4 {
  position: relative;
  width: 284px;
  height: 64px;
  margin-left: 10%;
  background: #6a4029;
  border-radius: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  color: white;
}
.line5 {
  margin-top: 50px;
  margin-left: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding-bottom: 30px;
}
.line5 li {
  list-style-type: none;
  font-weight: normal;
  margin-top: 10px;
}
</style>

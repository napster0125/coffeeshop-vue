<template>
  <div id="main">
    <b-container fluid>
      <b-row>
        <b-col xl="4" md="6" id="left">
          <div id="circle"><img src="@/assets/photoGrey.png" /></div>
          <div id="top">
            <b-button block size="lg" variant="dark">Take A Picture</b-button>
            <br />
            <b-button block size="lg" variant="warning"
              >Choose from Gallery</b-button
            >
            <div id="delivery">
              <b>Expire Date : </b><br />
              <br />
              <div>
                <label for="example-datepicker">Start Date </label>
                <b-form-datepicker
                  id="date1"
                  v-model="form.start_date"
                  class="mb-2"
                ></b-form-datepicker>
              </div>
              <br />
              <div>
                <label for="example-datepicker">End Date </label>
                <b-form-datepicker
                  id="date2"
                  v-model="form.end_date"
                  class="mb-2"
                ></b-form-datepicker>
              </div>
            </div>
            <br />
            <br />
            <div id="stock">
              <b>Input Coupon Code : </b><br />
              <br />
              <input
                type="text"
                v-model="form.coupon_code"
                class="form-control"
                placeholder="Coupon Code"
              />
              {{ form }}
            </div>
          </div>
        </b-col>
        <b-col xl="8" md="6" id="right">
          <div id="input1">
            <div><b>Name : </b></div>
            <br />
            <b-form-input
              type="text"
              v-model="form.coupon_name"
              placeholder="Type Coupon name max. 50 characters"
            ></b-form-input>
            <br />
            <div><b>Price :</b></div>
            <br />
            <b-form-input
              type="number"
              min="0"
              v-model="form.coupon_price"
              placeholder="Type the price"
            ></b-form-input>
            <br />
            <div><b>Description :</b></div>
            <br />
            <b-form-input
              type="text"
              v-model="form.coupon_desc"
              placeholder="Describe the coupon"
            ></b-form-input>
          </div>
          <br />
          <div id="input3">
            <b> Input Product Size : </b>
            <p>Click size you want to use for this product</p>
            <button
              v-on:click="form.size_id = 1"
              v-bind:class="this.form.size_id == 1 ? 'yellow' : 'normal'"
            >
              R
            </button>
            <button
              v-on:click="form.size_id = 1"
              v-bind:class="this.form.size_id == 1 ? 'yellow' : 'normal'"
            >
              L
            </button>
            <button
              v-on:click="form.size_id = 1"
              v-bind:class="this.form.size_id == 1 ? 'yellow' : 'normal'"
            >
              XL
            </button>
            <button
              v-on:click="form.size_id = 2"
              v-bind:class="this.form.size_id == 2 ? 'yellow' : 'normal'"
            >
              250 gr
            </button>
            <button
              v-on:click="form.size_id = 2"
              v-bind:class="this.form.size_id == 2 ? 'yellow' : 'normal'"
            >
              300 gr
            </button>
            <button
              v-on:click="form.size_id = 2"
              v-bind:class="this.form.size_id == 2 ? 'yellow' : 'normal'"
            >
              500gr
            </button>
          </div>
          <br />
          <div id="input4">
            <b> Input Delivery Method : </b>
            <p>Click methods you want to use for this product</p>
            <button
              v-on:click="deliver(1)"
              v-bind:class="this.form.home == 1 ? 'yellow' : 'normal'"
            >
              Home Delivery
            </button>
            <button
              v-on:click="deliver(2)"
              v-bind:class="this.form.dine == 1 ? 'yellow' : 'normal'"
            >
              Dine In
            </button>
            <button
              v-on:click="deliver(3)"
              v-bind:class="this.form.take == 1 ? 'yellow' : 'normal'"
            >
              Take Away
            </button>
          </div>
          <div id="input5">
            <button id="buttonSave">Save Product</button> <br />
            <br />
            <router-link to="/">
              <button id="buttonCancel">Cancel</button>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        coupon_name: '',
        start_date: null,
        end_date: null,
        coupon_price: null,
        coupon_code: null,
        coupon_desc: '',
        size_id: 1,
        deliver_id: 0,
        home: 0,
        dine: 0,
        take: 0
      }
    }
  },
  methods: {
    deliver(param) {
      if (param == 1) {
        if (this.form.home == 0) {
          this.form.home = 1
        } else {
          this.form.home = 0
        }
      } else if (param == 2) {
        if (this.form.dine == 0) {
          this.form.dine = 1
        } else {
          this.form.dine = 0
        }
      } else if (param == 3) {
        if (this.form.take == 0) {
          this.form.take = 1
        } else {
          this.form.take = 0
        }
      } else {
        console.log(param)
      }
      this.calculateDeliver()
    },
    calculateDeliver() {
      if (this.form.take && this.form.dine && this.form.home) {
        this.form.deliver_id = 7
      } else if (this.form.take && this.form.dine) {
        this.form.deliver_id = 6
      } else if (this.form.take && this.form.home) {
        this.form.deliver_id = 5
      } else if (this.form.home && this.form.dine) {
        this.form.deliver_id = 4
      } else if (this.form.take) {
        this.form.deliver_id = 3
      } else if (this.form.dine) {
        this.form.deliver_id = 2
      } else if (this.form.home) {
        this.form.deliver_id = 1
      } else {
        this.form.deliver_id = 0
      }
    }
  }
}
</script>

<style scoped>
#left {
  margin-bottom: 30px;
}
#main {
  font-family: 'Rubik';
}
#right {
  width: 80%;
}
#input1 {
  width: 90%;
  margin-top: 35px;
}
#top {
  width: 250px;
  margin-left: auto;
  margin-right: auto;
}
#top b-button {
  height: 50px;
  background-color: red;
}
#circle {
  background-color: rgba(186, 186, 186, 0.35);
  border-radius: 100%;
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 20px;
}
#circle img {
  width: 100px;
  margin-left: 50px;
  margin-top: 50px;
}
#delivery {
  margin-top: 40px;
}
option {
  color: red;
}
#input3 p {
  color: grey;
}
#input3 button {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
#input4 p {
  color: grey;
}
#input4 button {
  border-radius: 15px;
  width: 150px;
  height: 70px;
  margin-left: 20px;
}
#input5 {
  margin-top: 30px;
  margin-bottom: 20px;
}
#input5 button {
  width: 90%;
  height: 100px;
  border-radius: 20px;
}
#input5 #buttonSave {
  background-color: #6a4029;
  color: white;
  font-weight: bold;
  font-size: 25px;
}
#input5 #buttonCancel {
  font-weight: bold;
  font-size: 25px;
}
.yellow {
  background-color: #ffba33;
}
</style>

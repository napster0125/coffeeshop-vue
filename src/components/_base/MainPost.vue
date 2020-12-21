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
              Delivery Hour : <br />
              <br />
              <select class="custom-select" v-model="form.start_id">
                <option value="0" disabled selected>Select Start Hour</option>
                <option value="1">08:00</option>
                <option value="2">10:00</option>
                <option value="3">12:00</option>
              </select>
              <br />
              <br />
              <select class="custom-select" v-model="form.end_id">
                <option value="0" disabled selected>Select End Hour</option>
                <option value="1">13:00</option>
                <option value="2">18:00</option>
                <option value="3">21:00</option>
              </select>
            </div>
            <br />
            <div id="delivery">
              Category : <br />
              <br />
              <select class="custom-select" v-model="form.category_id">
                <option value="0" disabled selected>Select Category</option>
                <option value="1">Coffee</option>
                <option value="2">Non Coffee</option>
                <option value="3">Foods</option>
                <option value="4">Add On</option>
              </select>
            </div>
            <br />
            <br />
            <div id="stock">
              Input Stock : <br />
              <br />
              <input
                type="number"
                min="1"
                max="100"
                v-model="form.product_stock"
                class="form-control"
                placeholder="Input Stock"
              />
              {{ form }}
            </div>
          </div>
        </b-col>
        <b-col xl="8" md="6" id="right">
          <div id="input1">
            <div>Name :</div>
            <br />
            <b-form-input
              type="text"
              v-model="form.product_name"
              placeholder="Type product name max. 50 characters"
            ></b-form-input>
            <br />
            <div>Price :</div>
            <br />
            <b-form-input
              type="number"
              min="0"
              v-model="form.product_price"
              placeholder="Type the price"
            ></b-form-input>
            <br />
            <div>Description :</div>
            <br />
            <b-form-input
              type="text"
              v-model="form.product_desc"
              placeholder="Describe your product min. 150 characters"
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
              v-bind:class="this.home == 1 ? 'yellow' : 'normal'"
            >
              Home Delivery
            </button>
            <button
              v-on:click="deliver(2)"
              v-bind:class="this.dine == 1 ? 'yellow' : 'normal'"
            >
              Dine In
            </button>
            <button
              v-on:click="deliver(3)"
              v-bind:class="this.take == 1 ? 'yellow' : 'normal'"
            >
              Take Away
            </button>
          </div>
          <div id="input5">
            <button type="submit" id="buttonSave" @click="postProduct()">
              Save Product
            </button>
            <br />
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
import axios from 'axios'
export default {
  data() {
    return {
      home: 0,
      dine: 0,
      take: 0,
      form: {
        product_name: '',
        category_id: 0,
        start_id: 0,
        end_id: 0,
        product_price: null,
        product_stock: null,
        product_desc: '',
        size_id: 1,
        deliver_id: 0,
        fav: 0
      }
    }
  },
  methods: {
    postProduct() {
      axios
        .post(`http://${process.env.VUE_APP_URL}/product`, this.form)
        .then(response => {
          console.log(response)
          alert('Success Post new Product')
        })
        .catch(error => {
          console.log(error)
        })
    },
    deliver(param) {
      if (param == 1) {
        if (this.home == 0) {
          this.home = 1
        } else {
          this.home = 0
        }
      } else if (param == 2) {
        if (this.dine == 0) {
          this.dine = 1
        } else {
          this.dine = 0
        }
      } else if (param == 3) {
        if (this.take == 0) {
          this.take = 1
        } else {
          this.take = 0
        }
      } else {
        console.log(param)
      }
      this.calculateDeliver()
    },
    calculateDeliver() {
      if (this.take && this.dine && this.home) {
        this.form.deliver_id = 7
      } else if (this.take && this.dine) {
        this.form.deliver_id = 6
      } else if (this.take && this.home) {
        this.form.deliver_id = 5
      } else if (this.home && this.dine) {
        this.form.deliver_id = 4
      } else if (this.take) {
        this.form.deliver_id = 3
      } else if (this.dine) {
        this.form.deliver_id = 2
      } else if (this.home) {
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

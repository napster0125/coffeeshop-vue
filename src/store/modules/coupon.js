import axios from 'axios'

export default {
  state: {
    couponData: [{}]
  },
  mutations: {
    setCoupon(state, payload) {
      state.couponData = payload
    }
  },
  actions: {
    getCoupons(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/coupon`)
          .then(response => {
            context.commit('setCoupon', response.data.data)
            console.log(response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteCoupons(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://${process.env.VUE_APP_URL}/coupon?id=${context.state.couponData[payload].coupon_id}`
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getDataCoupon(state) {
      return state.couponData
    }
  }
}

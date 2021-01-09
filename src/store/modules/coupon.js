import axios from 'axios'

export default {
  state: {
    couponData: [{}],
    couponById: [{}],
    formIdCoupon: {}
  },
  mutations: {
    setCoupon(state, payload) {
      state.couponData = payload
    },
    setCouponById(state, payload) {
      state.CouponById = payload.data
      state.formIdCoupon = payload.data[0]
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
    getCouponsById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/coupon/${payload}`)
          .then(response => {
            console.log(response)
            resolve(response)
            context.commit('setCouponById', response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    uploadCoupon(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const {
          coupon_name,
          start_date,
          end_date,
          coupon_price,
          coupon_code,
          coupon_desc,
          coupon_discount,
          coupon_image,
          size_id,
          deliver_id
        } = payload
        const data = new FormData()
        data.append('coupon_name', coupon_name)
        data.append('start_date', start_date)
        data.append('end_date', end_date)
        data.append('coupon_price', coupon_price)
        data.append('coupon_code', coupon_code)
        data.append('coupon_desc', coupon_desc)
        data.append('coupon_discount', coupon_discount)
        data.append('coupon_image', coupon_image)
        data.append('deliver_id', deliver_id)
        data.append('size_id', size_id)
        axios
          .post(`http://${process.env.VUE_APP_URL}/coupon`, data)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    updateCoupons(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const {
          coupon_name,
          start_date,
          end_date,
          coupon_price,
          coupon_code,
          coupon_desc,
          coupon_discount,
          coupon_image,
          size_id,
          deliver_id
        } = payload.form
        const data = new FormData()
        data.append('coupon_name', coupon_name)
        data.append('start_date', start_date)
        data.append('end_date', end_date)
        data.append('coupon_price', coupon_price)
        data.append('coupon_code', coupon_code)
        data.append('coupon_desc', coupon_desc)
        data.append('coupon_discount', coupon_discount)
        data.append('coupon_image', coupon_image)
        data.append('deliver_id', deliver_id)
        data.append('size_id', size_id)
        axios
          .patch(
            `http://${process.env.VUE_APP_URL}/coupon?id=${payload.id}`,
            data
          )
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
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
    },
    getDataCouponById(state) {
      return state.couponById
    },
    getFormIdCoupon(state) {
      return state.formIdCoupon
    }
  }
}

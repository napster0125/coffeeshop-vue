import axios from 'axios'

export default {
  state: {
    limit: 6,
    page: 1,
    products: [],
    productsById: [{}],
    totalRows: null,
    formId: {}
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    setProductById(state, payload) {
      state.productsById = payload.data
      state.formId = payload.data[0]
    },
    changePage(state, payload) {
      state.page = payload
    },
    resetPage(state) {
      state.page = 1
    },
    resetProduct(state) {
      state.products = []
    }
  },
  actions: {
    getProducts(context, payload) {
      return new Promise((resolve, reject) => {
        if (payload) {
          if (payload.category) {
            axios
              .get(
                `http://${process.env.VUE_APP_URL}/product?page=${context.state.page}&limit=${context.state.limit}&category=${payload.category}`
              )
              .then(response => {
                console.log(response)
                resolve(response)
                context.commit('setProduct', response.data)
              })
              .catch(error => {
                console.log(error)
                reject(error)
              })
          } else if (payload.name) {
            axios
              .get(
                `http://${process.env.VUE_APP_URL}/product?page=${context.state.page}&limit=${context.state.limit}&productName=${payload.name}`
              )
              .then(response => {
                console.log(response)
                context.commit('setProduct', response.data)
              })
              .catch(error => {
                console.log(error)
              })
          }
        } else {
          axios
            .get(
              `http://${process.env.VUE_APP_URL}/product?fav=true&page=${context.state.page}&limit=${context.state.limit}`
            )
            .then(response => {
              console.log(response)
              resolve(response)
              context.commit('setProduct', response.data)
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        }
      })
    },
    getProductsSort(context, payload) {
      return new Promise((resolve, reject) => {
        if (payload.category) {
          axios
            .get(
              `http://${process.env.VUE_APP_URL}/product?page=${context.state.page}&limit=${context.state.limit}&category=${payload.category}&sort=${payload.sort}`
            )
            .then(response => {
              resolve(response)
              context.commit('setProduct', response.data)
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        } else if (payload.name) {
          axios
            .get(
              `http://${process.env.VUE_APP_URL}/product?page=${context.state.page}&limit=${context.state.limit}&productName=${payload.name}&sort=${payload.sort}`
            )
            .then(response => {
              resolve(response)
              context.commit('setProduct', response.data)
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        } else {
          axios
            .get(
              `http://${process.env.VUE_APP_URL}/product?fav=true&page=${context.state.page}&limit=${context.state.limit}&sort=${payload.sort}`
            )
            .then(response => {
              resolve(response)
              context.commit('setProduct', response.data)
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        }
      })
    },
    getProductsById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/product/${payload}`)
          .then(response => {
            console.log(response)
            resolve(response)
            context.commit('setProductById', response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    uploadProduct(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const {
          product_name,
          category_id,
          start_id,
          end_id,
          product_price,
          product_stock,
          product_desc,
          product_image,
          deliver_id,
          size_id,
          fav
        } = payload
        const data = new FormData()
        data.append('product_name', product_name)
        data.append('category_id', category_id)
        data.append('start_id', start_id)
        data.append('end_id', end_id)
        data.append('product_price', product_price)
        data.append('product_stock', product_stock)
        data.append('product_desc', product_desc)
        data.append('product_image', product_image)
        data.append('deliver_id', deliver_id)
        data.append('size_id', size_id)
        data.append('fav', fav)

        axios
          .post(`http://${process.env.VUE_APP_URL}/product`, data)
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
    updateProduct(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const {
          product_name,
          category_id,
          start_id,
          end_id,
          product_price,
          product_stock,
          product_desc,
          product_image,
          deliver_id,
          size_id,
          fav
        } = payload.form
        const data = new FormData()
        data.append('product_name', product_name)
        data.append('category_id', category_id)
        data.append('start_id', start_id)
        data.append('end_id', end_id)
        data.append('product_price', product_price)
        data.append('product_stock', product_stock)
        data.append('product_desc', product_desc)
        data.append('product_image', product_image)
        data.append('deliver_id', deliver_id)
        data.append('size_id', size_id)
        data.append('fav', fav)
        axios
          .patch(
            `http://${process.env.VUE_APP_URL}/product/${payload.id}`,
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
    deletesProduct(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://${process.env.VUE_APP_URL}/product/${payload}`)
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },

  getters: {
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getDataProductById(state) {
      return state.productsById
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getAllDataProduct(state) {
      return state
    },
    getFormId(state) {
      return state.formId
    }
  }
}

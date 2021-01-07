import axios from 'axios'

export default {
  state: {
    limit: 6,
    page: 1,
    products: [],
    totalRows: null
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
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
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getAllDataProduct(state) {
      return state
    }
  }
}

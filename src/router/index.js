import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Lifecycle from '../views/Lifecycle.vue'
import ProductDetail from '../views/productDetail.vue'
import Cart from '../views/cart.vue'
import PostProduct from '../views/PostProduct.vue'
import PostCoupon from '../views/PostCoupon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/PostProduct',
    name: 'PostProduct',
    component: PostProduct
  },
  {
    path: '/PostCoupon',
    name: 'PostCoupon',
    component: PostCoupon
  },
  {
    path: '/productDetail/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: Lifecycle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

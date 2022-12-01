import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cfde0dd8 = () => interopDefault(import('../pages/CreatePost.vue' /* webpackChunkName: "pages/CreatePost" */))
const _716d3faa = () => interopDefault(import('../pages/Posts.vue' /* webpackChunkName: "pages/Posts" */))
const _0cde870a = () => interopDefault(import('../pages/Register.vue' /* webpackChunkName: "pages/Register" */))
const _149a59a2 = () => interopDefault(import('../pages/UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _6d51bb94 = () => interopDefault(import('../pages/UserProfile.vue' /* webpackChunkName: "pages/UserProfile" */))
const _b171546c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreatePost",
    component: _cfde0dd8,
    name: "CreatePost"
  }, {
    path: "/Posts",
    component: _716d3faa,
    name: "Posts"
  }, {
    path: "/Register",
    component: _0cde870a,
    name: "Register"
  }, {
    path: "/UserHome",
    component: _149a59a2,
    name: "UserHome"
  }, {
    path: "/UserProfile",
    component: _6d51bb94,
    name: "UserProfile"
  }, {
    path: "/",
    component: _b171546c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

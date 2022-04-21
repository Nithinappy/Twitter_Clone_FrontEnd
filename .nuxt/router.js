import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42e5e592 = () => interopDefault(import('..\\pages\\CreatePost.vue' /* webpackChunkName: "pages/CreatePost" */))
const _d3d3c626 = () => interopDefault(import('..\\pages\\Posts.vue' /* webpackChunkName: "pages/Posts" */))
const _7d12b079 = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _cfc764c0 = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _791fc578 = () => interopDefault(import('..\\pages\\UserProfile.vue' /* webpackChunkName: "pages/UserProfile" */))
const _7614128c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _42e5e592,
    name: "CreatePost"
  }, {
    path: "/Posts",
    component: _d3d3c626,
    name: "Posts"
  }, {
    path: "/Register",
    component: _7d12b079,
    name: "Register"
  }, {
    path: "/UserHome",
    component: _cfc764c0,
    name: "UserHome"
  }, {
    path: "/UserProfile",
    component: _791fc578,
    name: "UserProfile"
  }, {
    path: "/",
    component: _7614128c,
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

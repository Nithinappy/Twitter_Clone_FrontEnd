export const AppHeader = () => import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const AppHeader1 = () => import('../../components/AppHeader1.vue' /* webpackChunkName: "components/app-header1" */).then(c => wrapFunctional(c.default || c))
export const ErrorMsg = () => import('../../components/ErrorMsg.vue' /* webpackChunkName: "components/error-msg" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const UserHeader = () => import('../../components/UserHeader.vue' /* webpackChunkName: "components/user-header" */).then(c => wrapFunctional(c.default || c))
export const UserLogin = () => import('../../components/UserLogin.vue' /* webpackChunkName: "components/user-login" */).then(c => wrapFunctional(c.default || c))
export const UserRegistration = () => import('../../components/UserRegistration.vue' /* webpackChunkName: "components/user-registration" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

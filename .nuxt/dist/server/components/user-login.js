exports.ids = [6];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserLogin.vue?vue&type=template&id=4f557796&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\" data-v-4f557796><div class=\"col-md-4\" data-v-4f557796></div> <div class=\"col-md-4\" data-v-4f557796><div class=\"card p-4 mt-5\" data-v-4f557796><div class=\"card-header text-center bg-primary mb-3\" data-v-4f557796><h3 data-v-4f557796>User Login</h3></div> <div class=\"card-body\" data-v-4f557796><form data-v-4f557796><div class=\"form-group\" data-v-4f557796><label for=\"email\" data-v-4f557796>Email</label> <input type=\"email\" id=\"email\""+(_vm._ssrAttr("value",(_vm.formData.email)))+" class=\"form-control\" data-v-4f557796></div> <div class=\"form-group\" data-v-4f557796><label for=\"passcode\" data-v-4f557796>Password</label> <input type=\"password\" id=\"passcode\""+(_vm._ssrAttr("value",(_vm.formData.password)))+" class=\"form-control\" data-v-4f557796></div> <div class=\"text-center mt-4\" data-v-4f557796><button type=\"submit\" class=\"btn btn-success\" data-v-4f557796>Login</button></div></form></div></div></div> <div class=\"col-md-4\" data-v-4f557796></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserLogin.vue?vue&type=template&id=4f557796&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserLogin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var UserLoginvue_type_script_lang_js_ = ({
  name: 'UserLogin',

  data() {
    return {
      email: '',
      password: '',
      formData: {
        email: this.email,
        password: this.password
      }
    };
  },

  methods: {
    async login() {
      console.log(this.formData);
      await this.$store.dispatch('login', this.formData);

      if (this.$store.state.ErrorMsg) {
        this.$router.push('/');
      }

      this.$router.push('/UserHome');
    }

  },

  head() {
    return {
      title: 'User Login Page',
      meta: [{
        hid: 'LoginPage',
        name: 'LoginPage',
        content: 'User Can Login Here'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/UserLogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserLoginvue_type_script_lang_js_ = (UserLoginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UserLogin.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserLoginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f557796",
  "ea1938ea"
  
)

/* harmony default export */ var UserLogin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user-login.js.map
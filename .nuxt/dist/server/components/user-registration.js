exports.ids = [7];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserRegistration.vue?vue&type=template&id=430392b7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\" data-v-430392b7><div class=\"col-md-4\" data-v-430392b7></div> <div class=\"col-md-4\" data-v-430392b7><div class=\"card p-4 mt-5\" data-v-430392b7><div class=\"card-header text-center text-dark bg-info mb-3\" data-v-430392b7><h3 data-v-430392b7>User Registration</h3></div> <div class=\"card-body\" data-v-430392b7><form data-v-430392b7><div class=\"form-group\" data-v-430392b7><label for=\"user_name\" data-v-430392b7>Full Name</label> <input type=\"text\" id=\"user_name\""+(_vm._ssrAttr("value",(_vm.formData.full_name)))+" class=\"form-control\" data-v-430392b7></div> <div class=\"form-group\" data-v-430392b7><label for=\"email\" data-v-430392b7>Email</label> <input type=\"email\" id=\"email\""+(_vm._ssrAttr("value",(_vm.formData.email)))+" class=\"form-control\" data-v-430392b7></div> <div class=\"form-group\" data-v-430392b7><label for=\"passcode\" data-v-430392b7>Password</label> <input type=\"password\" id=\"passcode\""+(_vm._ssrAttr("value",(_vm.formData.password)))+" class=\"form-control\" data-v-430392b7></div> <div class=\"text-center mt-4\" data-v-430392b7><button type=\"submit\" class=\"btn btn-primary\" data-v-430392b7>Register</button></div></form></div></div></div> <div class=\"col-md-4\" data-v-430392b7></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserRegistration.vue?vue&type=template&id=430392b7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserRegistration.vue?vue&type=script&lang=js&
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
/* harmony default export */ var UserRegistrationvue_type_script_lang_js_ = ({
  name: 'UserRegistration',

  head() {
    return {
      title: 'User Registration Page',
      meta: [{
        hid: 'RegistrationPage',
        name: 'RegistrationPage',
        content: 'User Can Registration Here'
      }]
    };
  },

  data() {
    return {
      full_name: '',
      email: '',
      password: '',
      formData: {
        full_name: this.full_name,
        email: this.email,
        password: this.password
      }
    };
  },

  methods: {
    UserRegistration() {
      console.log(this.formData);
      this.$store.dispatch('UserRegistration', this.formData);
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./components/UserRegistration.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserRegistrationvue_type_script_lang_js_ = (UserRegistrationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UserRegistration.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserRegistrationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "430392b7",
  "12d4f987"
  
)

/* harmony default export */ var UserRegistration = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user-registration.js.map
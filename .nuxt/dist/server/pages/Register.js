exports.ids = [10,2,7];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("67f8549c", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader1_vue_vue_type_style_index_0_id_df4d8474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader1_vue_vue_type_style_index_0_id_df4d8474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader1_vue_vue_type_style_index_0_id_df4d8474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader1_vue_vue_type_style_index_0_id_df4d8474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader1_vue_vue_type_style_index_0_id_df4d8474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo-img[data-v-df4d8474]{width:50px;height:50px;border-radius:50%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader1.vue?vue&type=template&id=df4d8474&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sticky-top"},[_vm._ssrNode("<nav class=\"navbar navbar-expand-lg shadow navbar-dark bg-primary\" data-v-df4d8474>","</nav>",[_vm._ssrNode("<div class=\"container\" data-v-df4d8474>","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",attrs:{"to":"/"}},[_vm._v(" TweeterClone App ")]),_vm._ssrNode(" <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-df4d8474><span class=\"navbar-toggler-icon\" data-v-df4d8474></span></button> "),_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-df4d8474>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav ms-auto mb-2 mb-lg-0 nav-tabs\" data-v-df4d8474>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-df4d8474>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Login ")])],1)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppHeader1.vue?vue&type=template&id=df4d8474&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader1.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AppHeader1vue_type_script_lang_js_ = ({
  name: 'AppHeader'
});
// CONCATENATED MODULE: ./components/AppHeader1.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppHeader1vue_type_script_lang_js_ = (AppHeader1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppHeader1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppHeader1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "df4d8474",
  "04c77c06"
  
)

/* harmony default export */ var AppHeader1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Register.vue?vue&type=template&id=3a008529&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AppHeader1'),_vm._ssrNode(" "),_c('UserRegistration'),_vm._ssrNode(" <br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Register.vue?vue&type=template&id=3a008529&

// EXTERNAL MODULE: ./components/AppHeader1.vue + 4 modules
var AppHeader1 = __webpack_require__(38);

// EXTERNAL MODULE: ./components/UserRegistration.vue + 4 modules
var UserRegistration = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Registervue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    AppHeader1: AppHeader1["default"],
    UserRegistration: UserRegistration["default"]
  }
});
// CONCATENATED MODULE: ./pages/Register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Registervue_type_script_lang_js_ = (Registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Register.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d6db3b4"
  
)

/* harmony default export */ var Register = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppHeader1: __webpack_require__(38).default,UserRegistration: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=Register.js.map
exports.ids = [13,1,3,6];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("26d2dd40", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader.vue?vue&type=template&id=aeb1dce0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sticky-top"},[_vm._ssrNode("<nav class=\"navbar navbar-expand-lg shadow navbar-dark bg-primary\" data-v-aeb1dce0>","</nav>",[_vm._ssrNode("<div class=\"container\" data-v-aeb1dce0>","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",attrs:{"to":"/"}},[_vm._v(" TweeterClone App ")]),_vm._ssrNode(" <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-aeb1dce0><span class=\"navbar-toggler-icon\" data-v-aeb1dce0></span></button> "),_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-aeb1dce0>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav ms-auto mb-2 mb-lg-0 nav-tabs\" data-v-aeb1dce0>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-aeb1dce0>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/Register"}},[_vm._v("Register ")])],1)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=template&id=aeb1dce0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AppHeadervue_type_script_lang_js_ = ({
  name: 'AppHeader'
});
// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppHeadervue_type_script_lang_js_ = (AppHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aeb1dce0",
  "4a79bd3b"
  
)

/* harmony default export */ var AppHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_aeb1dce0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_aeb1dce0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_aeb1dce0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_aeb1dce0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_aeb1dce0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo-img[data-v-aeb1dce0]{width:50px;height:50px;border-radius:50%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ErrorMsg.vue?vue&type=template&id=2f1ef348&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div role=\"alert\" class=\"alert alert-danger\" data-v-2f1ef348>"+_vm._ssrEscape("\n    "+_vm._s(_vm.Error)+"\n  ")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ErrorMsg.vue?vue&type=template&id=2f1ef348&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ErrorMsg.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var ErrorMsgvue_type_script_lang_js_ = ({
  props: ['Error'],
  name: 'ErrorMsg'
});
// CONCATENATED MODULE: ./components/ErrorMsg.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ErrorMsgvue_type_script_lang_js_ = (ErrorMsgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ErrorMsg.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ErrorMsgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2f1ef348",
  "a5ac7b88"
  
)

/* harmony default export */ var ErrorMsg = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=759a9ae4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AppHeader'),_vm._ssrNode(" "),(_vm.$store.state.ErrorMsg)?_c('ErrorMsg',{attrs:{"Error":_vm.$store.state.ErrorMsg}}):_vm._e(),_vm._ssrNode(" "),_c('UserLogin'),_vm._ssrNode(" <br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=759a9ae4&

// EXTERNAL MODULE: ./components/AppHeader.vue + 4 modules
var AppHeader = __webpack_require__(29);

// EXTERNAL MODULE: ./components/UserLogin.vue + 4 modules
var UserLogin = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    AppHeader: AppHeader["default"],
    UserLogin: UserLogin["default"]
  },

  head() {
    return {
      title: 'TweeterClone App',
      meta: [{
        name: 'description',
        content: 'Get all  Latest Tweets By Register'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35d35131"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppHeader: __webpack_require__(29).default,ErrorMsg: __webpack_require__(42).default,UserLogin: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=index.js.map
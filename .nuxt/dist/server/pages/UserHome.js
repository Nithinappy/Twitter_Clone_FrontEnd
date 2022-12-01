exports.ids = [11,1,4,5];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("279dde98", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserHeader.vue?vue&type=template&id=6f51fbed&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sticky-top"},[_vm._ssrNode("<nav class=\"navbar navbar-expand-lg shadow navbar-dark bg-primary\" data-v-6f51fbed>","</nav>",[_vm._ssrNode("<div class=\"container\" data-v-6f51fbed>","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",attrs:{"to":"/UserHome"}},[_vm._v("\n        TweeterClone App\n      ")]),_vm._ssrNode(" <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-6f51fbed><span class=\"navbar-toggler-icon\" data-v-6f51fbed></span></button> "),_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-6f51fbed>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav ms-auto mb-2 mb-lg-0 nav-tabs\" data-v-6f51fbed>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-6f51fbed>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"aria-current":"page","to":"/UserHome"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-6f51fbed>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/CreatePost"}},[_vm._v("CreatePost\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-6f51fbed>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/UserProfile"}},[_vm._v("Profile")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-6f51fbed>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Logout")])],1)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserHeader.vue?vue&type=template&id=6f51fbed&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserHeader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var UserHeadervue_type_script_lang_js_ = ({
  name: 'AppHeader'
});
// CONCATENATED MODULE: ./components/UserHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserHeadervue_type_script_lang_js_ = (UserHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UserHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f51fbed",
  "97baac4a"
  
)

/* harmony default export */ var UserHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHeader_vue_vue_type_style_index_0_id_6f51fbed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHeader_vue_vue_type_style_index_0_id_6f51fbed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHeader_vue_vue_type_style_index_0_id_6f51fbed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHeader_vue_vue_type_style_index_0_id_6f51fbed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHeader_vue_vue_type_style_index_0_id_6f51fbed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo-img[data-v-6f51fbed]{width:50px;height:50px;border-radius:50%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("a32cd0c8", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f889f1c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f889f1c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f889f1c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f889f1c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f889f1c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-f889f1c0]{background-color:#5f9ea0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home.vue?vue&type=template&id=f889f1c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ml-5"},[_vm._ssrNode("<div class=\"text-center\" data-v-f889f1c0><h3 class=\"mt-4\" data-v-f889f1c0>"+_vm._ssrEscape("🤩 Welcome "+_vm._s(this.$store.state.FullName))+"</h3> <h4 class=\"mt-3\" data-v-f889f1c0>AllPosts :</h4></div> "),_vm._ssrNode("<div class=\"mt-3\" data-v-f889f1c0>","</div>",[_vm._ssrNode(((_vm.errorMsg)?("<p data-v-f889f1c0>"+_vm._ssrEscape(_vm._s(_vm.errorMsg))+"</p>"):"<!---->")+" "),_vm._ssrNode("<div class=\"row\" data-v-f889f1c0>","</div>",[_vm._ssrNode("<div class=\"col-md-4\" data-v-f889f1c0></div> "),_vm._ssrNode("<div class=\"col-md-6\" data-v-f889f1c0>","</div>",_vm._l((_vm.$store.state.MyPosts),function(post,index){return _vm._ssrNode("<div class=\"card mb-3 col-md-6\" style=\"width: 28rem\" data-v-f889f1c0>","</div>",[_vm._ssrNode("<div class=\"card-header p-4 bg-info\" data-v-f889f1c0>","</div>",[_vm._ssrNode("<i class=\"far fa-comment-alt\" style=\"font-size: 24px\" data-v-f889f1c0></i>"+_vm._ssrEscape("\n            PostTitle : "+_vm._s(post.title)+"\n            ")),_c('nuxt-link',{attrs:{"to":{ name: 'Posts', params: { id: post.id } }}},[_c('i',{staticClass:"fas fa-arrow-circle-right",staticStyle:{"font-size":"16px"}})])],2)])}),0),_vm._ssrNode(" <div class=\"col-md-4\" data-v-f889f1c0></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Home.vue?vue&type=template&id=f889f1c0&scoped=true&

// EXTERNAL MODULE: ./components/UserHeader.vue + 4 modules
var UserHeader = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  components: {
    UserHeader: UserHeader["default"]
  },

  data() {
    return {
      errorMsg: ''
    };
  },

  async mounted() {
    await this.$store.dispatch('getMyPosts');
  },

  head() {
    return {
      title: 'User Home',
      meta: [{
        hid: 'UserHome',
        name: 'UserHeader',
        content: 'User Home Page'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Home.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f889f1c0",
  "53f1e142"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/UserHome.vue?vue&type=template&id=9bcacdc0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$store.state.token != null)?_c('UserHeader'):_c('AppHeader'),_vm._ssrNode(" "),(_vm.$store.state.token != null)?_c('Home'):_c('div',{staticClass:"text-center mt-5"},[_c('h1',{staticClass:"bg-danger p-3"},[_vm._v("Invalid Login Details")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/UserHome.vue?vue&type=template&id=9bcacdc0&

// EXTERNAL MODULE: ./components/UserHeader.vue + 4 modules
var UserHeader = __webpack_require__(25);

// EXTERNAL MODULE: ./components/AppHeader.vue + 4 modules
var AppHeader = __webpack_require__(29);

// EXTERNAL MODULE: ./components/Home.vue + 4 modules
var Home = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/UserHome.vue?vue&type=script&lang=js&
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



/* harmony default export */ var UserHomevue_type_script_lang_js_ = ({
  components: {
    UserHeader: UserHeader["default"],
    AppHeader: AppHeader["default"],
    Home: Home["default"]
  }
});
// CONCATENATED MODULE: ./pages/UserHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_UserHomevue_type_script_lang_js_ = (UserHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/UserHome.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_UserHomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "687750db"
  
)

/* harmony default export */ var UserHome = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UserHeader: __webpack_require__(25).default,AppHeader: __webpack_require__(29).default,Home: __webpack_require__(40).default})


/***/ })

};;
//# sourceMappingURL=UserHome.js.map
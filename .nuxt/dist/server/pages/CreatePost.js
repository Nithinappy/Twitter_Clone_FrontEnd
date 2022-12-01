exports.ids = [8,5];
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/CreatePost.vue?vue&type=template&id=057ebe62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('UserHeader'),_vm._ssrNode(" <div class=\"row\"><div class=\"col-md-4\"></div> <div class=\"col-md-4\"><div class=\"card p-4 mt-5\"><div class=\"card-header text-center bg-info mb-3\"><h3>Create Post</h3></div> <div class=\"card-body\"><form><div class=\"form-group\"><label for=\"title\">Title</label> <input type=\"text\" id=\"title\""+(_vm._ssrAttr("value",(_vm.formData.title)))+" class=\"form-control\"></div> <div class=\"text-center mt-4\"><button type=\"submit\" class=\"btn btn-success\">Post</button></div></form></div></div></div> <div class=\"col-md-4\"></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/CreatePost.vue?vue&type=template&id=057ebe62&

// EXTERNAL MODULE: ./components/UserHeader.vue + 4 modules
var UserHeader = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/CreatePost.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CreatePostvue_type_script_lang_js_ = ({
  component: {
    UserHeader: UserHeader["default"]
  },

  data() {
    return {
      title: '',
      formData: {
        title: this.title
      }
    };
  },

  methods: {
    async CreatePost() {
      await this.$store.dispatch('CreatePost', this.formData);
      this.$router.push('/UserHome');
    }

  },

  head() {
    return {
      title: 'Create Tweet Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/CreatePost.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_CreatePostvue_type_script_lang_js_ = (CreatePostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/CreatePost.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_CreatePostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "688d060d"
  
)

/* harmony default export */ var CreatePost = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UserHeader: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=CreatePost.js.map
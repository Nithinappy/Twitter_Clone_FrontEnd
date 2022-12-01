exports.ids = [12,5];
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/UserProfile.vue?vue&type=template&id=ce8bb56e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('UserHeader'),_vm._ssrNode(" <div class=\"row\" data-v-ce8bb56e><div class=\"col-md-4\" data-v-ce8bb56e><h1 data-v-ce8bb56e></h1></div> <div class=\"col-md-5 mt-5 p-3\" data-v-ce8bb56e><table class=\"table table-hover table-responsive\" data-v-ce8bb56e><thead data-v-ce8bb56e><tr data-v-ce8bb56e><th data-v-ce8bb56e><b data-v-ce8bb56e>UserDetails :</b></th></tr> <tr data-v-ce8bb56e>"+((_vm.isVisible)?("<th scope=\"col\" data-v-ce8bb56e><input type=\"text\""+(_vm._ssrAttr("value",(_vm.FullName)))+" class=\"form-control\" data-v-ce8bb56e></th>"):("<th scope=\"col\" data-v-ce8bb56e><i class=\"fa fa-user\" style=\"font-size: 24px\" data-v-ce8bb56e></i> <b data-v-ce8bb56e> FullName</b>"+_vm._ssrEscape(" : "+_vm._s(_vm.FullName)+"\n            ")+"</th>"))+" <th scope=\"col\" data-v-ce8bb56e>"+((!_vm.isVisible)?("<button class=\"bg-info\" data-v-ce8bb56e><i class=\"fa fa-edit\" style=\"font-size: 16px\" data-v-ce8bb56e></i></button>"):("<button class=\"btn btn-success\" data-v-ce8bb56e>\n                Submit\n              </button>"))+"</th></tr> <tr data-v-ce8bb56e><th data-v-ce8bb56e><i class=\"fa fa-envelope\" style=\"font-size: 24px; color: red\" data-v-ce8bb56e></i> <b data-v-ce8bb56e> Email</b>"+_vm._ssrEscape("\n              :\n              "+_vm._s(_vm.Email)+"\n            ")+"</th></tr></thead> <tbody data-v-ce8bb56e></tbody></table></div> <div class=\"col-md-3\" data-v-ce8bb56e></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/UserProfile.vue?vue&type=template&id=ce8bb56e&scoped=true&

// EXTERNAL MODULE: ./components/UserHeader.vue + 4 modules
var UserHeader = __webpack_require__(25);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/UserProfile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UserProfilevue_type_script_lang_js_ = ({
  components: {
    UserHeader: UserHeader["default"]
  },

  data() {
    return {
      FullName: this.$store.state.FullName,
      isVisible: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['FullName', 'Email'])
  },
  methods: {
    visible() {
      this.isVisible = true;
      this.FullName = this.$store.state.FullName;
    },

    UpdateUser() {
      this.isVisible = false;
      console.log(this.FullName);
      this.$store.dispatch('UpdateUser', {
        full_name: this.FullName
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/UserProfile.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_UserProfilevue_type_script_lang_js_ = (UserProfilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/UserProfile.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_UserProfilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ce8bb56e",
  "085cb45d"
  
)

/* harmony default export */ var UserProfile = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UserHeader: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=UserProfile.js.map
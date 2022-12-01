exports.ids = [9,5];
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts.vue?vue&type=template&id=3281973e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('UserHeader'),_vm._ssrNode(" <h3>"+_vm._ssrEscape(_vm._s(_vm.$route.params.id))+"</h3> <div class=\"row\"><div class=\"col-md-3\"></div> <div class=\"col-md-6 mt-3\"><table class=\"table table-hover table-responsive\"><thead class=\"bg-info\"><tr>"+((_vm.isVisible)?("<th scope=\"col\"><i class=\"far fa-comment-alt\" style=\"font-size: 24px\"></i> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.title)))+" class=\"form-control\"></th>"):("<th scope=\"col\"><i class=\"far fa-comment-alt\" style=\"font-size: 24px\"></i>"+_vm._ssrEscape("\n              PostTitle : "+_vm._s(_vm.$store.state.Post)+"\n            ")+"</th>"))+" "+((_vm.$store.state.PostUserId == _vm.$store.state.user_id)?("<th scope=\"col\">"+((!_vm.isVisible)?("<button class=\"btn btn-warning\">\n                Update\n              </button>"):("<button class=\"btn btn-success\">\n                Submit\n              </button>"))+"</th>"):"<!---->")+" "+((_vm.$store.state.PostUserId == _vm.$store.state.user_id)?("<th>"+((!_vm.isVisible)?("<button class=\"btn btn-danger\">\n                Delete\n              </button>"):"<!---->")+"</th>"):"<!---->")+"</tr></thead> <tbody><tr><td><b>Comments : </b></td></tr> "+(_vm._ssrList((_vm.$store.state.AllComments),function(comment,index){return ("<tr><td><i class=\"fas fa-comment\" style=\"font-size: 18px; color: black\"></i>"+_vm._ssrEscape("\n              "+_vm._s(comment.commentText)+"\n            ")+"</td> "+((comment.userId == _vm.$store.state.user_id)?("<td><button class=\"btn btn-button bg-danger\">\n                Delete\n              </button></td>"):"<!---->")+"</tr>")}))+"</tbody></table></div> <div class=\"col-md-4\"></div></div> <div><div class=\"row\"><div class=\"col-md-4\"></div> <div class=\"col-md-4\"><div class=\"form-group\"><label for=\"title\">CommentPost</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.comment)))+" class=\"form-control\"></div> <div class=\"text-center mt-4\"><button type=\"submit\" class=\"btn btn-success\">\n            Comment\n          </button></div></div> <div class=\"col-md-4\"></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Posts.vue?vue&type=template&id=3281973e&

// EXTERNAL MODULE: ./components/UserHeader.vue + 4 modules
var UserHeader = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Postsvue_type_script_lang_js_ = ({
  components: {
    UserHeader: UserHeader["default"]
  },

  head() {
    return {
      title: 'Single Post Page'
    };
  },

  data() {
    return {
      PostId: this.$route.params.id,
      title: '',
      comment: '',
      isVisible: false
    };
  },

  async created() {
    await this.$store.dispatch('GetPostById', this.PostId);
    await this.$store.dispatch('getAllComments', this.PostId);
  },

  methods: {
    async DeletePost() {
      console.log('deletemethod called');
      await this.$store.dispatch('DeletePost', this.PostId);
      this.$router.push('/UserHome');
    },

    async CommentPost() {
      console.log(this.comment);
      await this.$store.dispatch('CommentPost', {
        comment: this.comment,
        postId: this.PostId
      });
      await this.$store.dispatch('getAllComments', this.PostId);
      this.comment = '';
    },

    async DeleteComment(id) {
      await this.$store.dispatch('DeleteComment', id);
      await this.$store.dispatch('getAllComments', this.PostId);
    },

    visible() {
      this.isVisible = true;
      this.title = this.$store.state.Post;
    },

    async UpdatePost() {
      await this.$store.dispatch('UpdatePost', {
        postId: this.PostId,
        title: this.title
      });
      this.isVisible = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/Posts.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Postsvue_type_script_lang_js_ = (Postsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Posts.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Postsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "55d55b92"
  
)

/* harmony default export */ var Posts = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UserHeader: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=Posts.js.map
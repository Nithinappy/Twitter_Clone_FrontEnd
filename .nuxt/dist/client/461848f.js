(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{272:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("279dde98",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n.r(e);var r={name:"AppHeader"},o=(n(274),n(46)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky-top"},[n("nav",{staticClass:"navbar navbar-expand-lg shadow navbar-dark bg-primary"},[n("div",{staticClass:"container"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/UserHome"}},[t._v("\n        TweeterClone App\n      ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0 nav-tabs"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/UserHome"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/CreatePost"}},[t._v("CreatePost\n            ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/UserProfile"}},[t._v("Profile")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Logout")])],1)])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"6f51fbed",null);e.default=component.exports},274:function(t,e,n){"use strict";n(272)},275:function(t,e,n){var r=n(134)(!1);r.push([t.i,".logo-img[data-v-6f51fbed]{width:50px;height:50px;border-radius:50%}",""]),t.exports=r},281:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("a32cd0c8",content,!0,{sourceMap:!1})},284:function(t,e,n){"use strict";n(281)},285:function(t,e,n){var r=n(134)(!1);r.push([t.i,"body[data-v-f889f1c0]{background-color:#5f9ea0}",""]),t.exports=r},288:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(47),{components:{UserHeader:n(273).default},data:function(){return{errorMsg:""}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getMyPosts");case 2:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"User Home",meta:[{hid:"UserHome",name:"UserHeader",content:"User Home Page"}]}}}),l=(n(284),n(46)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ml-5"},[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"mt-4"},[t._v("🤩 Welcome "+t._s(this.$store.state.FullName))]),t._v(" "),n("h4",{staticClass:"mt-3"},[t._v("AllPosts :")])]),t._v(" "),n("div",{staticClass:"mt-3"},[t.errorMsg?n("p",[t._v(t._s(t.errorMsg))]):t._e(),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"}),t._v(" "),n("div",{staticClass:"col-md-6"},t._l(t.$store.state.MyPosts,(function(e,r){return n("div",{key:r,staticClass:"card mb-3 col-md-6",staticStyle:{width:"28rem"}},[n("div",{staticClass:"card-header p-4 bg-info"},[n("i",{staticClass:"far fa-comment-alt",staticStyle:{"font-size":"24px"}}),t._v("\n            PostTitle : "+t._s(e.title)+"\n            "),n("nuxt-link",{attrs:{to:{name:"Posts",params:{id:e.id}}}},[n("i",{staticClass:"fas fa-arrow-circle-right",staticStyle:{"font-size":"16px"}})])],1)])})),0),t._v(" "),n("div",{staticClass:"col-md-4"})])])])}),[],!1,null,"f889f1c0",null);e.default=component.exports}}]);
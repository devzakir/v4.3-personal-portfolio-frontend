(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{340:function(e,t,r){"use strict";r.r(t);r(13),r(34);var o=r(10),n={scrollToTop:!0,head:{title:"Settings Page",meta:[],script:[]},data:function(){return{user:this.$vform({name:"",email:"",password:"",confirm_password:""})}},methods:{loadUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("https://api.zakirhossen.com/api/auth/me");case 3:r=t.sent,data=r.data,console.log(data),e.user.name=data.name,e.user.email=data.email,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},updateUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("https://api.zakirhossen.com/api/auth/update");case 3:return r=t.sent,data=r.data,console.log(data),t.next=8,e.$auth.fetchUser();case 8:e.$toast.success("Profile updated successfully"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},mounted:function(){var e=this;this.$nextTick((function(){e.loadUser()}))}},l=r(29),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header bg-primary text-white"},[e._v("\n        Settings\n    ")]),e._v(" "),r("div",{staticClass:"card-body"},[r("form",{attrs:{action:"",method:"post"},on:{submit:function(t){return t.preventDefault(),e.updateUser()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("Enter your name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",class:{"is-invalid":e.user.errors.has("name")},attrs:{type:"text",placeholder:"name"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.user,field:"name"}})],1)]),e._v(" "),r("div",{staticClass:"col-md-6 col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("Enter your email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",class:{"is-invalid":e.user.errors.has("email")},attrs:{type:"text",placeholder:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.user,field:"email"}})],1)]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"col-md-6 col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("New password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.new_password,expression:"user.new_password"}],staticClass:"form-control",class:{"is-invalid":e.user.errors.has("new_password")},attrs:{type:"password",name:"new_password",placeholder:"new password"},domProps:{value:e.user.new_password},on:{input:function(t){t.target.composing||e.$set(e.user,"new_password",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.user,field:"new_password"}})],1)]),e._v(" "),r("div",{staticClass:"col-md-6 col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("Confirm password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirm_password,expression:"user.confirm_password"}],staticClass:"form-control",class:{"is-invalid":e.user.errors.has("confirm_password")},attrs:{type:"password",name:"confirm_password",placeholder:"confirm password"},domProps:{value:e.user.confirm_password},on:{input:function(t){t.target.composing||e.$set(e.user,"confirm_password",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.user,field:"confirm_password"}})],1)])]),e._v(" "),e._m(1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-12 mt-4"},[t("h5",{staticClass:"text-secondary"},[this._v("Update Password")]),this._v(" "),t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("Update Profile")])])}],!1,null,null,null);t.default=component.exports}}]);
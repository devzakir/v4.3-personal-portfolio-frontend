(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{346:function(t,e,r){"use strict";r.r(e);r(34);var o=r(10),n={head:{title:"Password Reset",meta:[],script:[]},data:function(){return{loginForm:this.$vform({email:"",password:""})}},methods:{login:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/login");case 2:case"end":return e.stop()}}),e)})))()}},computed:{},mounted:function(){}},l=r(29),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center",staticStyle:{"min-height":"70vh"}},[r("div",{staticClass:"col-lg-4 offset-lg-4"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t._v("\n                        Login\n                    ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" User Email ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.email,expression:"loginForm.email"}],staticClass:"form-control",class:{"is-invalid":t.loginForm.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"enter email"},domProps:{value:t.loginForm.email},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.loginForm,field:"email"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" User Password ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"form-control",class:{"is-invalid":t.loginForm.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"enter password"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.loginForm,field:"password"}})],1),t._v(" "),t._m(0)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null);e.default=component.exports}}]);
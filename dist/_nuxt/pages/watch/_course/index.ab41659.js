(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{258:function(e,t,r){var content=r(322);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("0ff27f2e",content,!0,{sourceMap:!1})},321:function(e,t,r){"use strict";var n=r(258);r.n(n).a},322:function(e,t,r){(t=r(40)(!1)).push([e.i,"header .logo[data-v-37c0fae8]{max-width:40px;margin-right:10px}",""]),e.exports=t},352:function(e,t,r){"use strict";r.r(t);r(34);var n=r(10),o={layout:"lesson",middleware:"auth",asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,o=e.error,t.next=3,r.get("https://api.zakirhossen.com/api/course/access/"+n.course).then((function(e){})).catch((function(e){o({statusCode:404,message:"You do not have permission to access this course."})}));case 3:case"end":return t.stop()}}),t)})))()},methods:{courseProgress:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.$route.params.course,t.next=4,e.$axios.get("https://api.zakirhossen.com/api/course/progress/"+r);case 4:n=t.sent,data=n.data,e.$router.push({name:"watch-course-lesson",params:{course:r,lesson:data.slug}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},computed:{auth:function(){return this.$store.state.auth}},mounted:function(){var e=this;this.$nextTick((function(){e.courseProgress()}))}},c=(r(321),r(29)),component=Object(c.a)(o,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"min-height":"100vh",width:"100%"}},[t("h5",[this._v("Redirecting")])])])}],!1,null,"37c0fae8",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{247:function(t,e,r){"use strict";var n={props:["name","slug","title"]},o=r(29),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"breadcrum"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"heading mb-0"},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"index"},[r("router-link",{attrs:{to:{name:"index"}}},[t._v("Home")]),t._v(" "),r("font-awesome-icon",{attrs:{icon:["fas","chevron-right"]}}),t._v(" "),r("router-link",{attrs:{to:{name:"product-slug",params:{slug:t.slug}}}},[t._v(" "+t._s(t.name)+" ")])],1)])])])])])}),[],!1,null,null,null);e.a=component.exports},351:function(t,e,r){"use strict";r.r(e);r(34);var n=r(10),o={components:{breadcrumb:r(247).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,e.next=3,r.get("https://api.zakirhossen.com/api/product/"+n.slug);case 3:return o=e.sent,data=o.data,e.abrupt("return",{product:data});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{product:{}}},methods:{fixImage:function(image){return this.$store.getters.fixImageURL(image)}},computed:{},mounted:function(){}},c=r(29),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumb",{attrs:{name:"Product Details",slug:t.product.slug,title:t.product.title}}),t._v(" "),r("section",{staticClass:"single-product"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-8"},[r("div",{staticClass:"product-image"},[r("img",{staticClass:"img-fluid",attrs:{src:t.fixImage(t.product.image),alt:""}})]),t._v(" "),r("div",{staticClass:"description"},[r("p",[t._v(" "+t._s(t.product.description))])])]),t._v(" "),r("div",{staticClass:"col-4"},[r("div",{staticClass:"template-box"},[r("a",{staticClass:"demo",attrs:{target:"_blank",href:t.product.link}},[r("font-awesome-icon",{attrs:{icon:["far","eye"]}}),t._v(" Demo")],1),t._v(" "),r("a",{staticClass:"download",attrs:{target:"_blank",href:t.product.download_link}},[r("font-awesome-icon",{attrs:{icon:["fas","cloud-download-alt"]}}),t._v("  Downloads")],1)]),t._v(" "),r("div",{staticClass:"sidebar-box"},[r("h3",[t._v("Template Summery")]),t._v(" "),r("div",{staticClass:"content"},[r("table",[r("tr",[r("td",[t._v(" Category ")]),t._v(" "),r("td",[t._v(" "+t._s(t.product.category_name)+" ")])]),t._v(" "),r("tr",[r("td",[t._v(" Version ")]),t._v(" "),r("td",[t._v(" "+t._s(t.product.version)+" ")])]),t._v(" "),r("tr",[r("td",[t._v(" Layout ")]),t._v(" "),r("td",[t._v(" "+t._s(t.product.layout)+" ")])]),t._v(" "),t._m(0),t._v(" "),r("tr",[r("td",[t._v(" License ")]),t._v(" "),r("td",[t._v(" "+t._s(t.product.license)+" ")])]),t._v(" "),r("tr",[r("td",[t._v(" Created ")]),t._v(" "),r("td",[t._v(" "+t._s(t.product.created_at)+" ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(" Last Updated ")]),this._v(" "),e("td",[this._v(" Responsive ")])])}],!1,null,null,null);e.default=component.exports}}]);
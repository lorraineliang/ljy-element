"use strict";function t(t,e,n,o,i,r,s,a,d,p){"boolean"!=typeof s&&(d=a,a=s,s=!1);const u="function"==typeof n?n.options:n;let c;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):e&&(c=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(u.functional){const t=u.render;u.render=function(e,n){return c.call(n),t(e,n)}}else{const t=u.beforeCreate;u.beforeCreate=t?[].concat(t,c):[c]}return n}const e=t({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",t._b({attrs:{type:t.type},domProps:{value:t.value},on:{input:t.input}},"input",t.$attrs,!1))])},staticRenderFns:[]},undefined,{name:"ljy-input",inheritAttrs:!1,props:{type:{type:String,default:"text"},value:{type:String}},methods:{input(t){this.$emit("input",t.target.value);const e=(t=>{for(;t&&"ljy-form-item"!==t.$options.name;)t=t.$parent;return t})(this.$parent);e&&e.$emit("validate")}}},undefined,false,undefined,!1,void 0,void 0,void 0);e.install=t=>{t.component(e.name,e)},module.exports=e;

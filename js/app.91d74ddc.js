(function(){"use strict";var t={2306:function(t,e,n){var o=n(5130),r=n(6768);function i(t,e,n,o,i,u){const a=(0,r.g2)("Items");return(0,r.uX)(),(0,r.Wv)(a)}var u=n(4232);const a=(0,r.Lk)("h1",null,"CRUD with json-server",-1),c=(0,r.Lk)("button",{type:"submit"},"Add",-1),l=["onClick"];function s(t,e,n,i,s,f){const d=(0,r.g2)("router-link"),m=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(d,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(d,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("About")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(d,{to:"/databinding"},{default:(0,r.k6)((()=>[(0,r.eW)("Data Binding")])),_:1})]),(0,r.bF)(m),(0,r.Lk)("div",null,[a,(0,r.Lk)("form",{onSubmit:e[1]||(e[1]=(0,o.D$)(((...t)=>f.addItem&&f.addItem(...t)),["prevent"]))},[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.newItem=t),placeholder:"Add new item"},null,512),[[o.Jo,s.newItem]]),c],32),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.items,(t=>((0,r.uX)(),(0,r.CE)("li",{key:t.id},[(0,r.eW)((0,u.v_)(t.name)+" ",1),(0,r.Lk)("button",{onClick:e=>f.deleteItem(t.id)},"Delete",8,l)])))),128))])])],64)}n(4114);var f=n(4373),d={data(){return{items:[],newItem:""}},created(){this.fetchItems()},methods:{async fetchItems(){try{const t=await f.A.get("http://localhost:3000/items");this.items=t.data}catch(t){console.error(t)}},async addItem(){if(""!==this.newItem.trim())try{const t=await f.A.post("http://localhost:3000/items",{name:this.newItem});this.items.push(t.data),this.newItem=""}catch(t){console.error(t)}},async deleteItem(t){try{await f.A.delete(`http://localhost:3000/items/${t}`),this.items=this.items.filter((e=>e.id!==t))}catch(e){console.error(e)}}}},m=n(1241);const p=(0,m.A)(d,[["render",s]]);var h=p,v={name:"App",components:{Items:h}};const b=(0,m.A)(v,[["render",i]]);var y=b;(0,o.Ef)(y).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var u=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(s--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,u=o[0],a=o[1],c=o[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var s=c(n)}for(e&&e(o);l<u.length;l++)i=u[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},o=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2306)}));o=n.O(o)})();
//# sourceMappingURL=app.91d74ddc.js.map
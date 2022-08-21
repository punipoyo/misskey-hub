import{_ as l,o as d,c as p,b as t,w as i,a as e,d as o,r as s}from"./app.798b97f6.js";const c={},m=e("h1",{id:"notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),o(),e("code",null,"notes")],-1),f=e("p",null,"\u30CE\u30FC\u30C8\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),o(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),o(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),o(" Errors")],-1);function _(b,k){const n=s("MkApiConsole"),a=s("MkSchemaViewer"),r=s("ClientOnly");return d(),p("div",null,[m,f,t(n,{name:"notes",def:{summary:"\u30CE\u30FC\u30C8\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",requireCredential:!1,tags:["notes"],req:{type:"object",properties:{local:{type:"boolean",default:!1,description:"\u30ED\u30FC\u30AB\u30EB\u3067\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},reply:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u8FD4\u4FE1\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u8FD4\u4FE1\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u8FD4\u4FE1\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},renote:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u30EA\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u30EA\u30CE\u30FC\u30C8\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u30EA\u30CE\u30FC\u30C8\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},withFiles:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u3042\u308B\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},poll:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u6295\u7968\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6295\u7968\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{}}}),u,t(r,null,{default:i(()=>[t(a,{schema:{type:"object",properties:{local:{type:"boolean",default:!1,description:"\u30ED\u30FC\u30AB\u30EB\u3067\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},reply:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u8FD4\u4FE1\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u8FD4\u4FE1\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u8FD4\u4FE1\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},renote:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u30EA\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u30EA\u30CE\u30FC\u30C8\u4EE5\u5916\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u30EA\u30CE\u30FC\u30C8\u3067\u3042\u308B\u304B\u305D\u3046\u3067\u306A\u3044\u304B\u306B\u95A2\u4FC2\u306A\u304F\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},withFiles:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u3042\u308B\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},poll:{type:"boolean",description:"`true` \u306B\u3059\u308B\u3068\u6295\u7968\u3092\u542B\u3080\u30CE\u30FC\u30C8\u3060\u3051\u3092\u3001 `false` \u306B\u3059\u308B\u3068\u542B\u307E\u306A\u3044\u30CE\u30FC\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u5024\u3092\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u6295\u7968\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u30CE\u30FC\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CE\u30FC\u30C8\u306E\u6700\u5927\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),h,t(r,null,{default:i(()=>[t(a,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),y])}var g=l(c,[["render",_],["__file","notes.html.vue"]]);export{g as default};
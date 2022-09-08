import{_ as b,o as p,c as m,b as o,w as r,a as e,d as i,r as t}from"./app.841c6a52.js";const _={},u=e("h1",{id:"i-webhooks-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-webhooks-create","aria-hidden":"true"},"#"),i(),e("code",null,"i/webhooks/create")],-1),f=e("p",null,"Webhook\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002Webhook\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u8A72\u5F53\u3059\u308B\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002",-1),k=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),i(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),g=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),i(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),y=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),i(" \u30A8\u30E9\u30FC")],-1),L=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),i(" \u30EA\u30BD\u30FC\u30B9")],-1);function T(E,w){const c=t("el-alert"),s=t("MkApiConsole"),n=t("ClientOnly"),a=t("MkSchemaViewerItemObject"),d=t("MkSchemaViewer"),l=t("MkApiErrors"),h=t("MkApiResources");return p(),m("div",null,[u,f,o(c,{title:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808",type:"success",closable:!1}),o(n,null,{default:r(()=>[o(s,{name:"i/webhooks/create",def:{summary:"Webhook\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",description:"Webhook\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002Webhook\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u8A72\u5F53\u3059\u308B\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002",tags:["webhooks"],requireCredential:!0,req:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100,description:"Webhook\u306E\u540D\u524D\u3002"},url:{type:"string",minLength:1,maxLength:1024,description:"URL\u3002on\u3067\u6307\u5B9A\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3059\u308B\u3068\u3001url\u3067\u6307\u5B9A\u3057\u305FURL\u306BHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002"},secret:{type:"string",minLength:1,maxLength:1024,description:"\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u3002HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306EX-Misskey-Hook-Secret\u306E\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"},on:{type:"array",items:{type:"string",enum:["mention","unfollow","follow","followed","note","reply","renote","reaction"]},description:"\u5BFE\u8C61\u3068\u306A\u308B\u30A4\u30D9\u30F3\u30C8\u3002\u5404\u30A4\u30D9\u30F3\u30C8\u306E\u767A\u751F\u6761\u4EF6\u3084\u3001HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u542B\u307E\u308C\u308B\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001Webhook\u306E\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}},required:["name","url","secret","on"]},res:{},errors:{}}})]),_:1}),k,o(n,null,{default:r(()=>[o(a,{schema:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100,description:"Webhook\u306E\u540D\u524D\u3002"},url:{type:"string",minLength:1,maxLength:1024,description:"URL\u3002on\u3067\u6307\u5B9A\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3059\u308B\u3068\u3001url\u3067\u6307\u5B9A\u3057\u305FURL\u306BHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002"},secret:{type:"string",minLength:1,maxLength:1024,description:"\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u3002HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306EX-Misskey-Hook-Secret\u306E\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"},on:{type:"array",items:{type:"string",enum:["mention","unfollow","follow","followed","note","reply","renote","reaction"]},description:"\u5BFE\u8C61\u3068\u306A\u308B\u30A4\u30D9\u30F3\u30C8\u3002\u5404\u30A4\u30D9\u30F3\u30C8\u306E\u767A\u751F\u6761\u4EF6\u3084\u3001HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u542B\u307E\u308C\u308B\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001Webhook\u306E\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}},required:["name","url","secret","on"]}})]),_:1}),g,o(n,null,{default:r(()=>[o(d,{schema:{}})]),_:1}),y,o(n,null,{default:r(()=>[o(l,{errors:{},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),L,o(n,null,{default:r(()=>[o(h,{def:{summary:"Webhook\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",description:"Webhook\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002Webhook\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u8A72\u5F53\u3059\u308B\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002",tags:["webhooks"],requireCredential:!0,req:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100,description:"Webhook\u306E\u540D\u524D\u3002"},url:{type:"string",minLength:1,maxLength:1024,description:"URL\u3002on\u3067\u6307\u5B9A\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3059\u308B\u3068\u3001url\u3067\u6307\u5B9A\u3057\u305FURL\u306BHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002"},secret:{type:"string",minLength:1,maxLength:1024,description:"\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u3002HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306EX-Misskey-Hook-Secret\u306E\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"},on:{type:"array",items:{type:"string",enum:["mention","unfollow","follow","followed","note","reply","renote","reaction"]},description:"\u5BFE\u8C61\u3068\u306A\u308B\u30A4\u30D9\u30F3\u30C8\u3002\u5404\u30A4\u30D9\u30F3\u30C8\u306E\u767A\u751F\u6761\u4EF6\u3084\u3001HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u542B\u307E\u308C\u308B\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001Webhook\u306E\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}},required:["name","url","secret","on"]},res:{},errors:{}}})]),_:1})])}var R=b(_,[["render",T],["__file","create.html.vue"]]);export{R as default};

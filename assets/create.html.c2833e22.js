import{_ as c,o as h,c as l,b as t,w as s,a as e,d as r,r as n}from"./app.798b97f6.js";const d={},m=e("h1",{id:"i-webhooks-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-webhooks-create","aria-hidden":"true"},"#"),r(),e("code",null,"i/webhooks/create")],-1),p=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),g=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function f(y,w){const i=n("MkApiConsole"),o=n("MkSchemaViewer"),a=n("ClientOnly");return h(),l("div",null,[m,p,t(i,{name:"i/webhooks/create",def:{summary:"",description:"",tags:["webhooks"],requireCredential:!0,req:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100},url:{type:"string",minLength:1,maxLength:1024},secret:{type:"string",minLength:1,maxLength:1024},on:{type:"array",items:{type:"string",enum:["mention","unfollow","follow","followed","note","reply","renote","reaction"]}}},required:["name","url","secret","on"]},res:{},errors:{}}}),_,t(a,null,{default:s(()=>[t(o,{schema:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100},url:{type:"string",minLength:1,maxLength:1024},secret:{type:"string",minLength:1,maxLength:1024},on:{type:"array",items:{type:"string",enum:["mention","unfollow","follow","followed","note","reply","renote","reaction"]}}},required:["name","url","secret","on"]}})]),_:1}),u,t(a,null,{default:s(()=>[t(o,{schema:{}})]),_:1}),g])}var b=c(d,[["render",f],["__file","create.html.vue"]]);export{b as default};
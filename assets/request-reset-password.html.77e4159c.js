import{_ as d,o as c,c as l,b as r,w as n,a as e,d as s,r as a}from"./app.798b97f6.js";const h={},p=e("h1",{id:"request-reset-password",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-reset-password","aria-hidden":"true"},"#"),s(),e("code",null,"request-reset-password")],-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),s(" Errors")],-1);function f(w,q){const i=a("MkApiConsole"),t=a("MkSchemaViewer"),o=a("ClientOnly");return c(),l("div",null,[p,r(i,{name:"request-reset-password",def:{summary:"",description:"",tags:["reset password"],requireCredential:!1,req:{type:"object",properties:{username:{type:"string"},email:{type:"string"}},required:["username","email"]},res:{},errors:{}}}),m,r(o,null,{default:n(()=>[r(t,{schema:{type:"object",properties:{username:{type:"string"},email:{type:"string"}},required:["username","email"]}})]),_:1}),u,r(o,null,{default:n(()=>[r(t,{schema:{}})]),_:1}),_])}var y=d(h,[["render",f],["__file","request-reset-password.html.vue"]]);export{y as default};
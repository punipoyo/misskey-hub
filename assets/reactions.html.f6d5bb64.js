import{_ as c,o as u,c as l,b as r,w as o,a as e,d as t,r as a}from"./app.798b97f6.js";const d={},m=e("h1",{id:"charts-user-reactions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#charts-user-reactions","aria-hidden":"true"},"#"),t(),e("code",null,"charts/user/reactions")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function _(f,b){const i=a("MkApiConsole"),s=a("MkSchemaViewer"),n=a("ClientOnly");return u(),l("div",null,[m,r(i,{name:"charts/user/reactions",def:{summary:"",description:"",tags:["charts"],requireCredential:!1,req:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null},userId:{type:"string",format:"misskey:id"}},required:["span","userId"]},res:{type:"object",properties:{"local.count":{type:"array",items:{type:"number"}},"remote.count":{type:"array",items:{type:"number"}}},required:["local.count","remote.count"]},errors:{}}},null,8,["def"]),p,r(n,null,{default:o(()=>[r(s,{schema:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null},userId:{type:"string",format:"misskey:id"}},required:["span","userId"]}})]),_:1}),h,r(n,null,{default:o(()=>[r(s,{schema:{type:"object",properties:{"local.count":{type:"array",items:{type:"number"}},"remote.count":{type:"array",items:{type:"number"}}},required:["local.count","remote.count"]}},null,8,["schema"])]),_:1}),y])}var g=c(d,[["render",_],["__file","reactions.html.vue"]]);export{g as default};
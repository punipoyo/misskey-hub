import{_ as i,o as c,c as h,b as s,w as d,a as e,d as a,r}from"./app.798b97f6.js";const m={},_=e("h1",{id:"messaging-messages-read",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#messaging-messages-read","aria-hidden":"true"},"#"),a(),e("code",null,"messaging/messages/read")],-1),l=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),g=e("h3",{id:"no-such-message",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-message","aria-hidden":"true"},"#"),a(" NO_SUCH_MESSAGE")],-1),b=e("p",null,[a("ID: "),e("code",null,"86d56a2f-a9c3-4afb-b13c-3e9bfef9aa14")],-1);function x(C,y){const o=r("MkApiConsole"),t=r("MkSchemaViewer"),n=r("ClientOnly");return c(),h("div",null,[_,l,s(o,{name:"messaging/messages/read",def:{summary:"",description:"",tags:["messaging"],requireCredential:!0,req:{type:"object",properties:{messageId:{type:"string",format:"misskey:id"}},required:["messageId"]},res:{},errors:{"86d56a2f-a9c3-4afb-b13c-3e9bfef9aa14":{id:"86d56a2f-a9c3-4afb-b13c-3e9bfef9aa14",code:"NO_SUCH_MESSAGE",description:""}}}}),f,s(n,null,{default:d(()=>[s(t,{schema:{type:"object",properties:{messageId:{type:"string",format:"misskey:id"}},required:["messageId"]}})]),_:1}),p,s(n,null,{default:d(()=>[s(t,{schema:{}})]),_:1}),u,g,b])}var S=i(m,[["render",x],["__file","read.html.vue"]]);export{S as default};
import{_ as d,o as i,c as l,b as a,w as n,a as e,d as s,e as h,r}from"./app.798b97f6.js";const f={},u=e("h1",{id:"following-requests-cancel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#following-requests-cancel","aria-hidden":"true"},"#"),s(),e("code",null,"following/requests/cancel")],-1),_=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),b=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),m=h('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>4e68c551-fc4c-4e46-bb41-7d4a37bf9dab</code></p><h3 id="follow-request-not-found" tabindex="-1"><a class="header-anchor" href="#follow-request-not-found" aria-hidden="true">#</a> FOLLOW_REQUEST_NOT_FOUND</h3><p>ID: <code>089b125b-d338-482a-9a09-e2622ac9f8d4</code></p>',5);function y(O,U){const c=r("MkApiConsole"),o=r("MkSchemaViewer"),t=r("ClientOnly");return i(),l("div",null,[u,_,a(c,{name:"following/requests/cancel",def:{summary:"",description:"",tags:["following"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{type:"object",optional:!1,nullable:!1,ref:"UserLite",$ref:"misskey://UserLite"},errors:{"4e68c551-fc4c-4e46-bb41-7d4a37bf9dab":{id:"4e68c551-fc4c-4e46-bb41-7d4a37bf9dab",code:"NO_SUCH_USER",description:""},"089b125b-d338-482a-9a09-e2622ac9f8d4":{id:"089b125b-d338-482a-9a09-e2622ac9f8d4",code:"FOLLOW_REQUEST_NOT_FOUND",description:""}}}}),p,a(t,null,{default:n(()=>[a(o,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),b,a(t,null,{default:n(()=>[a(o,{schema:{type:"object",optional:!1,nullable:!1,ref:"UserLite",$ref:"misskey://UserLite"}})]),_:1}),m])}var w=d(f,[["render",y],["__file","cancel.html.vue"]]);export{w as default};
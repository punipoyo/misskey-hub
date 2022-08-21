import{_ as c,o as i,c as h,b as r,w as o,a as e,d,e as l,r as t}from"./app.798b97f6.js";const f={},_=e("h1",{id:"notes-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-delete","aria-hidden":"true"},"#"),d(),e("code",null,"notes/delete")],-1),p=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),d(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),d(" Response")],-1),b=l('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-note" tabindex="-1"><a class="header-anchor" href="#no-such-note" aria-hidden="true">#</a> NO_SUCH_NOTE</h3><p>ID: <code>490be23f-8c1f-4796-819f-94cb4f9d1630</code></p><h3 id="access-denied" tabindex="-1"><a class="header-anchor" href="#access-denied" aria-hidden="true">#</a> ACCESS_DENIED</h3><p>ID: <code>fe8d7103-0ea8-4ec3-814d-f8b401dc69e9</code></p>',5);function C(x,E){const n=t("MkApiConsole"),a=t("MkSchemaViewer"),s=t("ClientOnly");return i(),h("div",null,[_,p,r(n,{name:"notes/delete",def:{summary:"",description:"",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]},res:{},errors:{"490be23f-8c1f-4796-819f-94cb4f9d1630":{id:"490be23f-8c1f-4796-819f-94cb4f9d1630",code:"NO_SUCH_NOTE",description:""},"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9":{id:"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9",code:"ACCESS_DENIED",description:""}}}}),u,r(s,null,{default:o(()=>[r(a,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]}})]),_:1}),m,r(s,null,{default:o(()=>[r(a,{schema:{}})]),_:1}),b])}var y=c(f,[["render",C],["__file","delete.html.vue"]]);export{y as default};
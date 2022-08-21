import{_ as s,o as i,c as h,b as a,w as n,a as e,d as t,e as p,r}from"./app.798b97f6.js";const f={},l=e("h1",{id:"admin-promo-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-promo-create","aria-hidden":"true"},"#"),t(),e("code",null,"admin/promo/create")],-1),_=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),b=p('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-note" tabindex="-1"><a class="header-anchor" href="#no-such-note" aria-hidden="true">#</a> NO_SUCH_NOTE</h3><p>ID: <code>ee449fbe-af2a-453b-9cae-cf2fe7c895fc</code></p><h3 id="already-promoted" tabindex="-1"><a class="header-anchor" href="#already-promoted" aria-hidden="true">#</a> ALREADY_PROMOTED</h3><p>ID: <code>ae427aa2-7a41-484f-a18c-2c1104051604</code></p>',5);function x(y,A){const d=r("MkApiConsole"),o=r("MkSchemaViewer"),c=r("ClientOnly");return i(),h("div",null,[l,_,a(d,{name:"admin/promo/create",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"},expiresAt:{type:"integer"}},required:["noteId","expiresAt"]},res:{},errors:{"ee449fbe-af2a-453b-9cae-cf2fe7c895fc":{id:"ee449fbe-af2a-453b-9cae-cf2fe7c895fc",code:"NO_SUCH_NOTE",description:""},"ae427aa2-7a41-484f-a18c-2c1104051604":{id:"ae427aa2-7a41-484f-a18c-2c1104051604",code:"ALREADY_PROMOTED",description:""}}}}),m,a(c,null,{default:n(()=>[a(o,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"},expiresAt:{type:"integer"}},required:["noteId","expiresAt"]}})]),_:1}),u,a(c,null,{default:n(()=>[a(o,{schema:{}})]),_:1}),b])}var O=s(f,[["render",x],["__file","create.html.vue"]]);export{O as default};
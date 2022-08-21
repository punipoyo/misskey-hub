import{_ as c,o as i,c as h,b as a,w as n,a as e,d as t,e as l,r}from"./app.798b97f6.js";const _={},f=e("h1",{id:"notes-reactions-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-reactions-delete","aria-hidden":"true"},"#"),t(),e("code",null,"notes/reactions/delete")],-1),p=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),b=l('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-note" tabindex="-1"><a class="header-anchor" href="#no-such-note" aria-hidden="true">#</a> NO_SUCH_NOTE</h3><p>ID: <code>764d9fce-f9f2-4a0e-92b1-6ceac9a7ad37</code></p><h3 id="not-reacted" tabindex="-1"><a class="header-anchor" href="#not-reacted" aria-hidden="true">#</a> NOT_REACTED</h3><p>ID: <code>92f4426d-4196-4125-aa5b-02943e2ec8fc</code></p>',5);function C(x,N){const s=r("MkApiConsole"),o=r("MkSchemaViewer"),d=r("ClientOnly");return i(),h("div",null,[f,p,a(s,{name:"notes/reactions/delete",def:{summary:"",description:"",tags:["reactions"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]},res:{},errors:{"764d9fce-f9f2-4a0e-92b1-6ceac9a7ad37":{id:"764d9fce-f9f2-4a0e-92b1-6ceac9a7ad37",code:"NO_SUCH_NOTE",description:""},"92f4426d-4196-4125-aa5b-02943e2ec8fc":{id:"92f4426d-4196-4125-aa5b-02943e2ec8fc",code:"NOT_REACTED",description:""}}}}),u,a(d,null,{default:n(()=>[a(o,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]}})]),_:1}),m,a(d,null,{default:n(()=>[a(o,{schema:{}})]),_:1}),b])}var k=c(_,[["render",C],["__file","delete.html.vue"]]);export{k as default};
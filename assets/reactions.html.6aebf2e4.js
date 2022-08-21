import{_ as c,o as d,c as l,b as a,w as n,a as e,d as t,r}from"./app.798b97f6.js";const m={},p=e("h1",{id:"users-reactions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-reactions","aria-hidden":"true"},"#"),t(),e("code",null,"users/reactions")],-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1),_=e("h3",{id:"reactions-not-public",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reactions-not-public","aria-hidden":"true"},"#"),t(" REACTIONS_NOT_PUBLIC")],-1),y=e("p",null,[t("ID: "),e("code",null,"673a7dd2-6924-1093-e0c0-e68456ceae5c")],-1);function b(k,g){const o=r("MkApiConsole"),s=r("MkSchemaViewer"),i=r("ClientOnly");return d(),l("div",null,[p,a(o,{name:"users/reactions",def:{summary:"",description:"",tags:["users"],requireCredential:!1,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},sinceDate:{type:"integer"},untilDate:{type:"integer"}},required:["userId"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"NoteReaction",$ref:"misskey://NoteReaction"}},errors:{"673a7dd2-6924-1093-e0c0-e68456ceae5c":{id:"673a7dd2-6924-1093-e0c0-e68456ceae5c",code:"REACTIONS_NOT_PUBLIC",description:""}}}}),u,a(i,null,{default:n(()=>[a(s,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},sinceDate:{type:"integer"},untilDate:{type:"integer"}},required:["userId"]}})]),_:1}),h,a(i,null,{default:n(()=>[a(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"NoteReaction",$ref:"misskey://NoteReaction"}}})]),_:1}),f,_,y])}var x=c(m,[["render",b],["__file","reactions.html.vue"]]);export{x as default};
import{_ as d,o as l,c,b as a,w as i,a as e,d as t,r}from"./app.798b97f6.js";const h={},f=e("h1",{id:"drive-files-attached-notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drive-files-attached-notes","aria-hidden":"true"},"#"),t(),e("code",null,"drive/files/attached-notes")],-1),_=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1),b=e("h3",{id:"no-such-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-file","aria-hidden":"true"},"#"),t(" NO_SUCH_FILE")],-1),y=e("p",null,[t("ID: "),e("code",null,"c118ece3-2e4b-4296-99d1-51756e32d232")],-1);function k(x,C){const n=r("MkApiConsole"),s=r("MkSchemaViewer"),o=r("ClientOnly");return l(),c("div",null,[f,_,a(n,{name:"drive/files/attached-notes",def:{summary:"",description:"",tags:["drive"],requireCredential:!0,req:{type:"object",properties:{fileId:{type:"string",format:"misskey:id"}},required:["fileId"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{"c118ece3-2e4b-4296-99d1-51756e32d232":{id:"c118ece3-2e4b-4296-99d1-51756e32d232",code:"NO_SUCH_FILE",description:""}}}}),p,a(o,null,{default:i(()=>[a(s,{schema:{type:"object",properties:{fileId:{type:"string",format:"misskey:id"}},required:["fileId"]}})]),_:1}),u,a(o,null,{default:i(()=>[a(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),m,b,y])}var v=d(h,[["render",k],["__file","attached-notes.html.vue"]]);export{v as default};
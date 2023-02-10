import{_ as u,o as c,c as f,b as o,w as n,a as e,d as i,r as l}from"./app.cde2c72e.js";const C={},b=e("h1",{id:"users-stats",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-stats","aria-hidden":"true"},"#"),i(),e("code",null,"users/stats")],-1),g=e("p",null,"\u30E6\u30FC\u30B6\u30FC\u306E\u7D71\u8A08\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",-1),y=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),i(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),_=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),i(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),m=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),i(" \u30A8\u30E9\u30FC")],-1),w=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),i(" \u30EA\u30BD\u30FC\u30B9")],-1);function h(F,R){const a=l("MkApiConsole"),t=l("ClientOnly"),s=l("MkSchemaViewerItemObject"),r=l("MkSchemaViewer"),p=l("MkApiErrors"),d=l("MkApiResources");return c(),f("div",null,[b,g,o(t,null,{default:n(()=>[o(a,{name:"users/stats",def:{summary:"\u30E6\u30FC\u30B6\u30FC\u306E\u7D71\u8A08\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u30E6\u30FC\u30B6\u30FC\u306E\u7D71\u8A08\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",tags:["users"],requireCredential:!1,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id",description:"\u30E6\u30FC\u30B6\u30FC\u306Eid\u3002"}},required:["userId"]},res:{type:"object",optional:!1,nullable:!1,properties:{notesCount:{type:"integer",optional:!1,nullable:!1,description:"\u4F5C\u6210\u3057\u305F\u30CE\u30FC\u30C8\u306E\u6570\u3002"},repliesCount:{type:"integer",optional:!1,nullable:!1,description:"\u9001\u3063\u305F\u30EA\u30D7\u30E9\u30A4\u306E\u6570\u3002"},renotesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304CRenote\u3092\u884C\u3063\u305F\u56DE\u6570\u3002"},repliedCount:{type:"integer",optional:!1,nullable:!1,description:"\u53D7\u3051\u53D6\u3063\u305F\u30EA\u30D7\u30E9\u30A4\u306E\u6570\u3002"},renotedCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u304CRenote\u3055\u308C\u305F\u56DE\u6570\u3002"},pollVotesCount:{type:"integer",optional:!1,nullable:!1,description:"\u6295\u7968\u3092\u884C\u3063\u305F\u56DE\u6570\u3002"},pollVotedCount:{type:"integer",optional:!1,nullable:!1,description:"\u6295\u7968\u3092\u4F5C\u6210\u3057\u305F\u56DE\u6570\u3002"},localFollowingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},remoteFollowingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},localFollowersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},remoteFollowersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},followingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6570\uFF08\u30ED\u30FC\u30AB\u30EB\u3068\u30EA\u30E2\u30FC\u30C8\u306E\u548C\uFF09\u3002"},followersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6570\uFF08\u30ED\u30FC\u30AB\u30EB\u3068\u30EA\u30E2\u30FC\u30C8\u306E\u548C\uFF09\u3002"},sentReactionsCount:{type:"integer",optional:!1,nullable:!1,description:"\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u9001\u3063\u305F\u56DE\u6570\u3002"},receivedReactionsCount:{type:"integer",optional:!1,nullable:!1,description:"\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u53D7\u3051\u53D6\u3063\u305F\u56DE\u6570\u3002"},noteFavoritesCount:{type:"integer",optional:!1,nullable:!1,description:"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0\u3057\u305F\u30CE\u30FC\u30C8\u306E\u6570\u3002"},pageLikesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30DA\u30FC\u30B8\u306B\u3044\u3044\u306D\u3092\u3064\u3051\u305F\u56DE\u6570\u3002"},pageLikedCount:{type:"integer",optional:!1,nullable:!1,description:"\u30DA\u30FC\u30B8\u3078\u306E\u3044\u3044\u306D\u3092\u53D7\u3051\u53D6\u3063\u305F\u56DE\u6570\u3002"},driveFilesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30C9\u30E9\u30A4\u30D6\u306B\u5B58\u5728\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u6570\u3002"},driveUsage:{type:"integer",optional:!1,nullable:!1,description:"\u30C9\u30E9\u30A4\u30D6\u306E\u4F7F\u7528\u5BB9\u91CF\u3002\u30D0\u30A4\u30C8\u5358\u4F4D\u3067\u3059\u3002"}},required:["notesCount","repliesCount","renotesCount","repliedCount","renotedCount","pollVotesCount","pollVotedCount","localFollowingCount","remoteFollowingCount","localFollowersCount","remoteFollowersCount","followingCount","followersCount","sentReactionsCount","receivedReactionsCount","noteFavoritesCount","pageLikesCount","pageLikedCount","driveFilesCount","driveUsage"]},errors:{"9e638e45-3b25-4ef7-8f95-07e8498f1819":{id:"9e638e45-3b25-4ef7-8f95-07e8498f1819",code:"NO_SUCH_USER",description:"\u30E6\u30FC\u30B6\u30FC\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"}}}})]),_:1}),y,o(t,null,{default:n(()=>[o(s,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id",description:"\u30E6\u30FC\u30B6\u30FC\u306Eid\u3002"}},required:["userId"]}})]),_:1}),_,o(t,null,{default:n(()=>[o(r,{schema:{type:"object",optional:!1,nullable:!1,properties:{notesCount:{type:"integer",optional:!1,nullable:!1,description:"\u4F5C\u6210\u3057\u305F\u30CE\u30FC\u30C8\u306E\u6570\u3002"},repliesCount:{type:"integer",optional:!1,nullable:!1,description:"\u9001\u3063\u305F\u30EA\u30D7\u30E9\u30A4\u306E\u6570\u3002"},renotesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304CRenote\u3092\u884C\u3063\u305F\u56DE\u6570\u3002"},repliedCount:{type:"integer",optional:!1,nullable:!1,description:"\u53D7\u3051\u53D6\u3063\u305F\u30EA\u30D7\u30E9\u30A4\u306E\u6570\u3002"},renotedCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u304CRenote\u3055\u308C\u305F\u56DE\u6570\u3002"},pollVotesCount:{type:"integer",optional:!1,nullable:!1,description:"\u6295\u7968\u3092\u884C\u3063\u305F\u56DE\u6570\u3002"},pollVotedCount:{type:"integer",optional:!1,nullable:!1,description:"\u6295\u7968\u3092\u4F5C\u6210\u3057\u305F\u56DE\u6570\u3002"},localFollowingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},remoteFollowingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},localFollowersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},remoteFollowersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},followingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6570\uFF08\u30ED\u30FC\u30AB\u30EB\u3068\u30EA\u30E2\u30FC\u30C8\u306E\u548C\uFF09\u3002"},followersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6570\uFF08\u30ED\u30FC\u30AB\u30EB\u3068\u30EA\u30E2\u30FC\u30C8\u306E\u548C\uFF09\u3002"},sentReactionsCount:{type:"integer",optional:!1,nullable:!1,description:"\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u9001\u3063\u305F\u56DE\u6570\u3002"},receivedReactionsCount:{type:"integer",optional:!1,nullable:!1,description:"\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u53D7\u3051\u53D6\u3063\u305F\u56DE\u6570\u3002"},noteFavoritesCount:{type:"integer",optional:!1,nullable:!1,description:"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0\u3057\u305F\u30CE\u30FC\u30C8\u306E\u6570\u3002"},pageLikesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30DA\u30FC\u30B8\u306B\u3044\u3044\u306D\u3092\u3064\u3051\u305F\u56DE\u6570\u3002"},pageLikedCount:{type:"integer",optional:!1,nullable:!1,description:"\u30DA\u30FC\u30B8\u3078\u306E\u3044\u3044\u306D\u3092\u53D7\u3051\u53D6\u3063\u305F\u56DE\u6570\u3002"},driveFilesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30C9\u30E9\u30A4\u30D6\u306B\u5B58\u5728\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u6570\u3002"},driveUsage:{type:"integer",optional:!1,nullable:!1,description:"\u30C9\u30E9\u30A4\u30D6\u306E\u4F7F\u7528\u5BB9\u91CF\u3002\u30D0\u30A4\u30C8\u5358\u4F4D\u3067\u3059\u3002"}},required:["notesCount","repliesCount","renotesCount","repliedCount","renotedCount","pollVotesCount","pollVotedCount","localFollowingCount","remoteFollowingCount","localFollowersCount","remoteFollowersCount","followingCount","followersCount","sentReactionsCount","receivedReactionsCount","noteFavoritesCount","pageLikesCount","pageLikedCount","driveFilesCount","driveUsage"]}})]),_:1}),m,o(t,null,{default:n(()=>[o(p,{errors:{"9e638e45-3b25-4ef7-8f95-07e8498f1819":{id:"9e638e45-3b25-4ef7-8f95-07e8498f1819",code:"NO_SUCH_USER",description:"\u30E6\u30FC\u30B6\u30FC\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),w,o(t,null,{default:n(()=>[o(d,{def:{summary:"\u30E6\u30FC\u30B6\u30FC\u306E\u7D71\u8A08\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u30E6\u30FC\u30B6\u30FC\u306E\u7D71\u8A08\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",tags:["users"],requireCredential:!1,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id",description:"\u30E6\u30FC\u30B6\u30FC\u306Eid\u3002"}},required:["userId"]},res:{type:"object",optional:!1,nullable:!1,properties:{notesCount:{type:"integer",optional:!1,nullable:!1,description:"\u4F5C\u6210\u3057\u305F\u30CE\u30FC\u30C8\u306E\u6570\u3002"},repliesCount:{type:"integer",optional:!1,nullable:!1,description:"\u9001\u3063\u305F\u30EA\u30D7\u30E9\u30A4\u306E\u6570\u3002"},renotesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304CRenote\u3092\u884C\u3063\u305F\u56DE\u6570\u3002"},repliedCount:{type:"integer",optional:!1,nullable:!1,description:"\u53D7\u3051\u53D6\u3063\u305F\u30EA\u30D7\u30E9\u30A4\u306E\u6570\u3002"},renotedCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u304CRenote\u3055\u308C\u305F\u56DE\u6570\u3002"},pollVotesCount:{type:"integer",optional:!1,nullable:!1,description:"\u6295\u7968\u3092\u884C\u3063\u305F\u56DE\u6570\u3002"},pollVotedCount:{type:"integer",optional:!1,nullable:!1,description:"\u6295\u7968\u3092\u4F5C\u6210\u3057\u305F\u56DE\u6570\u3002"},localFollowingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},remoteFollowingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},localFollowersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},remoteFollowersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u6570\u3002"},followingCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6570\uFF08\u30ED\u30FC\u30AB\u30EB\u3068\u30EA\u30E2\u30FC\u30C8\u306E\u548C\uFF09\u3002"},followersCount:{type:"integer",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6570\uFF08\u30ED\u30FC\u30AB\u30EB\u3068\u30EA\u30E2\u30FC\u30C8\u306E\u548C\uFF09\u3002"},sentReactionsCount:{type:"integer",optional:!1,nullable:!1,description:"\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u9001\u3063\u305F\u56DE\u6570\u3002"},receivedReactionsCount:{type:"integer",optional:!1,nullable:!1,description:"\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u53D7\u3051\u53D6\u3063\u305F\u56DE\u6570\u3002"},noteFavoritesCount:{type:"integer",optional:!1,nullable:!1,description:"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0\u3057\u305F\u30CE\u30FC\u30C8\u306E\u6570\u3002"},pageLikesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30DA\u30FC\u30B8\u306B\u3044\u3044\u306D\u3092\u3064\u3051\u305F\u56DE\u6570\u3002"},pageLikedCount:{type:"integer",optional:!1,nullable:!1,description:"\u30DA\u30FC\u30B8\u3078\u306E\u3044\u3044\u306D\u3092\u53D7\u3051\u53D6\u3063\u305F\u56DE\u6570\u3002"},driveFilesCount:{type:"integer",optional:!1,nullable:!1,description:"\u30C9\u30E9\u30A4\u30D6\u306B\u5B58\u5728\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u6570\u3002"},driveUsage:{type:"integer",optional:!1,nullable:!1,description:"\u30C9\u30E9\u30A4\u30D6\u306E\u4F7F\u7528\u5BB9\u91CF\u3002\u30D0\u30A4\u30C8\u5358\u4F4D\u3067\u3059\u3002"}},required:["notesCount","repliesCount","renotesCount","repliedCount","renotedCount","pollVotesCount","pollVotedCount","localFollowingCount","remoteFollowingCount","localFollowersCount","remoteFollowersCount","followingCount","followersCount","sentReactionsCount","receivedReactionsCount","noteFavoritesCount","pageLikesCount","pageLikedCount","driveFilesCount","driveUsage"]},errors:{"9e638e45-3b25-4ef7-8f95-07e8498f1819":{id:"9e638e45-3b25-4ef7-8f95-07e8498f1819",code:"NO_SUCH_USER",description:"\u30E6\u30FC\u30B6\u30FC\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"}}}})]),_:1})])}var k=u(C,[["render",h],["__file","stats.html.vue"]]);export{k as default};
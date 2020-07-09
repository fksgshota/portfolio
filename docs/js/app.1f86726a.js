(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e1c":function(t,e,a){},1799:function(t,e,a){},"1a88":function(t,e,a){"use strict";var r=a("0e1c"),s=a.n(r);s.a},2358:function(t,e,a){},"48f9":function(t,e,a){},"4c42":function(t,e,a){},5037:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("div",{staticClass:"first_block",attrs:{id:"first"}},[a("v-container",[a("h1",{staticClass:"first_block__title"},[t._v("Shota Fukushige's portfolio")])])],1),a("div",{staticClass:"second_block blue-grey lighten-5",attrs:{id:"second"}},[a("SelfIntroduction")],1),a("div",{staticClass:"third_block blue-grey",attrs:{id:"third"}},[a("SkillCardList")],1),a("div",{staticClass:"fourth_block grey lighten-5",attrs:{id:"fourth"}},[a("ProductCardList")],1),a("div",{staticClass:"fifth_block blue-grey",attrs:{id:"fifth"}},[a("ContactUs")],1),a("Footer")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"header blue-grey darken-2",attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"header_nav_icon",attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"","hide-overlay":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dark:""}},[a("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.links,(function(t){return a("HeaderHamburgerMenu",{key:t.name,attrs:{name:t.name,selector:t.selector}})})),1)],1)],1),a("v-container",{staticClass:"d-flex justify-space-around"},t._l(t.links,(function(t){return a("HeaderButton",{key:t.name,staticClass:"header_nav_link",attrs:{name:t.name,selector:t.selector}})})),1)],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{ref:"button",staticClass:"header_button",attrs:{text:"",dark:"",large:""},on:{click:function(e){return t.$vuetify.goTo(t.selector,t.easeOutQuad)}}},[t._v(t._s(t.name))])},c=[],u={props:{name:{type:String,required:!0},selector:{type:String,required:!0}}},p=u,d=a("2877"),_=a("6544"),f=a.n(_),m=a("8336"),g=Object(d["a"])(p,l,c,!1,null,"1fccc2e8",null),v=g.exports;f()(g,{VBtn:m["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{dark:""},on:{click:function(e){return t.$vuetify.goTo(t.selector,t.easeOutQuad)}}},[a("v-list-item-title",[t._v(t._s(t.name))])],1)},b=[],k={props:{name:{type:String,required:!0},selector:{type:String,required:!0}}},C=k,y=a("da13"),S=a("5d23"),w=Object(d["a"])(C,h,b,!1,null,"cc33b4ac",null),x=w.exports;f()(w,{VListItem:y["a"],VListItemTitle:S["a"]});var j={data:function(){return{drawer:!1,group:null,links:[{name:"TOP",selector:"#first"},{name:"PROFILE",selector:"#second"},{name:"SKILLS",selector:"#third"},{name:"PRODUCTS",selector:"#fourth"},{name:"CONTACT",selector:"#fifth"}]}},components:{HeaderButton:v,HeaderHamburgerMenu:x},watch:{group:function(){this.drawer=!1}}},V=j,O=(a("7c59"),a("40dc")),F=a("5bc1"),q=a("a523"),T=a("8860"),L=a("1baa"),P=a("f774"),E=Object(d["a"])(V,n,o,!1,null,"403536b9",null),I=E.exports;f()(E,{VAppBar:O["a"],VAppBarNavIcon:F["a"],VContainer:q["a"],VList:T["a"],VListItemGroup:L["a"],VNavigationDrawer:P["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"footer blue-grey darken-2",attrs:{absolute:"",dark:""}},[a("small",{staticClass:"copyright"},[t._v("© "+t._s(t.copyrightYear)+" Shota Fukushige")])])},$=[],D={computed:{copyrightYear:function(){var t=new Date;return t.getFullYear()}}},H=D,M=(a("c952"),a("553a")),A=Object(d["a"])(H,R,$,!1,null,"ca59c286",null),B=A.exports;f()(A,{VFooter:M["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"self_introduction"},[a("v-card",{staticClass:"my_info"},[a("div",{staticClass:"my_info__top"},[a("div",{staticClass:"block"},[a("img",{staticClass:"my_info__img",attrs:{src:"/portfolio/shota_fukushige_icon.jpg"}})]),a("div",{staticClass:"my_info__overview"},[a("v-card-title",{staticClass:"my_info__ja_name"},[t._v("福重 章太")]),a("v-card-subtitle",{staticClass:"my_info__en_name"},[t._v("Fukushige Shota")]),a("p",{staticClass:"my_info__age"},[t._v(t._s(t.ageDisp))]),a("a",{staticClass:"my_info__company",attrs:{href:"https://unimal.jp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("株式会社unimal")]),a("p",{staticClass:"my_info__work"},[t._v("フルスタックエンジニア見習い")]),a("p",{staticClass:"my_info__blog"},[t._v(" ブログ： "),a("a",{staticClass:"my_info__blog__link",attrs:{href:"https://fksgshota.hatenablog.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("笑う門には福重なる")])]),a("SNSList")],1)]),a("v-card-text",{staticClass:"my_info__history"},[t._v(" 2012年に京セラ株式会社に入社。製造オペレーターとしての作業を行いながら、合間を縫ってパソコンスキルを活かした業務改善に取り組む。作業時間改善の累計は2790時間/月以上に及ぶ。元々パソコンに触れるのが好きでゲームや動画編集、パソコン本体の作成などを学生の頃から行う。業務改善を目的としたExcelVBAを学んだのをキッカケにプログラミングにハマり、自分のスキルとして身につけて仕事にしたいと強く思うようになる。 2019年9月末にて同社を退職。2019年10月より株式会社ユニマルにエンジニア見習いとして転職し、勉強に勤しむ毎日。 "),a("br"),a("br"),t._v("趣味：ギター、歌、ゲーム、プログラミング、パソコン、ガジェット ")])],1)],1)},J=[],Q=(a("99af"),a("d3b7"),a("25f0"),a("4d90"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"sns_list"},t._l(t.accounts,(function(e){return a("li",{key:e.name,staticClass:"sns_list__item"},[a("a",{staticClass:"sns_list__link",attrs:{href:e.url}},[a("v-icon",{attrs:{large:""}},[t._v(t._s(e.icon)+" fa-fw")])],1)])})),0)}),G=[],U={data:function(){return{accounts:[{name:"Twitter",url:"https://twitter.com/fksgshota",icon:"fab fa-twitter-square"},{name:"Facebook",url:"https://www.facebook.com/Fukushige.Shota",icon:"fab fa-facebook-square"},{name:"Instagram",url:"https://www.instagram.com/shota_fukushige/",icon:"fab fa-instagram-square"},{name:"GitHub",url:"https://github.com/fksgshota",icon:"fab fa-github-square"}]}}},Y=U,z=(a("b028"),a("132d")),K=Object(d["a"])(Y,Q,G,!1,null,"392fd8aa",null),Z=K.exports;f()(K,{VIcon:z["a"]});var W={methods:{ageCalc:function(t,e,a){var r=t.toString(),s=e.toString(),i=a.toString(),n=new Date,o=parseFloat("".concat(r).concat(s.padStart(2,"0")).concat(i.padStart(2,"0"))),l=parseFloat("".concat(n.getFullYear()).concat((n.getMonth()+1).toString().padStart(2,"0")).concat(n.getDay().toString().padStart(2,"0")));return Math.floor((l-o)/1e4)}},computed:{ageDisp:function(){var t=1993,e=8,a=18,r=this.ageCalc(t,e,a);return"".concat(r,"歳")}},components:{SNSList:Z}},X=W,tt=(a("ebc8"),a("b0af")),et=a("99d9"),at=Object(d["a"])(X,N,J,!1,null,"7b577f85",null),rt=at.exports;f()(at,{VCard:tt["a"],VCardSubtitle:et["b"],VCardText:et["c"],VCardTitle:et["d"],VContainer:q["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"skill_card_list"},[a("h1",{staticClass:"skill_card_list__title"},[t._v("Skills")]),a("h2",{staticClass:"skill_card_list__subtitle"},[t._v("Language")]),t._l(t.languages,(function(t){return a("SkillCard",{key:t.title,attrs:{title:t.title,star:t.star,description:t.description,img_path:t.img_path}})})),a("h2",{staticClass:"skill_card_list__subtitle"},[t._v("Framework")]),t._l(t.frameworks,(function(t){return a("SkillCard",{key:t.title,attrs:{title:t.title,star:t.star,description:t.description,img_path:t.img_path}})})),a("h2",{staticClass:"skill_card_list__subtitle"},[t._v("Database")]),t._l(t.databases,(function(t){return a("SkillCard",{key:t.title,attrs:{title:t.title,star:t.star,description:t.description,img_path:t.img_path}})})),a("h2",{staticClass:"skill_card_list__subtitle"},[t._v("Infrastructure")]),t._l(t.infrastructures,(function(t){return a("SkillCard",{key:t.title,attrs:{title:t.title,star:t.star,description:t.description,img_path:t.img_path}})})),a("h2",{staticClass:"skill_card_list__subtitle"},[t._v("Tool")]),t._l(t.tools,(function(t){return a("SkillCard",{key:t.title,attrs:{title:t.title,star:t.star,description:t.description,img_path:t.img_path}})}))],2)},it=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"skill_card blue-grey darken-2",attrs:{dark:""}},[a("v-card-title",{staticClass:"skill_card__title"},[a("img",{staticClass:"skill_card__logo",attrs:{src:t.img_path,alt:"logo"}}),t._v(" "+t._s(t.title)+" ")]),a("v-rating",{staticClass:"skill_card__rating",attrs:{"half-increments":"",readonly:"",size:"30",dense:"",value:t.star,color:"#34e89e","background-color":"#eeeeee"}}),a("v-card-text",{staticClass:"skill_card__description"},[t._v(t._s(t.description))])],1)},ot=[],lt=(a("a9e3"),{props:{title:{type:String,required:!0},star:{type:Number,required:!0,default:0},description:{type:String,required:!0},img_path:{type:String,required:!0}}}),ct=lt,ut=(a("ba7f"),a("1d4d")),pt=Object(d["a"])(ct,nt,ot,!1,null,"cd4b1a24",null),dt=pt.exports;f()(pt,{VCard:tt["a"],VCardText:et["c"],VCardTitle:et["d"],VRating:ut["a"]});var _t={data:function(){return{languages:[{title:"Ruby",star:3,description:"業務で使用している。",img_path:"/portfolio/skills/ruby.png"},{title:"JavaScript",star:3,description:"業務で使用している。",img_path:"/portfolio/skills/javascript.svg"},{title:"Go",star:1,description:"学習を始めたばかり",img_path:"/portfolio/skills/go.svg"},{title:"HTML5",star:4,description:"業務で使用している。",img_path:"/portfolio/skills/html_5.svg"},{title:"CSS3",star:4,description:"業務で使用している。",img_path:"/portfolio/skills/css_3.svg"}],frameworks:[{title:"Ruby on Rails",star:3,description:"業務で使用している。",img_path:"/portfolio/skills/rails.svg"},{title:"Vue.js",star:2,description:"業務で使用しながら学習中",img_path:"/portfolio/skills/vue.svg"},{title:"Nuxt.js",star:1,description:"学習中",img_path:"/portfolio/skills/nuxt.svg"},{title:"jQuery",star:3,description:"基本的な使い方は理解している",img_path:"/portfolio/skills/jquery.svg"},{title:"Middleman",star:2,description:"業務で触ったことがあり、ある程度は理解している。",img_path:"/portfolio/skills/middleman.svg"}],databases:[{title:"MySQL",star:3,description:"使用経験あり",img_path:"/portfolio/skills/mysql.png"},{title:"PostgreSQL",star:3,description:"使用経験あり",img_path:"/portfolio/skills/postgresql.svg"},{title:"Redis",star:3,description:"業務で使用したことがあり、基本的な使い方は理解している。",img_path:"/portfolio/skills/redis.svg"},{title:"DynamoDB",star:2,description:"業務で使用したことがあり、基本的な使い方は理解している。",img_path:"/portfolio/skills/amazon_dynamodb.svg"}],infrastructures:[{title:"Firebase",star:1,description:"使用経験はあり。",img_path:"/portfolio/skills/firebase.svg"},{title:"Heroku",star:3,description:"業務で使用している。基本的な使い方は理解している。",img_path:"/portfolio/skills/heroku.svg"},{title:"S3",star:2,description:"業務で使用したことがあり、基本的な使い方は理解している。",img_path:"/portfolio/skills/amazon_s3.svg"}],tools:[{title:"Airtable",star:3,description:"情報共有・タスク管理で使用したことあり。",img_path:"/portfolio/skills/airtable.svg"},{title:"Asana",star:3,description:"業務でメインのタスク管理ツールとして使用している。",img_path:"/portfolio/skills/asana.svg"},{title:"Git",star:4,description:"基本的な使い方は習得している",img_path:"/portfolio/skills/git.png"},{title:"CircleCI",star:2,description:"基本的な使い方は理解している。",img_path:"/portfolio/skills/circleci.png"},{title:"Docker",star:2,description:"使用したことはあるが、まだ学習中。",img_path:"/portfolio/skills/docker.png"},{title:"GitHub",star:4,description:"基本的な使い方は習得していて、多人数でのチーム開発経験あり。",img_path:"/portfolio/skills/octocat.png"},{title:"Figma",star:3,description:"業務で使用している。",img_path:"/portfolio/skills/figma.svg"},{title:"Slack",star:3,description:"業務で使用している。",img_path:"/portfolio/skills/slack.svg"}]}},components:{SkillCard:dt}},ft=_t,mt=(a("1a88"),Object(d["a"])(ft,st,it,!1,null,"49ee6916",null)),gt=mt.exports;f()(mt,{VContainer:q["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"product_card_list"},[a("h1",{staticClass:"product_card_list__title"},[t._v("Products")]),t._l(t.products,(function(t){return a("ProductCard",{key:t.title,attrs:{title:t.title,url:t.url,description:t.description,img_path:t.img_path}})}))],2)},ht=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"product_card",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"product_card__img",attrs:{height:"200px",src:t.img_path,alt:t.title}}),a("v-card-title",{staticClass:"product_card__title"},[t._v(t._s(t.title))]),a("v-card-text",{staticClass:"product_card__description"},[t._v(t._s(t.description))]),a("v-card-actions",[a("v-btn",{staticClass:"product_card__link",attrs:{color:"#34e89e",outlined:"",block:"",href:t.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("Show more")])],1)],1)},kt=[],Ct={props:{title:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,required:!0},img_path:{type:String,required:!0}},data:function(){return{}}},yt=Ct,St=(a("81ba"),a("adda")),wt=Object(d["a"])(yt,bt,kt,!1,null,"38780562",null),xt=wt.exports;f()(wt,{VBtn:m["a"],VCard:tt["a"],VCardActions:et["a"],VCardText:et["c"],VCardTitle:et["d"],VImg:St["a"]});var jt={data:function(){return{products:[{title:"Minesweeper",url:"https://fksgshota.github.io/minesweeper",description:"JavaScriptの学習を目的として制作したマインスイーパーです",img_path:"/portfolio/products/minesweeper.png"}]}},components:{ProductCard:xt}},Vt=jt,Ot=(a("e2ce"),Object(d["a"])(Vt,vt,ht,!1,null,"f2566b5c",null)),Ft=Ot.exports;f()(Ot,{VContainer:q["a"]});var qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"contact_us"},[a("h1",{staticClass:"contact_us__title"},[t._v("Contact Us")]),t.showForm?a("v-form",{ref:"contact_us_form",staticClass:"contact_us__form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("v-text-field",{staticClass:"contact_us__form__item",attrs:{dark:"",rules:t.nameRules,label:"Name or Company",type:"text",placeholder:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{staticClass:"contact_us__form__item",attrs:{dark:"",rules:t.emailRules,label:"email",type:"email",placeholder:"example@email.jp"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{staticClass:"contact_us__form__item",attrs:{dark:"",rules:t.subjectRules,label:"subject",type:"",placeholder:"title"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),a("v-textarea",{staticClass:"contact_us__form__item",attrs:{dark:"",rules:t.messageRules,label:"message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{attrs:{outlined:"",dark:"",type:"submit"}},[t._v("SEND")])],1):a("div",{staticClass:"contact_us__success"},[a("p",{staticClass:"contact_us__thanks"},[t._v(" お問い合わせありがとうございます！ "),a("br"),t._v("確認後に返信させていただきます ")]),a("v-btn",{staticClass:"contact_us__reload",attrs:{outlined:"",dark:"",href:"/"}},[t._v("送信画面を表示する")])],1)],1)},Tt=[],Lt=(a("b0c0"),a("bc3a")),Pt=a.n(Lt),Et={data:function(){return{valid:!0,showForm:!0,name:"",nameRules:[function(t){return!!t||"Name is required"}],email:"",emailRules:[function(t){return!!t||"Email is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],subject:"",subjectRules:[function(t){return!!t||"Subject is required"}],message:"",messageRules:[function(t){return!!t||"Message is required"}]}},methods:{submit:function(){var t=this;if(this.$refs.contact_us_form.validate()){var e=new FormData;e.append("entry.2005620554",this.name),e.append("entry.1045781291",this.email),e.append("entry.1166974658",this.subject),e.append("entry.839337160",this.message);var a="https://cors-anywhere.herokuapp.com/",r="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgBAhGyLPj06ZpSaSSHSOleo8JUk-BIsyJ4QbJ-IfPsVi3_g/formResponse";Pt.a.post(a+r,e).then((function(e){t.showForm=!1})),this.showForm=!1}}}},It=Et,Rt=(a("8ea9"),a("4bd4")),$t=a("8654"),Dt=a("a844"),Ht=Object(d["a"])(It,qt,Tt,!1,null,"14ac0241",null),Mt=Ht.exports;f()(Ht,{VBtn:m["a"],VContainer:q["a"],VForm:Rt["a"],VTextField:$t["a"],VTextarea:Dt["a"]});var At={name:"App",components:{Header:I,Footer:B,SelfIntroduction:rt,SkillCardList:gt,ProductCardList:Ft,ContactUs:Mt}},Bt=At,Nt=(a("8900"),a("7496")),Jt=Object(d["a"])(Bt,s,i,!1,null,"6f305398",null),Qt=Jt.exports;f()(Jt,{VApp:Nt["a"],VContainer:q["a"]});var Gt=a("f309");a("15f5");r["a"].use(Gt["a"]);var Ut=new Gt["a"]({icons:{iconfont:"fa"}}),Yt=a("a7fe"),zt=a.n(Yt);r["a"].config.productionTip=!1,r["a"].use(zt.a,Pt.a),new r["a"]({vuetify:Ut,render:function(t){return t(Qt)}}).$mount("#app")},"7c59":function(t,e,a){"use strict";var r=a("48f9"),s=a.n(r);s.a},"81ba":function(t,e,a){"use strict";var r=a("2358"),s=a.n(r);s.a},8900:function(t,e,a){"use strict";var r=a("ce1b"),s=a.n(r);s.a},"8ea9":function(t,e,a){"use strict";var r=a("5037"),s=a.n(r);s.a},b028:function(t,e,a){"use strict";var r=a("1799"),s=a.n(r);s.a},ba7f:function(t,e,a){"use strict";var r=a("d17a"),s=a.n(r);s.a},c952:function(t,e,a){"use strict";var r=a("d0a1"),s=a.n(r);s.a},c9f3:function(t,e,a){},ce1b:function(t,e,a){},d0a1:function(t,e,a){},d17a:function(t,e,a){},e2ce:function(t,e,a){"use strict";var r=a("c9f3"),s=a.n(r);s.a},ebc8:function(t,e,a){"use strict";var r=a("4c42"),s=a.n(r);s.a}});
//# sourceMappingURL=app.1f86726a.js.map
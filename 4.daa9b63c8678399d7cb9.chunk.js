webpackJsonp([4],{TkoJ:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t("WT6e"),e=t("VIyG"),i=function(){},r=t("7DMc"),s=t("Xjw4"),o=t("bfOx"),a=t("YaPU"),c=t("3lw+"),_=t("JXyw");a.a.prototype.debounceTime=function(n,l){return void 0===l&&(l=c.a),Object(_.a)(n,l)(this)};var d=t("BaTJ");a.a.prototype.distinctUntilChanged=function(n,l){return Object(d.a)(n,l)(this)};var p=t("+Vle"),g=t("uglW"),f=t("TAuK"),h=t("UOkm"),m=function(){function n(n,l){this.settingsService=n,this.searchResultsService=l}return n.prototype.getSearchResults=function(n){var l=this;return a.a.create(function(t){var u=l.settingsService.getSearchResultsSource(),e=l.settingsService.getCurrentLocale();l.searchResultsService.getSearchResults(u,n,e.languageCode).subscribe(function(n){t.next(n),t.complete()},function(l){console.error("Unable to get number of search results for: "+n),t.error(l)})})},n}(),b=function(){function n(n,l,t,u){this.route=n,this.router=l,this.location=t,this.customService=u,this.limit=5,this.words=[],this.titleSubscriptions=[],this.titleObservers={}}return n.prototype.ngOnInit=function(){var n=this;this.route.fragment.subscribe(function(l){var t=g.a.createFromFragment(l);n.location.replaceState("/custom"),n.initWords(t.titles)})},n.prototype.initWords=function(n){this.resetWords();var l=0;n&&n.length>this.limit&&(n.length=this.limit),n&&(this.processTitles(n,l),l+=n.length);var t=n?this.limit-n.length:this.limit;if(t>0){var u=new Array(t).fill("");this.processTitles(u,l),l+=t}},n.prototype.processTitles=function(n,l){var t=this;n.forEach(function(n,u){t.addWord(new p.a(n,-1)),t.titleObservers[l+u].next(n)})},n.prototype.resetWords=function(){this.words=[],this.titleSubscriptions.forEach(function(n){return n.unsubscribe()}),this.titleSubscriptions=[]},n.prototype.addWord=function(n){var l=this,t=this.words.length;this.words.push(n),this.titleSubscriptions.push(a.a.create(function(n){return l.titleObservers[t]=n}).debounceTime(1e3).distinctUntilChanged().subscribe(function(n){}))},n.prototype.onTitleChange=function(n,l){this.titleObservers[n].next(l)},n.prototype.playGame=function(){this.router.navigate(["/"],{fragment:new g.a(this.words.map(function(n){return n.title})).toString()})},n.prototype.reset=function(){this.initWords()},n}(),v=u._2({encapsulation:2,styles:[],data:{}});function y(n){return u._24(0,[(n()(),u._4(0,0,null,null,18,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u._23(-1,null,["\n    "])),(n()(),u._4(2,0,null,null,5,"label",[],[[8,"htmlFor",0]],null,null,null,null)),(n()(),u._23(3,null,["\n      ",".\n      "])),(n()(),u._4(4,0,null,null,2,"span",[["l10nTranslate",""]],null,null,null,null,null)),u._3(5,4866048,null,0,e.n,[e.r,u.k,u.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),u._23(-1,null,["Title"])),(n()(),u._23(-1,null,["\n    "])),(n()(),u._23(-1,null,["\n    "])),(n()(),u._4(9,0,null,null,7,"input",[["class","form-control mb-2"],["required",""],["type","text"]],[[8,"id",0],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,i=n.component;return"input"===l&&(e=!1!==u._16(n,10)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u._16(n,10).onTouched()&&e),"compositionstart"===l&&(e=!1!==u._16(n,10)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u._16(n,10)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(n.context.$implicit.title=t)&&e),"ngModelChange"===l&&(e=!1!==i.onTitleChange(n.context.index,n.context.$implicit.title)&&e),e},null,null)),u._3(10,16384,null,0,r.c,[u.C,u.k,[2,r.a]],null,null),u._3(11,16384,null,0,r.m,[],{required:[0,"required"]},null),u._19(1024,null,r.e,function(n){return[n]},[r.m]),u._19(1024,null,r.f,function(n){return[n]},[r.c]),u._3(14,671744,null,0,r.k,[[2,r.b],[2,r.e],[8,null],[2,r.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u._19(2048,null,r.g,null,[r.k]),u._3(16,16384,null,0,r.h,[r.g],null,null),(n()(),u._23(-1,null,["\n    "])),(n()(),u._23(-1,null,["\n  "]))],function(n,l){n(l,5,0,""),n(l,11,0,""),n(l,14,0,u._7(1,"title-",l.context.index,""),l.context.$implicit.title)},function(n,l){n(l,2,0,u._7(1,"title-",l.context.index,"")),n(l,3,0,l.context.index+1),n(l,9,0,u._7(1,"title-",l.context.index,""),u._16(l,11).required?"":null,u._16(l,16).ngClassUntouched,u._16(l,16).ngClassTouched,u._16(l,16).ngClassPristine,u._16(l,16).ngClassDirty,u._16(l,16).ngClassValid,u._16(l,16).ngClassInvalid,u._16(l,16).ngClassPending)})}function C(n){return u._24(0,[(n()(),u._4(0,0,null,null,31,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,i=n.component;return"submit"===l&&(e=!1!==u._16(n,2).onSubmit(t)&&e),"reset"===l&&(e=!1!==u._16(n,2).onReset()&&e),"ngSubmit"===l&&(e=!1!==i.playGame()&&e),e},null,null)),u._3(1,16384,null,0,r.p,[],null,null),u._3(2,4210688,[["customGameForm",4]],0,r.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u._19(2048,null,r.b,null,[r.j]),u._3(4,16384,null,0,r.i,[r.b],null,null),(n()(),u._23(-1,null,["\n  "])),(n()(),u.Z(16777216,null,null,1,null,y)),u._3(7,802816,null,0,s.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(n()(),u._23(-1,null,["\n\n  "])),(n()(),u._4(9,0,null,null,21,"div",[["class","d-flex justify-content-between"]],null,null,null,null,null)),(n()(),u._23(-1,null,["\n    "])),(n()(),u._4(11,0,null,null,8,"button",[["class","btn btn-primary mb-2"],["l10nTranslate",""],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),u._3(12,4866048,null,0,e.n,[e.r,u.k,u.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),u._23(-1,null,["\n      "])),(n()(),u._4(14,0,null,null,0,"span",[["class","fas fa-play fa-fw"]],null,null,null,null,null)),(n()(),u._23(-1,null,["\n      "])),(n()(),u._4(16,0,null,null,2,"span",[["l10nTranslate",""]],null,null,null,null,null)),u._3(17,4866048,null,0,e.n,[e.r,u.k,u.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),u._23(-1,null,["Play Game"])),(n()(),u._23(-1,null,["\n    "])),(n()(),u._23(-1,null,["\n    "])),(n()(),u._4(21,0,null,null,8,"button",[["class","btn btn-outline-secondary mb-2"],["l10nTranslate",""],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.reset()&&u),u},null,null)),u._3(22,4866048,null,0,e.n,[e.r,u.k,u.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),u._23(-1,null,["\n      "])),(n()(),u._4(24,0,null,null,0,"span",[["class","fas fa-times-circle fa-fw"]],null,null,null,null,null)),(n()(),u._23(-1,null,["\n      "])),(n()(),u._4(26,0,null,null,2,"span",[["l10nTranslate",""]],null,null,null,null,null)),u._3(27,4866048,null,0,e.n,[e.r,u.k,u.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),u._23(-1,null,["Reset"])),(n()(),u._23(-1,null,["\n    "])),(n()(),u._23(-1,null,["\n  "])),(n()(),u._23(-1,null,["\n"]))],function(n,l){n(l,7,0,l.component.words),n(l,12,0,""),n(l,17,0,""),n(l,22,0,""),n(l,27,0,"")},function(n,l){n(l,0,0,u._16(l,4).ngClassUntouched,u._16(l,4).ngClassTouched,u._16(l,4).ngClassPristine,u._16(l,4).ngClassDirty,u._16(l,4).ngClassValid,u._16(l,4).ngClassInvalid,u._16(l,4).ngClassPending),n(l,11,0,!u._16(l,2).form.valid)})}function T(n){return u._24(0,[(n()(),u.Z(16777216,null,null,1,null,C)),u._3(1,16384,null,0,s.j,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(n()(),u._23(-1,null,["\n"]))],function(n,l){n(l,1,0,l.component.words.length>0)},null)}var S=u._0("app-custom",b,function(n){return u._24(0,[(n()(),u._4(0,0,null,null,1,"app-custom",[],null,null,null,T,v)),u._3(1,114688,null,0,b,[o.a,o.l,s.f,m],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),x=t("mZ1b"),w=t("tS9H"),k=t("ItHS"),j=t("o2pl"),O=t("6bYS"),q=t("787C"),W=function(){},I=t("tSMp");t.d(l,"CustomModuleNgFactory",function(){return M});var M=u._1(i,[],function(n){return u._12([u._13(512,u.j,u.X,[[8,[S]],[3,u.j],u.v]),u._13(4608,s.l,s.k,[u.s,[2,s.q]]),u._13(4608,r.q,r.q,[]),u._13(4608,e.r,e.r,[e.m,e.h,e.q,e.o]),u._13(4608,e.f,e.f,[e.g,e.m,e.h,e.r]),u._13(4608,x.a,x.a,[e.f]),u._13(4608,w.a,w.a,[k.c]),u._13(4608,j.a,j.a,[w.a]),u._13(4608,O.a,O.a,[w.a]),u._13(4608,q.a,q.a,[k.c]),u._13(4608,h.a,h.a,[q.a,O.a,j.a]),u._13(4608,m,m,[f.a,h.a]),u._13(512,s.b,s.b,[]),u._13(512,r.o,r.o,[]),u._13(512,r.d,r.d,[]),u._13(512,e.d,e.d,[u.p]),u._13(512,e.p,e.p,[e.d]),u._13(512,e.j,e.j,[e.d]),u._13(512,o.o,o.o,[[2,o.w],[2,o.l]]),u._13(512,W,W,[]),u._13(512,I.a,I.a,[]),u._13(512,i,i,[]),u._13(1024,o.j,function(){return[[{path:"",component:b,resolve:{l10n:x.a}}]]},[]),u._13(256,e.m,{providers:[{type:1,prefix:"./assets/locale-custom-"}],missingValue:"No key"},[])])})}});
webpackJsonp([4],{TkoJ:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("WT6e"),u=t("VIyG"),i=function(){},s=t("7DMc"),o=t("Xjw4"),r=t("bfOx"),a=t("YaPU"),c=t("Ne5x"),h=new(t("Z4xk").a)(c.a),d=t("TToO"),_=t("OVmG"),p=function(){function n(n,l){this.dueTime=n,this.scheduler=l}return n.prototype.call=function(n,l){return l.subscribe(new f(n,this.dueTime,this.scheduler))},n}(),f=function(n){function l(l,t,e){n.call(this,l),this.dueTime=t,this.scheduler=e,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}return Object(d.d)(l,n),l.prototype._next=function(n){this.clearDebounce(),this.lastValue=n,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(m,this.dueTime,this))},l.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},l.prototype.debouncedNext=function(){this.clearDebounce(),this.hasValue&&(this.destination.next(this.lastValue),this.lastValue=null,this.hasValue=!1)},l.prototype.clearDebounce=function(){var n=this.debouncedSubscription;null!==n&&(this.remove(n),n.unsubscribe(),this.debouncedSubscription=null)},l}(_.a);function m(n){n.debouncedNext()}a.a.prototype.debounceTime=function(n,l){return void 0===l&&(l=h),function(n,l){return void 0===l&&(l=h),function(t){return t.lift(new p(n,l))}}(n,l)(this)};var g=t("GK6M"),b=t("fKB6"),y=function(){function n(n,l){this.compare=n,this.keySelector=l}return n.prototype.call=function(n,l){return l.subscribe(new v(n,this.compare,this.keySelector))},n}(),v=function(n){function l(l,t,e){n.call(this,l),this.keySelector=e,this.hasKey=!1,"function"==typeof t&&(this.compare=t)}return Object(d.d)(l,n),l.prototype.compare=function(n,l){return n===l},l.prototype._next=function(n){var l=n;if(this.keySelector&&(l=Object(g.a)(this.keySelector)(n))===b.a)return this.destination.error(b.a.e);var t=!1;if(this.hasKey){if((t=Object(g.a)(this.compare)(this.key,l))===b.a)return this.destination.error(b.a.e)}else this.hasKey=!0;!1===Boolean(t)&&(this.key=l,this.destination.next(n))},l}(_.a);a.a.prototype.distinctUntilChanged=function(n,l){return function(n,l){return function(t){return t.lift(new y(n,l))}}(n,l)(this)};var S=t("+Vle"),T=t("uglW"),C=t("TAuK"),x=t("UOkm"),k=function(){function n(n,l){this.settingsService=n,this.searchResultsService=l}return n.prototype.getSearchResults=function(n){var l=this;return a.a.create(function(t){var e=l.settingsService.getSearchResultsSource(),u=l.settingsService.getCurrentLocale();l.searchResultsService.getSearchResults(e,n,u.languageCode).subscribe(function(n){t.next(n),t.complete()},function(l){console.error("Unable to get number of search results for: "+n),t.error(l)})})},n}(),w=function(){function n(n,l,t,e){this.route=n,this.router=l,this.location=t,this.customService=e,this.limit=5,this.words=[],this.titleSubscriptions=[],this.titleObservers={}}return n.prototype.ngOnInit=function(){var n=this;this.route.fragment.subscribe(function(l){var t=T.a.createFromFragment(l);n.location.replaceState("/custom"),n.initWords(t.titles)})},n.prototype.initWords=function(n){this.resetWords();var l=0;n&&n.length>this.limit&&(n.length=this.limit),n&&(this.processTitles(n,l),l+=n.length);var t=n?this.limit-n.length:this.limit;if(t>0){var e=new Array(t).fill("");this.processTitles(e,l),l+=t}},n.prototype.processTitles=function(n,l){var t=this;n.forEach(function(n,e){t.addWord(new S.a(n,-1)),t.titleObservers[l+e].next(n)})},n.prototype.resetWords=function(){this.words=[],this.titleSubscriptions.forEach(function(n){return n.unsubscribe()}),this.titleSubscriptions=[]},n.prototype.addWord=function(n){var l=this,t=this.words.length;this.words.push(n),this.titleSubscriptions.push(a.a.create(function(n){return l.titleObservers[t]=n}).debounceTime(1e3).distinctUntilChanged().subscribe(function(n){}))},n.prototype.onTitleChange=function(n,l){this.titleObservers[n].next(l)},n.prototype.playGame=function(){this.router.navigate(["/"],{fragment:new T.a(this.words.map(function(n){return n.title})).toString()})},n.prototype.reset=function(){this.initWords()},n}(),O=e._2({encapsulation:2,styles:[],data:{}});function j(n){return e._24(0,[(n()(),e._4(0,0,null,null,18,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n    "])),(n()(),e._4(2,0,null,null,5,"label",[],[[8,"htmlFor",0]],null,null,null,null)),(n()(),e._23(3,null,["\n      ",".\n      "])),(n()(),e._4(4,0,null,null,2,"span",[["l10nTranslate",""]],null,null,null,null,null)),e._3(5,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),e._23(-1,null,["Title"])),(n()(),e._23(-1,null,["\n    "])),(n()(),e._23(-1,null,["\n    "])),(n()(),e._4(9,0,null,null,7,"input",[["class","form-control mb-2"],["required",""],["type","text"]],[[8,"id",0],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,i=n.component;return"input"===l&&(u=!1!==e._16(n,10)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e._16(n,10).onTouched()&&u),"compositionstart"===l&&(u=!1!==e._16(n,10)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e._16(n,10)._compositionEnd(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(n.context.$implicit.title=t)&&u),"ngModelChange"===l&&(u=!1!==i.onTitleChange(n.context.index,n.context.$implicit.title)&&u),u},null,null)),e._3(10,16384,null,0,s.c,[e.C,e.k,[2,s.a]],null,null),e._3(11,16384,null,0,s.m,[],{required:[0,"required"]},null),e._19(1024,null,s.e,function(n){return[n]},[s.m]),e._19(1024,null,s.f,function(n){return[n]},[s.c]),e._3(14,671744,null,0,s.k,[[2,s.b],[2,s.e],[8,null],[2,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e._19(2048,null,s.g,null,[s.k]),e._3(16,16384,null,0,s.h,[s.g],null,null),(n()(),e._23(-1,null,["\n    "])),(n()(),e._23(-1,null,["\n  "]))],function(n,l){n(l,5,0,""),n(l,11,0,""),n(l,14,0,e._7(1,"title-",l.context.index,""),l.context.$implicit.title)},function(n,l){n(l,2,0,e._7(1,"title-",l.context.index,"")),n(l,3,0,l.context.index+1),n(l,9,0,e._7(1,"title-",l.context.index,""),e._16(l,11).required?"":null,e._16(l,16).ngClassUntouched,e._16(l,16).ngClassTouched,e._16(l,16).ngClassPristine,e._16(l,16).ngClassDirty,e._16(l,16).ngClassValid,e._16(l,16).ngClassInvalid,e._16(l,16).ngClassPending)})}function V(n){return e._24(0,[(n()(),e._4(0,0,null,null,31,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0,i=n.component;return"submit"===l&&(u=!1!==e._16(n,2).onSubmit(t)&&u),"reset"===l&&(u=!1!==e._16(n,2).onReset()&&u),"ngSubmit"===l&&(u=!1!==i.playGame()&&u),u},null,null)),e._3(1,16384,null,0,s.p,[],null,null),e._3(2,4210688,[["customGameForm",4]],0,s.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e._19(2048,null,s.b,null,[s.j]),e._3(4,16384,null,0,s.i,[s.b],null,null),(n()(),e._23(-1,null,["\n  "])),(n()(),e.Z(16777216,null,null,1,null,j)),e._3(7,802816,null,0,o.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e._23(-1,null,["\n\n  "])),(n()(),e._4(9,0,null,null,21,"div",[["class","d-flex justify-content-between"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n    "])),(n()(),e._4(11,0,null,null,8,"button",[["class","btn btn-primary mb-2"],["l10nTranslate",""],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),e._3(12,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),e._23(-1,null,["\n      "])),(n()(),e._4(14,0,null,null,0,"span",[["class","fas fa-play-circle fa-fw"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n      "])),(n()(),e._4(16,0,null,null,2,"span",[["l10nTranslate",""]],null,null,null,null,null)),e._3(17,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),e._23(-1,null,["Play Game"])),(n()(),e._23(-1,null,["\n    "])),(n()(),e._23(-1,null,["\n    "])),(n()(),e._4(21,0,null,null,8,"button",[["class","btn btn-outline-secondary mb-2"],["l10nTranslate",""],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reset()&&e),e},null,null)),e._3(22,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),e._23(-1,null,["\n      "])),(n()(),e._4(24,0,null,null,0,"span",[["class","fas fa-times-circle fa-fw"]],null,null,null,null,null)),(n()(),e._23(-1,null,["\n      "])),(n()(),e._4(26,0,null,null,2,"span",[["l10nTranslate",""]],null,null,null,null,null)),e._3(27,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(n()(),e._23(-1,null,["Reset"])),(n()(),e._23(-1,null,["\n    "])),(n()(),e._23(-1,null,["\n  "])),(n()(),e._23(-1,null,["\n"]))],function(n,l){n(l,7,0,l.component.words),n(l,12,0,""),n(l,17,0,""),n(l,22,0,""),n(l,27,0,"")},function(n,l){n(l,0,0,e._16(l,4).ngClassUntouched,e._16(l,4).ngClassTouched,e._16(l,4).ngClassPristine,e._16(l,4).ngClassDirty,e._16(l,4).ngClassValid,e._16(l,4).ngClassInvalid,e._16(l,4).ngClassPending),n(l,11,0,!e._16(l,2).form.valid)})}function q(n){return e._24(0,[(n()(),e.Z(16777216,null,null,1,null,V)),e._3(1,16384,null,0,o.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e._23(-1,null,["\n"]))],function(n,l){n(l,1,0,l.component.words.length>0)},null)}var M=e._0("app-custom",w,function(n){return e._24(0,[(n()(),e._4(0,0,null,null,1,"app-custom",[],null,null,null,q,O)),e._3(1,114688,null,0,w,[r.a,r.l,o.f,k],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),W=t("mZ1b"),I=t("tS9H"),K=t("ItHS"),N=t("o2pl"),F=t("6bYS"),G=t("787C"),P=function(){},R=t("tSMp");t.d(l,"CustomModuleNgFactory",function(){return U});var U=e._1(i,[],function(n){return e._12([e._13(512,e.j,e.X,[[8,[M]],[3,e.j],e.v]),e._13(4608,o.l,o.k,[e.s,[2,o.q]]),e._13(4608,s.q,s.q,[]),e._13(4608,u.r,u.r,[u.m,u.h,u.q,u.o]),e._13(4608,u.f,u.f,[u.g,u.m,u.h,u.r]),e._13(4608,W.a,W.a,[u.f]),e._13(4608,I.a,I.a,[K.c]),e._13(4608,N.a,N.a,[I.a]),e._13(4608,F.a,F.a,[I.a]),e._13(4608,G.a,G.a,[K.c]),e._13(4608,x.a,x.a,[G.a,F.a,N.a]),e._13(4608,k,k,[C.a,x.a]),e._13(512,o.b,o.b,[]),e._13(512,s.o,s.o,[]),e._13(512,s.d,s.d,[]),e._13(512,u.d,u.d,[e.p]),e._13(512,u.p,u.p,[u.d]),e._13(512,u.j,u.j,[u.d]),e._13(512,r.o,r.o,[[2,r.w],[2,r.l]]),e._13(512,P,P,[]),e._13(512,R.a,R.a,[]),e._13(512,i,i,[]),e._13(1024,r.j,function(){return[[{path:"",component:w,resolve:{l10n:W.a}}]]},[]),e._13(256,u.m,{providers:[{type:1,prefix:"./assets/locale-custom-"}],missingValue:"No key"},[])])})}});
webpackJsonp([0],{"nS+4":function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=t("r8jB"),r=function(){},a=t("tM+F"),o=t("OylW"),i=t("KU+/"),s=t("c0x3"),c=t("HNiT"),d=t("vEzF"),g=t("6yhf"),f=t("UHIZ"),p=t("Un6q"),_=t("fxWY"),h=t("Qyse"),v=function(){function l(l){this.localeService=l,this.locales=[{text:"Deutsch",languageCode:"de",countryCode:"DE"},{text:"English",languageCode:"en",countryCode:"US"}]}return l.prototype.ngOnInit=function(){var l=this;this.currentLocale=this.locales.find(function(n){return n.languageCode==l.localeService.getCurrentLanguage()})},l.prototype.selectLocale=function(l){this.currentLocale=l,this.localeService.setDefaultLocale(l.languageCode,l.countryCode)},l}(),m=e._2({encapsulation:0,styles:[[".nav-logo[_ngcontent-%COMP%]{height:26px}@media (min-width:768px){.nav-logo[_ngcontent-%COMP%]{height:30px}}"]],data:{}});function x(l){return e._24(0,[(l()(),e._4(0,0,null,null,1,"a",[["class","dropdown-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectLocale(l.context.$implicit)&&e),e},null,null)),(l()(),e._23(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.text)})}function b(l){return e._24(0,[(l()(),e._4(0,0,null,null,36,"nav",[["class","navbar navbar-expand-sm navbar-light bg-light justify-content-between"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n  "])),(l()(),e._4(2,0,null,null,33,"div",[["class","container"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._4(4,0,null,null,8,"a",[["class","navbar-brand d-flex align-items-center"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e._16(l,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e._3(5,671744,null,0,f.l,[f.k,f.a,p.g],{routerLink:[0,"routerLink"]},null),(l()(),e._23(-1,null,["\n      "])),(l()(),e._4(7,0,null,null,0,"img",[["class","nav-logo mr-2"],["src","assets/logo-nav.png"],["srcset","assets/logo-nav@2x.png 2x"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      "])),(l()(),e._4(9,0,null,null,2,"span",[["class","align-center"],["l10nTranslate",""]],null,null,null,null,null)),e._3(10,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(l()(),e._23(-1,null,["Title"])),(l()(),e._23(-1,null,["\n    "])),(l()(),e._23(-1,null,["\n    "])),(l()(),e._4(14,0,null,null,20,"ul",[["class","navbar-nav"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      "])),(l()(),e._4(16,0,null,null,17,"li",[["class","nav-item dropdown"],["ngbDropdown",""],["placement","bottom-right"]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,t){var u=!0;return"keyup.esc"===n&&(u=!1!==e._16(l,17).closeFromOutsideEsc()&&u),"document:click"===n&&(u=!1!==e._16(l,17).closeFromClick(t)&&u),u},null,null)),e._3(17,212992,null,2,_.a,[h.a,e.x],{placement:[0,"placement"]},null),e._21(335544320,1,{_menu:0}),e._21(335544320,2,{_toggle:0}),(l()(),e._23(-1,null,["\n        "])),(l()(),e._4(21,0,null,null,4,"a",[["aria-expanded","false"],["aria-haspopup","true"],["class","nav-link dropdown-toggle dropdown-toggle"],["id","languageDropdown"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e._16(l,22).toggleOpen()&&u),u},null,null)),e._3(22,16384,[[2,4]],0,_.c,[_.a,e.k],null,null),(l()(),e._23(-1,null,["\n          "])),(l()(),e._4(24,0,null,null,0,"span",[["class","fas fa-globe"]],null,null,null,null,null)),(l()(),e._23(25,null,[" ","\n        "])),(l()(),e._23(-1,null,["\n        "])),(l()(),e._4(27,0,null,null,5,"div",[["aria-labelledby","languageDropdown"],["class","dropdown-menu"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null]],null,null,null,null)),e._3(28,16384,[[1,4]],0,_.b,[_.a,e.k,e.C],null,null),(l()(),e._23(-1,null,["\n          "])),(l()(),e.Z(16777216,null,null,1,null,x)),e._3(31,802816,null,0,p.h,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._23(-1,null,["\n        "])),(l()(),e._23(-1,null,["\n      "])),(l()(),e._23(-1,null,["\n    "])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n"])),(l()(),e._23(-1,null,["\n\n"])),(l()(),e._4(38,0,null,null,4,"div",[["class","container py-4 py-sm-5"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n  "])),(l()(),e._4(40,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e._3(41,212992,null,0,f.n,[f.b,e.N,e.j,[8,null],e.h],null,null),(l()(),e._23(-1,null,["\n"])),(l()(),e._23(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,5,0,"/"),l(n,10,0,""),l(n,17,0,"bottom-right"),l(n,31,0,t.locales),l(n,41,0)},function(l,n){var t=n.component;l(n,4,0,e._16(n,5).target,e._16(n,5).href),l(n,16,0,e._16(n,17).isOpen()),l(n,21,0,e._16(n,22).dropdown.isOpen()),l(n,25,0,t.currentLocale.text),l(n,27,0,!0,e._16(n,28).dropdown.isOpen())})}var T=e._0("app-nav",v,function(l){return e._24(0,[(l()(),e._4(0,0,null,null,1,"app-nav",[],null,null,null,b,m)),e._3(1,114688,null,0,v,[u.h],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=t("6Xbx");function w(l){return void 0===l&&(l=null),function(n,t){var e="_"+t;Object.defineProperty(n,t,{configurable:!1,get:function(){if(this[e])return this[e];var n=JSON.parse(localStorage.getItem(t));return n?(this[e]=n,this[e]):l},set:function(l){this[e]=l,localStorage.setItem(t,JSON.stringify(l))}})}}var O=function(){function l(l,n){this.localeService=l,this.gameService=n,this.loadingGame=!1,this.draggedTitleIndex=-1,this.dragOverTitleIndex=-1,this.dragEnterLeaveCounter=0,window.addEventListener("touchmove",function(){})}return l.prototype.newGame=function(){var l=this;this.loadingGame=!0;var n=this.localeService.getCurrentLanguage();this.gameService.newGame(5,n).subscribe(function(n){return l.initGame(n)},function(l){},function(){return l.loadingGame=!1})},l.prototype.initGame=function(l){this.words=l,this.sortedWords=l.slice(0).sort(function(l,n){return l.searchResults-n.searchResults}),this.remainingTitles=l.map(function(l){return l.title}),this.titles=new Array(l.length).fill(null),this.searchResults=this.sortedWords.map(function(l){return l.searchResults}),this.results=[],this.drawNextTitle()},l.prototype.drawNextTitle=function(){this.remainingTitles.length>0?(this.nextTitle=this.remainingTitles.pop(),this.remainingTitles=this.remainingTitles):this.nextTitle=null},l.prototype.updateTitle=function(l,n,t){null!=this.titles[n]?this.moveTitles(l,n,t)||this.moveTitles(l,n,-t):this.titles[n]=l},l.prototype.moveTitles=function(l,n,t){for(var e=n;e>=0&&e<this.titles.length;e+=t)if(null==this.titles[e]){for(var u=e;u!=n;u-=t)this.titles[u]=this.titles[u-t];return this.titles[n]=l,!0}return!1},l.prototype.showResults=function(){var l=this,n=[];this.titles.forEach(function(t,e){n.push(l.sortedWords[e].title==t)}),this.results=n},l.prototype.onNextTitleDragStart=function(l){l.dataTransfer.setData("text/plain",this.nextTitle),l.dataTransfer.effectAllowed="move",this.fixedTitles=this.titles.slice(0),this.draggedTitle=this.nextTitle,this.draggedTitleIndex=-1},l.prototype.onNextTitleDragEnter=function(l){l.preventDefault(),this.dragEnterLeaveCounter++},l.prototype.onNextTitleDragOver=function(l){var n=this;l.preventDefault(),l.dataTransfer.dropEffect="move",this.fixedTitles.forEach(function(l,t){n.titles[t]=l}),this.dragOverTitleIndex=-1},l.prototype.onNextTitleDragLeave=function(){var l=this;this.dragEnterLeaveCounter--,0==this.dragEnterLeaveCounter&&(this.fixedTitles.forEach(function(n,t){l.titles[t]=n}),this.dragOverTitleIndex=-1)},l.prototype.onNextTitleDragEnd=function(){var l=-1!=this.dragOverTitleIndex;this.dragOverTitleIndex=-1,this.dragEnterLeaveCounter=0,this.titles=this.titles,l&&this.drawNextTitle()},l.prototype.onTitleDragStart=function(l,n){l.dataTransfer.setData("text/plain",this.titles[n]),l.dataTransfer.effectAllowed="move",this.fixedTitles=this.titles.slice(0),this.draggedTitle=this.titles[n],this.draggedTitleIndex=n},l.prototype.onTitleDragEnter=function(l){l.preventDefault(),this.dragEnterLeaveCounter++},l.prototype.onTitleDragOver=function(l,n){var t=this;l.preventDefault(),l.dataTransfer.dropEffect="move",this.fixedTitles.forEach(function(l,n){t.titles[n]=t.draggedTitleIndex!=n?l:null}),this.dragOverTitleIndex=n,this.updateTitle(this.draggedTitle,n,-1)},l.prototype.onTitleDragLeave=function(){var l=this;this.dragEnterLeaveCounter--,0==this.dragEnterLeaveCounter&&(this.fixedTitles.forEach(function(n,t){l.titles[t]=n}),this.dragOverTitleIndex=-1)},l.prototype.onTitleDragEnd=function(){this.dragOverTitleIndex=-1,this.dragEnterLeaveCounter=0,this.titles=this.titles},Object(y.c)([w([]),Object(y.f)("design:type",Array)],l.prototype,"words",void 0),Object(y.c)([w(),Object(y.f)("design:type",Array)],l.prototype,"sortedWords",void 0),Object(y.c)([w(),Object(y.f)("design:type",Array)],l.prototype,"remainingTitles",void 0),Object(y.c)([w(),Object(y.f)("design:type",String)],l.prototype,"nextTitle",void 0),Object(y.c)([w(),Object(y.f)("design:type",Array)],l.prototype,"titles",void 0),Object(y.c)([w(),Object(y.f)("design:type",Array)],l.prototype,"searchResults",void 0),Object(y.c)([w([]),Object(y.f)("design:type",Array)],l.prototype,"results",void 0),l}(),k=t("AP4T"),I=t("9iV4"),C=function(){function l(l){this.http=l,this.url="https://allorigins.me/get",this.params=function(l,n){return new I.g({fromObject:{url:"https://www.google.com/search?q="+encodeURIComponent(n)+"&hl="+l+"&lr=lang_"+l}})},this.groupingSeparator=function(l){return 12345..toLocaleString(l).match(/12(.*)345/)[1]},this.localizedNumberPattern=function(l){return new RegExp("\\d{1,3}("+l+"\\d{3})*")}}return l.prototype.getSearchResults=function(l,n){var t=this;return k.a.create(function(e){t.http.get(t.url,{params:t.params(n,l)}).subscribe(function(l){var u=(new DOMParser).parseFromString(l.contents,"text/html").getElementById("resultStats");if(u){var r=t.groupingSeparator(n),a=t.localizedNumberPattern(r).exec(u.innerHTML)[0].replace(new RegExp("\\"+r,"g"),"");e.next(parseInt(a)),e.complete()}else e.error(-1),e.complete()},function(l){l.error instanceof Error?console.error("An error occurred:",l.error.message):console.error("Backend returned code "+l.status+", body was: "+l.error),e.error(l.status),e.complete()})})},l}(),D=function(){function l(l){this.http=l,this.url=function(l){return"https://"+l+".wikipedia.org/w/api.php"},this.params=function(l){return new I.g({fromObject:{action:"query",format:"json",list:"random",rnnamespace:"0",rnlimit:String(Math.min(Math.max(1,l),10)),origin:"*"}})}}return l.prototype.getRandomTitles=function(l,n){var t=this;return k.a.create(function(e){t.http.get(t.url(n),{params:t.params(l)}).subscribe(function(l){var n=[];l.query.random.forEach(function(l){return n.push(l.title)}),e.next(n),e.complete()},function(l){l.error instanceof Error?console.error("An error occurred:",l.error.message):console.error("Backend returned code "+l.status+", body was: "+l.error),e.error(l.status),e.complete()})})},l}(),E=function(l,n){this.title=l,this.searchResults=n},S=function(){function l(l,n){this.googleService=l,this.wikipediaService=n}return l.prototype.newGame=function(l,n){var t=this;return k.a.create(function(e){t.wikipediaService.getRandomTitles(l,n).subscribe(function(u){var r=[];u.forEach(function(u){return t.googleService.getSearchResults(u,n).subscribe(function(n){r.push(new E(u,n)),t.newGameStep(e,r,l)},function(n){console.error("Unable to get number of search results for: "+u),r.push(new E(u,-1)),t.newGameStep(e,r,l)})})},function(l){console.error("Unable to get random titles"),e.error(-1),e.complete()})})},l.prototype.newGameStep=function(l,n,t){n.length==t&&(l.next(n),l.complete())},l}(),N=e._2({encapsulation:0,styles:[[".card-next[_ngcontent-%COMP%]{background-color:#ffe500;color:#212529;width:100%}@media (min-width:576px){.card-next[_ngcontent-%COMP%]{width:20%}}.card-active[_ngcontent-%COMP%]{background-color:rgba(255,229,0,.03);color:#212529}@media (max-width:767.98px){.card-footer-searchresults[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.125);border-top:none;border-top-left-radius:0;border-bottom-left-radius:0}}.card-highlight[_ngcontent-%COMP%]{background-color:#6c757d;color:#fff}.btn-show-results[_ngcontent-%COMP%]{width:100%}@media (min-width:576px){.btn-show-results[_ngcontent-%COMP%]{width:40%}}.grabbable[_ngcontent-%COMP%]{cursor:move;cursor:grab;cursor:-webkit-grab}.grabbable[_ngcontent-%COMP%]:active{cursor:grabbing;cursor:-webkit-grabbing}"]],data:{}});function L(l){return e._24(0,[(l()(),e._4(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e._23(-1,null,["\n  "])),(l()(),e._4(2,0,null,null,7,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._4(4,0,null,null,0,"span",[["class","fas fa-fire text-primary"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._4(6,0,null,null,2,"span",[["l10nTranslate",""]],null,null,null,null,null)),e._3(7,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(l()(),e._23(-1,null,["Loading Game"])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n"]))],function(l,n){l(n,7,0,"")},null)}function j(l){return e._24(0,[(l()(),e._4(0,0,null,null,7,"div",[["class","card card-next grabbable"],["draggable","true"]],null,[[null,"dragstart"],[null,"dragenter"],[null,"dragover"],[null,"dragleave"],[null,"dragend"]],function(l,n,t){var e=!0,u=l.component;return"dragstart"===n&&(e=!1!==u.onNextTitleDragStart(t)&&e),"dragenter"===n&&(e=!1!==u.onNextTitleDragEnter(t)&&e),"dragover"===n&&(e=!1!==u.onNextTitleDragOver(t)&&e),"dragleave"===n&&(e=!1!==u.onNextTitleDragLeave()&&e),"dragend"===n&&(e=!1!==u.onNextTitleDragEnd()&&e),e},null,null)),(l()(),e._23(-1,null,["\n        "])),(l()(),e._4(2,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n          "])),(l()(),e._4(4,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e._23(5,null,["",""])),(l()(),e._23(-1,null,["\n        "])),(l()(),e._23(-1,null,["\n      "]))],null,function(l,n){l(n,5,0,n.component.nextTitle)})}function M(l){return e._24(0,[(l()(),e._4(0,0,null,null,2,"button",[["class","btn btn-primary btn-lg btn-show-results"],["l10nTranslate",""]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showResults()&&e),e},null,null)),e._3(1,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(l()(),e._23(-1,null,["Show Results"]))],function(l,n){l(n,1,0,"")},null)}function K(l){return e._24(0,[(l()(),e._4(0,0,null,null,7,"div",[["class","d-flex justify-content-center mb-4"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      "])),(l()(),e.Z(16777216,null,null,1,null,j)),e._3(3,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n      "])),(l()(),e.Z(16777216,null,null,1,null,M)),e._3(6,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    "]))],function(l,n){var t=n.component;l(n,3,0,t.nextTitle),l(n,6,0,!t.nextTitle)},null)}function P(l){return e._24(0,[(l()(),e._4(0,0,null,null,4,"div",[["class","card-body grabbable"],["draggable","true"]],[[2,"card-highlight",null]],[[null,"dragstart"],[null,"dragenter"],[null,"dragover"],[null,"dragleave"],[null,"dragend"]],function(l,n,t){var e=!0,u=l.component;return"dragstart"===n&&(e=!1!==u.onTitleDragStart(t,l.parent.context.index)&&e),"dragenter"===n&&(e=!1!==u.onTitleDragEnter(t)&&e),"dragover"===n&&(e=!1!==u.onTitleDragOver(t,l.parent.context.index)&&e),"dragleave"===n&&(e=!1!==u.onTitleDragLeave()&&e),"dragend"===n&&(e=!1!==u.onTitleDragEnd()&&e),e},null,null)),(l()(),e._23(-1,null,["\n          "])),(l()(),e._4(2,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e._23(3,null,["",""])),(l()(),e._23(-1,null,["\n        "]))],null,function(l,n){var t=n.component;l(n,0,0,t.dragOverTitleIndex==n.parent.context.index),l(n,3,0,t.titles[n.parent.context.index]||"\xa0")})}function R(l){return e._24(0,[(l()(),e._4(0,0,null,null,6,"div",[["class","card-body"]],[[2,"bg-success",null]],null,null,null,null)),(l()(),e._23(-1,null,["\n          "])),(l()(),e._4(2,0,null,null,3,"p",[["class","card-text text-white"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n            "])),(l()(),e._4(4,0,null,null,0,"span",[["class","fas fa-check fa-fw"]],null,null,null,null,null)),(l()(),e._23(5,null,[" ","\n          "])),(l()(),e._23(-1,null,["\n        "]))],null,function(l,n){var t=n.component;l(n,0,0,t.results[n.parent.context.index]),l(n,5,0,t.titles[n.parent.context.index]||"\xa0")})}function G(l){return e._24(0,[(l()(),e._4(0,0,null,null,11,"div",[["class","card-body"]],[[2,"bg-success",null]],null,null,null,null)),(l()(),e._23(-1,null,["\n          "])),(l()(),e._4(2,0,null,null,3,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n            "])),(l()(),e._4(4,0,null,null,0,"span",[["class","fas fa-times text-danger fa-fw"]],null,null,null,null,null)),(l()(),e._23(5,null,[" ","\n          "])),(l()(),e._23(-1,null,["\n          "])),(l()(),e._4(7,0,null,null,3,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n            "])),(l()(),e._4(9,0,null,null,0,"span",[["class","fas fa-check fa-fw"]],null,null,null,null,null)),(l()(),e._23(10,null,[" ","\n          "])),(l()(),e._23(-1,null,["\n        "]))],null,function(l,n){var t=n.component;l(n,0,0,t.results[n.parent.context.index]),l(n,5,0,t.titles[n.parent.context.index]||"\xa0"),l(n,10,0,t.sortedWords[n.parent.context.index].title)})}function Z(l){return e._24(0,[(l()(),e._4(0,0,null,null,17,"div",[["class","card d-flex flex-row flex-sm-column"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n        "])),(l()(),e.Z(16777216,null,null,1,null,P)),e._3(3,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n        "])),(l()(),e.Z(16777216,null,null,1,null,R)),e._3(6,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n        "])),(l()(),e.Z(16777216,null,null,1,null,G)),e._3(9,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n        "])),(l()(),e._4(11,0,null,null,5,"div",[["class","card-footer card-footer-searchresults d-flex align-items-center"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n          "])),(l()(),e._4(13,0,null,null,2,"small",[["class","text-muted"],["l10nDecimal",""]],null,null,null,null,null)),e._3(14,4866048,null,0,u.e,[u.h,e.k,e.C],{l10nDecimal:[0,"l10nDecimal"]},null),(l()(),e._23(15,null,["",""])),(l()(),e._23(-1,null,["\n        "])),(l()(),e._23(-1,null,["\n      "]))],function(l,n){var t=n.component;l(n,3,0,0==t.results.length),l(n,6,0,t.results.length>0&&t.results[n.context.index]),l(n,9,0,t.results.length>0&&!t.results[n.context.index]),l(n,14,0,"")},function(l,n){l(n,15,0,n.component.searchResults[n.context.index])})}function A(l){return e._24(0,[(l()(),e._4(0,0,null,null,10,"div",[["class","mb-4"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e.Z(16777216,null,null,1,null,K)),e._3(3,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._4(5,0,null,null,4,"div",[["class","card-group"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      "])),(l()(),e.Z(16777216,null,null,1,null,Z)),e._3(8,802816,null,0,p.h,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._23(-1,null,["\n    "])),(l()(),e._23(-1,null,["\n  "]))],function(l,n){var t=n.component;l(n,3,0,0==t.results.length),l(n,8,0,t.titles)},null)}function F(l){return e._24(0,[(l()(),e._4(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),e._23(-1,null,["\n  "])),(l()(),e.Z(16777216,null,null,1,null,A)),e._3(3,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._4(5,0,null,null,5,"div",[["class","d-flex justify-content-end"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._4(7,0,null,null,2,"button",[["class","btn btn-outline-secondary"],["l10nTranslate",""],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.newGame()&&e),e},null,null)),e._3(8,4866048,null,0,u.n,[u.r,e.k,e.C],{l10nTranslate:[0,"l10nTranslate"]},null),(l()(),e._23(-1,null,["New Game"])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n"]))],function(l,n){l(n,3,0,n.component.words.length>0),l(n,8,0,"")},null)}function W(l){return e._24(0,[(l()(),e.Z(16777216,null,null,1,null,L)),e._3(1,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n"])),(l()(),e.Z(16777216,null,null,1,null,F)),e._3(4,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,1,0,t.loadingGame),l(n,4,0,!t.loadingGame)},null)}var U=e._0("app-game",O,function(l){return e._24(0,[(l()(),e._4(0,0,null,null,1,"app-game",[],null,null,null,W,N)),e._3(1,49152,null,0,O,[u.h,S],null,null)],null,null)},{},{},[]),q=function(){function l(l){this.l10nLoader=l}return l.prototype.resolve=function(l,n){return this.l10nLoader.load()},l}(),B=t("0nO6"),z=t("dN2u"),H=t("KRwK"),J=function(){},Q=t("Zz+K"),V=t("wnyu"),X=t("tzcA"),Y=t("2waW"),$=t("PY9B"),ll=t("IBeK"),nl=t("g5gQ"),tl=t("xBEz"),el=t("PuIS"),ul=t("U0Tu"),rl=t("3rU7"),al=t("Cb36"),ol=t("5h8W"),il=t("6ade"),sl=t("4HaF"),cl=t("DaIH"),dl=t("0WLp"),gl=function(){},fl=function(){};t.d(n,"GameModuleNgFactory",function(){return pl});var pl=e._1(r,[],function(l){return e._12([e._13(512,e.j,e.X,[[8,[a.a,o.a,i.a,s.a,c.a,d.a,g.a,T,U]],[3,e.j],e.v]),e._13(4608,p.k,p.j,[e.s,[2,p.p]]),e._13(4608,u.r,u.r,[u.m,u.h,u.q,u.o]),e._13(4608,u.f,u.f,[u.g,u.m,u.h,u.r]),e._13(4608,q,q,[u.f]),e._13(4608,B.f,B.f,[]),e._13(4608,z.a,z.a,[e.j,e.p,H.a]),e._13(4608,C,C,[I.c]),e._13(4608,D,D,[I.c]),e._13(4608,S,S,[C,D]),e._13(512,u.d,u.d,[e.p]),e._13(512,u.p,u.p,[u.d]),e._13(512,u.j,u.j,[u.d]),e._13(512,p.b,p.b,[]),e._13(512,J,J,[]),e._13(512,f.m,f.m,[[2,f.r],[2,f.k]]),e._13(512,Q.a,Q.a,[]),e._13(512,V.a,V.a,[]),e._13(512,X.a,X.a,[]),e._13(512,Y.a,Y.a,[]),e._13(512,$.a,$.a,[]),e._13(512,B.e,B.e,[]),e._13(512,B.a,B.a,[]),e._13(512,ll.a,ll.a,[]),e._13(512,nl.a,nl.a,[]),e._13(512,tl.a,tl.a,[]),e._13(512,el.a,el.a,[]),e._13(512,ul.a,ul.a,[]),e._13(512,rl.a,rl.a,[]),e._13(512,al.a,al.a,[]),e._13(512,ol.a,ol.a,[]),e._13(512,il.a,il.a,[]),e._13(512,sl.a,sl.a,[]),e._13(512,cl.a,cl.a,[]),e._13(512,dl.a,dl.a,[]),e._13(512,gl,gl,[]),e._13(512,fl,fl,[]),e._13(512,r,r,[]),e._13(256,u.m,{providers:[{type:1,prefix:"./assets/locale-"},{type:1,prefix:"./assets/locale-game-"}],missingValue:"No key"},[]),e._13(1024,f.i,function(){return[[{path:"",component:v,resolve:{l10n:q},children:[{path:"",component:O}]}]]},[])])})}});
webpackJsonp([0],{"+Vle":function(e,r,t){"use strict";t.d(r,"a",function(){return n});var n=function(e,r){this.title=e,this.searchResults=r}},"6bYS":function(e,r,t){"use strict";t.d(r,"a",function(){return s});var n=t("TToO"),o=t("YaPU"),s=(t("tS9H"),function(){function e(e){this.allOriginsService=e,this.url=function(e,r){return"https://www.google.com/search?q="+encodeURIComponent(e.trim().replace(/\s\s+/g," ").toLowerCase()).replace(/%20/g,"+")+"&hl="+r}}return e.prototype.getSearchResults=function(e,r){var t=this;return o.a.create(function(n){t.allOriginsService.getContents(t.url(e,r)).subscribe(function(o){var s=(new DOMParser).parseFromString(o,"text/html").getElementById("resultStats");if(s){var c=/\d{1,3}(.\d{3})*/.exec(s.innerHTML)[0].replace(/[^0-9]/g,"");n.next(parseInt(c)),n.complete()}else t.getSearchResultsFromSecondPage(e,r,n)},function(e){return n.error(t.handleAllOriginsError(e))})})},e.prototype.getSearchResultsFromSecondPage=function(e,r,t){var n=this,o=this.url(e,r)+"&start=10";this.allOriginsService.getContents(o).subscribe(function(e){var r=(new DOMParser).parseFromString(e,"text/html").getElementById("resultStats");if(r){var n=/\d{1,3}(.\d{3})*/g;n.exec(r.innerHTML);var o=n.exec(r.innerHTML)[0].replace(/[^0-9]/g,"");t.next(parseInt(o)),t.complete()}else t.error(new c("Unable to load search results"))},function(e){return t.error(n.handleAllOriginsError(e))})},e.prototype.handleAllOriginsError=function(e){return-1==e.httpCode?e:(console.error("Backend returned code "+e.httpCode),new c("Backend returned code "+e.httpCode))},e}()),c=function(e){function r(t){var n=e.call(this,"[Google] "+t)||this;return Object.setPrototypeOf(n,r.prototype),n}return Object(n.d)(r,e),r}(Error)},"787C":function(e,r,t){"use strict";t.d(r,"a",function(){return c});var n=t("TToO"),o=t("ItHS"),s=t("YaPU"),c=function(){function e(e){this.http=e,this.url="https://ssl.setolabs.com/yandex/search",this.params=function(e){return new o.g({fromObject:{query:e.trim().replace(/\s\s+/g," ").replace(/\s/g,"+").toLowerCase()}})}}return e.prototype.getSearchResults=function(e){var r=this;return s.a.create(function(t){r.http.get(r.url,{params:r.params(e)}).subscribe(function(e){e.yandexsearch&&e.yandexsearch.response&&e.yandexsearch.response.results&&e.yandexsearch.response.results.grouping&&e.yandexsearch.response.results.grouping["found-docs"]&&e.yandexsearch.response.results.grouping["found-docs"][0]&&e.yandexsearch.response.results.grouping["found-docs"][0]._text?(t.next(e.yandexsearch.response.results.grouping["found-docs"][0]._text),t.complete()):e.yandexsearch&&e.yandexsearch.response&&e.yandexsearch.response.found&&e.yandexsearch.response.found[0]&&e.yandexsearch.response.found[0]._text?(t.next(e.yandexsearch.response.found[0]._text),t.complete()):t.error(new u("Unable to load search results"))},function(e){return t.error(r.handleHttpErrorResponse(e))})})},e.prototype.handleHttpErrorResponse=function(e){return e.error instanceof Error?(console.error("An error occurred:",e.error.message),new u("An error occurred: "+e.error.message)):(console.error("Backend returned code "+e.status+", body was: "+e.error),new u("Backend returned code "+e.status))},e}(),u=function(e){function r(t){var n=e.call(this,"[Yandex] "+t)||this;return Object.setPrototypeOf(n,r.prototype),n}return Object(n.d)(r,e),r}(Error)},UOkm:function(e,r,t){"use strict";var n=t("YaPU"),o=t("gL+p");n.a.prototype.map=o.a,t("o2pl"),t("6bYS");var s=t("K1Wa");t("787C"),t.d(r,"a",function(){return c});var c=function(){function e(e,r,t){this.yandexService=e,this.googleService=r,this.bingService=t}return e.prototype.getSearchResults=function(e,r,t){var n=this;switch(e){case s.a.Yandex:return this.yandexService.getSearchResults(r).map(function(e){return n.beautifyNumber(e)});case s.a.Google:return this.googleService.getSearchResults(r,t).map(function(e){return n.beautifyNumber(e)});case s.a.Bing:return this.bingService.getSearchResults(r,t).map(function(e){return n.beautifyNumber(e)});default:return this.yandexService.getSearchResults(r).map(function(e){return n.beautifyNumber(e)})}},e.prototype.beautifyNumber=function(e){for(var r=0;e>999;)e=Math.floor(e/10),r++;for(;r>0;)e*=10,r--;return e},e}()},o2pl:function(e,r,t){"use strict";t.d(r,"a",function(){return s});var n=t("TToO"),o=t("YaPU"),s=(t("tS9H"),function(){function e(e){this.allOriginsService=e,this.url=function(e,r){return"https://www.bing.com/search?q="+encodeURIComponent(e.trim().replace(/\s\s+/g," ").toLowerCase()).replace(/%20/g,"+")+"&setLang="+r}}return e.prototype.getSearchResults=function(e,r){var t=this;return o.a.create(function(n){t.allOriginsService.getContents(t.url(e,r)).subscribe(function(e){var r=(new DOMParser).parseFromString(e,"text/html").getElementsByClassName("sb_count");if(r&&r[0]){var t=/\d{1,3}(.\d{3})*/.exec(r[0].innerHTML)[0].replace(/[^0-9]/g,"");n.next(parseInt(t)),n.complete()}else n.error(new c("Unable to load search results"))},function(e){return n.error(t.handleAllOriginsError(e))})})},e.prototype.handleAllOriginsError=function(e){return-1==e.httpCode?e:(console.error("Backend returned code "+e.httpCode),new c("Backend returned code "+e.httpCode))},e}()),c=function(e){function r(t){var n=e.call(this,"[Bing] "+t)||this;return Object.setPrototypeOf(n,r.prototype),n}return Object(n.d)(r,e),r}(Error)},tS9H:function(e,r,t){"use strict";t.d(r,"a",function(){return c});var n=t("TToO"),o=t("ItHS"),s=t("YaPU"),c=function(){function e(e){this.http=e,this.url="https://ssl.setolabs.com/allorigins/get",this.params=function(e){return new o.g({fromObject:{url:e},encoder:new a})}}return e.prototype.getContents=function(e){var r=this;return s.a.create(function(t){r.http.get(r.url,{params:r.params(e)}).subscribe(function(e){e.contents?(t.next(e.contents),t.complete()):t.error(e.status&&e.status.http_code?new u("Unable to load contents",e.status.http_code):new u("Unable to load contents"))},function(e){return t.error(r.handleHttpErrorResponse(e))})})},e.prototype.handleHttpErrorResponse=function(e){return e.error instanceof Error?(console.error("An error occurred:",e.error.message),new u("An error occurred: "+e.error.message)):(console.error("Backend returned code "+e.status+", body was: "+e.error),new u("Backend returned code "+e.status))},e}(),u=function(e){function r(t,n){void 0===n&&(n=-1);var o=e.call(this,"[AllOrigins] "+t)||this;return Object.setPrototypeOf(o,r.prototype),o.httpCode=n,o}return Object(n.d)(r,e),r}(Error),a=function(){function e(){}return e.prototype.encodeKey=function(e){return encodeURIComponent(e)},e.prototype.encodeValue=function(e){return encodeURIComponent(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}()},tSMp:function(e,r,t){"use strict";t.d(r,"a",function(){return n});var n=function(){}},uglW:function(e,r,t){"use strict";t.d(r,"a",function(){return o});var n=t("K1Wa"),o=function(){function e(e,r,t){this.titles=e,this.languageCode=r,this.source=t}return e.createFromGame=function(r){return new e(r.words.map(function(e){return e.title}),r.languageCode,r.source)},e.createFromFragment=function(r){var t=new e;if(!r)return t;var o=r.split("&").map(function(e){return e.split("=")}).reduce(function(e,r){return e[r[0]]=r[1],e},{});return o.t&&(t.titles=o.t.split(",").map(function(e){return decodeURIComponent(e)})),o.l&&(t.languageCode=decodeURIComponent(o.l)),o.s&&(t.source=n.a[decodeURIComponent(o.s)]),t},e.prototype.toString=function(){var e={};return this.titles&&(e.t=this.titles.map(function(e){return encodeURIComponent(e)}).join(",")),this.languageCode&&(e.l=encodeURIComponent(this.languageCode)),this.source&&(e.s=encodeURIComponent(this.source)),Object.entries(e).map(function(e){return e[0]+"="+e[1]}).join("&")},e}()}});
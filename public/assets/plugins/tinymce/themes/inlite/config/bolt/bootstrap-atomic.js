!function(e){var r=e.ephox=e.ephox||{},n=r.bolt=r.bolt||{},t=function(e,r){return r.apply(null,e)},o=n.kernel=n.kernel||{};o.api=o.api||{},o.async=o.api||{},o.fp=o.fp||{},o.modulator=o.modulator||{},o.module=o.module||{},o.fp.array=t([],function(){var e=function(e,r){if(e.length!==r.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==r[n])return!1;return!0},r=function(e,r){for(var n=r||function(e){return e===!0},t=0;t<e.length;++t)if(n(e[t])!==!0)return!1;return!0},n=function(e,r){for(var n=[],t=0;t<e.length;++t)n.push(r(e[t],t));return n},t=function(e){for(var r=[],n=0;n<e.length;++n)r=r.concat(e[n]);return r},o=function(e,r){return t(n(e,r))},u=function(e,r){for(var n=[],t=0;t<e.length;++t)r(e[t])&&n.push(e[t]);return n},a=n,i=function(e,n){return!r(e,function(e){return e!==n})},c=function(e,r){for(var n=0;n<e.length;++n)if(e[n]===r)return n;return-1};return{equals:e,forall:r,map:n,flatten:t,flatmap:o,filter:u,each:a,contains:i,indexof:c}}),o.fp.object=t([],function(){var e=function(e,r){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[t]=r(t,e[t]));return n},r=e,n=function(e,n){r(n,function(r,n){e[r]=n})},t=function(e){var n=[];return r(e,function(e){n.push(e)}),n};return{each:r,keys:t,map:e,merge:n}}),o.fp.functions=t([],function(){var e=function(e){var r=Array.prototype.slice,n=r.call(arguments,1);return function(){var t=n.concat(r.call(arguments,0));return e.apply(null,t)}},r=function(e){return function(){var r=Array.prototype.slice;return!e.apply(null,r.call(arguments,0))}},n=function(e){var r=Array.prototype.slice;return e.apply(null,r.call(arguments,0))};return{curry:e,not:r,apply:n}}),o.async.map=t([o.fp.array],function(e){var r=function(r,n,t){var o=r.length,u=0,a=[];e.each(r,function(e,r){n(e,function(e){++u,a[r]=e,u===o&&t(a)})})};return{amap:r}}),o.async.piggybacker=t([o.fp.array,o.fp.functions],function(e,r){var n=function(){var n={},t=function(t){var o=n[t];delete n[t],e.each(o,r.apply)},o=function(e,o,u){void 0===n[e]?(n[e]=[u],o(r.curry(t,e))):n[e].push(u)};return{piggyback:o}};return{create:n}}),o.modulator.globalator=t([],function(){var e=function(){var e=function(e,r){for(var n=e.split("."),t=r,o=0;o<n.length&&void 0!==t;++o)t=t[n[o]];return t},r=Function("return this")(),n=function(e){return 0===e.indexOf("global!")},t=function(n,t,o){var u=n.substring("global!".length),a=function(o,a){var i=e(u,r);void 0!==i?(t(n,[],function(){return i}),o()):a("Modulator error: could not resolve global ["+u+"]")};return{url:n,load:a,serial:!0}};return{can:n,get:t}};return{create:e}}),o.modulator.bolt=t([o.fp.functions],function(e){var r=function(r,n,t,o,u,a){var i=function(e){return e===t||0===e.indexOf(t+".")||0===e.indexOf(t+"/")},c=function(t){var i=void 0!==a&&a.absolute===!0?o:n(o),c=void 0!==a&&a.fresh===!0?"?cachebuster="+(new Date).getTime():"",l=i+"/"+u(t)+".js"+c,f=e.curry(r.load,l);return{url:l,load:f,serial:!1}};return{can:i,get:c}};return{create:r}}),o.module.stratifier=t([o.fp.array],function(e){var r=function(r){var n=e.filter(r,function(e){return!e.serial});return n.length>0?n:r.slice(0,1)};return{stratify:r}}),o.module.analyser=t([o.fp.array],function(e){var r=function(r,n){var t=e.indexof(r,n),o=r.slice(t);return o.concat([n])},n=function(n,t){var o,u={},a=[],i=[],c=function(r){e.each(t[r],s)},l=function(e){t[e]?c(e):i.push(e)},f=function(e){a.push(e),l(e),a.pop()},d=function(n){e.contains(a,n)?o=r(a,n):f(n)},s=function(e){u[e]||(d(e),u[e]=!0)};return e.each(n,s),o?{cycle:o}:{load:i}};return{analyse:n}}),o.module.fetcher=t([o.fp.array,o.fp.functions,o.async.map,o.async.piggybacker,o.module.stratifier],function(e,r,n,t,o){var u=function(u,a,i,c,l,f){var d=t.create(),s=function(n,t){var o=e.filter(t,r.not(a));o.length>0?i("Fetcher error: modules were not defined: "+o.join(", ")):n()},p=function(e,n){var t=r.curry(n,e.id),o=function(r){e.load(r,i)};d.piggyback(e.url,o,t)},m=function(e,t){var u=r.curry(s,t),a=o.stratify(e);n.amap(a,p,u)},v=function(e,r){u.regulate(e,c,l,f,function(e){m(e,r)},i)};return{fetch:v}};return{create:u}}),o.module.loader=t([o.module.analyser],function(e){var r=function(r,n,t,o,u,a){var i=e.analyse(r,n);i.cycle?a("Dependency error: a circular module dependency exists from "+i.cycle.join(" ~> ")):0===i.load.length?u():t.fetch(i.load,o)};return{load:r}}),o.module.manager=t([o.fp.array,o.fp.object,o.module.loader,o.module.fetcher],function(e,r,n,t){var o=function(o,u){var a={},i={},c=function(e,r,n){void 0===e?u("Define error: module id can not be undefined"):void 0!==a[e]?u("Define error: module '"+e+"' is already defined"):a[e]={id:e,dependencies:r,definition:n}},l=function(t,o){var i=function(){var r=e.map(t,f);o.apply(null,r)},c=function(){var e=r.map(a,function(e,r){return r.dependencies});n.load(t,e,p,c,i,u)};c()},f=function(e){if(void 0!==i[e])return i[e];if(void 0===a[e])throw"module '"+e+"' is not defined";var r=d(e);if(void 0===r)throw"module '"+e+"' returned undefined from definition function";return i[e]=r,r},d=function(r){var n=a[r],t=e.map(n.dependencies,f);return n.definition.apply(null,t)},s=function(e){return void 0!==a[e]},p=t.create(o,s,u,c,l,f);return{define:c,require:l,demand:f}};return{create:o}}),o.api.sources=t([o.fp.array,o.fp.object,o.modulator.globalator],function(e,r,n){var t=function(t,o){var u={global:{instance:n}};r.each(t,function(e,r){u[e]={instance:r}}),e.each(o.types,function(e){u[e.type]={id:e.modulator}});var a=o.sources.slice(0),i=[n.create()],c=function(e){if(void 0===u[e])throw"Unknown modulator type ["+e+"]."},l=function(e){return c(e),void 0!==u[e].instance},f=function(e){return c(e),u[e].id},d=function(e){return c(e),u[e].instance},s=function(e,r){c(e),u[e].instance=r},p=function(e){for(var r=0;r<i.length;++r)if(i[r].can(e))return{found:i[r]};return{notfound:!0}},m=function(){var r=[];e.each(a,function(e){if(l(e.type)){var n=d(e.type),t=n.create.apply(null,e.args);i.push(t)}else r.push(e)}),a=r};return{isResolved:l,idOf:f,instanceOf:d,register:s,find:p,crank:m}};return{create:t}}),o.api.regulator=t([o.fp.array,o.fp.functions],function(e,r){var n=function(n){var t=function(t,u,c,l,f,d){n.crank();var s=e.map(t,i),p=e.filter(s,r.not(n.isResolved));0===p.length?o(t,u,c,l,f,d):a(p,t,u,c,l,f,d)},o=function(e,r,t,o,a,i){for(var c=[],l=0;l<e.length;++l){var f=e[l],d=n.find(f);if(d.notfound)return void i("Could not find source for module ["+f+"]");var s=d.found.get(f,r,t,o);c[l]=u(f,s)}a(c)},u=function(e,r){return{id:e,url:r.url,load:r.load,serial:r.serial}},a=function(r,o,u,a,i,c,l){var f=e.map(r,n.idOf);a(f,function(){var f=arguments;e.each(r,function(e,r){n.register(e,f[r])}),t(o,u,a,i,c,l)})},i=function(e){var r=e.indexOf("!");return-1===r?"bolt":e.substring(0,r)};return{regulate:t}};return{create:n}}),o.api.config=t([o.module.manager,o.api.regulator,o.api.sources],function(e,r,n){var t=function(t,o,u){var a=n.create(o,t),i=r.create(a),c=e.create(i,u);return{define:c.define,require:c.require,demand:c.demand}};return{configure:t}})}(Function("return this")()),function(scope){var ephox=scope.ephox=scope.ephox||{},bolt=ephox.bolt=ephox.bolt||{},def=function(e,r){return r.apply(null,e)},loader=bolt.loader=bolt.loader||{};loader.executor=loader.executor||{},loader.api=loader.api||{},loader.transporter=loader.transporter||{},loader.tag=loader.tag||{},loader.tag.script=def([],function(){var e=function(e){return function(r){("loaded"===r.srcElement.readyState||"complete"===r.srcElement.readyState)&&e()}},r=function(e){return e.attachEvent&&!window.opera},n=function(n,t){r(n)?n.attachEvent("onreadystatechange",e(t)):n.addEventListener("load",t,!1)},t=function(e){var r=document.createElement("script");return r.type="text/javascript",n(r,e),r},o=function(e,r){var n=t(r);e(n);var o=document.getElementsByTagName("head")[0];o.appendChild(n)};return{insert:o}}),loader.transporter.commonjs=def([],function(){var e=function(e,r,n){var t=require("fs");t.exists(e,function(o){o?t.readFile(e,"UTF-8",function(t,o){t?n("Error reading file ["+e+"], error ["+t+"]"):r(o)}):n("File does not exist ["+e+"]")})};return{read:e}}),loader.transporter.xhr=def([],function(){var e=function(){var e=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];return r(e)},r=function(e){for(var r=0;r<e.length;++r)try{return e[r]()}catch(n){}},n=function(e,r,n,o){return function(){4===e.readyState&&t(e,r,n,o)}},t=function(e,r,n,t){200===e.status||304===e.status?n(e.responseText):t("Transport error: "+e.status+" "+e.statusText+' for resource: "'+r+'"')},o=function(e,r,t,o){e.open("GET",r,!0),e.onreadystatechange=n(e,r,t,o),e.send()},u=function(r,n,t){var u=e();u?o(u,r,n,t):t("Transport error: browser does not support XMLHttpRequest.")};return{request:u}}),loader.executor.evaller=def([],function(){var execute=function(data,onsuccess,onfailure){try{eval(data)}catch(e){return void onfailure(e)}onsuccess()};return{execute:execute}}),loader.executor.injector=def([loader.tag.script],function(e){var r=function(r,n,t){var o=function(e){e.text=r},u=function(){};e.insert(o,u),n()};return{execute:r}}),loader.api.commonjsevaller=def([loader.transporter.commonjs,loader.executor.evaller],function(e,r){var n=function(n,t,o){var u=function(e){r.execute(e,t,o)};e.read(n,u,o)};return{load:n}}),loader.api.scripttag=def([loader.tag.script],function(e){var r=function(r,n,t){var o=function(e){e.src=r};e.insert(o,n)};return{load:r}}),loader.api.xhrevaller=def([loader.transporter.xhr,loader.executor.evaller],function(e,r){var n=function(n,t,o){var u=function(e){r.execute(e,t,o)};e.request(n,u,o)};return{load:n}}),loader.api.xhrinjector=def([loader.transporter.xhr,loader.executor.injector],function(e,r){var n=function(n,t,o){var u=function(e){r.execute(e,t)};e.request(n,u,o)};return{load:n}})}(Function("return this")()),function(scope){var ephox=scope.ephox=scope.ephox||{},bolt=ephox.bolt=ephox.bolt||{},def=function(e,r){return r.apply(null,e)},module=bolt.module=bolt.module||{};module.bootstrap=module.bootstrap||{},module.config=module.config||{},module.error=module.error||{},module.modulator=module.modulator||{},module.reader=module.reader||{},module.runtime=module.runtime||{},module.util=module.util||{},module.error.error=def([],function(){var e=function(e){throw e||new Error("unknown error")};return{die:e}}),module.config.mapper=def([],function(){var e=function(e){return e},r=function(e){return e.replace(/\./g,"/")},n=function(e){return function(){return e}};return{flat:e,hierarchical:r,constant:n}}),module.api=def([module.runtime],function(e){var r=function(r){return function(){return e[r].apply(null,arguments)}};return{define:r("define"),require:r("require"),demand:r("demand"),main:r("main"),load:r("load"),loadscript:r("loadscript")}}),module.util.path=def([],function(){var e=function(e){var r=e.replace(/\\/g,"/"),n=r.lastIndexOf("/");return r.substring(0,n)},r=function(e){var r=e.replace(/\\/g,"/"),n=r.lastIndexOf("/");return r.substring(n+1)};return{basename:r,dirname:e}}),module.util.locator=def([],function(){var e=function(){var e=document.getElementsByTagName("script");return e[e.length-1].src},r=module.runtime.locate,n=function(){var n=r||e;return n()};return{locate:n}}),module.util.pather=def([module.util.path],function(e){var r=function(r){var n=e.dirname(r);return function(e){return n+"/"+e}};return{create:r}}),module.modulator.modulators=def([ephox.bolt.kernel.fp.functions,ephox.bolt.kernel.modulator.bolt,ephox.bolt.loader.api.commonjsevaller,ephox.bolt.loader.api.scripttag,ephox.bolt.loader.api.xhrevaller,ephox.bolt.loader.api.xhrinjector],function(e,r,n,t,o,u){var a=function(r,n){var t=e.curry(r.create,n);return{create:t}};return{boltcommonjs:a(r,n),boltscripttag:a(r,t),boltxhreval:a(r,o),boltxhrinjector:a(r,u)}}),module.config.builtins=def([ephox.bolt.module.modulator.modulators.boltscripttag,ephox.bolt.module.modulator.modulators.boltcommonjs],function(e,r){return{browser:{bolt:e,amd:e},commonjs:{bolt:r,amd:r}}}),module.config.specs=def([module.util.pather],function(e){var r=function(e,r){return{type:e,implementation:r,modulator:r+".Modulator",compiler:r+".Compiler"}},n=function(r){return function(n){return{type:n,relativeto:r,args:[e.create(r)].concat(Array.prototype.slice.call(arguments,1))}}};return{type:r,source:n}}),module.reader.bouncing=def([ephox.bolt.kernel.fp.array,module.error.error,module.config.specs],function(ar,error,specs){var bounce=function(e,r,n){var t=n.configs.shift();r(t.relativeto,t.config,e,n)},tick=function(e,r,n,t,o){var u=ar.map(r.configs||[],function(r){return{relativeto:e,config:r}}),a={sources:o.sources.concat(r.sources||[]),types:o.types.concat(r.types||[]),configs:u.concat(o.configs)};a.configs.length>0?bounce(n,t,a):n({sources:a.sources,types:a.types})},evaluate=function(file,payload,done,read,acc){var result={},mapper=module.config.mapper,type=specs.type,source=specs.source(file),configure=function(e){result=e};try{eval(payload)}catch(e){throw"Could not load configuration ["+file+"], with: "+e}tick(file,result,done,read,acc)};return{evaluate:evaluate}}),module.reader.browser=def([module.error.error,module.reader.bouncing,module.util.path,ephox.bolt.loader.transporter.xhr],function(e,r,n,t){var o=function(u,a,i,c){var l=c||{sources:[],types:[],configs:[]},f=n.dirname(u),d=f+"/"+a;t.request(d,function(e){r.evaluate(d,e,i,o,l)},e.die)};return{read:o}}),module.reader.node=def([module.reader.bouncing],function(e,r,n){var t=function(r,n,o,u){var a=require("fs"),i=require("path"),c=u||{sources:[],types:[],configs:[]},l=i.dirname(r),f=i.resolve(l,n),d=a.readFileSync(f,"UTF-8");e.evaluate(f,d,o,t,c)};return{read:t}}),module.reader.direct=def([],function(){var e=function(e){return function(r){r({sources:e.sources||[],types:e.types||[],configs:e.configs||[]})}};return{create:e}}),module.bootstrap.configloader=def([module.util.locator,module.reader.browser],function(e,r){var n=function(n){var t=e.locate();return function(e){r.read(t,n,e)}};return{create:n}}),module.bootstrap.deferred=def([ephox.bolt.kernel.fp.array],function(e){var r=[],n=function(e,n){var t=function(r){r(e,n)};r.push(t)},t=function(n){e.each(r,function(e){e(n)}),r=[]};return{require:n,configured:t}}),module.bootstrap.main=def([ephox.bolt.kernel.api.config,module.bootstrap.deferred,module.runtime],function(e,r,n){var t=function(e,r,t,o){n.require(t||[],function(){o&&o.apply(null,arguments),n.require([e],function(e){e.apply(null,r||[])})})};return{main:t}}),module.bootstrap.install=def([ephox.bolt.kernel.api.config,module.bootstrap.deferred,module.bootstrap.main,module.runtime,module.error.error],function(e,r,n,t,o){var u=function(){throw"bolt not initialised, can not call define or demand, did you mean to use require or main?"},a=function(a,i,c,l){t.define=u,t.demand=u,t.require=r.require,t.main=n.main,t.load=c,t.loadscript=l,a(function(n){var u=e.configure(n,i,o.die);t.define=u.define,t.require=u.require,t.demand=u.demand,r.configured(t.require)})};return{install:a}})}(Function("return this")()),function(e){var r=ephox.bolt.kernel.fp.object,n=ephox.bolt.module.api,t=ephox.bolt.module.config.builtins.browser,o=ephox.bolt.module.bootstrap.install,u=ephox.bolt.module.bootstrap.configloader.create("atomic.js"),a=ephox.bolt.loader.transporter.xhr.request,i=ephox.bolt.loader.api.scripttag.load;o.install(u,t,a,i),r.merge(e,n)}(Function("return this;")());
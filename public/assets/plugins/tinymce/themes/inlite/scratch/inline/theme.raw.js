!function(){var t={},e=function(e){for(var n=t[e],r=n.deps,o=n.defn,c=r.length,l=new Array(c),a=0;c>a;++a)l[a]=i(r[a]);var u=o.apply(null,l);if(void 0===u)throw"module ["+e+"] returned undefined";n.instance=u},n=function(e,n,i){if("string"!=typeof e)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+e;if(void 0===i)throw"no definition function for "+e;t[e]={deps:n,defn:i,instance:void 0}},i=function(n){var i=t[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&e(n),i.instance},r=function(t,e){for(var n=t.length,r=new Array(n),o=0;n>o;++o)r.push(i(t[o]));e.apply(null,e)},o={};o.bolt={module:{api:{define:n,require:r,demand:i}}};var c=n,l=function(t,e){c(t,[],function(){return e})};l("global!tinymce.ThemeManager",tinymce.ThemeManager),l("global!tinymce.util.Delay",tinymce.util.Delay),l("global!tinymce.util.Tools",tinymce.util.Tools),l("global!tinymce.ui.Factory",tinymce.ui.Factory),l("global!tinymce.DOM",tinymce.DOM),/**
 * Toolbar.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/ui/Toolbar",["global!tinymce.util.Tools","global!tinymce.ui.Factory"],function(t,e){var n=function(t,e){return function(n,i){for(var r,o=i.parents.length;o--&&(r=i.parents[o].nodeName,"OL"!=r&&"UL"!=r););t.active(n&&r==e)}},i=function(t,e){var i=function(t,e){return{selector:t,handler:e}},r=function(t){e.active(t)},o=function(t){e.disabled(t)};return"bullist"==t?i("ul > li",n(e,"UL")):"numlist"==t?i("ol > li",n(e,"OL")):e.settings.stateSelector?i(e.settings.stateSelector,r):e.settings.disabledStateSelector?i(e.settings.disabledStateSelector,o):null},r=function(t,e,n){return function(){var r=i(e,n);null!==r&&t.selection.selectorChanged(r.selector,r.handler)}},o=function(n,i,o){var c,l=[];if(o)return t.each(o.split(/[ ,]/),function(t){var i;"|"==t?c=null:e.has(t)?(t={type:t},l.push(t),c=null):(c||(c={type:"buttongroup",items:[]},l.push(c)),n.buttons[t]&&(i=t,t=n.buttons[i],"function"==typeof t&&(t=t()),t.type=t.type||"button",t=e.create(t),t.on("postRender",r(n,i,t)),c.items.push(t)))}),e.create({type:"toolbar",layout:"flow",name:i,items:l})};return{create:o}}),l("global!tinymce.util.Promise",tinymce.util.Promise),/**
 * Uuid.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/alien/Uuid",[],function(){var t=0,e=function(){var t=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+t()+t()+t()},n=function(n){return n+t++ +e()};return{uuid:n}}),/**
 * Bookmark.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/alien/Bookmark",[],function(){var t=function(t,e){function n(n){var r,o,c;o=e[n?"startContainer":"endContainer"],c=e[n?"startOffset":"endOffset"],1==o.nodeType&&(r=t.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(c=Math.min(c,o.childNodes.length-1),n?o.insertBefore(r,o.childNodes[c]):t.insertAfter(r,o.childNodes[c])):o.appendChild(r),o=r,c=0),i[n?"startContainer":"endContainer"]=o,i[n?"startOffset":"endOffset"]=c}var i={};return n(!0),e.collapsed||n(),i},e=function(t,e){function n(n){function i(t){for(var e=t.parentNode.firstChild,n=0;e;){if(e==t)return n;(1!=e.nodeType||"bookmark"!=e.getAttribute("data-mce-type"))&&n++,e=e.nextSibling}return-1}var r,o,c;r=c=e[n?"startContainer":"endContainer"],o=e[n?"startOffset":"endOffset"],r&&(1==r.nodeType&&(o=i(r),r=r.parentNode,t.remove(c)),e[n?"startContainer":"endContainer"]=r,e[n?"startOffset":"endOffset"]=o)}n(!0),n();var i=t.createRng();return i.setStart(e.startContainer,e.startOffset),e.endContainer&&i.setEnd(e.endContainer,e.endOffset),i};return{create:t,resolve:e}}),l("global!tinymce.dom.TreeWalker",tinymce.dom.TreeWalker),l("global!tinymce.dom.RangeUtils",tinymce.dom.RangeUtils),/**
 * Unlink.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/alien/Unlink",["tinymce/inlite/alien/Bookmark","global!tinymce.util.Tools","global!tinymce.dom.TreeWalker","global!tinymce.dom.RangeUtils"],function(t,e,n,i){var r=function(t,e,i){var r,o,c=[];for(r=new n(e,t),o=e;o&&(1===o.nodeType&&c.push(o),o!==i);o=r.next());return c},o=function(n,i){var r,o,c;o=n.dom,c=n.selection,r=t.create(o,c.getRng()),e.each(i,function(t){n.dom.remove(t,!0)}),c.setRng(t.resolve(o,r))},c=function(t){return"A"===t.nodeName&&t.hasAttribute("href")},l=function(t,e){var n=t.getParent(e,c);return n?n:e},a=function(t){var n,o,a,u,s,f,m;return s=t.selection,f=t.dom,m=s.getRng(),n=l(f,i.getNode(m.startContainer,m.startOffset)),o=i.getNode(m.endContainer,m.endOffset),a=t.getBody(),u=e.grep(r(a,n,o),c)},u=function(t){o(t,a(t))};return{unlinkSelection:u}}),/**
 * Actions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/Actions",["tinymce/inlite/alien/Uuid","tinymce/inlite/alien/Unlink"],function(t,e){var n=function(t,e){var n,i,r;for(r='<table data-mce-id="mce" style="width: 100%">',r+="<tbody>",i=0;e>i;i++){for(r+="<tr>",n=0;t>n;n++)r+="<td><br></td>";r+="</tr>"}return r+="</tbody>",r+="</table>"},i=function(t){var e=t.dom.select("*[data-mce-id]");return e[0]},r=function(t,e,r){t.undoManager.transact(function(){var o,c;t.insertContent(n(e,r)),o=i(t),o.removeAttribute("data-mce-id"),c=t.dom.select("td,th",o),t.selection.setCursorLocation(c[0],0)})},o=function(t,e){t.execCommand("FormatBlock",!1,e)},c=function(e,n,i){var r,o;r=e.editorUpload.blobCache,o=r.create(t.uuid("mceu"),i,n),r.add(o),e.insertContent(e.dom.createHTML("img",{src:o.blobUri()}))},l=function(t){t.selection.collapse(!1)},a=function(t){t.focus(),e.unlinkSelection(t),l(t)},u=function(t,e,n){t.focus(),t.dom.setAttrib(e,"href",n),l(t)},s=function(t,e){t.execCommand("mceInsertLink",!1,{href:e}),l(t)},f=function(t,e){var n=t.dom.getParent(t.selection.getStart(),"a[href]");n?u(t,n,e):s(t,e)},m=function(t,e){0===e.trim().length?a(t):f(t,e)};return{insertTable:r,formatBlock:o,insertBlob:c,createLink:m,unlink:a}}),/**
 * UrlType.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/UrlType",[],function(){var t=function(t){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(t.trim())},e=function(t){return/^https?:\/\//.test(t.trim())};return{isDomainLike:t,isAbsolute:e}}),/**
 * Forms.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/ui/Forms",["global!tinymce.util.Tools","global!tinymce.ui.Factory","global!tinymce.util.Promise","tinymce/inlite/core/Actions","tinymce/inlite/core/UrlType"],function(t,e,n,i,r){var o=function(t){t.find("textbox").eq(0).each(function(t){t.focus()})},c=function(n,i){var r=e.create(t.extend({type:"form",layout:"flex",direction:"row",padding:5,name:n,spacing:3},i));return r.on("show",function(){o(r)}),r},l=function(t,e){return e?t.show():t.hide()},a=function(t,e){return new n(function(n){t.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){var i=t===!0?"http://"+e:e;n(i)})})},u=function(t,e){return!r.isAbsolute(e)&&r.isDomainLike(e)?a(t,e):n.resolve(e)},s=function(t,e){var n=function(){t.focus(),i.unlink(t),e()};return c("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:n,tooltip:"Remove link"},{type:"textbox",name:"linkurl",placeholder:"Paste or type a link"},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:function(){var e,n="";e=t.dom.getParent(t.selection.getStart(),"a[href]"),e&&(n=t.dom.getAttrib(e,"href")),this.fromJSON({linkurl:n}),l(this.find("#unlink"),e)},onsubmit:function(n){u(t,n.data.linkurl).then(function(n){i.createLink(t,n),e()})}})};return{createQuickLinkForm:s}}),l("global!tinymce.geom.Rect",tinymce.geom.Rect),/**
 * Convert.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/Convert",[],function(){var t=function(t){return{x:t.left,y:t.top,w:t.width,h:t.height}},e=function(t){return{left:t.x,top:t.y,width:t.w,height:t.h,right:t.x+t.w,bottom:t.y+t.h}};return{fromClientRect:t,toClientRect:e}}),/**
 * Measure.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/Measure",["global!tinymce.DOM","global!tinymce.geom.Rect","tinymce/inlite/core/Convert"],function(t,e,n){var i=function(e){var n=t.getViewPort();return{x:e.x+n.x,y:e.y+n.y,w:e.w,h:e.h}},r=function(t){var e=t.getBoundingClientRect();return i({x:e.left,y:e.top,w:Math.max(t.clientWidth,t.offsetWidth),h:Math.max(t.clientHeight,t.offsetHeight)})},o=function(t,e){return r(e)},c=function(t){return r(t.getElement().ownerDocument.body)},l=function(t){return r(t.getContentAreaContainer()||t.getBody())},a=function(t){var e=t.selection.getBoundingClientRect();return e?i(n.fromClientRect(e)):null};return{getElementRect:o,getPageAreaRect:c,getContentAreaRect:l,getSelectionRect:a}}),/**
 * Layout.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/Layout",["global!tinymce.geom.Rect","tinymce/inlite/core/Convert"],function(t,e){var n=function(t,e){return{rect:t,position:e}},i=function(t,e){return{x:e.x,y:e.y,w:t.w,h:t.h}},r=function(e,r,o,c,l){var a,u,s;return a=t.findBestRelativePosition(l,o,c,e),o=t.clamp(o,c),a?(u=t.relativePosition(l,o,a),s=i(l,u),n(s,a)):(o=t.intersect(c,o),o?(a=t.findBestRelativePosition(l,o,c,r))?(u=t.relativePosition(l,o,a),s=i(l,u),n(s,a)):(s=i(l,o),n(s,a)):null)},o=function(t,e,n){return r(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],t,e,n)},c=function(t,e,n){return r(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],t,e,n)},l=function(t,n,i,r){var o;return"function"==typeof t?(o=t({elementRect:e.toClientRect(n),contentAreaRect:e.toClientRect(i),panelRect:e.toClientRect(r)}),e.fromClientRect(o)):r};return{calcInsert:o,calc:c,userConstrain:l}}),/**
 * Panel.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/ui/Panel",["global!tinymce.util.Tools","global!tinymce.ui.Factory","global!tinymce.DOM","tinymce/inlite/ui/Toolbar","tinymce/inlite/ui/Forms","tinymce/inlite/core/Measure","tinymce/inlite/core/Layout"],function(t,e,n,i,r,o,c){return function(){var l,a,u="bold italic | quicklink h2 h3 blockquote",s="quickimage quicktable",f=function(e,n){return t.map(n,function(t){return i.create(e,t.id,t.items)})},m=function(t){var e=t.selection_toolbar;return e?e:u},d=function(t){var e=t.insert_toolbar;return e?e:s},y=function(t,n){var o,c=t.settings;return o=f(t,n),o=o.concat([i.create(t,"text",m(c)),i.create(t,"insert",d(c)),r.createQuickLinkForm(t,R)]),e.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:o,oncancel:function(){t.focus()}})},g=function(t){t&&t.show()},h=function(t,e){t.moveTo(e.x,e.y)},v=function(e,n){n=n?n.substr(0,2):"",t.each({t:"down",b:"up",c:"center"},function(t,i){e.classes.toggle("arrow-"+t,i===n.substr(0,1))}),"cr"===n?(e.classes.toggle("arrow-left",!0),e.classes.toggle("arrow-right",!1)):"cl"===n?(e.classes.toggle("arrow-left",!0),e.classes.toggle("arrow-right",!0)):t.each({l:"left",r:"right"},function(t,i){e.classes.toggle("arrow-"+t,i===n.substr(1,1))})},b=function(t,e){var n=t.items().filter("#"+e);n.length>0&&(n[0].show(),t.reflow())},p=function(t,e,i,r){var l,u,s,f;g(t),t.items().hide(),b(t,e),f=i.settings.inline_toolbar_position_handler,l=o.getContentAreaRect(i),u=n.getRect(t.getEl()),s="insert"===e?c.calcInsert(r,l,u):c.calc(r,l,u),s?(u=s.rect,a=r,h(t,c.userConstrain(f,r,l,u)),v(t,s.position)):R(t)},k=function(){return l.items().filter("form:visible").length>0},w=function(t,e){if(l){l.items().hide(),b(l,e);var i,r,u,s;g(l),l.items().hide(),b(l,e),s=t.settings.inline_toolbar_position_handler,i=o.getContentAreaRect(t),r=n.getRect(l.getEl()),u=c.calc(a,i,r),u&&(r=u.rect,h(l,c.userConstrain(s,a,i,r)),v(l,u.position))}},C=function(t,e,n,i){l||(l=y(t,i),l.renderTo(document.body).reflow().moveTo(n.x,n.y),t.nodeChanged()),p(l,e,t,n)},R=function(){l&&l.hide()},x=function(){l&&l.find("toolbar:visible").eq(0).each(function(t){t.focus(!0)})},T=function(){l&&(l.remove(),l=null)},S=function(){return l&&l.visible()&&k()};return{show:C,showForm:w,inForm:S,hide:R,focus:x,remove:T}}}),/**
 * Conversions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/file/Conversions",["global!tinymce.util.Promise"],function(t){var e=function(e){return new t(function(t){var n=new FileReader;n.onloadend=function(){t(n.result.split(",")[1])},n.readAsDataURL(e)})};return{blobToBase64:e}}),/**
 * Picker.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/file/Picker",["global!tinymce.util.Promise"],function(t){var e=function(){return new t(function(t){var e;e=document.createElement("input"),e.type="file",e.style.position="fixed",e.style.left=0,e.style.top=0,e.style.opacity=.001,document.body.appendChild(e),e.onchange=function(e){t(Array.prototype.slice.call(e.target.files))},e.click(),e.parentNode.removeChild(e)})};return{pickFile:e}}),/**
 * Buttons.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/ui/Buttons",["tinymce/inlite/ui/Panel","tinymce/inlite/file/Conversions","tinymce/inlite/file/Picker","tinymce/inlite/core/Actions"],function(t,e,n,i){var r=function(t){for(var e=function(e){return function(){i.formatBlock(t,e)}},n=1;6>n;n++){var r="h"+n;t.addButton(r,{text:r.toUpperCase(),tooltip:"Heading "+n,stateSelector:r,onclick:e(r),onPostRender:function(){var t=this.getEl().firstChild.firstChild;t.style.fontWeight="bold"}})}},o=function(t,o){t.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){o.showForm(t,"quicklink")}}),t.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){n.pickFile().then(function(n){var r=n[0];e.blobToBase64(r).then(function(e){i.insertBlob(t,e,r)})})}}),t.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){o.hide(),i.insertTable(t,2,2)}}),r(t)};return{addToEditor:o}}),l("global!tinymce.EditorManager",tinymce.EditorManager),/**
 * SkinLoader.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/SkinLoader",["global!tinymce.EditorManager","global!tinymce.DOM"],function(t,e){var n=function(t,e){var n=function(){t.fire("SkinLoaded"),e()};t.initialized?n():t.on("init",n)},i=function(i,r,o){var c=t.baseURL,l=c+"/skins/"+r,a=function(){n(i,o)};e.styleSheetLoader.load(l+"/skin.min.css",a),i.contentCSS.push(l+"/content.inline.min.css")};return{load:i}}),/**
 * Matcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/Matcher",[],function(){var t=function(t,e){return{id:t,rect:e}},e=function(t,e){for(var n=0;n<e.length;n++){var i=e[n],r=i(t);if(r)return r}return null};return{match:e,result:t}}),/**
 * SelectionMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/SelectionMatcher",["tinymce/inlite/core/Matcher","tinymce/inlite/core/Measure"],function(t,e){var n=function(n){return function(i){return i.selection.isCollapsed()?null:t.result(n,e.getSelectionRect(i))}},i=function(n,i){return function(r){var o,c=r.schema.getTextBlockElements();for(o=0;o<n.length;o++)if("TABLE"===n[o].nodeName)return null;for(o=0;o<n.length;o++)if(n[o].nodeName in c)return r.dom.isEmpty(n[o])?t.result(i,e.getSelectionRect(r)):null;return null}};return{textSelection:n,emptyTextBlock:i}}),/**
 * ElementMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/ElementMatcher",["tinymce/inlite/core/Matcher","tinymce/inlite/core/Measure"],function(t,e){var n=function(n,i){return function(r){for(var o=0;o<i.length;o++)if(i[o].predicate(n))return t.result(i[o].id,e.getElementRect(r,n));return null}},i=function(n,i){return function(r){for(var o=0;o<n.length;o++)for(var c=0;c<i.length;c++)if(i[c].predicate(n[o]))return t.result(i[c].id,e.getElementRect(r,n[o]));return null}};return{element:n,parent:i}}),/**
 * Arr.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/alien/Arr",[],function(){var t=function(e){return e.reduce(function(e,n){return Array.isArray(n)?e.concat(t(n)):e.concat(n)},[])};return{flatten:t}}),/**
 * PredicateId.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/core/PredicateId",["global!tinymce.util.Tools"],function(t){var e=function(t,e){return{id:t,predicate:e}},n=function(n){return t.map(n,function(t){return e(t.id,t.predicate)})};return{create:e,fromContextToolbars:n}}),/**
 * Theme.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("tinymce/inlite/Theme",["global!tinymce.ThemeManager","global!tinymce.util.Delay","tinymce/inlite/ui/Panel","tinymce/inlite/ui/Buttons","tinymce/inlite/core/SkinLoader","tinymce/inlite/core/SelectionMatcher","tinymce/inlite/core/ElementMatcher","tinymce/inlite/core/Matcher","tinymce/inlite/alien/Arr","tinymce/inlite/core/PredicateId"],function(t,e,n,i,r,o,c,l,a,u){var s=function(t){var e=t.selection.getNode(),n=t.dom.getParents(e);return n},f=function(t,e,n,i){var r=function(n){return t.dom.is(n,e)};return{predicate:r,id:n,items:i}},m=function(t){var e=t.contextToolbars;return a.flatten([e?e:[],f(t,"img","image","alignleft aligncenter alignright")])},d=function(t,e){var n,i,r;return i=s(t),r=u.fromContextToolbars(e),n=l.match(t,[c.element(i[0],r),o.textSelection("text"),o.emptyTextBlock(i,"insert"),c.parent(i,r)]),n&&n.rect?n:null},y=function(t,e){var n=function(){var n=m(t),i=d(t,n);i?e.show(t,i.id,i.rect,n):e.hide()};return function(){t.removed||n()}},g=function(t,e){return function(){t.inForm()||e()}},h=function(t,n){var i=e.throttle(y(t,n),0),r=e.throttle(g(n,y(t,n)),0);t.on("blur hide ObjectResizeStart",n.hide),t.on("click",i),t.on("nodeChange mouseup",r),t.on("ResizeEditor ResizeWindow keyup",i),t.on("remove",n.remove),t.shortcuts.add("Alt+F10","",n.focus)},v=function(t,e){t.shortcuts.remove("meta+k"),t.shortcuts.add("meta+k","",function(){var n=m(t),i=i=l.match(t,[o.textSelection("quicklink")]);i&&e.show(t,i.id,i.rect,n)})},b=function(t,e){var n=t.settings.skin||"lightgray";return r.load(t,n,function(){h(t,e),v(t,e)}),{}},p=function(t){throw new Error(t)};return t.add("inlite",function(t){var e=new n;i.addToEditor(t,e);var r=function(){return t.inline?b(t,e):p("inlite theme only supports inline mode.")};return{renderUI:r}}),function(){}}),i("tinymce/inlite/Theme")()}();
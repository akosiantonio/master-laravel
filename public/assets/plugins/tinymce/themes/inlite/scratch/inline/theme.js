!function(){var t={},n=function(n){for(var e=t[n],o=e.deps,i=e.defn,c=o.length,u=new Array(c),a=0;c>a;++a)u[a]=r(o[a]);var l=i.apply(null,u);if(void 0===l)throw"module ["+n+"] returned undefined";e.instance=l},e=function(n,e,r){if("string"!=typeof n)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+n;if(void 0===r)throw"no definition function for "+n;t[n]={deps:e,defn:r,instance:void 0}},r=function(e){var r=t[e];if(void 0===r)throw"module ["+e+"] was undefined";return void 0===r.instance&&n(e),r.instance},o=function(t,n){for(var e=t.length,o=new Array(e),i=0;e>i;++i)o.push(r(t[i]));n.apply(null,n)},i={};i.bolt={module:{api:{define:e,require:o,demand:r}}};var c=e,u=function(t,n){c(t,[],function(){return n})};u("1",tinymce.ThemeManager),u("2",tinymce.util.Delay),u("b",tinymce.util.Tools),u("c",tinymce.ui.Factory),u("d",tinymce.DOM),/**
 * Toolbar.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("e",["b","c"],function(t,n){var e=function(t,n){return function(e,r){for(var o,i=r.parents.length;i--&&(o=r.parents[i].nodeName,"OL"!=o&&"UL"!=o););t.active(e&&o==n)}},r=function(t,n){var r=function(t,n){return{selector:t,handler:n}},o=function(t){n.active(t)},i=function(t){n.disabled(t)};return"bullist"==t?r("ul > li",e(n,"UL")):"numlist"==t?r("ol > li",e(n,"OL")):n.settings.stateSelector?r(n.settings.stateSelector,o):n.settings.disabledStateSelector?r(n.settings.disabledStateSelector,i):null},o=function(t,n,e){return function(){var o=r(n,e);null!==o&&t.selection.selectorChanged(o.selector,o.handler)}},i=function(e,r,i){var c,u=[];if(i)return t.each(i.split(/[ ,]/),function(t){var r;"|"==t?c=null:n.has(t)?(t={type:t},u.push(t),c=null):(c||(c={type:"buttongroup",items:[]},u.push(c)),e.buttons[t]&&(r=t,t=e.buttons[r],"function"==typeof t&&(t=t()),t.type=t.type||"button",t=n.create(t),t.on("postRender",o(e,r,t)),c.items.push(t)))}),n.create({type:"toolbar",layout:"flow",name:r,items:u})};return{create:i}}),u("m",tinymce.util.Promise),/**
 * Uuid.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("n",[],function(){var t=0,n=function(){var t=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+t()+t()+t()},e=function(e){return e+t++ +n()};return{uuid:e}}),/**
 * Bookmark.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("s",[],function(){var t=function(t,n){function e(e){var o,i,c;i=n[e?"startContainer":"endContainer"],c=n[e?"startOffset":"endOffset"],1==i.nodeType&&(o=t.create("span",{"data-mce-type":"bookmark"}),i.hasChildNodes()?(c=Math.min(c,i.childNodes.length-1),e?i.insertBefore(o,i.childNodes[c]):t.insertAfter(o,i.childNodes[c])):i.appendChild(o),i=o,c=0),r[e?"startContainer":"endContainer"]=i,r[e?"startOffset":"endOffset"]=c}var r={};return e(!0),n.collapsed||e(),r},n=function(t,n){function e(e){function r(t){for(var n=t.parentNode.firstChild,e=0;n;){if(n==t)return e;(1!=n.nodeType||"bookmark"!=n.getAttribute("data-mce-type"))&&e++,n=n.nextSibling}return-1}var o,i,c;o=c=n[e?"startContainer":"endContainer"],i=n[e?"startOffset":"endOffset"],o&&(1==o.nodeType&&(i=r(o),o=o.parentNode,t.remove(c)),n[e?"startContainer":"endContainer"]=o,n[e?"startOffset":"endOffset"]=i)}e(!0),e();var r=t.createRng();return r.setStart(n.startContainer,n.startOffset),n.endContainer&&r.setEnd(n.endContainer,n.endOffset),r};return{create:t,resolve:n}}),u("t",tinymce.dom.TreeWalker),u("u",tinymce.dom.RangeUtils),/**
 * Unlink.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("o",["s","b","t","u"],function(t,n,e,r){var o=function(t,n,r){var o,i,c=[];for(o=new e(n,t),i=n;i&&(1===i.nodeType&&c.push(i),i!==r);i=o.next());return c},i=function(e,r){var o,i,c;i=e.dom,c=e.selection,o=t.create(i,c.getRng()),n.each(r,function(t){e.dom.remove(t,!0)}),c.setRng(t.resolve(i,o))},c=function(t){return"A"===t.nodeName&&t.hasAttribute("href")},u=function(t,n){var e=t.getParent(n,c);return e?e:n},a=function(t){var e,i,a,l,f,s,d;return f=t.selection,s=t.dom,d=f.getRng(),e=u(s,r.getNode(d.startContainer,d.startOffset)),i=r.getNode(d.endContainer,d.endOffset),a=t.getBody(),l=n.grep(o(a,e,i),c)},l=function(t){i(t,a(t))};return{unlinkSelection:l}}),/**
 * Actions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("k",["n","o"],function(t,n){var e=function(t,n){var e,r,o;for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",r=0;n>r;r++){for(o+="<tr>",e=0;t>e;e++)o+="<td><br></td>";o+="</tr>"}return o+="</tbody>",o+="</table>"},r=function(t){var n=t.dom.select("*[data-mce-id]");return n[0]},o=function(t,n,o){t.undoManager.transact(function(){var i,c;t.insertContent(e(n,o)),i=r(t),i.removeAttribute("data-mce-id"),c=t.dom.select("td,th",i),t.selection.setCursorLocation(c[0],0)})},i=function(t,n){t.execCommand("FormatBlock",!1,n)},c=function(n,e,r){var o,i;o=n.editorUpload.blobCache,i=o.create(t.uuid("mceu"),r,e),o.add(i),n.insertContent(n.dom.createHTML("img",{src:i.blobUri()}))},u=function(t){t.selection.collapse(!1)},a=function(t){t.focus(),n.unlinkSelection(t),u(t)},l=function(t,n,e){t.focus(),t.dom.setAttrib(n,"href",e),u(t)},f=function(t,n){t.execCommand("mceInsertLink",!1,{href:n}),u(t)},s=function(t,n){var e=t.dom.getParent(t.selection.getStart(),"a[href]");e?l(t,e,n):f(t,n)},d=function(t,n){0===n.trim().length?a(t):s(t,n)};return{insertTable:o,formatBlock:i,insertBlob:c,createLink:d,unlink:a}}),/**
 * UrlType.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("p",[],function(){var t=function(t){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(t.trim())},n=function(t){return/^https?:\/\//.test(t.trim())};return{isDomainLike:t,isAbsolute:n}}),/**
 * Forms.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("f",["b","c","m","k","p"],function(t,n,e,r,o){var i=function(t){t.find("textbox").eq(0).each(function(t){t.focus()})},c=function(e,r){var o=n.create(t.extend({type:"form",layout:"flex",direction:"row",padding:5,name:e,spacing:3},r));return o.on("show",function(){i(o)}),o},u=function(t,n){return n?t.show():t.hide()},a=function(t,n){return new e(function(e){t.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){var r=t===!0?"http://"+n:n;e(r)})})},l=function(t,n){return!o.isAbsolute(n)&&o.isDomainLike(n)?a(t,n):e.resolve(n)},f=function(t,n){var e=function(){t.focus(),r.unlink(t),n()};return c("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:e,tooltip:"Remove link"},{type:"textbox",name:"linkurl",placeholder:"Paste or type a link"},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:function(){var n,e="";n=t.dom.getParent(t.selection.getStart(),"a[href]"),n&&(e=t.dom.getAttrib(n,"href")),this.fromJSON({linkurl:e}),u(this.find("#unlink"),n)},onsubmit:function(e){l(t,e.data.linkurl).then(function(e){r.createLink(t,e),n()})}})};return{createQuickLinkForm:f}}),u("q",tinymce.geom.Rect),/**
 * Convert.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("r",[],function(){var t=function(t){return{x:t.left,y:t.top,w:t.width,h:t.height}},n=function(t){return{left:t.x,top:t.y,width:t.w,height:t.h,right:t.x+t.w,bottom:t.y+t.h}};return{fromClientRect:t,toClientRect:n}}),/**
 * Measure.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("g",["d","q","r"],function(t,n,e){var r=function(n){var e=t.getViewPort();return{x:n.x+e.x,y:n.y+e.y,w:n.w,h:n.h}},o=function(t){var n=t.getBoundingClientRect();return r({x:n.left,y:n.top,w:Math.max(t.clientWidth,t.offsetWidth),h:Math.max(t.clientHeight,t.offsetHeight)})},i=function(t,n){return o(n)},c=function(t){return o(t.getElement().ownerDocument.body)},u=function(t){return o(t.getContentAreaContainer()||t.getBody())},a=function(t){var n=t.selection.getBoundingClientRect();return n?r(e.fromClientRect(n)):null};return{getElementRect:i,getPageAreaRect:c,getContentAreaRect:u,getSelectionRect:a}}),/**
 * Layout.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("h",["q","r"],function(t,n){var e=function(t,n){return{rect:t,position:n}},r=function(t,n){return{x:n.x,y:n.y,w:t.w,h:t.h}},o=function(n,o,i,c,u){var a,l,f;return a=t.findBestRelativePosition(u,i,c,n),i=t.clamp(i,c),a?(l=t.relativePosition(u,i,a),f=r(u,l),e(f,a)):(i=t.intersect(c,i),i?(a=t.findBestRelativePosition(u,i,c,o))?(l=t.relativePosition(u,i,a),f=r(u,l),e(f,a)):(f=r(u,i),e(f,a)):null)},i=function(t,n,e){return o(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],t,n,e)},c=function(t,n,e){return o(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],t,n,e)},u=function(t,e,r,o){var i;return"function"==typeof t?(i=t({elementRect:n.toClientRect(e),contentAreaRect:n.toClientRect(r),panelRect:n.toClientRect(o)}),n.fromClientRect(i)):o};return{calcInsert:i,calc:c,userConstrain:u}}),/**
 * Panel.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("3",["b","c","d","e","f","g","h"],function(t,n,e,r,o,i,c){return function(){var u,a,l="bold italic | quicklink h2 h3 blockquote",f="quickimage quicktable",s=function(n,e){return t.map(e,function(t){return r.create(n,t.id,t.items)})},d=function(t){var n=t.selection_toolbar;return n?n:l},m=function(t){var n=t.insert_toolbar;return n?n:f},h=function(t,e){var i,c=t.settings;return i=s(t,e),i=i.concat([r.create(t,"text",d(c)),r.create(t,"insert",m(c)),o.createQuickLinkForm(t,R)]),n.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:i,oncancel:function(){t.focus()}})},g=function(t){t&&t.show()},v=function(t,n){t.moveTo(n.x,n.y)},p=function(n,e){e=e?e.substr(0,2):"",t.each({t:"down",b:"up",c:"center"},function(t,r){n.classes.toggle("arrow-"+t,r===e.substr(0,1))}),"cr"===e?(n.classes.toggle("arrow-left",!0),n.classes.toggle("arrow-right",!1)):"cl"===e?(n.classes.toggle("arrow-left",!0),n.classes.toggle("arrow-right",!0)):t.each({l:"left",r:"right"},function(t,r){n.classes.toggle("arrow-"+t,r===e.substr(1,1))})},b=function(t,n){var e=t.items().filter("#"+n);e.length>0&&(e[0].show(),t.reflow())},y=function(t,n,r,o){var u,l,f,s;g(t),t.items().hide(),b(t,n),s=r.settings.inline_toolbar_position_handler,u=i.getContentAreaRect(r),l=e.getRect(t.getEl()),f="insert"===n?c.calcInsert(o,u,l):c.calc(o,u,l),f?(l=f.rect,a=o,v(t,c.userConstrain(s,o,u,l)),p(t,f.position)):R(t)},k=function(){return u.items().filter("form:visible").length>0},w=function(t,n){if(u){u.items().hide(),b(u,n);var r,o,l,f;g(u),u.items().hide(),b(u,n),f=t.settings.inline_toolbar_position_handler,r=i.getContentAreaRect(t),o=e.getRect(u.getEl()),l=c.calc(a,r,o),l&&(o=l.rect,v(u,c.userConstrain(f,a,r,o)),p(u,l.position))}},C=function(t,n,e,r){u||(u=h(t,r),u.renderTo(document.body).reflow().moveTo(e.x,e.y),t.nodeChanged()),y(u,n,t,e)},R=function(){u&&u.hide()},x=function(){u&&u.find("toolbar:visible").eq(0).each(function(t){t.focus(!0)})},S=function(){u&&(u.remove(),u=null)},T=function(){return u&&u.visible()&&k()};return{show:C,showForm:w,inForm:T,hide:R,focus:x,remove:S}}}),/**
 * Conversions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("i",["m"],function(t){var n=function(n){return new t(function(t){var e=new FileReader;e.onloadend=function(){t(e.result.split(",")[1])},e.readAsDataURL(n)})};return{blobToBase64:n}}),/**
 * Picker.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("j",["m"],function(t){var n=function(){return new t(function(t){var n;n=document.createElement("input"),n.type="file",n.style.position="fixed",n.style.left=0,n.style.top=0,n.style.opacity=.001,document.body.appendChild(n),n.onchange=function(n){t(Array.prototype.slice.call(n.target.files))},n.click(),n.parentNode.removeChild(n)})};return{pickFile:n}}),/**
 * Buttons.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("4",["3","i","j","k"],function(t,n,e,r){var o=function(t){for(var n=function(n){return function(){r.formatBlock(t,n)}},e=1;6>e;e++){var o="h"+e;t.addButton(o,{text:o.toUpperCase(),tooltip:"Heading "+e,stateSelector:o,onclick:n(o),onPostRender:function(){var t=this.getEl().firstChild.firstChild;t.style.fontWeight="bold"}})}},i=function(t,i){t.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){i.showForm(t,"quicklink")}}),t.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){e.pickFile().then(function(e){var o=e[0];n.blobToBase64(o).then(function(n){r.insertBlob(t,n,o)})})}}),t.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){i.hide(),r.insertTable(t,2,2)}}),o(t)};return{addToEditor:i}}),u("l",tinymce.EditorManager),/**
 * SkinLoader.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("5",["l","d"],function(t,n){var e=function(t,n){var e=function(){t.fire("SkinLoaded"),n()};t.initialized?e():t.on("init",e)},r=function(r,o,i){var c=t.baseURL,u=c+"/skins/"+o,a=function(){e(r,i)};n.styleSheetLoader.load(u+"/skin.min.css",a),r.contentCSS.push(u+"/content.inline.min.css")};return{load:r}}),/**
 * Matcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("8",[],function(){var t=function(t,n){return{id:t,rect:n}},n=function(t,n){for(var e=0;e<n.length;e++){var r=n[e],o=r(t);if(o)return o}return null};return{match:n,result:t}}),/**
 * SelectionMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("6",["8","g"],function(t,n){var e=function(e){return function(r){return r.selection.isCollapsed()?null:t.result(e,n.getSelectionRect(r))}},r=function(e,r){return function(o){var i,c=o.schema.getTextBlockElements();for(i=0;i<e.length;i++)if("TABLE"===e[i].nodeName)return null;for(i=0;i<e.length;i++)if(e[i].nodeName in c)return o.dom.isEmpty(e[i])?t.result(r,n.getSelectionRect(o)):null;return null}};return{textSelection:e,emptyTextBlock:r}}),/**
 * ElementMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("7",["8","g"],function(t,n){var e=function(e,r){return function(o){for(var i=0;i<r.length;i++)if(r[i].predicate(e))return t.result(r[i].id,n.getElementRect(o,e));return null}},r=function(e,r){return function(o){for(var i=0;i<e.length;i++)for(var c=0;c<r.length;c++)if(r[c].predicate(e[i]))return t.result(r[c].id,n.getElementRect(o,e[i]));return null}};return{element:e,parent:r}}),/**
 * Arr.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("9",[],function(){var t=function(n){return n.reduce(function(n,e){return Array.isArray(e)?n.concat(t(e)):n.concat(e)},[])};return{flatten:t}}),/**
 * PredicateId.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("a",["b"],function(t){var n=function(t,n){return{id:t,predicate:n}},e=function(e){return t.map(e,function(t){return n(t.id,t.predicate)})};return{create:n,fromContextToolbars:e}}),/**
 * Theme.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
c("0",["1","2","3","4","5","6","7","8","9","a"],function(t,n,e,r,o,i,c,u,a,l){var f=function(t){var n=t.selection.getNode(),e=t.dom.getParents(n);return e},s=function(t,n,e,r){var o=function(e){return t.dom.is(e,n)};return{predicate:o,id:e,items:r}},d=function(t){var n=t.contextToolbars;return a.flatten([n?n:[],s(t,"img","image","alignleft aligncenter alignright")])},m=function(t,n){var e,r,o;return r=f(t),o=l.fromContextToolbars(n),e=u.match(t,[c.element(r[0],o),i.textSelection("text"),i.emptyTextBlock(r,"insert"),c.parent(r,o)]),e&&e.rect?e:null},h=function(t,n){var e=function(){var e=d(t),r=m(t,e);r?n.show(t,r.id,r.rect,e):n.hide()};return function(){t.removed||e()}},g=function(t,n){return function(){t.inForm()||n()}},v=function(t,e){var r=n.throttle(h(t,e),0),o=n.throttle(g(e,h(t,e)),0);t.on("blur hide ObjectResizeStart",e.hide),t.on("click",r),t.on("nodeChange mouseup",o),t.on("ResizeEditor ResizeWindow keyup",r),t.on("remove",e.remove),t.shortcuts.add("Alt+F10","",e.focus)},p=function(t,n){t.shortcuts.remove("meta+k"),t.shortcuts.add("meta+k","",function(){var e=d(t),r=r=u.match(t,[i.textSelection("quicklink")]);r&&n.show(t,r.id,r.rect,e)})},b=function(t,n){var e=t.settings.skin||"lightgray";return o.load(t,e,function(){v(t,n),p(t,n)}),{}},y=function(t){throw new Error(t)};return t.add("inlite",function(t){var n=new e;r.addToEditor(t,n);var o=function(){return t.inline?b(t,n):y("inlite theme only supports inline mode.")};return{renderUI:o}}),function(){}}),r("0")()}();
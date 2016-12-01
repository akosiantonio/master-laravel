defineGlobal("global!tinymce.ThemeManager",tinymce.ThemeManager),defineGlobal("global!tinymce.util.Delay",tinymce.util.Delay),defineGlobal("global!tinymce.util.Tools",tinymce.util.Tools),defineGlobal("global!tinymce.ui.Factory",tinymce.ui.Factory),defineGlobal("global!tinymce.DOM",tinymce.DOM),/**
 * Toolbar.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/ui/Toolbar",["global!tinymce.util.Tools","global!tinymce.ui.Factory"],function(e,t){var n=function(e,t){return function(n,i){for(var o,r=i.parents.length;r--&&(o=i.parents[r].nodeName,"OL"!=o&&"UL"!=o););e.active(n&&o==t)}},i=function(e,t){var i=function(e,t){return{selector:e,handler:t}},o=function(e){t.active(e)},r=function(e){t.disabled(e)};return"bullist"==e?i("ul > li",n(t,"UL")):"numlist"==e?i("ol > li",n(t,"OL")):t.settings.stateSelector?i(t.settings.stateSelector,o):t.settings.disabledStateSelector?i(t.settings.disabledStateSelector,r):null},o=function(e,t,n){return function(){var o=i(t,n);null!==o&&e.selection.selectorChanged(o.selector,o.handler)}},r=function(n,i,r){var c,l=[];if(r)return e.each(r.split(/[ ,]/),function(e){var i;"|"==e?c=null:t.has(e)?(e={type:e},l.push(e),c=null):(c||(c={type:"buttongroup",items:[]},l.push(c)),n.buttons[e]&&(i=e,e=n.buttons[i],"function"==typeof e&&(e=e()),e.type=e.type||"button",e=t.create(e),e.on("postRender",o(n,i,e)),c.items.push(e)))}),t.create({type:"toolbar",layout:"flow",name:i,items:l})};return{create:r}}),defineGlobal("global!tinymce.util.Promise",tinymce.util.Promise),/**
 * Uuid.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Uuid",[],function(){var e=0,t=function(){var e=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+e()+e()+e()},n=function(n){return n+e++ +t()};return{uuid:n}}),/**
 * Bookmark.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Bookmark",[],function(){var e=function(e,t){function n(n){var o,r,c;r=t[n?"startContainer":"endContainer"],c=t[n?"startOffset":"endOffset"],1==r.nodeType&&(o=e.create("span",{"data-mce-type":"bookmark"}),r.hasChildNodes()?(c=Math.min(c,r.childNodes.length-1),n?r.insertBefore(o,r.childNodes[c]):e.insertAfter(o,r.childNodes[c])):r.appendChild(o),r=o,c=0),i[n?"startContainer":"endContainer"]=r,i[n?"startOffset":"endOffset"]=c}var i={};return n(!0),t.collapsed||n(),i},t=function(e,t){function n(n){function i(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t==e)return n;(1!=t.nodeType||"bookmark"!=t.getAttribute("data-mce-type"))&&n++,t=t.nextSibling}return-1}var o,r,c;o=c=t[n?"startContainer":"endContainer"],r=t[n?"startOffset":"endOffset"],o&&(1==o.nodeType&&(r=i(o),o=o.parentNode,e.remove(c)),t[n?"startContainer":"endContainer"]=o,t[n?"startOffset":"endOffset"]=r)}n(!0),n();var i=e.createRng();return i.setStart(t.startContainer,t.startOffset),t.endContainer&&i.setEnd(t.endContainer,t.endOffset),i};return{create:e,resolve:t}}),defineGlobal("global!tinymce.dom.TreeWalker",tinymce.dom.TreeWalker),defineGlobal("global!tinymce.dom.RangeUtils",tinymce.dom.RangeUtils),/**
 * Unlink.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Unlink",["tinymce/inlite/alien/Bookmark","global!tinymce.util.Tools","global!tinymce.dom.TreeWalker","global!tinymce.dom.RangeUtils"],function(e,t,n,i){var o=function(e,t,i){var o,r,c=[];for(o=new n(t,e),r=t;r&&(1===r.nodeType&&c.push(r),r!==i);r=o.next());return c},r=function(n,i){var o,r,c;r=n.dom,c=n.selection,o=e.create(r,c.getRng()),t.each(i,function(e){n.dom.remove(e,!0)}),c.setRng(e.resolve(r,o))},c=function(e){return"A"===e.nodeName&&e.hasAttribute("href")},l=function(e,t){var n=e.getParent(t,c);return n?n:t},a=function(e){var n,r,a,u,f,s,d;return f=e.selection,s=e.dom,d=f.getRng(),n=l(s,i.getNode(d.startContainer,d.startOffset)),r=i.getNode(d.endContainer,d.endOffset),a=e.getBody(),u=t.grep(o(a,n,r),c)},u=function(e){r(e,a(e))};return{unlinkSelection:u}}),/**
 * Actions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Actions",["tinymce/inlite/alien/Uuid","tinymce/inlite/alien/Unlink"],function(e,t){var n=function(e,t){var n,i,o;for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",i=0;t>i;i++){for(o+="<tr>",n=0;e>n;n++)o+="<td><br></td>";o+="</tr>"}return o+="</tbody>",o+="</table>"},i=function(e){var t=e.dom.select("*[data-mce-id]");return t[0]},o=function(e,t,o){e.undoManager.transact(function(){var r,c;e.insertContent(n(t,o)),r=i(e),r.removeAttribute("data-mce-id"),c=e.dom.select("td,th",r),e.selection.setCursorLocation(c[0],0)})},r=function(e,t){e.execCommand("FormatBlock",!1,t)},c=function(t,n,i){var o,r;o=t.editorUpload.blobCache,r=o.create(e.uuid("mceu"),i,n),o.add(r),t.insertContent(t.dom.createHTML("img",{src:r.blobUri()}))},l=function(e){e.selection.collapse(!1)},a=function(e){e.focus(),t.unlinkSelection(e),l(e)},u=function(e,t,n){e.focus(),e.dom.setAttrib(t,"href",n),l(e)},f=function(e,t){e.execCommand("mceInsertLink",!1,{href:t}),l(e)},s=function(e,t){var n=e.dom.getParent(e.selection.getStart(),"a[href]");n?u(e,n,t):f(e,t)},d=function(e,t){0===t.trim().length?a(e):s(e,t)};return{insertTable:o,formatBlock:r,insertBlob:c,createLink:d,unlink:a}}),/**
 * UrlType.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/UrlType",[],function(){var e=function(e){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(e.trim())},t=function(e){return/^https?:\/\//.test(e.trim())};return{isDomainLike:e,isAbsolute:t}}),/**
 * Forms.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/ui/Forms",["global!tinymce.util.Tools","global!tinymce.ui.Factory","global!tinymce.util.Promise","tinymce/inlite/core/Actions","tinymce/inlite/core/UrlType"],function(e,t,n,i,o){var r=function(e){e.find("textbox").eq(0).each(function(e){e.focus()})},c=function(n,i){var o=t.create(e.extend({type:"form",layout:"flex",direction:"row",padding:5,name:n,spacing:3},i));return o.on("show",function(){r(o)}),o},l=function(e,t){return t?e.show():e.hide()},a=function(e,t){return new n(function(n){e.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){var i=e===!0?"http://"+t:t;n(i)})})},u=function(e,t){return!o.isAbsolute(t)&&o.isDomainLike(t)?a(e,t):n.resolve(t)},f=function(e,t){var n=function(){e.focus(),i.unlink(e),t()};return c("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:n,tooltip:"Remove link"},{type:"textbox",name:"linkurl",placeholder:"Paste or type a link"},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:function(){var t,n="";t=e.dom.getParent(e.selection.getStart(),"a[href]"),t&&(n=e.dom.getAttrib(t,"href")),this.fromJSON({linkurl:n}),l(this.find("#unlink"),t)},onsubmit:function(n){u(e,n.data.linkurl).then(function(n){i.createLink(e,n),t()})}})};return{createQuickLinkForm:f}}),defineGlobal("global!tinymce.geom.Rect",tinymce.geom.Rect),/**
 * Convert.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Convert",[],function(){var e=function(e){return{x:e.left,y:e.top,w:e.width,h:e.height}},t=function(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}};return{fromClientRect:e,toClientRect:t}}),/**
 * Measure.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Measure",["global!tinymce.DOM","global!tinymce.geom.Rect","tinymce/inlite/core/Convert"],function(e,t,n){var i=function(t){var n=e.getViewPort();return{x:t.x+n.x,y:t.y+n.y,w:t.w,h:t.h}},o=function(e){var t=e.getBoundingClientRect();return i({x:t.left,y:t.top,w:Math.max(e.clientWidth,e.offsetWidth),h:Math.max(e.clientHeight,e.offsetHeight)})},r=function(e,t){return o(t)},c=function(e){return o(e.getElement().ownerDocument.body)},l=function(e){return o(e.getContentAreaContainer()||e.getBody())},a=function(e){var t=e.selection.getBoundingClientRect();return t?i(n.fromClientRect(t)):null};return{getElementRect:r,getPageAreaRect:c,getContentAreaRect:l,getSelectionRect:a}}),/**
 * Layout.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Layout",["global!tinymce.geom.Rect","tinymce/inlite/core/Convert"],function(e,t){var n=function(e,t){return{rect:e,position:t}},i=function(e,t){return{x:t.x,y:t.y,w:e.w,h:e.h}},o=function(t,o,r,c,l){var a,u,f;return a=e.findBestRelativePosition(l,r,c,t),r=e.clamp(r,c),a?(u=e.relativePosition(l,r,a),f=i(l,u),n(f,a)):(r=e.intersect(c,r),r?(a=e.findBestRelativePosition(l,r,c,o))?(u=e.relativePosition(l,r,a),f=i(l,u),n(f,a)):(f=i(l,r),n(f,a)):null)},r=function(e,t,n){return o(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],e,t,n)},c=function(e,t,n){return o(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],e,t,n)},l=function(e,n,i,o){var r;return"function"==typeof e?(r=e({elementRect:t.toClientRect(n),contentAreaRect:t.toClientRect(i),panelRect:t.toClientRect(o)}),t.fromClientRect(r)):o};return{calcInsert:r,calc:c,userConstrain:l}}),/**
 * Panel.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/ui/Panel",["global!tinymce.util.Tools","global!tinymce.ui.Factory","global!tinymce.DOM","tinymce/inlite/ui/Toolbar","tinymce/inlite/ui/Forms","tinymce/inlite/core/Measure","tinymce/inlite/core/Layout"],function(e,t,n,i,o,r,c){return function(){var l,a,u="bold italic | quicklink h2 h3 blockquote",f="quickimage quicktable",s=function(t,n){return e.map(n,function(e){return i.create(t,e.id,e.items)})},d=function(e){var t=e.selection_toolbar;return t?t:u},m=function(e){var t=e.insert_toolbar;return t?t:f},y=function(e,n){var r,c=e.settings;return r=s(e,n),r=r.concat([i.create(e,"text",d(c)),i.create(e,"insert",m(c)),o.createQuickLinkForm(e,R)]),t.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:r,oncancel:function(){e.focus()}})},g=function(e){e&&e.show()},h=function(e,t){e.moveTo(t.x,t.y)},b=function(t,n){n=n?n.substr(0,2):"",e.each({t:"down",b:"up",c:"center"},function(e,i){t.classes.toggle("arrow-"+e,i===n.substr(0,1))}),"cr"===n?(t.classes.toggle("arrow-left",!0),t.classes.toggle("arrow-right",!1)):"cl"===n?(t.classes.toggle("arrow-left",!0),t.classes.toggle("arrow-right",!0)):e.each({l:"left",r:"right"},function(e,i){t.classes.toggle("arrow-"+e,i===n.substr(1,1))})},v=function(e,t){var n=e.items().filter("#"+t);n.length>0&&(n[0].show(),e.reflow())},p=function(e,t,i,o){var l,u,f,s;g(e),e.items().hide(),v(e,t),s=i.settings.inline_toolbar_position_handler,l=r.getContentAreaRect(i),u=n.getRect(e.getEl()),f="insert"===t?c.calcInsert(o,l,u):c.calc(o,l,u),f?(u=f.rect,a=o,h(e,c.userConstrain(s,o,l,u)),b(e,f.position)):R(e)},k=function(){return l.items().filter("form:visible").length>0},C=function(e,t){if(l){l.items().hide(),v(l,t);var i,o,u,f;g(l),l.items().hide(),v(l,t),f=e.settings.inline_toolbar_position_handler,i=r.getContentAreaRect(e),o=n.getRect(l.getEl()),u=c.calc(a,i,o),u&&(o=u.rect,h(l,c.userConstrain(f,a,i,o)),b(l,u.position))}},w=function(e,t,n,i){l||(l=y(e,i),l.renderTo(document.body).reflow().moveTo(n.x,n.y),e.nodeChanged()),p(l,t,e,n)},R=function(){l&&l.hide()},x=function(){l&&l.find("toolbar:visible").eq(0).each(function(e){e.focus(!0)})},T=function(){l&&(l.remove(),l=null)},S=function(){return l&&l.visible()&&k()};return{show:w,showForm:C,inForm:S,hide:R,focus:x,remove:T}}}),/**
 * Conversions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/file/Conversions",["global!tinymce.util.Promise"],function(e){var t=function(t){return new e(function(e){var n=new FileReader;n.onloadend=function(){e(n.result.split(",")[1])},n.readAsDataURL(t)})};return{blobToBase64:t}}),/**
 * Picker.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/file/Picker",["global!tinymce.util.Promise"],function(e){var t=function(){return new e(function(e){var t;t=document.createElement("input"),t.type="file",t.style.position="fixed",t.style.left=0,t.style.top=0,t.style.opacity=.001,document.body.appendChild(t),t.onchange=function(t){e(Array.prototype.slice.call(t.target.files))},t.click(),t.parentNode.removeChild(t)})};return{pickFile:t}}),/**
 * Buttons.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/ui/Buttons",["tinymce/inlite/ui/Panel","tinymce/inlite/file/Conversions","tinymce/inlite/file/Picker","tinymce/inlite/core/Actions"],function(e,t,n,i){var o=function(e){for(var t=function(t){return function(){i.formatBlock(e,t)}},n=1;6>n;n++){var o="h"+n;e.addButton(o,{text:o.toUpperCase(),tooltip:"Heading "+n,stateSelector:o,onclick:t(o),onPostRender:function(){var e=this.getEl().firstChild.firstChild;e.style.fontWeight="bold"}})}},r=function(e,r){e.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){r.showForm(e,"quicklink")}}),e.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){n.pickFile().then(function(n){var o=n[0];t.blobToBase64(o).then(function(t){i.insertBlob(e,t,o)})})}}),e.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){r.hide(),i.insertTable(e,2,2)}}),o(e)};return{addToEditor:r}}),defineGlobal("global!tinymce.EditorManager",tinymce.EditorManager),/**
 * SkinLoader.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/SkinLoader",["global!tinymce.EditorManager","global!tinymce.DOM"],function(e,t){var n=function(e,t){var n=function(){e.fire("SkinLoaded"),t()};e.initialized?n():e.on("init",n)},i=function(i,o,r){var c=e.baseURL,l=c+"/skins/"+o,a=function(){n(i,r)};t.styleSheetLoader.load(l+"/skin.min.css",a),i.contentCSS.push(l+"/content.inline.min.css")};return{load:i}}),/**
 * Matcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Matcher",[],function(){var e=function(e,t){return{id:e,rect:t}},t=function(e,t){for(var n=0;n<t.length;n++){var i=t[n],o=i(e);if(o)return o}return null};return{match:t,result:e}}),/**
 * SelectionMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/SelectionMatcher",["tinymce/inlite/core/Matcher","tinymce/inlite/core/Measure"],function(e,t){var n=function(n){return function(i){return i.selection.isCollapsed()?null:e.result(n,t.getSelectionRect(i))}},i=function(n,i){return function(o){var r,c=o.schema.getTextBlockElements();for(r=0;r<n.length;r++)if("TABLE"===n[r].nodeName)return null;for(r=0;r<n.length;r++)if(n[r].nodeName in c)return o.dom.isEmpty(n[r])?e.result(i,t.getSelectionRect(o)):null;return null}};return{textSelection:n,emptyTextBlock:i}}),/**
 * ElementMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/ElementMatcher",["tinymce/inlite/core/Matcher","tinymce/inlite/core/Measure"],function(e,t){var n=function(n,i){return function(o){for(var r=0;r<i.length;r++)if(i[r].predicate(n))return e.result(i[r].id,t.getElementRect(o,n));return null}},i=function(n,i){return function(o){for(var r=0;r<n.length;r++)for(var c=0;c<i.length;c++)if(i[c].predicate(n[r]))return e.result(i[c].id,t.getElementRect(o,n[r]));return null}};return{element:n,parent:i}}),/**
 * Arr.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Arr",[],function(){var e=function(t){return t.reduce(function(t,n){return Array.isArray(n)?t.concat(e(n)):t.concat(n)},[])};return{flatten:e}}),/**
 * PredicateId.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/PredicateId",["global!tinymce.util.Tools"],function(e){var t=function(e,t){return{id:e,predicate:t}},n=function(n){return e.map(n,function(e){return t(e.id,e.predicate)})};return{create:t,fromContextToolbars:n}}),/**
 * Theme.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/Theme",["global!tinymce.ThemeManager","global!tinymce.util.Delay","tinymce/inlite/ui/Panel","tinymce/inlite/ui/Buttons","tinymce/inlite/core/SkinLoader","tinymce/inlite/core/SelectionMatcher","tinymce/inlite/core/ElementMatcher","tinymce/inlite/core/Matcher","tinymce/inlite/alien/Arr","tinymce/inlite/core/PredicateId"],function(e,t,n,i,o,r,c,l,a,u){var f=function(e){var t=e.selection.getNode(),n=e.dom.getParents(t);return n},s=function(e,t,n,i){var o=function(n){return e.dom.is(n,t)};return{predicate:o,id:n,items:i}},d=function(e){var t=e.contextToolbars;return a.flatten([t?t:[],s(e,"img","image","alignleft aligncenter alignright")])},m=function(e,t){var n,i,o;return i=f(e),o=u.fromContextToolbars(t),n=l.match(e,[c.element(i[0],o),r.textSelection("text"),r.emptyTextBlock(i,"insert"),c.parent(i,o)]),n&&n.rect?n:null},y=function(e,t){var n=function(){var n=d(e),i=m(e,n);i?t.show(e,i.id,i.rect,n):t.hide()};return function(){e.removed||n()}},g=function(e,t){return function(){e.inForm()||t()}},h=function(e,n){var i=t.throttle(y(e,n),0),o=t.throttle(g(n,y(e,n)),0);e.on("blur hide ObjectResizeStart",n.hide),e.on("click",i),e.on("nodeChange mouseup",o),e.on("ResizeEditor ResizeWindow keyup",i),e.on("remove",n.remove),e.shortcuts.add("Alt+F10","",n.focus)},b=function(e,t){e.shortcuts.remove("meta+k"),e.shortcuts.add("meta+k","",function(){var n=d(e),i=i=l.match(e,[r.textSelection("quicklink")]);i&&t.show(e,i.id,i.rect,n)})},v=function(e,t){var n=e.settings.skin||"lightgray";return o.load(e,n,function(){h(e,t),b(e,t)}),{}},p=function(e){throw new Error(e)};return e.add("inlite",function(e){var t=new n;i.addToEditor(e,t);var o=function(){return e.inline?v(e,t):p("inlite theme only supports inline mode.")};return{renderUI:o}}),function(){}});
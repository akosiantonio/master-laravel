/**
 * Forms.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/ui/Forms",["global!tinymce.util.Tools","global!tinymce.ui.Factory","global!tinymce.util.Promise","tinymce/inlite/core/Actions","tinymce/inlite/core/UrlType"],function(n,t,e,i,o){var r=function(n){n.find("textbox").eq(0).each(function(n){n.focus()})},c=function(e,i){var o=t.create(n.extend({type:"form",layout:"flex",direction:"row",padding:5,name:e,spacing:3},i));return o.on("show",function(){r(o)}),o},u=function(n,t){return t?n.show():n.hide()},l=function(n,t){return new e(function(e){n.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(n){var i=n===!0?"http://"+t:t;e(i)})})},a=function(n,t){return!o.isAbsolute(t)&&o.isDomainLike(t)?l(n,t):e.resolve(t)},f=function(n,t){var e=function(){n.focus(),i.unlink(n),t()};return c("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:e,tooltip:"Remove link"},{type:"textbox",name:"linkurl",placeholder:"Paste or type a link"},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:function(){var t,e="";t=n.dom.getParent(n.selection.getStart(),"a[href]"),t&&(e=n.dom.getAttrib(t,"href")),this.fromJSON({linkurl:e}),u(this.find("#unlink"),t)},onsubmit:function(e){a(n,e.data.linkurl).then(function(e){i.createLink(n,e),t()})}})};return{createQuickLinkForm:f}});
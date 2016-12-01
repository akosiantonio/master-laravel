/**
 * Actions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Actions",["tinymce/inlite/alien/Uuid","tinymce/inlite/alien/Unlink"],function(t,e){var n=function(t,e){var n,i,o;for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",i=0;e>i;i++){for(o+="<tr>",n=0;t>n;n++)o+="<td><br></td>";o+="</tr>"}return o+="</tbody>",o+="</table>"},i=function(t){var e=t.dom.select("*[data-mce-id]");return e[0]},o=function(t,e,o){t.undoManager.transact(function(){var c,r;t.insertContent(n(e,o)),c=i(t),c.removeAttribute("data-mce-id"),r=t.dom.select("td,th",c),t.selection.setCursorLocation(r[0],0)})},c=function(t,e){t.execCommand("FormatBlock",!1,e)},r=function(e,n,i){var o,c;o=e.editorUpload.blobCache,c=o.create(t.uuid("mceu"),i,n),o.add(c),e.insertContent(e.dom.createHTML("img",{src:c.blobUri()}))},a=function(t){t.selection.collapse(!1)},d=function(t){t.focus(),e.unlinkSelection(t),a(t)},l=function(t,e,n){t.focus(),t.dom.setAttrib(e,"href",n),a(t)},u=function(t,e){t.execCommand("mceInsertLink",!1,{href:e}),a(t)},m=function(t,e){var n=t.dom.getParent(t.selection.getStart(),"a[href]");n?l(t,n,e):u(t,e)},f=function(t,e){0===e.trim().length?d(t):m(t,e)};return{insertTable:o,formatBlock:c,insertBlob:r,createLink:f,unlink:d}});
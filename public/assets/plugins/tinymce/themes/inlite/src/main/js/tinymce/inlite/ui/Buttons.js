/**
 * Buttons.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/ui/Buttons",["tinymce/inlite/ui/Panel","tinymce/inlite/file/Conversions","tinymce/inlite/file/Picker","tinymce/inlite/core/Actions"],function(t,i,n,e){var o=function(t){for(var i=function(i){return function(){e.formatBlock(t,i)}},n=1;6>n;n++){var o="h"+n;t.addButton(o,{text:o.toUpperCase(),tooltip:"Heading "+n,stateSelector:o,onclick:i(o),onPostRender:function(){var t=this.getEl().firstChild.firstChild;t.style.fontWeight="bold"}})}},c=function(t,c){t.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){c.showForm(t,"quicklink")}}),t.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){n.pickFile().then(function(n){var o=n[0];i.blobToBase64(o).then(function(i){e.insertBlob(t,i,o)})})}}),t.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){c.hide(),e.insertTable(t,2,2)}}),o(t)};return{addToEditor:c}});
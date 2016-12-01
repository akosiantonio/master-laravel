/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/Demo",["tinymce/inlite/Theme","global!tinymce"],function(e,i){return i.init({selector:"div.tinymce",theme:"inlite",plugins:"image table link paste contextmenu textpattern autolink",insert_toolbar:"quickimage quicktable",selection_toolbar:"bold italic | quicklink h2 h3 blockquote",inline:!0,paste_data_images:!0}),function(){}});
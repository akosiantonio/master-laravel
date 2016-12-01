/**
 * Picker.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/file/Picker",["global!tinymce.util.Promise"],function(e){var t=function(){return new e(function(e){var t;t=document.createElement("input"),t.type="file",t.style.position="fixed",t.style.left=0,t.style.top=0,t.style.opacity=.001,document.body.appendChild(t),t.onchange=function(t){e(Array.prototype.slice.call(t.target.files))},t.click(),t.parentNode.removeChild(t)})};return{pickFile:t}});
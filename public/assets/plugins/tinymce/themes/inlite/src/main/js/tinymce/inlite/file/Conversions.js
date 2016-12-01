/**
 * Conversions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/file/Conversions",["global!tinymce.util.Promise"],function(n){var e=function(e){return new n(function(n){var i=new FileReader;i.onloadend=function(){n(i.result.split(",")[1])},i.readAsDataURL(e)})};return{blobToBase64:e}});
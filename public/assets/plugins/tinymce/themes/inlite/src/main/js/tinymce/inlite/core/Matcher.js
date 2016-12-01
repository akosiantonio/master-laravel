/**
 * Matcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Matcher",[],function(){var r=function(r,n){return{id:r,rect:n}},n=function(r,n){for(var t=0;t<n.length;t++){var e=n[t],i=e(r);if(i)return i}return null};return{match:n,result:r}});
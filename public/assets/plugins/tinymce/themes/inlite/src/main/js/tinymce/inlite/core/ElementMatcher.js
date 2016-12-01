/**
 * ElementMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/ElementMatcher",["tinymce/inlite/core/Matcher","tinymce/inlite/core/Measure"],function(e,t){var n=function(n,r){return function(i){for(var c=0;c<r.length;c++)if(r[c].predicate(n))return e.result(r[c].id,t.getElementRect(i,n));return null}},r=function(n,r){return function(i){for(var c=0;c<n.length;c++)for(var u=0;u<r.length;u++)if(r[u].predicate(n[c]))return e.result(r[u].id,t.getElementRect(i,n[c]));return null}};return{element:n,parent:r}});
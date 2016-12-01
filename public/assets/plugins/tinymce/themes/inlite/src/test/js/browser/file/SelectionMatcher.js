/**
 * SelectionMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/SelectionMatcher",["tinymce/inlite/core/Matcher","tinymce/inlite/core/Measure"],function(e,t){var n=function(n){return function(r){return r.selection.isCollapsed()?null:e.result(n,t.getSelectionRect(r))}},r=function(n,r){return function(i){var l,c=i.schema.getTextBlockElements();for(l=0;l<n.length;l++)if("TABLE"===n[l].nodeName)return null;for(l=0;l<n.length;l++)if(n[l].nodeName in c)return i.dom.isEmpty(n[l])?e.result(r,t.getSelectionRect(i)):null;return null}};return{textSelection:n,emptyTextBlock:r}});
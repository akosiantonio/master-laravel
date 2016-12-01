/**
 * Layout.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Layout",["global!tinymce.geom.Rect","tinymce/inlite/core/Convert"],function(t,e){var n=function(t,e){return{rect:t,position:e}},c=function(t,e){return{x:e.x,y:e.y,w:t.w,h:t.h}},r=function(e,r,i,o,l){var u,a,b;return u=t.findBestRelativePosition(l,i,o,e),i=t.clamp(i,o),u?(a=t.relativePosition(l,i,u),b=c(l,a),n(b,u)):(i=t.intersect(o,i),i?(u=t.findBestRelativePosition(l,i,o,r))?(a=t.relativePosition(l,i,u),b=c(l,a),n(b,u)):(b=c(l,i),n(b,u)):null)},i=function(t,e,n){return r(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],t,e,n)},o=function(t,e,n){return r(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],t,e,n)},l=function(t,n,c,r){var i;return"function"==typeof t?(i=t({elementRect:e.toClientRect(n),contentAreaRect:e.toClientRect(c),panelRect:e.toClientRect(r)}),e.fromClientRect(i)):r};return{calcInsert:i,calc:o,userConstrain:l}});
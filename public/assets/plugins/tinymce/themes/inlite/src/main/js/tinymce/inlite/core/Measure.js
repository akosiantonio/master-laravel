/**
 * Measure.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Measure",["global!tinymce.DOM","global!tinymce.geom.Rect","tinymce/inlite/core/Convert"],function(e,t,n){var i=function(t){var n=e.getViewPort();return{x:t.x+n.x,y:t.y+n.y,w:t.w,h:t.h}},o=function(e){var t=e.getBoundingClientRect();return i({x:t.left,y:t.top,w:Math.max(e.clientWidth,e.offsetWidth),h:Math.max(e.clientHeight,e.offsetHeight)})},r=function(e,t){return o(t)},c=function(e){return o(e.getElement().ownerDocument.body)},u=function(e){return o(e.getContentAreaContainer()||e.getBody())},g=function(e){var t=e.selection.getBoundingClientRect();return t?i(n.fromClientRect(t)):null};return{getElementRect:r,getPageAreaRect:c,getContentAreaRect:u,getSelectionRect:g}});
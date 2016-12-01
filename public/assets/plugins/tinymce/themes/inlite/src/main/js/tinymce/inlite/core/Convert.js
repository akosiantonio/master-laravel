/**
 * Convert.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/Convert",[],function(){var t=function(t){return{x:t.left,y:t.top,w:t.width,h:t.height}},e=function(t){return{left:t.x,top:t.y,width:t.w,height:t.h,right:t.x+t.w,bottom:t.y+t.h}};return{fromClientRect:t,toClientRect:e}});
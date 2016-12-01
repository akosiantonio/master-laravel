/**
 * Uuid.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Uuid",[],function(){var n=0,t=function(){var n=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+n()+n()+n()},r=function(r){return r+n++ +t()};return{uuid:r}});
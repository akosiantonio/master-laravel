/**
 * Arr.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Arr",[],function(){var n=function(r){return r.reduce(function(r,t){return Array.isArray(t)?r.concat(n(t)):r.concat(t)},[])};return{flatten:n}});
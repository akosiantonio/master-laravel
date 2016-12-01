/**
 * SkinLoader.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/SkinLoader",["global!tinymce.EditorManager","global!tinymce.DOM"],function(n,i){var e=function(n,i){var e=function(){n.fire("SkinLoaded"),i()};n.initialized?e():n.on("init",e)},t=function(t,o,a){var c=n.baseURL,r=c+"/skins/"+o,l=function(){e(t,a)};i.styleSheetLoader.load(r+"/skin.min.css",l),t.contentCSS.push(r+"/content.inline.min.css")};return{load:t}});
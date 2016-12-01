/**
 * PredicateId.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/core/PredicateId",["global!tinymce.util.Tools"],function(e){var t=function(e,t){return{id:e,predicate:t}},n=function(n){return e.map(n,function(e){return t(e.id,e.predicate)})};return{create:t,fromContextToolbars:n}});
/**
 * Toolbar.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/ui/Toolbar",["global!tinymce.util.Tools","global!tinymce.ui.Factory"],function(t,e){var n=function(t,e){return function(n,o){for(var l,i=o.parents.length;i--&&(l=o.parents[i].nodeName,"OL"!=l&&"UL"!=l););t.active(n&&l==e)}},o=function(t,e){var o=function(t,e){return{selector:t,handler:e}},l=function(t){e.active(t)},i=function(t){e.disabled(t)};return"bullist"==t?o("ul > li",n(e,"UL")):"numlist"==t?o("ol > li",n(e,"OL")):e.settings.stateSelector?o(e.settings.stateSelector,l):e.settings.disabledStateSelector?o(e.settings.disabledStateSelector,i):null},l=function(t,e,n){return function(){var l=o(e,n);null!==l&&t.selection.selectorChanged(l.selector,l.handler)}},i=function(n,o,i){var r,u=[];if(i)return t.each(i.split(/[ ,]/),function(t){var o;"|"==t?r=null:e.has(t)?(t={type:t},u.push(t),r=null):(r||(r={type:"buttongroup",items:[]},u.push(r)),n.buttons[t]&&(o=t,t=n.buttons[o],"function"==typeof t&&(t=t()),t.type=t.type||"button",t=e.create(t),t.on("postRender",l(n,o,t)),r.items.push(t)))}),e.create({type:"toolbar",layout:"flow",name:o,items:u})};return{create:i}});
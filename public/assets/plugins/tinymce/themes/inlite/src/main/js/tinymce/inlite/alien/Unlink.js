/**
 * Unlink.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Unlink",["tinymce/inlite/alien/Bookmark","global!tinymce.util.Tools","global!tinymce.dom.TreeWalker","global!tinymce.dom.RangeUtils"],function(e,n,t,o){var i=function(e,n,o){var i,r,a=[];for(i=new t(n,e),r=n;r&&(1===r.nodeType&&a.push(r),r!==o);r=i.next());return a},r=function(t,o){var i,r,a;r=t.dom,a=t.selection,i=e.create(r,a.getRng()),n.each(o,function(e){t.dom.remove(e,!0)}),a.setRng(e.resolve(r,i))},a=function(e){return"A"===e.nodeName&&e.hasAttribute("href")},l=function(e,n){var t=e.getParent(n,a);return t?t:n},c=function(e){var t,r,c,u,f,g,d;return f=e.selection,g=e.dom,d=f.getRng(),t=l(g,o.getNode(d.startContainer,d.startOffset)),r=o.getNode(d.endContainer,d.endOffset),c=e.getBody(),u=n.grep(i(c,t,r),a)},u=function(e){r(e,c(e))};return{unlinkSelection:u}});
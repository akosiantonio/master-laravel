/**
 * Bookmark.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
define("tinymce/inlite/alien/Bookmark",[],function(){var e=function(e,t){function n(n){var a,o,i;o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"],1==o.nodeType&&(a=e.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(i=Math.min(i,o.childNodes.length-1),n?o.insertBefore(a,o.childNodes[i]):e.insertAfter(a,o.childNodes[i])):o.appendChild(a),o=a,i=0),r[n?"startContainer":"endContainer"]=o,r[n?"startOffset":"endOffset"]=i}var r={};return n(!0),t.collapsed||n(),r},t=function(e,t){function n(n){function r(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t==e)return n;(1!=t.nodeType||"bookmark"!=t.getAttribute("data-mce-type"))&&n++,t=t.nextSibling}return-1}var a,o,i;a=i=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],a&&(1==a.nodeType&&(o=r(a),a=a.parentNode,e.remove(i)),t[n?"startContainer":"endContainer"]=a,t[n?"startOffset":"endOffset"]=o)}n(!0),n();var r=e.createRng();return r.setStart(t.startContainer,t.startOffset),t.endContainer&&r.setEnd(t.endContainer,t.endOffset),r};return{create:e,resolve:t}});
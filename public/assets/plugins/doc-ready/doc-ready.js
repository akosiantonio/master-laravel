/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */
!function(e){"use strict";function t(e){"function"==typeof e&&(t.isReady?e():a.push(e))}function n(e){var n="readystatechange"===e.type&&"complete"!==o.readyState;t.isReady||n||i()}function i(){t.isReady=!0;for(var e=0,n=a.length;n>e;e++){var i=a[e];i()}}function d(d){return"complete"===o.readyState?i():(d.bind(o,"DOMContentLoaded",n),d.bind(o,"readystatechange",n),d.bind(e,"load",n)),t}var o=e.document,a=[];t.isReady=!1,"function"==typeof define&&define.amd?define(["eventie/eventie"],d):"object"==typeof exports?module.exports=d(require("eventie")):e.docReady=d(e.eventie)}(window);
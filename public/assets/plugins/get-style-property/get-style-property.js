/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */
!function(e){"use strict";function t(e){if(e){if("string"==typeof o[e])return e;e=e.charAt(0).toUpperCase()+e.slice(1);for(var t,r=0,i=n.length;i>r;r++)if(t=n[r]+e,"string"==typeof o[t])return t}}var n="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof exports?module.exports=t:e.getStyleProperty=t}(window);
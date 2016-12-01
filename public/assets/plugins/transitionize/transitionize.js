/**
 * Transitionize 0.0.3
 * https://github.com/abpetkov/transitionize
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */
function Transitionize(i,t){return this instanceof Transitionize?(this.element=i,this.props=t||{},void this.init()):new Transitionize(i,t)}module.exports=Transitionize,Transitionize.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},Transitionize.prototype.init=function(){var i=[];for(var t in this.props)i.push(t+" "+this.props[t]);this.element.style.transition=i.join(", "),this.isSafari()&&(this.element.style.webkitTransition=i.join(", "))};
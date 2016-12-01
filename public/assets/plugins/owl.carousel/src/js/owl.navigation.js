!function(t,e,s,i){"use strict";var o=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this.$element.on(this._handlers)};o.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},o.prototype.initialize=function(){var e,s=this._core.settings;this._controls.$relative=(s.navContainer?t(s.navContainer):t("<div>").addClass(s.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+s.navElement+">").addClass(s.navClass[0]).html(s.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(s.navSpeed)},this)),this._controls.$next=t("<"+s.navElement+">").addClass(s.navClass[1]).html(s.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(s.navSpeed)},this)),s.dotsData||(this._templates=[t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(s.dotsContainer?t(s.dotsContainer):t("<div>").addClass(s.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",t.proxy(function(e){var i=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(i,s.dotsSpeed)},this));for(e in this._overrides)this._core[e]=t.proxy(this[e],this)},o.prototype.destroy=function(){var t,e,s,i;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},o.prototype.update=function(){var t,e,s,i=this._core.clones().length/2,o=i+this._core.items().length,n=this._core.maximum(!0),r=this._core.settings,a=r.center||r.autoWidth||r.dotsData?1:r.dotsEach||r.items;if("page"!==r.slideBy&&(r.slideBy=Math.min(r.slideBy,r.items)),r.dots||"page"==r.slideBy)for(this._pages=[],t=i,e=0,s=0;o>t;t++){if(e>=a||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+a-1}),Math.min(n,t-i)===n)break;e=0,++s}e+=this._core.mergers(this._core.relative(t))}},o.prototype.draw=function(){var e,s=this._core.settings,i=this._core.items().length<=s.items,o=this._core.relative(this._core.current()),n=s.loop||s.rewind;this._controls.$relative.toggleClass("disabled",!s.nav||i),s.nav&&(this._controls.$previous.toggleClass("disabled",!n&&o<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!n&&o>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!s.dots||i),s.dots&&(e=this._pages.length-this._controls.$absolute.children().length,s.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):0>e&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},o.prototype.onTrigger=function(e){var s=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:s&&(s.center||s.autoWidth||s.dotsData?1:s.dotsEach||s.items)}},o.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,s){return t.start<=e&&t.end>=e},this)).pop()},o.prototype.getPosition=function(e){var s,i,o=this._core.settings;return"page"==o.slideBy?(s=t.inArray(this.current(),this._pages),i=this._pages.length,e?++s:--s,s=this._pages[(s%i+i)%i].start):(s=this._core.relative(this._core.current()),i=this._core.items().length,e?s+=o.slideBy:s-=o.slideBy),s},o.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},o.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},o.prototype.to=function(e,s,i){var o;i?t.proxy(this._overrides.to,this._core)(e,s):(o=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%o+o)%o].start,s))},t.fn.owlCarousel.Constructor.Plugins.Navigation=o}(window.Zepto||window.jQuery,window,document);
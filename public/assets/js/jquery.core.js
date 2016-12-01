!function(t){"use strict";var i=function(){this.$body=t("body"),this.$portletIdentifier=".portlet",this.$portletCloser='.portlet a[data-toggle="remove"]',this.$portletRefresher='.portlet a[data-toggle="reload"]'};i.prototype.init=function(){var i=this;t(document).on("click",this.$portletCloser,function(o){o.preventDefault();var a=t(this).closest(i.$portletIdentifier),e=a.parent();a.remove(),0==e.children().length&&e.remove()}),t(document).on("click",this.$portletRefresher,function(o){o.preventDefault();var a=t(this).closest(i.$portletIdentifier);a.append('<div class="panel-disabled"><div class="loader-1"></div></div>');var e=a.find(".panel-disabled");setTimeout(function(){e.fadeOut("fast",function(){e.remove()})},500+300*(5*Math.random()))})},t.Portlet=new i,t.Portlet.Constructor=i}(window.jQuery),function(t){"use strict";var i=function(){};i.prototype.notify=function(i,o,a,e){var n="fa fa-adjust";n="error"==i?"fa fa-exclamation":"warning"==i?"fa fa-warning":"success"==i?"fa fa-check":"custom"==i?"md md-album":"info"==i?"fa fa-question":"fa fa-adjust",t.notify({title:a,text:e,image:"<i class='"+n+"'></i>"},{style:"metro",className:i,globalPosition:o,showAnimation:"show",showDuration:0,hideDuration:0,autoHide:!0,clickToHide:!0})},i.prototype.autoHideNotify=function(i,o,a,e){var n="fa fa-adjust";n="error"==i?"fa fa-exclamation":"warning"==i?"fa fa-warning":"success"==i?"fa fa-check":"custom"==i?"md md-album":"info"==i?"fa fa-question":"fa fa-adjust",t.notify({title:a,text:e,image:"<i class='"+n+"'></i>"},{style:"metro",className:i,globalPosition:o,showAnimation:"show",showDuration:0,hideDuration:0,autoHideDelay:5e3,autoHide:!0,clickToHide:!0})},i.prototype.confirm=function(i,o,a){var e="fa fa-adjust";e="error"==i?"fa fa-exclamation":"warning"==i?"fa fa-warning":"success"==i?"fa fa-check":"custom"==i?"md md-album":"info"==i?"fa fa-question":"fa fa-adjust",t.notify({title:a,text:'Are you sure you want to do nothing?<div class="clearfix"></div><br><a class="btn btn-sm btn-white yes">Yes</a> <a class="btn btn-sm btn-danger no">No</a>',image:"<i class='"+e+"'></i>"},{style:"metro",className:i,globalPosition:o,showAnimation:"show",showDuration:0,hideDuration:0,autoHide:!1,clickToHide:!1}),t(document).on("click",".notifyjs-metro-base .no",function(){t(this).trigger("notify-hide")}),t(document).on("click",".notifyjs-metro-base .yes",function(){alert(t(this).text()+" clicked!"),t(this).trigger("notify-hide")})},i.prototype.init=function(){},t.Notification=new i,t.Notification.Constructor=i}(window.jQuery),function(t){"use strict";var i=function(){};i.prototype.initTooltipPlugin=function(){t.fn.tooltip&&t('[data-toggle="tooltip"]').tooltip()},i.prototype.initPopoverPlugin=function(){t.fn.popover&&t('[data-toggle="popover"]').popover()},i.prototype.initCustomModalPlugin=function(){t('[data-plugin="custommodal"]').on("click",function(i){Custombox.open({target:t(this).attr("href"),effect:t(this).attr("data-animation"),overlaySpeed:t(this).attr("data-overlaySpeed"),overlayColor:t(this).attr("data-overlayColor")}),i.preventDefault()})},i.prototype.initNiceScrollPlugin=function(){t.fn.niceScroll&&t(".nicescroll").niceScroll({cursorcolor:"#98a6ad",cursorwidth:"6px",cursorborderradius:"5px"})},i.prototype.initSlimScrollPlugin=function(){t.fn.niceScroll&&t(".slimscroll-noti").slimScroll({position:"right",size:"5px",color:"#98a6ad",height:"230px",wheelStep:10})},i.prototype.initRangeSlider=function(){t.fn.slider&&t('[data-plugin="range-slider"]').slider({})},i.prototype.initSwitchery=function(){t('[data-plugin="switchery"]').each(function(i,o){new Switchery(t(this)[0],t(this).data())})},i.prototype.initMultiSelect=function(){t('[data-plugin="multiselect"]').length>0&&t('[data-plugin="multiselect"]').multiSelect(t(this).data())},i.prototype.initPeityCharts=function(){t('[data-plugin="peity-pie"]').each(function(i,o){var a=t(this).attr("data-colors")?t(this).attr("data-colors").split(","):[],e=t(this).attr("data-width")?t(this).attr("data-width"):20,n=t(this).attr("data-height")?t(this).attr("data-height"):20;t(this).peity("pie",{fill:a,width:e,height:n})}),t('[data-plugin="peity-donut"]').each(function(i,o){var a=t(this).attr("data-colors")?t(this).attr("data-colors").split(","):[],e=t(this).attr("data-width")?t(this).attr("data-width"):20,n=t(this).attr("data-height")?t(this).attr("data-height"):20;t(this).peity("donut",{fill:a,width:e,height:n})}),t('[data-plugin="peity-donut-alt"]').each(function(i,o){t(this).peity("donut")}),t('[data-plugin="peity-line"]').each(function(i,o){t(this).peity("line",t(this).data())}),t('[data-plugin="peity-bar"]').each(function(i,o){var a=t(this).attr("data-colors")?t(this).attr("data-colors").split(","):[],e=t(this).attr("data-width")?t(this).attr("data-width"):20,n=t(this).attr("data-height")?t(this).attr("data-height"):20;t(this).peity("bar",{fill:a,width:e,height:n})})},i.prototype.initCounterUp=function(){t(this).attr("data-delay")?t(this).attr("data-delay"):100,t(this).attr("data-time")?t(this).attr("data-time"):1200;t('[data-plugin="counterup"]').each(function(i,o){t(this).counterUp({delay:100,time:1200})})},i.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initNiceScrollPlugin(),this.initSlimScrollPlugin(),this.initCustomModalPlugin(),this.initRangeSlider(),this.initSwitchery(),this.initMultiSelect(),this.initPeityCharts(),this.initCounterUp(),t.Portlet.init()},t.Components=new i,t.Components.Constructor=i}(window.jQuery),function(t){"use strict";t.Components.init()}(window.jQuery);
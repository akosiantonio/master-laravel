/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
/*
* tablesaw: A set of plugins for responsive tables
* Stack and Column Toggle tables
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/
"undefined"==typeof Tablesaw&&(Tablesaw={i18n:{modes:["Stack","Swipe","Toggle"],columns:'Col<span class="a11y-sm">umn</span>s',columnBtnText:"Columns",columnsDialogError:"No eligible columns.",sort:"Sort"},mustard:"querySelector"in document&&(!window.blackberry||window.WebKitPoint)&&!window.operamini}),Tablesaw.config||(Tablesaw.config={}),Tablesaw.mustard&&jQuery(document.documentElement).addClass("tablesaw-enhanced"),function(t){var e="table",a={toolbar:"tablesaw-bar"},s={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh"},n="stack",i="table[data-tablesaw-mode],table[data-tablesaw-sortable]",l=function(e){if(!e)throw new Error("Tablesaw requires an element.");this.table=e,this.$table=t(e),this.mode=this.$table.attr("data-tablesaw-mode")||n,this.init()};l.prototype.init=function(){this.$table.attr("id")||this.$table.attr("id",e+"-"+Math.round(1e4*Math.random())),this.createToolbar();var t=this._initCells();this.$table.trigger(s.create,[this,t])},l.prototype._initCells=function(){var e,a=this.table.querySelectorAll("thead tr"),s=this;return t(a).each(function(){var n=0;t(this).children().each(function(){var t=parseInt(this.getAttribute("colspan"),10),i=":nth-child("+(n+1)+")";if(e=n+1,t)for(var l=0;t-1>l;l++)n++,i+=", :nth-child("+(n+1)+")";this.cells=s.$table.find("tr").not(a[0]).not(this).children().filter(i),n++})}),e},l.prototype.refresh=function(){this._initCells(),this.$table.trigger(s.refresh)},l.prototype.createToolbar=function(){var e=this.$table.prev().filter("."+a.toolbar);e.length||(e=t("<div>").addClass(a.toolbar).insertBefore(this.$table)),this.$toolbar=e,this.mode&&this.$toolbar.addClass("mode-"+this.mode)},l.prototype.destroy=function(){this.$table.prev().filter("."+a.toolbar).each(function(){this.className=this.className.replace(/\bmode\-\w*\b/gi,"")});var n=this.$table.attr("id");t(document).unbind("."+n),t(window).unbind("."+n),this.$table.trigger(s.destroy,[this]),this.$table.removeAttr("data-tablesaw-mode"),this.$table.removeData(e)},t.fn[e]=function(){return this.each(function(){var a=t(this);if(!a.data(e)){var s=new l(this);a.data(e,s)}})},t(document).on("enhance.tablesaw",function(a){Tablesaw.mustard&&t(a.target).find(i)[e]()})}(jQuery),function(t,e,a){var s={stackTable:"tablesaw-stack",cellLabels:"tablesaw-cell-label",cellContentLabels:"tablesaw-cell-content"},n={obj:"tablesaw-stack"},i={labelless:"data-tablesaw-no-labels",hideempty:"data-tablesaw-hide-empty"},l=function(t){this.$table=e(t),this.labelless=this.$table.is("["+i.labelless+"]"),this.hideempty=this.$table.is("["+i.hideempty+"]"),this.labelless||(this.allHeaders=this.$table.find("th")),this.$table.data(n.obj,this)};l.prototype.init=function(t){if(this.$table.addClass(s.stackTable),!this.labelless){var a=e(this.allHeaders),n=this.hideempty;a.each(function(){var a=e(this),l=e(this.cells).filter(function(){return!(e(this).parent().is("["+i.labelless+"]")||n&&e(this).is(":empty"))}),o=l.not(this).filter("thead th").length&&" tablesaw-cell-label-top",r=a.find(".tablesaw-sortable-btn"),c=r.length?r.html():a.html();if(""!==c)if(o){var d=parseInt(e(this).attr("colspan"),10),h="";d&&(h="td:nth-child("+d+"n + "+t+")"),l.filter(h).prepend("<b class='"+s.cellLabels+o+"'>"+c+"</b>")}else l.wrapInner("<span class='"+s.cellContentLabels+"'></span>"),l.prepend("<b class='"+s.cellLabels+"'>"+c+"</b>")})}},l.prototype.destroy=function(){this.$table.removeClass(s.stackTable),this.$table.find("."+s.cellLabels).remove(),this.$table.find("."+s.cellContentLabels).each(function(){e(this).replaceWith(this.childNodes)})},e(document).on("tablesawcreate",function(t,e,a){if("stack"===e.mode){var s=new l(e.table);s.init(a)}}),e(document).on("tablesawdestroy",function(t,a){"stack"===a.mode&&e(a.table).data(n.obj).destroy()})}(this,jQuery),function(t){var e="tablesawbtn",a={_create:function(){return t(this).each(function(){t(this).trigger("beforecreate."+e)[e]("_init").trigger("create."+e)})},_init:function(){var a=t(this),s=this.getElementsByTagName("select")[0];return s&&t(this).addClass("btn-select")[e]("_select",s),a},_select:function(e){var a=function(e,a){var s,n,i,l=t(a).find("option");if(l.each(function(){var t=this;t.selected&&(s=document.createTextNode(t.text))}),i=e.childNodes,l.length>0)for(var o=0,r=i.length;r>o;o++)n=i[o],n&&3===n.nodeType&&e.replaceChild(s,n)};a(this,e),t(this).bind("change refresh",function(){a(this,e)})}};t.fn[e]=function(a,s,n,i){return this.each(function(){return a&&"string"==typeof a?t.fn[e].prototype[a].call(this,s,n,i):t(this).data(e+"active")?t(this):(t(this).data(e+"active",!0),void t.fn[e].prototype._create.call(this))})},t.extend(t.fn[e].prototype,a)}(jQuery),function(t,e,a){var s=function(t){this.$table=e(t),this.classes={columnToggleTable:"tablesaw-columntoggle",columnBtnContain:"tablesaw-columntoggle-btnwrap tablesaw-advance",columnBtn:"tablesaw-columntoggle-btn tablesaw-nav-btn down",popup:"tablesaw-columntoggle-popup",priorityPrefix:"tablesaw-priority-",toolbar:"tablesaw-bar"},this.headers=this.$table.find("tr:first > th"),this.$table.data("tablesaw-coltoggle",this)};s.prototype.init=function(){function t(){r.addClass("visible"),i.removeClass("down").addClass("up"),e(document).unbind("click."+s,a),window.clearTimeout(h),h=window.setTimeout(function(){e(document).one("click."+s,a)},15)}function a(t){t&&e(t.target).closest("."+c.classes.popup).length||(e(document).unbind("click."+s),i.removeClass("up").addClass("down"),r.removeClass("visible"))}var s,n,i,l,o,r,c=this;this.$table.addClass(this.classes.columnToggleTable),s=this.$table.attr("id"),n=s+"-popup",r=e("<div class='"+this.classes.columnBtnContain+"'></div>"),i=e("<a href='#"+n+"' class='btn btn-micro "+this.classes.columnBtn+"' data-popup-link><span>"+Tablesaw.i18n.columnBtnText+"</span></a>"),l=e("<div class='dialog-table-coltoggle "+this.classes.popup+"' id='"+n+"'></div>"),o=e("<div class='btn-group'></div>");var d=!1;e(this.headers).not("td").each(function(){var t=e(this),a=t.attr("data-tablesaw-priority"),s=c.$getCells(this);a&&"persist"!==a&&(s.addClass(c.classes.priorityPrefix+a),e("<label><input type='checkbox' checked>"+t.text()+"</label>").appendTo(o).children(0).data("tablesaw-header",this),d=!0)}),d||o.append("<label>"+Tablesaw.i18n.columnsDialogError+"</label>"),o.appendTo(l),o.find('input[type="checkbox"]').on("change",function(t){var e=t.target.checked;c.$getCellsFromCheckbox(t.target).toggleClass("tablesaw-cell-hidden",!e).toggleClass("tablesaw-cell-visible",e),c.$table.trigger("tablesawcolumns")}),i.appendTo(r),r.appendTo(this.$table.prev().filter("."+this.classes.toolbar));var h;i.on("click.tablesaw",function(e){e.preventDefault(),r.is(".visible")?a():t()}),l.appendTo(r),this.$menu=o,e(window).on("resize."+s,function(){c.refreshToggle()}),this.refreshToggle()},s.prototype.$getCells=function(t){return e(t).add(t.cells)},s.prototype.$getCellsFromCheckbox=function(t){var a=e(t).data("tablesaw-header");return this.$getCells(a)},s.prototype.refreshToggle=function(){var t=this;this.$menu.find("input").each(function(){this.checked="table-cell"===t.$getCellsFromCheckbox(this).eq(0).css("display")})},s.prototype.refreshPriority=function(){var t=this;e(this.headers).not("td").each(function(){var a=e(this),s=a.attr("data-tablesaw-priority"),n=a.add(this.cells);s&&"persist"!==s&&n.addClass(t.classes.priorityPrefix+s)})},s.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable),this.$table.find("th, td").each(function(){var t=e(this);t.removeClass("tablesaw-cell-hidden").removeClass("tablesaw-cell-visible"),this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,"")})},e(document).on("tablesawcreate",function(t,e){if("columntoggle"===e.mode){var a=new s(e.table);a.init()}}),e(document).on("tablesawdestroy",function(t,a){"columntoggle"===a.mode&&e(a.table).data("tablesaw-coltoggle").destroy()})}(this,jQuery),function(t,e,a){function s(){var t=document.createElement("div"),e=t.getElementsByTagName("i");return t.innerHTML="<!--[if lte IE 8]><i></i><![endif]-->",!!e.length}function n(a){function n(t){return e(t.cells).add(t)}function i(t){n(t).removeClass("tablesaw-cell-hidden")}function l(t){n(t).addClass("tablesaw-cell-hidden")}function o(t){n(t).addClass("tablesaw-cell-persist")}function r(t){return e(t).is('[data-tablesaw-priority="persist"]')}function c(){a.removeClass($),e("#"+j+"-persist").remove()}function d(){var t,s="#"+j+".tablesaw-swipe ",n=[],i=a.width(),l=[];x.each(function(t){var a;r(this)&&(a=e(this).outerWidth(),.75*i>a&&(l.push(t+"-"+a),n.push(s+" .tablesaw-cell-persist:nth-child("+(t+1)+") { width: "+a+"px; }")))}),t=l.join("_"),a.addClass($);var o=e("#"+j+"-persist");o.length&&o.data("hash")===t||(o.remove(),n.length&&e("<style>"+n.join("\n")+"</style>").attr("id",j+"-persist").data("hash",t).appendTo(_))}function h(){var t,a=[];return k.each(function(s){var n=e(this),i="none"===n.css("display")||n.is(".tablesaw-cell-hidden");if(i||t){if(i&&t)return a[1]=s,!1}else t=!0,a[0]=s}),a}function u(){var t=h();return[t[1]-1,t[0]-1]}function b(t){return t?h():u()}function f(t){return t[1]>-1&&t[1]<k.length}function p(){var e=a.attr("data-tablesaw-swipe-media");return!e||"matchMedia"in t&&t.matchMedia(e).matches}function w(){if(p()){var t=20,s=a.parent().width(),n=[],r=0,d=[],h=x.length;x.each(function(a){var i=e(this),l=i.is('[data-tablesaw-priority="persist"]');n.push(l),r+=N[a]+(l?0:t),d.push(r),(l||r>s)&&h--});var u=0===h;x.each(function(t){return n[t]?void o(this):void(d[t]<=s||u?(u=!1,i(this)):l(this))}),B&&c(),a.trigger("tablesawcolumns")}}function m(t){var e=b(t);f(e)&&(isNaN(e[0])&&(t?e[0]=0:e[0]=k.length-1),B&&d(),l(k.get(e[0])),i(k.get(e[1])),a.trigger("tablesawcolumns"))}function v(t,e){return(t.touches||t.originalEvent.touches)[0][e]}var g=e("<div class='tablesaw-advance'></div>"),y=e("<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>").appendTo(g),C=e("<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>").appendTo(g),T="disabled",$="tablesaw-fix-persist",x=a.find("thead th"),k=x.not('[data-tablesaw-priority="persist"]'),N=[],_=e(document.head||"head"),j=a.attr("id"),B=!s();if(!x.length)throw new Error("tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?");a.css("width","auto"),x.each(function(){N.push(e(this).outerWidth())}),a.css("width",""),g.appendTo(a.prev().filter(".tablesaw-bar")),a.addClass("tablesaw-swipe"),j||(j="tableswipe-"+Math.round(1e4*Math.random()),a.attr("id",j)),y.add(C).click(function(t){m(!!e(t.target).closest(C).length),t.preventDefault()}),a.bind("touchstart.swipetoggle",function(a){var s,n,i=v(a,"pageX"),l=v(a,"pageY");e(t).off("resize",w),e(this).bind("touchmove",function(t){s=v(t,"pageX"),n=v(t,"pageY");var e=Tablesaw.config.swipe;Math.abs(s-i)>e.horizontalThreshold&&Math.abs(n-l)<e.verticalThreshold&&t.preventDefault()}).bind("touchend.swipetoggle",function(){var a=Tablesaw.config.swipe;Math.abs(n-l)<a.verticalThreshold&&(s-i<-1*a.horizontalThreshold&&m(!0),s-i>a.horizontalThreshold&&m(!1)),window.setTimeout(function(){e(t).on("resize",w)},300),e(this).unbind("touchmove touchend")})}).bind("tablesawcolumns.swipetoggle",function(){y[f(u())?"removeClass":"addClass"](T),C[f(h())?"removeClass":"addClass"](T)}).bind("tablesawnext.swipetoggle",function(){m(!0)}).bind("tablesawprev.swipetoggle",function(){m(!1)}).bind("tablesawdestroy.swipetoggle",function(){var a=e(this);a.removeClass("tablesaw-swipe"),a.prev().filter(".tablesaw-bar").find(".tablesaw-advance").remove(),e(t).off("resize",w),a.unbind(".swipetoggle")}),w(),e(t).on("resize",w)}e.extend(Tablesaw.config,{swipe:{horizontalThreshold:15,verticalThreshold:30}}),e(document).on("tablesawcreate",function(t,e){"swipe"===e.mode&&n(e.$table)})}(this,jQuery),function(t){function e(e){return t.map(e.childNodes,function(e){var a=t(e);if(a.is("input, select"))return a.val();if(!a.hasClass("tablesaw-cell-label"))return t.trim(a.text())}).join("")}var a="tablesaw-sortable",s="table[data-"+a+"]",n="[data-"+a+"-switch]",i={defaultCol:"data-tablesaw-sortable-default-col",numericCol:"data-tablesaw-sortable-numeric"},l={head:a+"-head",ascend:a+"-ascending",descend:a+"-descending",switcher:a+"-switch",tableToolbar:"tablesaw-toolbar",sortButton:a+"-btn"},o={_create:function(e){return t(this).each(function(){var s=t(this).data("init"+a);return s?!1:void t(this).data("init"+a,!0).trigger("beforecreate."+a)[a]("_init",e).trigger("create."+a)})},_init:function(){var s,o,r=t(this),c=function(){r.addClass(a)},d=function(e){t.each(e,function(e,a){t(a).addClass(l.head)})},h=function(e,a){t.each(e,function(e,s){var n=t("<button class='"+l.sortButton+"'/>");n.bind("click",{col:s},a),t(s).wrapInner(n)})},u=function(e){t.each(e,function(e,a){var s=t(a);s.removeAttr(i.defaultCol),s.removeClass(l.ascend),s.removeClass(l.descend)})},b=function(e){if(!t(e.target).is("a[href]")){e.stopPropagation();var n=t(this).parent(),i=e.data.col,c=s.index(n);u(n.siblings()),n.hasClass(l.descend)?(r[a]("sortBy",i,!0),c+="_asc"):(r[a]("sortBy",i),c+="_desc"),o&&o.find("select").val(c).trigger("refresh"),e.preventDefault()}},f=function(e){t.each(e,function(e,a){var s=t(a);s.is("["+i.defaultCol+"]")&&(s.hasClass(l.descend)||s.addClass(l.ascend))})},p=function(s){o=t("<div>").addClass(l.switcher).addClass(l.tableToolbar).html(function(){var a=["<label>"+Tablesaw.i18n.sort+":"];return a.push('<span class="btn btn-small">&#160;<select>'),s.each(function(s){var n=t(this),o=n.is("["+i.defaultCol+"]"),r=n.hasClass(l.descend),c=n.is("[data-sortable-numeric]"),d=0,h=5;t(this.cells).slice(0,h).each(function(){isNaN(parseInt(e(this),10))||d++});var u=d===h;c||n.attr("data-sortable-numeric",u?"":"false"),a.push("<option"+(o&&!r?" selected":"")+' value="'+s+'_asc">'+n.text()+" "+(u?"&#x2191;":"(A-Z)")+"</option>"),a.push("<option"+(o&&r?" selected":"")+' value="'+s+'_desc">'+n.text()+" "+(u?"&#x2193;":"(Z-A)")+"</option>")}),a.push("</select></span></label>"),a.join("")});var n=r.prev().filter(".tablesaw-bar"),c=n.children().eq(0);c.length?o.insertBefore(c):o.appendTo(n),o.find(".btn").tablesawbtn(),o.find("select").on("change",function(){var e=t(this).val().split("_"),n=s.eq(e[0]);u(n.siblings()),r[a]("sortBy",n.get(0),"asc"===e[1])})};c(),s=r.find("thead th[data-"+a+"-col]"),d(s),h(s,b),f(s),r.is(n)&&p(s,r.find("tbody tr:nth-child(-n+3)"))},getColumnNumber:function(e){return t(e).prevAll().length},getTableRows:function(){return t(this).find("tbody tr")},sortRows:function(a,s,n,i){var l,o,r,c=function(a){var n=[];return t.each(a,function(a,i){var l=t(i).children().get(s);n.push({element:l,cell:e(l),rowNum:a})}),n},d=function(t,e){var a,s=/[^\-\+\d\.]/g;return a=t?function(t,a){return e?parseFloat(t.cell.replace(s,""))-parseFloat(a.cell.replace(s,"")):t.cell.toLowerCase()>a.cell.toLowerCase()?1:-1}:function(t,a){return e?parseFloat(a.cell.replace(s,""))-parseFloat(t.cell.replace(s,"")):t.cell.toLowerCase()<a.cell.toLowerCase()?1:-1}},h=function(t,e){var a,s,n,i=[];for(a=0,s=t.length;s>a;a++)n=t[a].rowNum,i.push(e[n]);return i};l=c(a);var u=t(i).data("tablesaw-sort");return o=(u&&"function"==typeof u?u(n):!1)||d(n,t(i).is("[data-sortable-numeric]")&&!t(i).is('[data-sortable-numeric="false"]')),r=l.sort(o),a=h(r,a)},replaceTableRows:function(e){var a=t(this),s=a.find("tbody");s.html(e)},makeColDefault:function(e,a){var s=t(e);s.attr(i.defaultCol,"true"),a?(s.removeClass(l.descend),s.addClass(l.ascend)):(s.removeClass(l.ascend),s.addClass(l.descend))},sortBy:function(e,s){var n,i,l=t(this);n=l[a]("getColumnNumber",e),i=l[a]("getTableRows"),i=l[a]("sortRows",i,n,s,e),l[a]("replaceTableRows",i),l[a]("makeColDefault",e,s)}};t.fn[a]=function(e){var s,n=Array.prototype.slice.call(arguments,1);return e&&"string"==typeof e?(s=t.fn[a].prototype[e].apply(this[0],n),"undefined"!=typeof s?s:t(this)):(t(this).data(a+"data")||(t(this).data(a+"active",!0),t.fn[a].prototype._create.call(this,e)),t(this))},t.extend(t.fn[a].prototype,o),t(document).on("tablesawcreate",function(t,e){e.$table.is(s)&&e.$table[a]()})}(jQuery),function(t,e,a){function s(a){function s(e){var a=e.attr(n.attr.init);return!a||t.matchMedia&&t.matchMedia(a).matches}function i(){if(!s(a))return void l.hide();l.show();var t=o.find("li").removeClass(r);a.find("thead th").each(function(a){"none"===e(this).css("display")&&t.eq(a).addClass(r)})}var l=e('<div class="tablesaw-advance minimap">'),o=e('<ul class="tablesaw-advance-dots">').appendTo(l),r="tablesaw-advance-dots-hide",c=a.find("thead th");c.each(function(){o.append("<li><i></i></li>")}),l.appendTo(a.prev().filter(".tablesaw-bar")),i(),e(t).on("resize",i),a.bind("tablesawcolumns.minimap",function(){i()}).bind("tablesawdestroy.minimap",function(){var a=e(this);a.prev().filter(".tablesaw-bar").find(".tablesaw-advance").remove(),e(t).off("resize",i),a.unbind(".minimap")})}var n={attr:{init:"data-tablesaw-minimap"}};e(document).on("tablesawcreate",function(t,e){"swipe"!==e.mode&&"columntoggle"!==e.mode||!e.$table.is("[ "+n.attr.init+"]")||s(e.$table)})}(this,jQuery),function(t,e){var a={selectors:{init:"table[data-tablesaw-mode-switch]"},attributes:{excludeMode:"data-tablesaw-mode-exclude"},classes:{main:"tablesaw-modeswitch",toolbar:"tablesaw-toolbar"},modes:["stack","swipe","columntoggle"],init:function(t){var s=e(t),n=s.attr(a.attributes.excludeMode),i=s.prev().filter(".tablesaw-bar"),l="",o=e("<div>").addClass(a.classes.main+" "+a.classes.toolbar).html(function(){var t,e=["<label>"+Tablesaw.i18n.columns+":"],i=s.attr("data-tablesaw-mode");e.push('<span class="btn btn-small">&#160;<select>');for(var o=0,r=a.modes.length;r>o;o++)n&&n.toLowerCase()===a.modes[o]||(t=i===a.modes[o],t&&(l=a.modes[o]),e.push("<option"+(t?" selected":"")+' value="'+a.modes[o]+'">'+Tablesaw.i18n.modes[o]+"</option>"));return e.push("</select></span></label>"),e.join("")}),r=i.find(".tablesaw-advance").eq(0);r.length?o.insertBefore(r):o.appendTo(i),o.find(".btn").tablesawbtn(),o.find("select").bind("change",a.onModeChange)},onModeChange:function(){var t=e(this),s=t.closest("."+a.classes.main),n=t.closest(".tablesaw-bar").nextUntil(n).eq(0),i=t.val();s.remove(),n.data("table").destroy(),n.attr("data-tablesaw-mode",i),n.table()}};e(t.document).on("tablesawcreate",function(t,e){e.$table.is(a.selectors.init)&&a.init(e.table)})}(this,jQuery);
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/pl",[],function(){var n=["znak","znaki","znak\xf3w"],e=["element","elementy","element\xf3w"],r=function(n,e){return 1===n?e[0]:n>1&&4>=n?e[1]:n>=5?e[2]:void 0};return{errorLoading:function(){return"Nie mo\u017cna za\u0142adowa\u0107 wynik\xf3w."},inputTooLong:function(e){var i=e.input.length-e.maximum;return"Usu\u0144 "+i+" "+r(i,n)},inputTooShort:function(e){var i=e.minimum-e.input.length;return"Podaj przynajmniej "+i+" "+r(i,n)},loadingMore:function(){return"Trwa \u0142adowanie\u2026"},maximumSelected:function(n){return"Mo\u017cesz zaznaczy\u0107 tylko "+n.maximum+" "+r(n.maximum,e)},noResults:function(){return"Brak wynik\xf3w"},searching:function(){return"Trwa wyszukiwanie\u2026"}}}),{define:n.define,require:n.require}}();
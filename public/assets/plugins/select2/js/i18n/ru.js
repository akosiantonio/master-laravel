/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/ru",[],function(){function n(n,e,r,u){return 5>n%10&&n%10>0&&5>n%100||n%100>20?n%10>1?r:e:u}return{errorLoading:function(){return"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"},inputTooLong:function(e){var r=e.input.length-e.maximum,u="\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430 "+r+" \u0441\u0438\u043c\u0432\u043e\u043b";return u+=n(r,"","a","\u043e\u0432"),u+=" \u043c\u0435\u043d\u044c\u0448\u0435"},inputTooShort:function(e){var r=e.minimum-e.input.length,u="\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0435 \u0445\u043e\u0442\u044f \u0431\u044b "+r+" \u0441\u0438\u043c\u0432\u043e\u043b";return u+=n(r,"","a","\u043e\u0432")},loadingMore:function(){return"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445\u2026"},maximumSelected:function(e){var r="\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 "+e.maximum+" \u044d\u043b\u0435\u043c\u0435\u043d\u0442";return r+=n(e.maximum,"","a","\u043e\u0432")},noResults:function(){return"\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"},searching:function(){return"\u041f\u043e\u0438\u0441\u043a\u2026"}}}),{define:n.define,require:n.require}}();
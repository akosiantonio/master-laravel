!function(a){"use strict";var o=function(){this.$realData=[]};o.prototype.createStackedChart=function(a,o,r,t,h,n){Morris.Bar({element:a,data:o,xkey:r,ykeys:t,stacked:!0,labels:h,hideHover:"auto",resize:!0,gridLineColor:"#eeeeee",barColors:n})},o.prototype.init=function(){var a=[{y:"Grade 1",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 2",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 3",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 4",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 5",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 6",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 7",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 8",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 9",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 10",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())},{y:"Grade 11",a:1+Math.floor(100*Math.random()),b:1+Math.floor(100*Math.random())}];this.createStackedChart("parentLoginByGrade",a,"y",["a","b"],["Hired","Resigned"],["#e67e22","#95a5a6"]);var o=[{y:"Logged In",a:1+Math.floor(100*Math.random())},{y:"Never Logged In",a:1+Math.floor(100*Math.random())}];this.createStackedChart("parentLoginToday",o,"y",["a"],["Number of Parents"],["#9b59b6"]);var r=[{y:"Logged In",a:1+Math.floor(100*Math.random())},{y:"Never Logged In",a:1+Math.floor(100*Math.random())}];this.createStackedChart("parentLoginMonth",r,"y",["a"],["Number of Parents"],["#1abc9c"]);var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Morris.Line({element:"parentLoginPerMonth",data:[{m:"2015-01",a:1+Math.floor(300*Math.random())},{m:"2015-02",a:1+Math.floor(300*Math.random())},{m:"2015-03",a:1+Math.floor(300*Math.random())},{m:"2015-04",a:1+Math.floor(300*Math.random())},{m:"2015-05",a:1+Math.floor(300*Math.random())},{m:"2015-06",a:1+Math.floor(300*Math.random())},{m:"2015-07",a:1+Math.floor(300*Math.random())},{m:"2015-08",a:1+Math.floor(300*Math.random())},{m:"2015-09",a:1+Math.floor(300*Math.random())},{m:"2015-10",a:1+Math.floor(300*Math.random())},{m:"2015-11",a:1+Math.floor(300*Math.random())},{m:"2015-12",a:1+Math.floor(300*Math.random())}],xkey:"m",ykeys:["a"],labels:["2015"],xLabelFormat:function(a){var o=t[a.getMonth()];return o},dateFormat:function(a){var o=t[new Date(a).getMonth()];return o}}),Morris.Line({element:"parentNoLoginPerMonth",data:[{m:"2015-01",a:1+Math.floor(300*Math.random())},{m:"2015-02",a:1+Math.floor(300*Math.random())},{m:"2015-03",a:1+Math.floor(300*Math.random())},{m:"2015-04",a:1+Math.floor(300*Math.random())},{m:"2015-05",a:1+Math.floor(300*Math.random())},{m:"2015-06",a:1+Math.floor(300*Math.random())},{m:"2015-07",a:1+Math.floor(300*Math.random())},{m:"2015-08",a:1+Math.floor(300*Math.random())},{m:"2015-09",a:1+Math.floor(300*Math.random())},{m:"2015-10",a:1+Math.floor(300*Math.random())},{m:"2015-11",a:1+Math.floor(300*Math.random())},{m:"2015-12",a:1+Math.floor(300*Math.random())}],xkey:"m",ykeys:["a"],labels:["2015"],xLabelFormat:function(a){var o=t[a.getMonth()];return o},dateFormat:function(a){var o=t[new Date(a).getMonth()];return o}})},a.GRAPHS=new o,a.GRAPHS.Constructor=o}(window.jQuery),function(a){"use strict";a.GRAPHS.init()}(window.jQuery);
!function(a){"use strict";var e=function(){this.$realData=[]};e.prototype.createStackedChart=function(a,e,t,o,r,n){Morris.Bar({element:a,data:e,xkey:t,ykeys:o,stacked:!0,labels:r,hideHover:"auto",resize:!0,gridLineColor:"#eeeeee",barColors:n})},e.prototype.createDonutChart=function(a,e,t){Morris.Donut({element:a,data:e,resize:!0,colors:t})},e.prototype.init=function(){var a=[{label:"Customer Time",value:1+Math.floor(30*Math.random())},{label:"Driving",value:1+Math.floor(30*Math.random())},{label:"Warehouse",value:1+Math.floor(30*Math.random())},{label:"Quick Stop Time",value:1+Math.floor(30*Math.random())},{label:"Office",value:1+Math.floor(30*Math.random())}];this.createDonutChart("activityField",a,["#3498db","#5fbeaa","#c0392b","#e67e22","#34495e"]);var e=[{y:"Vehicle 1",a:400},{y:"Vehicle 2",a:200},{y:"Vehicle 3",a:600},{y:"Vehicle 4",a:250},{y:"Vehicle 5",a:250}];this.createStackedChart("expensesVehicle",e,"y",["a"],["Vehicle"],["#9b59b6"]);var t=[{y:"Change Oil",a:400},{y:"Overtime Trips",a:200},{y:"Repair",a:600},{y:"Mileage",a:250}];this.createStackedChart("vehicleROI",t,"y",["a"],["Number"],["#34495e"]);var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Morris.Line({element:"indcidentReport",data:[{m:"2015-01",a:1+Math.floor(30*Math.random())},{m:"2015-02",a:1+Math.floor(30*Math.random())},{m:"2015-03",a:1+Math.floor(30*Math.random())},{m:"2015-04",a:1+Math.floor(30*Math.random())},{m:"2015-05",a:1+Math.floor(30*Math.random())},{m:"2015-06",a:1+Math.floor(30*Math.random())},{m:"2015-07",a:1+Math.floor(30*Math.random())},{m:"2015-08",a:1+Math.floor(30*Math.random())},{m:"2015-09",a:1+Math.floor(30*Math.random())},{m:"2015-10",a:1+Math.floor(30*Math.random())},{m:"2015-11",a:1+Math.floor(30*Math.random())},{m:"2015-12",a:1+Math.floor(30*Math.random())}],xkey:"m",ykeys:["a"],labels:["2015"],xLabelFormat:function(a){var e=o[a.getMonth()];return e},dateFormat:function(a){var e=o[new Date(a).getMonth()];return e}})},a.GRAPHS=new e,a.GRAPHS.Constructor=e}(window.jQuery),function(a){"use strict";a.GRAPHS.init()}(window.jQuery);
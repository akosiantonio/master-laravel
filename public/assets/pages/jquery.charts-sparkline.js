$(document).ready(function(){var i=function(){$("#sparkline1").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:$("#sparkline1").width(),height:"165",chartRangeMax:50,lineColor:"#5fbeaa",fillColor:"rgba(95, 190, 170, 0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline1").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:$("#sparkline1").width(),height:"165",chartRangeMax:40,lineColor:"#5d9cec",fillColor:"rgba(93, 156, 236, 0.3)",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline2").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"3",barColor:"#fb6d9d"}),$("#sparkline3").sparkline([20,40,30,10],{type:"pie",width:"165",height:"165",sliceColors:["#dcdcdc","#5d9cec","#36404a","#5fbeaa"]}),$("#sparkline4").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:$("#sparkline1").width(),height:"165",chartRangeMax:50,lineColor:"#fb6d9d",fillColor:"transparent",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline4").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:$("#sparkline1").width(),height:"165",chartRangeMax:40,lineColor:"#5d9cec",fillColor:"transparent",composite:!0,highlightLineColor:"rgba(0,0,0,1)",highlightSpotColor:"rgba(0,0,0,1)"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"3",barColor:"#5fbeaa"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"line",width:$("#sparkline1").width(),height:"165",lineColor:"#fb6d9d",fillColor:"transparent",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"})},e=function(){var i,e=500,r=-1,a=-1,l=0,t=[],o=30;$("html").mousemove(function(i){var e=i.pageX,t=i.pageY;r>-1&&(l+=Math.max(Math.abs(e-r),Math.abs(t-a))),r=e,a=t});var h=function(){var r=new Date,a=r.getTime();if(i&&i!=a){var n=Math.round(l/(a-i)*1e3);t.push(n),t.length>o&&t.splice(0,1),l=0,$("#sparkline5").sparkline(t,{tooltipSuffix:" pixels per second",type:"line",width:$("#sparkline1").width(),height:"165",chartRangeMax:50,lineColor:"#1e88e5",fillColor:"rgba(30, 136, 229, 0.3)",highlightLineColor:"rgba(24,147,126,.1)",highlightSpotColor:"rgba(24,147,126,.2)"})}i=a,setTimeout(h,e)};setTimeout(h,e)};i(),e();var r;$(window).resize(function(a){clearTimeout(r),r=setTimeout(function(){i(),e()},300)})});
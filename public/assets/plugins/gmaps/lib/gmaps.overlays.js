GMaps.prototype.drawOverlay=function(e){var t=new google.maps.OverlayView,l=!0;return t.setMap(this.map),null!=e.auto_show&&(l=e.auto_show),t.onAdd=function(){var l=document.createElement("div");l.style.borderStyle="none",l.style.borderWidth="0px",l.style.position="absolute",l.style.zIndex=100,l.innerHTML=e.content,t.el=l,e.layer||(e.layer="overlayLayer");var o=this.getPanes(),a=o[e.layer],r=["contextmenu","DOMMouseScroll","dblclick","mousedown"];a.appendChild(l);for(var s=0;s<r.length;s++)!function(e,t){google.maps.event.addDomListener(e,t,function(e){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()})}(l,r[s]);e.click&&(o.overlayMouseTarget.appendChild(t.el),google.maps.event.addDomListener(t.el,"click",function(){e.click.apply(t,[t])})),google.maps.event.trigger(this,"ready")},t.draw=function(){var o=this.getProjection(),a=o.fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0,e.verticalOffset=e.verticalOffset||0;var r=t.el,s=r.children[0],n=s.clientHeight,i=s.clientWidth;switch(e.verticalAlign){case"top":r.style.top=a.y-n+e.verticalOffset+"px";break;default:case"middle":r.style.top=a.y-n/2+e.verticalOffset+"px";break;case"bottom":r.style.top=a.y+e.verticalOffset+"px"}switch(e.horizontalAlign){case"left":r.style.left=a.x-i+e.horizontalOffset+"px";break;default:case"center":r.style.left=a.x-i/2+e.horizontalOffset+"px";break;case"right":r.style.left=a.x+e.horizontalOffset+"px"}r.style.display=l?"block":"none",l||e.show.apply(this,[r])},t.onRemove=function(){var l=t.el;e.remove?e.remove.apply(this,[l]):(t.el.parentNode.removeChild(t.el),t.el=null)},this.overlays.push(t),t},GMaps.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++)if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1);break}},GMaps.prototype.removeOverlays=function(){for(var e,t=0;e=this.overlays[t];t++)e.setMap(null);this.overlays=[]};
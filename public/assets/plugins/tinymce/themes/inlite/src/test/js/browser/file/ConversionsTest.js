asynctest("atomic/core/ConvertTest",["ephox/tinymce","tinymce/inlite/file/Conversions","ephox.agar.api.Step","ephox.agar.api.Pipeline","ephox.agar.api.Assertions"],function(n,e,t,A,a){var o=arguments[arguments.length-2],r=arguments[arguments.length-1],i=function(n,e){for(var t=atob(n),A=new Uint8Array(t.length),a=0;a<A.length;a++)A[a]=t.charCodeAt(a);return new Blob([A],{type:e})},s=function(){return t.async(function(n){var t="R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",A=i(t,"image/gif");e.blobToBase64(A).then(function(e){a.assertEq("Not the correct base64",t,e),n()})})};A.async({},[s()],function(){o()},function(){r()})});
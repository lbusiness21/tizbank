$(document).ready(function() {
    
    "use strict";
    
    $("#zoom_01").elevateZoom({scrollZoom : true}).src('img/chase4.jpg');
    $("#zoom_02").elevateZoom({ zoomType	: "inner", cursor: "crosshair" });
    $("#zoom_03").elevateZoom({ zoomType	: "lens", lensShape : "round", lensSize : 200 });
    $("#zoom_04").elevateZoom({scrollZoom : true, zoomWindowPosition: 1});
});
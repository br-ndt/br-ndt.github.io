var clicking = false;
var previousX;
var previousY;

$("#pan").mousedown(function(e) {
    e.preventDefault();
    previousX = e.clientX;
    previousY = e.clientY;
    clicking = true;
});

$(document).mouseup(function() {
      
    clicking = false;
});

$("#pan").mousemove(function(e) {

    if (clicking) {
        e.preventDefault();
        var directionX = (previousX - e.clientX) > 0 ? 1 : -1;
        var directionY = (previousY - e.clientY) > 0 ? 1 : -1;
        //$("#pan").scrollLeft($("#pan").scrollLeft() + 10 * directionX);
        //$("#pan").scrollTop($("#pan").scrollTop() + 10 * directionY);
        $("#pan").scrollLeft($("#pan").scrollLeft() + (previousX - e.clientX));
        $("#pan").scrollTop($("#pan").scrollTop() + (previousY - e.clientY));
        previousX = e.clientX;
        previousY = e.clientY;
    }
});

$("#pan").mouseleave(function(e) {
    clicking = false;
});
$("<div />", {
  id: "drag-info",
  class: "drag-info"
}).appendTo("body");

$(".decoration").draggable({
  stop: function(event, ui) {
    $("#drag-info").html(
      "class: " + $(event.target).attr("class") + "<br>" + "top: " + event.target.offsetTop + "px; <br>" + "left: " + event.target.offsetLeft + "px;"
    );
  }
});

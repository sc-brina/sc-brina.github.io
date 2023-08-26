if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

$(function() {
  $("#memBtn li").each(function () {
    var memBtn = $(this);
    var memList = $("#memList > section");
  
    memList.eq(0).siblings().hide();
    memBtn.click(function (e) {
      e.preventDefault();
  
      var target = $(this);
      var index = target.index();
  
      memList.eq(index).css({
        display: "block",
      });
      memList.eq(index).siblings().css({
        display: "none",
      });
  
      target.addClass("on");
      target.siblings().removeClass("on");
    });
  });
});
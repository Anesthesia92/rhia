$(".item").on("mouseenter", function () {
  $(this).addClass("fas");
  $(".item").on("mouseout", function () {
    $(this).removeClass("fas");
  });
});

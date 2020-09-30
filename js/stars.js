$(".places__photos-countries__all-stars__item")
  .on("mouseenter", function () {
    $(this).addClass("fas");
    let starIndex = $(this).index("");
    $("div")
      .children(
        ".places__photos-countries__all-stars__item:lt(" + starIndex + ")"
      )
      .addClass("fas");
  })

  .on("mouseleave", function () {
    $("div")
      .children(".places__photos-countries__all-stars__item")
      .removeClass("fas");
  });
//.on("click", function () {
//  Stars($(this).index());

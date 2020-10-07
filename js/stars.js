$(".places__photos-countries__all-stars__item")
  .on("mouseenter", function () {
    let starIndex = $(this).index(".places__photos-countries__all-stars__item");
    $(".places__photos-countries__all-stars__item").each(function (i, item) {
      if (starIndex >= i) {
          $(item).addClass("fas");
      }
    });
  })
  .on("mouseleave", function () {
    const hasAttribute = parseInt($(this).attr("data-selected"));
    if (!hasAttribute) {
        $(".places__photos-countries__all-stars__item").removeClass("fas");
    }
  })
  .on("click", function () {
    const hasAttribute = parseInt($(this).attr("data-selected"));
    if (hasAttribute) {
      $(this).attr("data-selected", 0);
    } else {
      $(this).attr("data-selected", 1);
    }
  });

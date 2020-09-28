$(".places__photos-countries__all-stars__item")
  .on("click", function () {
    const hasAttribute = parseInt($(this).attr("data-selected"));
    if (hasAttribute) {
      $(this).attr("data-selected", 0);
    } else {
      $(this).attr("data-selected", 1);
    }
  })
  .on("mouseenter", function () {
    $(this).addClass("fas");
  })
  .on("mouseleave", function () {
    const hasAttribute = parseInt($(this).attr("data-selected"));

    if (!hasAttribute) {
      $(this).removeClass("fas");
    }

    console.log(hasAttribute);
  });

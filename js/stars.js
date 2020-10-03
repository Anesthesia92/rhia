$(".places__photos-countries__all-stars__item")
  .on("mouseenter", function () {
    $(this).addClass("fas");
    let starIndex = $(this).index(".places__photos-countries__all-stars__item");
    $(".places__photos-countries__all-stars__item").each(function(i, item){
     if (starIndex >= i) {

       $(".places__photos-countries__all-stars")
           .children(
               ".places__photos-countries__all-stars__item:lt(" + starIndex + ")"
           )
           .addClass("fas");}
      console.debug(i, item);
    })

  })

  .on("mouseleave", function () {
    const hasAttribute = parseInt($(this).attr("data-selected"));
    if (!hasAttribute) {
      $(".places__photos-countries__all-stars")
        .children(".places__photos-countries__all-stars__item")
        .removeClass("fas");
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

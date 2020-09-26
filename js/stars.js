
$(".places__photos-countries__all-stars__item").on("click", function () {
    $(this).attr('data-selected');

});

$(".places__photos-countries__all-stars__item").on("mouseenter", function () {
    $(this).addClass("fas");

}).on("mouseleave", function () {
    if (typeof 'data-selected' !== 1 && hasClass !== true)
    {
    }
    else  if (typeof 'data-selected' !== 0 && hasClass !== false){
        $(this).removeClass("fas");
    }
    });



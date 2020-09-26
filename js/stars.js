
$(".places__photos-countries__all-stars__item").on("click", function () {
    $(this).attr('data-selected 1');

});

$(".places__photos-countries__all-stars__item").on("mouseenter", function () {
    $(this).addClass("fas");

}).on("mouseleave", function () {
    const hasClass = $('.places__photos-countries__all-stars').hasClass('data-selected 1');
    if (typeof hasClass!== 1 && hasClass !== true)
    {
    }
    else {
        $(this).removeClass("fas");
    }
    });



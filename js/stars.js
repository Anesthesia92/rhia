
$(".places__photos-countries__all-stars__item").on("click", function () {
    $(this).attr('data-selected');
})

.on("mouseenter", function () {
    $(this).addClass("fas");

}).on("mouseleave", function () {
    let hasClass = $('.places__photos-countries__all-stars').hasClass('fas');
    const hasAttribute = parseInt($(this).attr('data-selected'));
    if (typeof hasAttribute !== typeof undefined && hasAttribute !== false) {
        $(this).removeClass('fas');
    } else {

    }

});


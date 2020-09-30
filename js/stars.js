
let starsSum = $('.places__photos-countries__all-stars__item .fas').length;
let Stars = function(e) {
    $('.places__photos-countries__all-stars__item').removeClass('fas');
    for (let i = 0; e + 1 > i; i++) {
        $('.places__photos-countries__all-stars__item').eq(i).toggleClass('fas');
    }

};

$('.places__photos-countries__all-stars__item').on("mouseenter", function() {
    Stars($(this).index());
})

.on("click", function () {
    Stars($(this).index());
    starsSum = $('.places__photos-countries__all-stars__item .fas').length;

})
.on('mouseleave', function() {
    Stars(+starsSum - 1);
});






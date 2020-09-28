
$(".places__photos-countries__all-stars__item").on("click", function () {
    const hasAttribute = parseInt($(this).attr('data-selected'));

    $(this).attr('data-selected', 1);
   if(!isNaN(hasAttribute)){
       $(this).removeClass("fas")
    }
  })
    .on("mouseenter", function () {
            $(this).addClass("fas");

})
.on("mouseleave", function () {

    const hasAttribute = parseInt($(this).attr('data-selected'));

    if(!hasAttribute){
        $(this).addClass("fas");
    }

    if(!hasAttribute){
        $(this).removeClass("fas")
}

    console.log(hasAttribute);



});


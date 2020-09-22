import "./styles.css";
import $ from "jquery";
let array = [];
let input = $("#InformationField");
$("#btn").on("click", function (e) {
    e.preventDefault();
    let value = input.val();
    $("#InformationField").val("");
    if (value) {
        array.push(value);
    }
    console.log(array);
});
let arr = [];
$("#btn-second").on("click", function() {
    for (let i=0; i<arr.length; i++)
        $(".new__list").append("<li class='item'>arr[i]</li>");
});

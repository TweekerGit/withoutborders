$(document).ready(function () {

    $(".burger").click(function (event) {
        $(".burger").toggleClass("active");
        $(".neBurger").toggleClass("active");
        $("header").toggleClass("active");
    });
});
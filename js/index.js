$(document).ready(function () {
    $("#dob-step1").keyup(function () {
        if ($(this).val().length == 2) {
            $(this).val($(this).val() + "/");
        } else if ($(this).val().length == 5) {
            $(this).val($(this).val() + "/");
        }
    });
});

var buttonclickgender = null;
$(document).ready(function () {
    $("#malebtn").click(function () {
        buttonclickgender = "male";
        $("#malebtn").addClass("activebtn");
        $("#femalebtn").removeClass("activebtn");
        console.log(buttonclickgender);
    })

    $("#femalebtn").click(function () {
        buttonclickgender = "female";
        $("#femalebtn").addClass("activebtn");
        $("#malebtn").removeClass("activebtn");
        console.log(buttonclickgender);
    })

});
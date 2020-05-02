
var buttonclickgender = null;
var buttonclicksmoker = null;
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

    $("#smokerbtn").click(function () {
        buttonclicksmoker = "smoker";
        $("#smokerbtn").addClass("activebtn");
        $("#nonsmokerbtn").removeClass("activebtn");
        console.log(buttonclickgender);
    })

    $("#nonsmokerbtn").click(function () {
        buttonclicksmoker = "nonsmoker";
        $("#nonsmokerbtn").addClass("activebtn");
        $("#smokerbtn").removeClass("activebtn");
        console.log(buttonclickgender);
    })
    $('.submitstep1').prop('disabled', true);
    $(".dummysubmit").click(function () {
        if (buttonclickgender !== null && buttonclicksmoker !== null) {
            $('#submitstep1').prop('disabled', false);
        }
        else {
            $('#submitstep1').prop('disabled', true);
        }
    })

});

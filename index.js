
var buttonclickgender = null;
var buttonclicksmoker = null;
var valuebtn = null;
var url = "https://weirdlywild.github.io/jainam_project/teacherslife-rates.xlsx";
var yearselect = "10year";
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

    document.getElementById("btnresult").innerHTML = "10 years";
    $(".dummyyear").click(function () {
        if (yearselect === '10year') {
            document.getElementById("btnresult").innerHTML = "10 years";
            $("#10years").removeClass("activebtn");
            $("#20years").removeClass("activebtn");
            $("#till65").removeClass("activebtn");
            $("#10years").addClass("activebtn");

        }
        else if (yearselect === '20year') {
            document.getElementById("btnresult").innerHTML = "20 years";
            $("#10years").removeClass("activebtn");
            $("#20years").removeClass("activebtn");
            $("#till65").removeClass("activebtn");
            $("#20years").addClass("activebtn");
        }
        else if (yearselect === '65year') {
            document.getElementById("btnresult").innerHTML = "to age 65";
            $("#10years").removeClass("activebtn");
            $("#20years").removeClass("activebtn");
            $("#till65").removeClass("activebtn");
            $("#till65").addClass("activebtn");
        }
    })

});
$(function () {
    $('[data-toggle="popover"]').popover()
})


// Sheet
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";

req.onload = function (e) {
    var data = new Uint8Array(req.response);
    var workbook = XLSX.read(data, { type: "array" });
    console.log(workbook);

    /* DO SOMETHING WITH workbook HERE */
}

req.send();
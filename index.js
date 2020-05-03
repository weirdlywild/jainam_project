
var buttonclickgender = localStorage.gender;
var buttonclicksmoker = localStorage.smoker;
var valuebtn = 10;
var age = localStorage.age;
var url = "https://weirdlywild.github.io/jainam_project/teacherslife-rates.xlsx";
// var url = "E:\\js_data\\teacherslife-rates.xlsx";
var yearselect = "10year";
var coverage = null;
$(document).ready(function () {
    var init_cov = $("#myRange").val();
    updatedata(init_cov);

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
            valuebtn = 10;
            document.getElementById("btnresult").innerHTML = "10 years";
            $("#10years").removeClass("activebtn");
            $("#20years").removeClass("activebtn");
            $("#till65").removeClass("activebtn");
            $("#10years").addClass("activebtn");

        }
        else if (yearselect === '20year') {
            valuebtn = 20;
            document.getElementById("btnresult").innerHTML = "20 years";
            $("#10years").removeClass("activebtn");
            $("#20years").removeClass("activebtn");
            $("#till65").removeClass("activebtn");
            $("#20years").addClass("activebtn");
        }
        else if (yearselect === '65year') {
            valuebtn = 65;
            document.getElementById("btnresult").innerHTML = "to age 65";
            $("#10years").removeClass("activebtn");
            $("#20years").removeClass("activebtn");
            $("#till65").removeClass("activebtn");
            $("#till65").addClass("activebtn");
        }
        var init_cov = $("#myRange").val();
        updatedata(init_cov);
    })

});
$(function () {
    $('[data-toggle="popover"]').popover()
})

// Sheet
function updatedata(val){
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = function (e) {
    console.log(req.response)
    var data = new Uint8Array(req.response);
    var workbook = XLSX.read(data, { type: "array" });
    console.log(workbook);

    //  var htmlstr = XLSX.write(workbook, {sheet:"Sheet1", type:'binary', bookType:'html'});
    //  console.log(htmlstr)
    //  $('#sheetdata')[0].innerHTML += htmlstr;
    /* DO SOMETHING WITH workbook HERE sheetdata */
    var first_sheet_name = workbook.SheetNames[0];

    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    console.log(XLSX.utils.sheet_to_json(worksheet));
    var xldata = XLSX.utils.sheet_to_json(worksheet);
    for (var i = 0; i < xldata.length; i++) {
        if (xldata[i].Age == age) {
            if(xldata[i].CoverageTerm == valuebtn){
                if(xldata[i].CoverageAmount == val){
                    if(xldata[i].Gender == buttonclickgender){
                        if(xldata[i].SmokerStatus == buttonclicksmoker){
                            console.log(xldata[i].MonthlyPremium);
                            break;
                        }
                    }
                }
            }
        }
    }
}
req.send();
}
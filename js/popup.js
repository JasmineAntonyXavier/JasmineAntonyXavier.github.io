﻿$(function () { //when the checkbox is clicked, this function callthe clicking function
    $('.checkbox').click(clicking)
});


function clicking(e) {
    var allCells = $(".time");  
    var thisIndex = allCells.index($(this));
    start = Math.floor(thisIndex / 48);
    var startTime = thisIndex % 48;
    document.getElementById("startday").selectedIndex = start;
    document.getElementById("starttime").selectedIndex = startTime;
    document.getElementById("endday").selectedIndex = start;
    document.getElementById("endtime").selectedIndex = startTime+1;
    $('#popup').dialog('open');


    $(".time").eq(thisIndex).find(':checkbox').prop('checked', false);
}

function getFormData() {

    //0 - sunday
    //1 - monday
    //0 - 47 per day.
    var startday = document.getElementById("startday").selectedIndex;
    var starttime = document.getElementById("starttime").selectedIndex;
    var endday = document.getElementById("endday").selectedIndex;
    var endtime = document.getElementById("endtime").selectedIndex;

    //each day = 0 to 6
    //Time 0 to 

    var checkboxtostart = 48 * startday + starttime;
    var checkboxtostop = 48 * endday + endtime;

    for (var i = checkboxtostart; i < checkboxtostop ; i++) {
        $(".time").eq(i).find(':checkbox').prop('checked', true);
    }
    //StartDay 0 = sunday


}

$(document).ready(function () {

    $('#popup').dialog({
        dialogClass: 'ui-dialog ',
        autoOpen: false,
        resizable: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: [
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
        {
            text: "Submit",
            click: function () {
                $('#popup').dialog('close');
                getFormData();
            }
        }
        ]
    });

});
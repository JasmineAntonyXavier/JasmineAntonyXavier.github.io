$(function () {
    $('.checkbox').click(clicking)
});


function clicking(e) {
    $('#popup').dialog('open');
}
function getdata() {

    //0 - sunday
    //1 - monday
    //0 - 47 per day.
    var startday = document.getElementById("startday").selectedIndex;
    var starttime = document.getElementById("starttime").selectedIndex;
    var endday = document.getElementById("endday").selectedIndex;
    var endtime = document.getElementById("endtime").selectedIndex;
    var allCells = $(".time");

    //each day = 0 to 6
    //Time 0 to 

    var checkboxtostart = 48 * startday + starttime;
    var checkboxtostop = 48 * endday + endtime;

    for (var i = checkboxtostart; i <= checkboxtostop ; i++) {
        $(".time").eq(i).find(':checkbox').prop('checked', true);
    }
    //StartDay 0 = sunday


}

$(document).ready(function () {
    $('#popup').dialog({
        autoOpen: false,
        height: 375,
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
                getdata();
            }
        }
        ]
    });

});
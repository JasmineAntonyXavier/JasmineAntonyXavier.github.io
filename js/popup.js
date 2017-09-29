$(function () {
    $('.checkbox').click(clicking)
});


function clicking(e) {
    $('#popup').dialog('open');
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
                $('#popupform').submit();
            }
        }
        ]
    });

});
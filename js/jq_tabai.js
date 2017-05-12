$(function () {

    $('.tab').click(function () {
        var sheetId = "#" + $(this).attr('sheet-id');
        console.log(sheetId);

        $('.sheet').hide();
        $('.tab').removeClass('active');

        $(sheetId).show();
        $(this).addClass('active');

    });


});
/**
 * Created by zhang on 5/4/15.
 */

$('#mybutt').click(function() {
    console.log("run!");

    $.getJSON("data/info.json", function(tables){
        console.log(tables);
        $.each(tables, function(i, table){
            var firstName = table.firstName,
                lastName = table.lastName,
                time = table.time;

        })
    })

    var s = "<li class = 'message-preview'>" +
        "<a href='#'> " +
        "<div class='media'> " +
        "<span class='pull-left'>" +
        "<img class='media-object img-min-height-width-50' src='res/yuannan.jpg' alt=''>" +
        "</span>" +
        "<div class='media-body'>" +
        "<h5 class='media-heading'>" +
        "<strong>Yuannan Cai</strong>" +
        "</h5>" +
        "<p class='small text-muted'' id= 'time1'><i class='fa fa-clock-o'></i> Today at 3:21 PM</p>" +
        "<p></p>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</li>";

    var origin = $("#tables").html();
    console.log(origin);
    $("#tables").html(s + origin);
    origin = $("#tables").html();
    console.log(origin);
});
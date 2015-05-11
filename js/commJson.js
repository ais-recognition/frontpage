/**
 * Created by zhang on 5/4/15.
 */


var currentAudio;
var currentStarAudio;
var array = [];
var audioElement;
var audioElementStar;
var newMess;
var arrayStar = [];

$(document).ready(function() {
    audioElement = document.createElement('audio');
    audioElementStar = document.createElement('audio');
    //audioElement.setAttribute('src', 'data/rain.m4a');
    audioElement.setAttribute('src', currentAudio);
    audioElementStar.setAttribute('src', currentStarAudio);
    //audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    $("#play").click(function() {
        audioElement.play();
    });

    $("#pause").click(function() {
        audioElement.pause();
    });

    $("#starplay").click(function() {
        audioElementStar.play();
    });

    $("#starpause").click(function() {
        audioElementStar.pause();
    });

    newMess = 0;

    /*
    //add update
    $.getJSON("http://52.24.205.33:8080/test", function(tables){
        var origin = $("#tables").html();
        var s = "";
        var pic = "";
        //var array = [];
        newMess = 0;
        //var currentAudio = 0;
        $.each(tables, function(i, table){
            var userName = table.userName,
                audio = table.audio,
                time = table.time;
            array.push(table);
            console.log(i);
            s += "<a href='#' onclick='mClick(" + i + ")' class='list-group-item'>"+
            "<span class='badge'>" + time + "</span>"+
            "<i class='fa fa-fw fa-comment'></i> "+ userName +
            "</a> ";
            //pic added
            pic += "<li class='message-preview'> <a href='#'> <div class='media'> <span class='pull-left'>";
            if (userName === "Yuannan Cai") {
                pic+="<img class='media-object img-min-height-width-50' src='res/yuannan.jpg' alt=''>";
            }
            else if (userName === "Zhilei Miao") {
                pic+="<img class='media-object img-min-height-width-50' src='res/zhilei.jpg' alt=''>";
            }
            else if (userName === "Wenyu Zhang") {
                pic += "<img class='media-object img-min-height-width-50' src='res/wenyu.jpg' alt=''>";
            }
            pic += "</span> <div class='media-body'> <h5 class='media-heading'><strong>" + userName + "</strong> </h5>" +
            "<p class='small text-muted' id= 'time1'><i class='fa fa-clock-o'></i> " + time + "</p>" +
            "<p></p> </div> </div> </a> </li>";
            //pic end

            newMess++;

        })
        $("#newMessage").html(newMess);
        $("#onlineUsers").html(array.length);
        $("#tables").html(s);
        $("#dropdownPic").html(pic);
        console.log(array);
    })
    //update end
    */
    setInterval(function () {$('#button_update').click()}, 1000);
    //$('#button_update').click();
});

$("#star").click(function() {
    arrayStar.push(array[currentAudio]);
    console.log("star: " + array[currentAudio].userName);
});

$("#unstar").click(function() {
    arrayStar.splice(currentStarAudio,1);
    console.log("unstar: " + array[currentAudio].userName);
});

function mClick(obj)
{
    //console.log(obj);
    currentAudio = obj;
    console.log(array[currentAudio].audio);
    var cAudio = array[currentAudio].audio;
    audioElement.setAttribute('src', cAudio);

    //Click then play
    audioElement.play();

    if (newMess > 0) newMess--;
    $("#newMessage").html(newMess);
}

function mClickStar(obj)
{
    //console.log(obj);
    currentStarAudio = obj;
    console.log(arrayStar[currentStarAudio].audio);
    var cAudio = arrayStar[currentStarAudio].audio;
    audioElementStar.setAttribute('src', cAudio);
}

$('#starUpdate').click(function() {
    var s = "";
    for (var i = 0; i < arrayStar.length; ++i) {
        s += "<a href='#' onclick='mClickStar(" + i + ")' class='list-group-item'>"+
        "<span class='badge'>" + arrayStar[i].time + "</span>"+
        "<i class='fa fa-fw fa-comment'></i> "+ arrayStar[i].userName +
        "</a> ";
    }
    $("#startables").html(s);

});

$('#button_update').click(function() {

    console.log("run!");
    //response.addHeader("Access-Control-Allow-Origin", "*");

    //$.getJSON("data/info", function(tables){
    $.getJSON("http://52.24.205.33:8080/test", function(tables){
        /*
        var s = "";
        console.log(tables);
        $.each(tables, function(i, table){
            var userName = table.userName,
                audio = table.audio,
                time = table.time;

            s += "<li class = 'message-preview'>" +
            "<a href='#'> " +
            "<div class='media'> " +
            "<span class='pull-left'>";
            if (userName === "Yuannan Cai") {
                s+="<img class='media-object img-min-height-width-50' src='res/yuannan.jpg' alt=''>";
            }
            else if (firstName === "Zhilei Miao") {
                s+="<img class='media-object img-min-height-width-50' src='res/zhilei.jpg' alt=''>";
            }
            else if (firstName === "Wenyu Zhang") {
                s+="<img class='media-object img-min-height-width-50' src='res/wenyu.jpg' alt=''>";
            }
            s+="</span>" +
            "<div class='media-body'>" +
            "<h5 class='media-heading'>" +
            "<strong>"+
            firstName + " " + lastName +
            "</h5>" +
            "<p class='small text-muted'' id= 'time1'><i class='fa fa-clock-o'></i>" + time +"</p>" +
            "<p></p>" +
            "</div>" +
            "</div>" +
            "</a>" +
            "</li>\n";
        })
        var origin = $("#tables").html();
        //$("#tables").html(s);
        $("#tables").add("<p> new</p>");
        console.log($("#tables").html());
        */
        var origin = $("#tables").html();
        var s = "";
        var pic = "";
        //var array = [];
        array = [];
        newMess = 0;
        //var currentAudio = 0;
        $.each(tables, function(i, table){
            var userName = table.userName,
                audio = table.audio,
                time = table.time;
            array.push(table);
            console.log(i);
            s += "<a href='#' onclick='mClick(" + i + ")' class='list-group-item'>"+
            "<span class='badge'>" + time + "</span>"+
            "<i class='fa fa-fw fa-comment'></i> "+ userName +
            "</a> ";
            //pic added
            pic += "<li class='message-preview'> <a href='#'> <div class='media'> <span class='pull-left'>";
            if (userName === "Yuannan Cai") {
                pic+="<img class='media-object img-min-height-width-50' src='res/yuannan.jpg' alt=''>";
            }
            else if (userName === "Zhilei Miao") {
                pic+="<img class='media-object img-min-height-width-50' src='res/zhilei.jpg' alt=''>";
            }
            else if (userName === "Wenyu Zhang") {
                pic += "<img class='media-object img-min-height-width-50' src='res/wenyu.jpg' alt=''>";
            }
            pic += "</span> <div class='media-body'> <h5 class='media-heading'><strong>" + userName + "</strong> </h5>" +
            "<p class='small text-muted' id= 'time1'><i class='fa fa-clock-o'></i> " + time + "</p>" +
            "<p></p> </div> </div> </a> </li>";
            //pic end

/*
            var audioElement = document.createElement('audio');
            //audioElement.setAttribute('src', 'data/rain.m4a');
            audioElement.setAttribute('src', audio);
            //audioElement.setAttribute('autoplay', 'autoplay');
            //audioElement.load()
            $.get();

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $("#play").click(function() {
                audioElement.play();
            });

            $("#pause").click(function() {
                audioElement.pause();
            });
*/
            newMess++;

        })
        $("#newMessage").html(newMess);
        $("#onlineUsers").html(array.length);
        $("#tables").html(s);
        $("#dropdownPic").html(pic);
        console.log(array);

    })

/*
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
*/

});
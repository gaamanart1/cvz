function set_Cookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + (Days * 20 * 1000));
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/;"
}

function get_Cookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    return '';
}

var time = 0;
window.setInterval(function () {
    time = time + 1;
    $(".t1").html(time + 1 + "m");
    $(".t2").html(time + 2 + "m");
    $(".t3").html(time + 4 + "m");
}, 6e4);

var likes = 134;
var likes = 134,
    comments = 23,
    shares = 12;
window.setInterval(function () {
    likes = likes + Math.floor(Math.random() * 3);
    comments = comments + Math.floor(Math.random() * 2);
    shares = shares + Math.floor(Math.random() * 2);
    $("#likes").html(likes + "K");
    $("#comments").html(comments + "K comments");
    $("#shares").html(shares + "K shares");
}, 5e3);

$(".liked").click(function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        $(this).html("Like");
    } else {
        $(this).addClass("selected");
        $(this).html("Unlike");
    }
});

$("go").click(function () {
    $("intro").fadeOut(0);
    $("#loader").fadeIn(1000);
    var i = 0;
    var interval = setInterval(function () {
        $("#num").text(i + "%");
        i += 1;
        if (i >= 100) {
            clearInterval(interval);
            $("#loader").fadeOut(0);
            $("#info").fadeIn(1000);
        }
    }, 50);
});

$("#confirm").click(function () {
    if ($("#name").val().length < 4) {
        $(".error").fadeIn(500);
    } else {
        $("#info").fadeOut(0);
        $("#checking").fadeIn(1000);
        var i = 0;
        var interval = setInterval(function () {
            i += 1;
            $("#percentage").text(i + "%");
            $("#fill").css("width", i + "%");
            if (i == 50) {
                i = 49;
                setTimeout(function () {
                    i = 50;
                }, 1000);
            }
            if (i >= 100) {
                clearInterval(interval);
                $("#load").fadeOut(0);
                $("#check").fadeIn(0);
                setTimeout(function () {
                    $("#checking").fadeOut(0);
                    $("#share").fadeIn(1000);
                    $("#getname").html($("#name").val());
                }, 500);
        }
    }, 50);
});

$(document).click(function () {
    if ($("#name").is(":focus")) {
        $(".error").fadeOut(500);
    }
});
function set_Cookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + (Days * 20 * 1000));
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/;"
}

function get_Cookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    return '';
}

var time = 0;
window.setInterval(function () {
    time = time + 1;
    $(".t1").html(time + 1 + "m");
    $(".t2").html(time + 2 + "m");
    $(".t3").html(time + 4 + "m");
}, 6e4);

var likes = 134;
var likes = 134,
    comments = 23,
    shares = 12;
window.setInterval(function () {
    likes = likes + Math.floor(Math.random() * 3);
    comments = comments + Math.floor(Math.random() * 2);
    shares = shares + Math.floor(Math.random() * 2);
    $("#likes").html(likes + "K");
    $("#comments").html(comments + "K comments");
    $("#shares").html(shares + "K shares");
}, 5e3);

$(".liked").click(function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        $(this).html("Like");
    } else {
        $(this).addClass("selected");
        $(this).html("Unlike");
    }
});

$("#go").click(function () {
    $("#intro").fadeOut(0);
    $("#loader").fadeIn(1000);
    var i = 0;
    var interval = setInterval(function () {
        $("#num").text(i + "%");
        i += 1;
        if (i >= 100) {
            clearInterval(interval);
            $("#loader").fadeOut(0);
            $("#info").fadeIn(1000);
        }
    }, 50);
});

$("#confirm").click(function () {
    if ($("#name").val().length < 4) {
        $(".error").fadeIn(500);
    } else {
        $("#info").fadeOut(0);
        $("#checking").fadeIn(1000);
        var i = 0;
        var interval = setInterval(function () {
            i += 1;
            $("#percentage").text(i + "%");
            $("#fill").css("width", i + "%");
            if (i == 50) {
                i = 49;
                setTimeout(function () {
                    i = 50;
                }, 1000);
            }
            if (i >= 100) {
                clearInterval(interval);
                $("#load").fadeOut(0);
                $("#check").fadeIn(0);
                setTimeout(function () {
                    $("#checking").fadeOut(0);
                    $("#share").fadeIn(1000);
                    $("#getname").html($("#name").val());
                }, 500);
        }
    }, 50);
});

$(document).click(function () {
    if ($("#name").is(":focus")) {
        $(".error").fadeOut(500);
    }
});

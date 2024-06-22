function getUserTimezone() {
    if (window.Intl && typeof Intl.DateTimeFormat === "function") {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } else {
        var offset = new Date().getTimezoneOffset();
        var hours = Math.abs(offset / 60);
        var minutes = Math.abs(offset % 60);
        var sign = offset > 0 ? "-" : "+";
        return "GMT" + sign + pad(hours) + ":" + pad(minutes);
    }
}

function pad(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

function getCurrentTime() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds;
    return time;
}

const lastVisited = localStorage.getItem("lastvisted");
if (lastVisited) {
    document.getElementById("lastvisteddiv").innerHTML = lastVisited;
} else {
    document.getElementById("lastvisteddiv").innerHTML = "This is either your first time visiting the site, or your Local Storage has recently been cleared.";
}

var userTimezone = getUserTimezone();
localStorage.setItem("lastvisted", "You last visited this site at " + getCurrentTime() + ", with timezone, " + userTimezone);
console.log("You last visited this site at " + getCurrentTime() + ", with timezone, " + userTimezone);

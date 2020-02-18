/* jackyboy */
var jack = document.getElementById("icon-jack");
var interval;

jack.onmouseover = function(){
    interval = setInterval(function(){
        jack.src="images/person-circle.png";
        setTimeout(function(){
            jack.src="images/person-circle2.png";
        },250);
    },500);
    jack.src="images/person-circle.png";
}
jack.onmouseout = stopInterval

function stopInterval(){
    clearInterval(interval);
}

/* rest of js */
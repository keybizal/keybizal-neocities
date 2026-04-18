var savedImage = document.body.style.backgroundImage;
var isToggle = false;

function toggleBackground() {
    document.body.style.backgroundImage = "url(\"\")";
    if (isToggle == false) {
        isToggle = true;
    } else if (isToggle == true) {
        document.body.style.backgroundImage = savedImage;
        isToggle = false;
    }
    localStorage.setItem("toggle", isToggle);
}

function checkToggleState() {
    const currentToggle = localStorage.getItem("toggle");
    if (currentToggle == "true") {
        toggleBackground();
        //alert("success");
    } else {
        //alert("fail");
    }

}

document.addEventListener('DOMContentLoaded', function() {
    checkToggleState();
}, false);
    
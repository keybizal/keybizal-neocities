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
}
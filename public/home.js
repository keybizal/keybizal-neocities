
function toTakeTheDead() {
    document.body.style.backgroundImage = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='210px'><text x='0' y='15' fill='red' font-size='20' font-family='Courier New'>TO TAKE THE DEAD</text></svg>\")";
    document.body.style.animation = "loopingDead 1s linear infinite";
    document.getElementById('theLogo').src = "SPEC_CLAY.gif";
    document.getElementById('t').style.border = "groove red";
    document.getElementsByClassName('homeButton')[0].style.border = "groove red";
    document.getElementsByClassName('homeButton')[1].style.border = "groove red";
    document.getElementsByClassName('homeButton')[2].style.border = "groove red";
    document.getElementsByClassName('homeButton')[3].style.border = "groove red";
    document.getElementsByClassName('homeButton')[4].style.border = "groove red";
    document.getElementsByClassName('homeButton')[5].style.border = "groove red";
    document.getElementsByClassName('leftSidebar')[0].style.border = "groove red";
    document.getElementsByClassName('rightSidebar')[0].style.border = "groove red";
    document.getElementById('toTakeTheDead').style.cursor = "not-allowed";
    document.getElementById('toTakeTheDead').textContent = "TO TAKE THE DEAD"
    document.getElementById('toggleBG').style.display = "none";
    return false;
}
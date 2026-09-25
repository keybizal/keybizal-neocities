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










/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openBlog();
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openBlog() {
    document.getElementById("blogUI").style.display = "block";
    document.getElementById("exitButton").style.display = "block";
}

function closeBlog() {
    document.getElementById("blogUI").style.display = "none";
    document.getElementById("exitButton").style.display = "none";
}
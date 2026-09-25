var savedImage = document.body.style.backgroundImage;
var isToggle = false;

// if button is clicked, switches backgrond to plank black in case moving text bothers people
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

// function that checks users option for background
function checkToggleState() {
    const currentToggle = localStorage.getItem("toggle");
    if (currentToggle == "true") {
        toggleBackground();
        //alert("success");
    } else {
        //alert("fail");
    }

}

// automatically calls checkToggleState() on website load
document.addEventListener('DOMContentLoaded', function() {
    checkToggleState();
}, false);


//
// Below are functions for moblie blog ui to work
//

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

// shows the blog ui when a blog is chosen from the hamburger menu
function openBlog() {
    document.getElementById("blogUI").style.display = "block";
    document.getElementById("exitButton").style.display = "block";
}

// When the exit button is presses, hides the blog ui
function closeBlog() {
    document.getElementById("blogUI").style.display = "none";
    document.getElementById("exitButton").style.display = "none";
}
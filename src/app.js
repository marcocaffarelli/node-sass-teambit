window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var start = document.getElementById("start");
var sticky = start.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
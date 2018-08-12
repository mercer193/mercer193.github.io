window.onscroll = function() {myFunction()};

var sticky-title = document.getElementById("sticky-title");
var sticky = sticky-title.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

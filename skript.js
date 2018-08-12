window.onscroll = function() {myFunction()};

var sticky-title = document.getElementById("sticky-title");
var sticky = sticky-title.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    sticky-title.classList.add("sticky")
  } else {
    sticky-title.classList.remove("sticky");
  }
}

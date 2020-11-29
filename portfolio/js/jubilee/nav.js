var button = document.getElementById("button");
var navMenu = document.getElementById("navMenu");

var showNav = function () {
  if (navMenu.style.display == "none") {
    navMenu.style.display = "block";
    button.style.marginBottom = "1em";
  } else if (navMenu.style.display == "block") {
    navMenu.style.display = "none";
    button.style.marginBottom = "4em";
  }
}
button.addEventListener("click", showNav);

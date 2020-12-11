$(function() {
  var hamMenu = document.getElementById("menu");
  var hamIcon = hamMenu.children[0];
  var navMenu = document.getElementById("navMenu");

  var showNav = function () {
    if (hamIcon.className == "fas fa-bars fa-lg") {
      navMenu.style.display = "block";
      hamIcon.className = "fas fa-times fa-lg";
      $("#header").css("position", "absolute");
      $("#main").css("display", "none");
    }

    else if (hamIcon.className == "fas fa-times fa-lg") {
      navMenu.style.display = "none";
      hamIcon.className = "fas fa-bars fa-lg";
      $("#header").css("position", "revert");
      $("#main").css("display", "block");
    }
  }
  hamMenu.addEventListener("click", showNav);

  var hireMe = document.getElementById("hireMe");
  var hireIcon = hireMe.children[1];
  var subHireMe = document.getElementById("subHireMe");

  var showSubNav = function() {
    if (hireIcon.className == "fas fa-angle-down fa-lg") {
      subHireMe.style.display = "block";
      hireIcon.className = "fas fa-angle-left fa-lg";
    }

    else if (hireIcon.className == "fas fa-angle-left fa-lg") {
      subHireMe.style.display = "none";
      hireIcon.className = "fas fa-angle-down fa-lg";
    }
  }

  hireMe.addEventListener("click", showSubNav)

})

$(function() {
  var button = document.getElementById("menu");
  var icon = button.children[0];
  var navMenu = document.getElementById("navMenu");

  var showNav = function () {
    if (icon.name == "menu-sharp") {
      navMenu.style.display = "block";
      icon.name = "close-sharp";
      $("#header").css("position", "absolute");
      $("#main").css("display", "none");
    } else if (icon.name == "close-sharp") {
      navMenu.style.display = "none";
      icon.name = "menu-sharp";
      $("#header").css("position", "revert");
      $("#main").css("display", "block");

    }
  }
  button.addEventListener("click", showNav);





  var adjective = ["is a front-end developer.", "has a thrist for knowledge.", "lives in Washington, DC.", "loves to travel.", "is ambitious.", "is innovative.", "is creative.", "is resourceful."];
  var colorAdjective = ["#c0a8ff", "#c0ffa8", "#ffc0a8", "#ffa8c0", "#c0d8ff", "#f0ffa8", "#c0d8f0", "#f0f0a8"];
  // var random = Math.random();
  // random *= adjective.length;
  // var randomIndex = Math.floor(random);
  // var randomAdjective = adjective[randomIndex];

  var typed = new Typed('#js-header', {
    startDelay: 150,
    strings: adjective,
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true, // Default value
    shuffle: true,
    loop: true
  });


})

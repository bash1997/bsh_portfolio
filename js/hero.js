$(function () {
  var adjective = ["is a web designer/developer.", "is ambitious.", "is innovative.", "is creative.", "is resourceful.", "has a thrist for knowledge.", "loves to travel.", "lives in Washington, DC."];
  var colorAdjective = ["#c0a8ff", "#c0ffa8", "#ffc0a8", "#ffa8c0", "#c0d8ff", "#f0ffa8", "#c0d8f0", "#f0f0a8"];


  var typed = new Typed('#js-header', {
    startDelay: 150,
    strings: adjective,
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true, // Default value
    //shuffle: true,
    loop: true
  });
})

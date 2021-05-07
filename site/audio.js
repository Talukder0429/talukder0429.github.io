var audio = new Audio("./horn.wav");

var executed = false;

var waypoint = new Waypoint({
  element: document.getElementById("ship"),
  handler: function () {
    if (!executed) {
      executed = true;
      audio.volume = 0.2;
      audio.play();
    }
  },
  offset: "bottom-in-view",
});

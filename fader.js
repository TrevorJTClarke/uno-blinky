var JF = require("johnny-five");
var board, led;

board = new JF.Board();
board.on("ready", function() {

  led = new JF.Led(11);

  // led.fadeIn();
  //
  // // Toggle the led after 5 seconds (shown in ms)
  // this.wait(5000, function() {
  //   led.fadeOut();
  // });

  // Instead of passing a time and rate, you can
  // pass any valid Animation() segment opts object
  // https://github.com/rwaldron/johnny-five/wiki/Animation#segment-properties
  led.pulse({
    easing: "inOutQuad", // linear
    duration: 3000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 0.85, 0.9,0.92,0.94,0.96,1],
    keyFrames: [0, 10, 0, 50, 0, 255, 0, 70, 0, 120, 255],
    onstop: function() {
      console.log("Animation stopped");
    }
  });

  // Stop and turn off the led pulse loop after
  // 12 seconds (shown in ms)
  this.wait(12000, function() {

    // stop() terminates the interval
    // off() shuts the led off
    led.stop().off();
  });


  // make myLED available as "led" in REPL
  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
  this.repl.inject({
    led: led
  });
});

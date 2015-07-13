var JF = require("johnny-five");
var board;
var motor;

board = new JF.Board();
board.on("ready", function() {
  motor = new JF.Motor({
    pin: 5 // Digital PWM
  });

  board.repl.inject({
    motor: motor
  });

  // Motor Event API
  motor.on("start", function() {
    console.log("start");
    board.wait(4000, function() {
      motor.stop();
    });
  });

  // "stop" events fire when the motor is stopped.
  motor.on("stop", function() {
    console.log("stop");
  });

  // Motor API
  // start([speed)
  // Takes an optional parameter `speed` [30-255]
  motor.start(45);
});

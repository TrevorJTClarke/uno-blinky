var JF = require("johnny-five");
var myBoard, led;

myBoard = new JF.Board();
myBoard.on("ready", function() {

  led = new JF.Led(13);

  var offsets = [3000,2500,2200,1800,1400,1000,600,300,120,30,30, 120, 300, 600, 1000, 1400, 1800, 2200, 2500, 3000];
  var revOffsets = offsets.reverse();
  var i = 0;

  function paradox() {
    led.on();

    setTimeout(function(){
      led.off();

      if (offsets[i + 1]){
        setTimeout(function(){
          ++i;
          paradox();
        },offsets[i]);
      }
    },offsets[i]);
  }
  paradox();


  // myLed.strobe( 1000 );

  // make myLED available as "led" in REPL
  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
  this.repl.inject({
    led: led
  });
});


var robot = require ("robot-js");

var mouse = robot.Mouse();

// Change default auto delay
keyboard.autoDelay.min = 200;
keyboard.autoDelay.max = 300;


while (true)
{
	var orgpos = robot.Mouse.getPos();
    // Press R key to exit loop
    var s = robot.Keyboard.getState();
    if (s[robot.KEY_R])
        break;

	// v symbol
	if(s[robot.KEY_DOWN]){
		console.log("down");
		mouse.press(robot.BUTTON_LEFT);
		 var pos = robot.Mouse.getPos();
		 robot.Mouse.setPos(pos.x+25, pos.y+50);
		 robot.Timer.sleep (40);
		 pos = robot.Mouse.getPos();
		 robot.Mouse.setPos(pos.x+25, pos.y-50);
		 robot.Timer.sleep (40);
		 mouse.release(robot.BUTTON_LEFT);
		 robot.Mouse.setPos(orgpos);
	  }
	  // ^ symbol
	  if(s[robot.KEY_UP]){
		robot.Timer.sleep (40);
		console.log("up");
		mouse.press(robot.BUTTON_LEFT);
		 var pos = robot.Mouse.getPos();
		 robot.Mouse.setPos(pos.x+25, pos.y-50);
		 robot.Timer.sleep (40);
		 pos = robot.Mouse.getPos();
		 robot.Mouse.setPos(pos.x+25, pos.y+50);
		 robot.Timer.sleep (40);
		 mouse.release(robot.BUTTON_LEFT);
		 robot.Mouse.setPos(orgpos);
	  }
	  // - symbol
	  if(s[robot.KEY_LEFT]){
		 robot.Timer.sleep (40);
		console.log("left");
		mouse.press(robot.BUTTON_LEFT);
		 var pos = robot.Mouse.getPos();
		 robot.Mouse.setPos(pos.x+50, pos.y);
		 robot.Timer.sleep (40);
		 mouse.release(robot.BUTTON_LEFT);
		 robot.Mouse.setPos(orgpos);
	  }
	  // | symbol
	  if(s[robot.KEY_RIGHT]){
		robot.Timer.sleep (40);
		console.log("right");
		mouse.press(robot.BUTTON_LEFT);
		 var pos = robot.Mouse.getPos();
		 robot.Mouse.setPos(pos.x, pos.y+50);
		 robot.Timer.sleep (40);
		 mouse.release(robot.BUTTON_LEFT);
		 robot.Mouse.setPos(orgpos);
	  }
	  // LIGHTNING
	  if(s[robot.KEY_SPACE]){
		 robot.Timer.sleep (40);
		console.log("space");
		mouse.press(robot.BUTTON_LEFT);
		 var pos = robot.Mouse.getPos();
		 robot.Mouse.setPos(pos.x-15, pos.y-50);
		 robot.Timer.sleep (40);
		 robot.Mouse.setPos(pos.x+10, pos.y+25);
		 robot.Timer.sleep (40);
		 robot.Mouse.setPos(pos.x-15, pos.y-50);
		 robot.Timer.sleep (40);
		 mouse.release(robot.BUTTON_LEFT);
		 robot.Mouse.setPos(orgpos);
	}
	
    // Avoid busy waiting
    robot.Timer.sleep (100);
}



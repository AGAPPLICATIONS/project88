// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
holex = 400;
holey = 400;
ball_x = 10;
ball_y = 10;

block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		holeobject = Img;
		holeobject.scaleToHeight(50);
		holeobject.scaleToWidth(50);
		holeobject.set({
			top: holey,
			left: holex,


		});
		console.log("hole is at x="+holex+"y="+holey);
		canvas.add(holeobject);
		canvas.remove(ballobject);
		console.log("lol");
	});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ballobject = Img;
		ballobject.scaleToHeight(50);
		ballobject.scaleToWidth(50);
		ballobject.set({
			top: ball_y,
			left: ball_x,


		});
		canvas.add(ballobject);
	});
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ball_x == holex && ball_y == holey) {
		canvas.remove(ballobject);
		document.getElementById("hd3").innerHTML = "YOU WIN!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
		document.getElementsByClassName("body_background").style.background.url = "mqdefault_6s.webp";
	}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (ball_y >= 0) {
			ball_y = ball_y - block_image_height;
			console.log("x=" + ball_x + "y=" + ball_y)
			canvas.remove(ballobject);
			new_image();
			load_img();

		}
		// Write a code to move ball upward.
	}

	function down() {
		if (ball_y <= 450) {
			ball_y = ball_y + block_image_height;
			console.log("x=" + ball_x + "y=" + ball_y)
			canvas.remove(ballobject);
			new_image();
			load_img();
		}
		// Write a code to move ball downward.
	}

	function left() {
		if (ball_x >= 0) {
			ball_x = ball_x - block_image_width;
			console.log("x=" + ball_x + "y=" + ball_y )
			canvas.remove(ballobject);
			new_image();
			load_img();
			// Write a code to move ball left side.
		}
	}

	function right() {
		if (ball_x <= 1050) {
			ball_x = ball_x + block_image_width;
			console.log("x=" + ball_x + "y=" + ball_y)
			canvas.remove(ballobject);
			new_image();
			load_img();
			// Write a code to move ball right side.
		}
	}

}
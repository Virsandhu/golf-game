var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

//Set initial positions for ball and hole images.
hole_x = 800;
hole_y = 400;
ball_x= 0;
ball_y= 0;

block_image_width = 5;
block_image_height = 5;

var holeobject="";
var ballobject="";

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function(Img){
        holeobject=Img;
        holeobject.scaleToHeight(50);
        holeobject.scaleToWidth(50);
        holeobject.set({
           top:hole_y,
           left:hole_x
        });
        canvas.add(holeobject);
    })
	new_image()
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
        ballobject=Img;
        ballobject.scaleToHeight(50);
        ballobject.scaleToWidth(50);
        ballobject.set({
           top:ball_y,
           left:ball_x
        });
        canvas.add(ballobject);
    })
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		ball_y= ball_y+block_image_height;
			console.log("up pressed  x= "+ball_x+" y= "+ball_y);
			console.log("block img height = "+block_image_height);
			canvas.remove(ballobject);
			new_image();		
    
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (ball_y<=450) {
			ball_y= ball_y+block_image_height;
			console.log("down pressed  x= "+ball_x+" y= "+ball_y);
			console.log("block img height = "+block_image_height);
			canvas.remove(ballobject);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x= ball_x+block_image_width;
			console.log("left pressed  x= "+ball_x+" y= "+ball_y);
			console.log("block img height = "+block_image_width);
			canvas.remove(ballobject);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x= ball_x+block_image_width;
			console.log("right pressed  x= "+ball_x+" y= "+ball_y);
			console.log("block img height = "+block_image_width);
			canvas.remove(ballobject);
			new_image();
		}
	}
	



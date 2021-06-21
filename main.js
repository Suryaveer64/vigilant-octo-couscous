
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
    
   if (keyPressed == 32) {
	   block_x = 1200;
	new_image('power-rangers-title.png');
	console.log("Spacebar who's watching");
	}
	if (keyPressed == 89) {
		x = 600;
		y = 500;
	 new_image('12.jpg');
	 console.log(" yay");
	 }
	if (keyPressed == 83) {
		x = 300;
		y = 300;
	    new_image('backg.jpg');
        console.log("HALLO:I am a coder");
	}
	if(keyPressed == '82')
	{
		x = 000;
		y = 600;
		new_image('rr1.png');
        console.log("r");
	}
	if(keyPressed == '71')
	{
		x = 200;
		y = 600;
		new_image('gr.png');
        console.log("g");
	}
	
	if(keyPressed == '89')
	{
		x =350;
		y = 600;
		new_image('yr.png');
        console.log("y");
	}
	if(keyPressed == '80')
	{
		x = 600;
		y = 600;
		new_image('pr.png');
        console.log("p");
	}
	if(keyPressed == '66')
	{
		x = 700;
		y = 600;
		new_image('br.png');
        console.log("b");
	}
	
}


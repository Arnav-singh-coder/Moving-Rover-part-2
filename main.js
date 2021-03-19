canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var background_image="mars.jpg";
var rover_image="rover.png"

function add(){
    bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;

    r_img=new Image();
    r_img.onload=uploadrover;
    r_img.src=rover_image;
    
}

function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
    
}

function uploadrover(){
    ctx.drawImage(r_img,rover_x,rover_y,rover_width,rover_height);
    
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x= "+rover_x+"and y="+rover_y) ;
        uploadbackground();
        uploadrover();

    }




}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when up arrow is pressed,x= "+rover_x+"and y="+rover_y) ;
        uploadbackground();
        uploadrover();

    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when up arrow is pressed,x= "+rover_x+"and y="+rover_y) ;
        uploadbackground();
        uploadrover();

    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when up arrow is pressed,x= "+rover_x+"and y="+rover_y) ;
        uploadbackground();
        uploadrover();

    }
}
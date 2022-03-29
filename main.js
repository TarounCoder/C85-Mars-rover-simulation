canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");

mars_images_array = ["image_1.jpeg", "Image_2.jpeg", "Image_3.jpeg", "Image_4.jpeg", "Image_5.jpeg"];

random_number= Math.floor(Math.random()*5);

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10; 

rover_img = "rover.png";

background_img = mars_images_array[random_number];
console.log("background image:" + background_img);

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        console.log("up");
        up();
        }

     if(keyPressed == '37'){
            console.log("left");
            left();
        }

     if(keyPressed == '39'){
                console.log("right");
                right();
        }


    if(keyPressed == '40'){
                    console.log("down");
                    down();
        }    
}

function up(){
    if (rover_y >=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed ,x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y <=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed ,x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}


function left(){
    if (rover_x >=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed ,x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (rover_x <=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed ,x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
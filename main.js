var canvas = new fabric.Canvas("myCanvas");
ctx = canvas.getContext("2d");
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";
var block_image_width = 60;
var block_image_height = 60;
function player_update() {
  fabric.Image.fromURL("player.png", function (Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top: player_y,
      left: player_x,
    });
    canvas.add(player_object);
  });
}
function new_image(get_image) {
  fabric.Image.fromURL(get_image, function (Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
      top: player_y,
      left: player_x,
    });
    canvas.add(block_image_object);
  });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
  keypressed = e.keyCode;
  console.log(keypressed);
  if (e.shiftKey == true && keypressed == "80") {
    console.log("p & shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
  if (e.shiftKey == true && keypressed == "77") {
    console.log("M & shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
  if (keypressed == "38") {
    up();
    console.log("up");
  }
  if (keypressed == "40") {
    down();
    console.log("down");
  }
  if (keypressed == "37") {
    left();
    console.log("left");
  }
  if (keypressed == "39") {
    right();
    console.log("right");
  }
  if (keypressed == "66") {
    new_image("brick.jpg");
    console.log("b");
  }
  if (keypressed == "78") {
    new_image("netherrack.jpg");
    console.log("n");
  }
  if (keypressed == "83") {
    new_image("stone.jpg");
    console.log("s");
  }
  if (keypressed == "87") {
    new_image("wood.jpg");
    console.log("w");
  }
  if (keypressed == "68") {
    new_image("dirt.png");
    console.log("d");
  }
  if (keypressed == "76") {
    new_image("glowstone.png");
    console.log("l");
  }
  if (keypressed == "71") {
    new_image("grass.png");
    console.log("g");
  }
  if (keypressed == "77") {
    new_image("moss.png");
    console.log("m");
  }
  if (keypressed == "89") {
    new_image("yellow_brick.png");
    console.log("y");
  }
  if (keypressed == "69") {
    new_image("erase.png");
    console.log("e");
  }
}
function up() {
  if (player_y >= 0) {
    player_y = player_y - block_image_height;
    console.log("block image height= " + block_image_height);
    console.log(
      "When up arrow key pressed, X = " + player_x + " , Y = " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}
function down() {
  if (player_y <= 500) {
    player_y = player_y + block_image_height;
    console.log("block image height= " + block_image_height);
    console.log(
      "When down arrow key pressed, X = " + player_x + " , Y = " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}
function left() {
  if (player_x >= 0) {
    player_x = player_x - block_image_width;
    console.log("block image width= " + block_image_width);
    console.log(
      "When left arrow key pressed, X = " + player_x + " , Y = " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}
function right() {
  if (player_x <= 850) {
    player_x = player_x + block_image_width;
    console.log("block image width= " + block_image_width);
    console.log(
      "When right arrow key pressed, X = " + player_x + " , Y = " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}

// No arguments
const paintWall1 = function () {
  console.log("The wall has been painted red");
};
paintWall1();

// Single argument
const paintWall2 = function (color) {
  console.log("The wall has been painted " + color)};

paintWall2("green");
paintWall2("blue");


const paintWall3 = function (whichWall, color) {
  console.log("The " + whichWall + " wall has been painted " + color);
}

paintWall3("north", "orange");
paintWall3("south-east", "grey");
// Oude stijl: loops
const colorArray = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colorArray.length) {
  console.log(colorArray[i]);
  i++;
}

for (let i = 0; i < colorArray.length; i++) {
  console.log(colorArray[i]);
}

// Nieuwe stijl: array methods

const colorArray = ["yellow", "blue", "red", "orange"];

colorArray.forEach((color) => console.log(color));

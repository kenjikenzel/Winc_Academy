function total(number1, number2) {
  const squared1 = number1 * number1;
  const squared2 = number2 * number2;
  const addSquared = squared1 + squared2;
  const sumSquared = addSquared * addSquared;
  return sumSquared;
}

const total = function (number1, number2) {
  const squared1 = number1 * number1;
  const squared2 = number2 * number2;
  const addSquared = squared1 + squared2;
  const sumSquared = addSquared * addSquared;
  return sumSquared;
};

const total = (number1, number2) => {
  const squared1 = number1 * number1;
  const squared2 = number2 * number2;
  const addSquared = squared1 + squared2;
  const sumSquared = addSquared * addSquared;
  return sumSquared;
};

console.log(total(2, 3));

// Check if number is big

const check = function (number) {
  if (number > 100) {
    return "TRUE";
  } else {
    return "FALSE";
  }
};

console.log(check(110));
console.log(check(90));

// Bouncer at the club

const bouncerCheck = function (maxPersons, currentPersons, ageOfPerson) {
  if (ageOfPerson < 18) {
    return "this is a club for adults";
  }
  if (currentPersons >= maxPersons) {
    return "it's too busy now, come back later";
  } else {
    return "come in";
  }
};

console.log(bouncerCheck(100, 10, 17)); // this is a club for adults
console.log(bouncerCheck(100, 10, 20)); // come in
console.log(bouncerCheck(100, 100, 20)); //it's too busy now, come back later

// Calculating the average
const calculateAverage = function (
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const total = number1 + number2 + number3 + number4 + number5;
  const average = total / 5;
  const averageRound = Math.round(average);
  return averageRound;
};

console.log(calculateAverage(1, 1, 1, 1, 1)); // 1
console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
console.log(calculateAverage(100, 20, 33, 48, 5)); // 41.2 (not rounded)

console.log(calculateAverage(100, 20, 33, 48, 5)); // 41.2 (rounded)

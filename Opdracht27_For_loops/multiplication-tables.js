const multiplier = 9;
for (let i = 1; i <= 10; i++) {
  let result = i * multiplier;
  console.log(i + " x " + multiplier + " = " + result);
}

// bonus

for (let multiplier = 1; multiplier <= 10; multiplier++) {
  for (let i = 1; i <= 10; i++) {
    let result = i * multiplier;

    console.log(i + " x " + multiplier + " = " + result);
  }
}

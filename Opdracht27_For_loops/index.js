// Hey Kiddo
const ageCheck = function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

const ageGreet = function (age) {
  if (ageCheck(age)) {
    return "Hello there";
  } else {
    return "Hey kiddo";
  }
};

console.log(ageGreet(18));
console.log(ageGreet(17));

//VAT calculations - exercise 1

const calcVAT = function (basePrice, VATpercentage) {
  return basePrice * (VATpercentage / 100);
};

const priceIncludingVAT = function (basePrice, VATpercentage) {
  const VAT = calcVAT(basePrice, VATpercentage);
  return basePrice + VAT;
};

console.log("Price including VAT €1000:");
console.log(priceIncludingVAT(1000, 21));
console.log("Price including VAT €2:");
console.log(priceIncludingVAT(2, 9));

//VAT calculations - exercise 2

const calcBasePrice = function (priceIncludingVAT, VATpercentage) {
  const basePrice = priceIncludingVAT / ((100 + VATpercentage) / 100);
  return basePrice;
};

const calcBasePriceAndVAT = function (priceIncludingVAT, VATpercentage) {
  const basePrice = calcBasePrice(priceIncludingVAT, VATpercentage);
  const VAT = priceIncludingVAT - basePrice;
  return [basePrice, VAT];
};

console.log("€1210 base price and VAT");
console.log(calcBasePriceAndVAT(1210, 21));

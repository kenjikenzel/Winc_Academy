const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstNameMale = "Bram";
const firstNameFemale = "Sarah";
const totalAmount = 25;

// Testdata of statements werken

/* 
const age = 17;
const isFemale = false;
const driverStatus = "geenBob";
*/

if (age >= 18) {
  console.log("Je mag naar binnen, je bent 18 jaar of ouder");
} else {
  console.log("Helaas, je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je bent een vrouw, je mag naar binnen");
} else {
  console.log("Je bent geen vrouw, je mag niet naar binnen");
}

if (driverStatus == "bob") {
  console.log("Je bent de bob, je mag rijden!");
} else {
  console.log("Je bent geen bob, je mag niet autorijden!");
}

if (age > 18 && age < 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je krijgt helaas geen 50% korting");
}

if (firstNameMale === "Bram" || firstNameFemale === "Sarah") {
  console.log("Je krijgt een gratis biertje!");
} else {
  console.log("Je krijgt geen gratis biertje...");
}

if (totalAmount > 25 && totalAmount >= 50) {
  console.log("Je krijgt gratis (vega)bitterballen");
}

if (totalAmount > 50 && totalAmount <= 100) {
  console.log("Je krijgt gratis portie nachos");
}

if (totalAmount > 100) {
  console.log("Je krijgt een gratis flesje champagne");
}

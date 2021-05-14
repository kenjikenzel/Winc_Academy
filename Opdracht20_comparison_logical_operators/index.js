const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram";
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

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je krijgt helaas geen 50% korting");
}

if (firstName === "Bram" || firstName === "Sarah") {
  console.log("Je krijgt een gratis biertje!");
} else {
  console.log("Je heet geen Bram of Sarah, dus krijgt geen gratis biertje...");
}

if (totalAmount >= 100) {
  console.log("Je krijgt een gratis flesje champagne");
} else if (totalAmount > 50) {
  console.log("Je krijgt gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("Je krijgt gratis (vega)bitterballen");
} else {
  console.log("Helaas je krijgt geen korting");
}

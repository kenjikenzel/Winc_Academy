const age = 18;
const isFemale = true;
const driverStatus = "bob";

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

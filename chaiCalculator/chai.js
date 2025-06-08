// Function to calculate Chai ingredients based on number of cups
function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200; //ml
  const milk = numberOfCups * 50; //ml
  const teaLeaves = numberOfCups * 1; //tablespoons
  const sugar = numberOfCups * 2; //teaspoons

  // Print a friendly message with the required quantities
  console.log(`To make ${numberOfCups} cups of Chai Bora, you will need:`);
  console.log(`Maji: ${water} ml`);
  console.log(`Maziwa: ${milk} ml`);
  console.log(`Majani (Tea Leaves): ${teaLeaves} tablespoons`);
  console.log(`Sukari: ${sugar} teaspoons`);

  // Return a final message
  return "Chai Bora time-enjoy!";
}
//Prompt the user for input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const cups = parseInt(input);

if (!isNaN(cups) && cups > 0) {
  const message = calculateChaiIngredients(cups);
  console.log(message);
} else {
  console.log ("Please enter a valid number.");
}

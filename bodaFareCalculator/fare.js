// Function to calculate total fare for a boda boda ride
function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // Base fare for every ride
  const chargePerKm = 15; // Cost per kilometer travelled
  const distanceCharge = distanceInKm * chargePerKm; // Distance-based fare
  const totalFare = baseFare + distanceCharge; // Total fare to charge

  // Print out fare details
  console.log(`Safari yako ni ya km ${distanceInKm}:`);
  console.log(`Bei ya kuanza: KES ${baseFare}`);
  console.log(`Iyo distance yote: KES ${distanceCharge}`);
  console.log(`Jumla ya fare: KES ${totalFare}`);

//Return a message to user
  return "Kalia nduthi! Ride safe!";
}
//Prompt user for input
const input = prompt("Unafika wapi Mkuu? Distance in Km?:");
const km = parseFloat(input);

if (!isNaN(km) && km > 0) {
  const message = calculateBodaFare(km);
  console.log(message);
} else {
  console.log("Please enter a valid distance.");
}
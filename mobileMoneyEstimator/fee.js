// Function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
  let fee = amountToSend * 0.015; // Calculate 1.5% fee

  // Apply min and max fee limits
  if (fee < 10) {
    fee = 10; // Minimum fee
  } else if (fee > 70) {
    fee = 70; // Maximum fee
  }

  //Total amount to be debited
  const totalDebited = amountToSend + fee; 

  // Output results
  console.log(`Sending KES ${amountToSend}`);
  console.log(`Transaction fee KES ${fee}`);
  console.log(`Total amount to be debited KES ${totalDebited}`);

  //Return closing message
  return "Keep transacting!";
}
//Prompts the user
const input = prompt("Unatuma How much? (KES):");
const amount = parseFloat(input);

//Validate input
if (!isNaN(amount) && amount > 0) {
  const message = estimateTransactionFee(amount);
  console.log(message);
} else {
  console.log("Please enter a valid amount.");
}
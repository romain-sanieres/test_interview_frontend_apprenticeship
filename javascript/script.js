// Array of numbers
const numbers = [54, 65, 89, 46, 13, 76, 43];

// This function filters the array to include only elements at even indices
function getEvenNumbers(numbers) {
  // index % 2 === 0 determines if the array index is even
  const evenNumbers = numbers.filter((number, index) => index % 2 === 0);
  console.log(evenNumbers);
  // and return new array
  return evenNumbers;
}

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Call the functions
  getEvenNumbers(numbers);

   // Add event listener for the button
   document.getElementById("changeText").addEventListener("click", function () {
    document.getElementById("myText").textContent = "Hello, Check!";
  });
});

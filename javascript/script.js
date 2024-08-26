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

// Create an async function to fetch and display todos
async function fetchTodos() {
  try {
    // Fetch data from the API and wait for the response
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    // Convert the response to JSON
    const todos = await res.json();

    // Extract the first 5 todos from the array
    const selectFiveTodos = todos.slice(0, 5);

    // Select the ul element with id 'todoList'
    const todoList = document.getElementById("todoList");

    // Iterate through each element in selectFiveTodos
    for (let i = 0; i < selectFiveTodos.length; i++) {
      // Create a new li element
      const li = document.createElement("li");
      // Set the text of the li element to the title of the current todo
      li.textContent = selectFiveTodos[i].title;
      // Append the li element as a child to the ul element
      todoList.appendChild(li);
    }
  } catch (err) {
    // log error if error
    console.log(err);
  }
}

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Call the functions
  getEvenNumbers(numbers);
  fetchTodos();

  // Add event listener for the button
  document.getElementById("changeText").addEventListener("click", function () {
    document.getElementById("myText").textContent = "Hello, Check!";
  });
});

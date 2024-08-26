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

async function fetchTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    const selectFiveTodos = todos.slice(0, 5);
    const todoList = document.getElementById("todoList");

    for (let i = 0; i < selectFiveTodos.length; i++) {
      const li = document.createElement("li");
      li.textContent = selectFiveTodos[i].title;
      todoList.appendChild(li);
    }
  } catch (err) {
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

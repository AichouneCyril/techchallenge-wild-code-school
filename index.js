const form = document.querySelector("#new-member-form");
const inputToDo = document.querySelector("#name");
const todoList = document.querySelector("#member-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newToDo = inputToDo.value;
  const li = document.createElement("li");
  li.textContent = newToDo;
  todoList.appendChild(li);
  inputToDo.value = "";
});

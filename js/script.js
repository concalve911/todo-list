"use strict";

const form = document.querySelector(".todo__form");
const todoList = document.querySelector(".todo__list");

form.addEventListener("submit", toDo);

function toDo(event) {
  event.preventDefault();

  const input = document.querySelector(".todo__input");
  const inputText = input.value.trim();

  if (inputText === "") {
    return alert("You wrote empty string");
  }

  const toDoItem = document.createElement("li");
  toDoItem.className = "todo__list-item";

  const textNode = document.createTextNode(inputText);
  toDoItem.appendChild(textNode);

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.className = "todo__btn";
  deleteBtn.dataset.action = "delete";

  toDoItem.appendChild(deleteBtn);
  todoList.prepend(toDoItem);
  input.value = "";
}

todoList.addEventListener("click", itemDelete);
function itemDelete(event) {
  if (
    event.target.hasAttribute("data-action") &&
    event.target.getAttribute("data-action") === "delete"
  ) {
    event.target.parentNode.remove();
  }
}

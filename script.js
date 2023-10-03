const categoryHome = document.querySelector(".section-category-home");
const categoryWork = document.querySelector(".section-category-work");
const categoryChill = document.querySelector(".section-category-chill");
const myForm = document.querySelector(".myForm");
let todos = [];
const textArea = document.querySelector("#todo-description");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTodo = {
    category: event.target.elements[0].value, // home work chill
    description: event.target.elements[1].value, // text area
    status: "ToDo", // a adapter selon la gestion du status (Je n'ai malheureusement pas compris cette partie)
  };

  todos.push(newTodo);

  createTodos([newTodo]);
});

function createTodos(todos) {
  for (let i = 0; i < todos.length; i++) {
    const content = document.createElement("div");
    content.className = "section-task";
    content.innerHTML = `
    <button class="delete-button">-</button>
  <div class="task-text">${todos[i].description}</div>
    <select class="status-button" onchange="myCallback">
      <option value="to-do">🔴 Tâche à faire</option>
      <option value="in-progress">🟠 Tâche en cours</option>
      <option value="done">🟢 Tâche terminée</option>
    </select>`;

    if (todos[i].category === "home") {
      categoryHome.appendChild(content);
    } else if (todos[i].category === "work") {
      categoryWork.appendChild(content);
    } else {
      categoryChill.appendChild(content);
    }
    content
      .querySelector(".delete-button")
      .addEventListener("click", (event) => {
        const index = todos.findIndex(function (todo) {
          return (
            todo.description ===
            event.target.parentElement.querySelector(".task-text").textContent
          );
        });
        todos.splice(index, 1);
        event.target.parentElement.remove();
      });
  }
  textArea.value = "";
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener("beforeunload", function () {
  saveTodos();
});

function loadTodos() {
  const cache = localStorage.getItem("todos");
  if (cache) {
    todos = JSON.parse(cache);
    createTodos(todos);
  }
}
loadTodos();

//Pour le bouton de status :
function myCallback() {
  const selectElement = document.getElementByClassName("status-button");
  // je vais chercher l'élement <select> avec sa class //
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  // je vais chercher l'option qui est sélectionnée en lui disant avec selectElement.selectedIndex
  //que je récupère l'index de l'option puis j'accède à cet index avec "selectElement.options"//
  const selectedValue = selectedOption.value;
  // j'extrait la valeur de l'option sélectionnée. J'accède à la propriété "value" de mes options//

  selectElement.className = selectedValue;
  // On applique la classe CSS correspondante à la valeur sélectionnée //
}

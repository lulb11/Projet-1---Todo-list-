const categoryHome = document.querySelector(".section-category-home");
const categoryWork = document.querySelector(".section-category-work");
const categoryChill = document.querySelector(".section-category-chill");
const myForm = document.querySelector(".myForm");
let todos = [];
const textArea = document.querySelector("#todo-description");

const uuidGenerator = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTodo = {
    uuid: uuidGenerator(),
    category: event.target.elements[0].value, // home work chill
    description: event.target.elements[1].value, // text area
    status: "ToDo", // a adapter selon la gestion du status (Je n'ai malheureusement pas compris cette partie)
  };

  todos.push(newTodo);
  saveTodos();

  //createTodos([newTodo]);
  addTask(newTodo);

  // clear le texarea
  textArea.value = "";
});

const setDeleteEventListener = (task, content) => {
  content.querySelector(".delete-button").addEventListener("click", (event) => {
    const index = todos.findIndex((todo) => todo.uuid === task.uuid);
    console.log(index, todos);
    todos.splice(index, 1);
    console.log(todos);
    event.target.parentElement.remove();
    saveTodos();
  });
};

const addTask = (task) => {
  const content = document.createElement("div");
  content.className = "section-task";
  content.innerHTML = `
    <button class="delete-button">-</button>
  <div class="task-text">${task.description}</div>
    <select class="status-button">
      <option value="to-do">🔴 Tâche à faire</option>
      <option value="in-progress">🟠 Tâche en cours</option>
      <option value="done">🟢 Tâche terminée</option>
    </select>`;

  if (task.category === "home") {
    categoryHome.appendChild(content);
  } else if (task.category === "work") {
    categoryWork.appendChild(content);
  } else {
    categoryChill.appendChild(content);
  }

  setDeleteEventListener(task, content);
};

// function createTodos(todos) {
//   for (let i = 0; i < todos.length; i++) {
//     const content = document.createElement("div");
//     content.className = "section-task";
//     content.innerHTML = `
//     <button class="delete-button">-</button>
//   <div class="task-text">${todos[i].description}</div>
//     <select class="status-button" onchange="myCallback">
//       <option value="to-do">🔴 Tâche à faire</option>
//       <option value="in-progress">🟠 Tâche en cours</option>
//       <option value="done">🟢 Tâche terminée</option>
//     </select>`;
//     content
//       .querySelector(".delete-button")
//       .addEventListener("click", (event) => {
//         const index = todos.findIndex(function (todo) {
//           return (
//             todo.description ===
//             event.target.parentElement.querySelector(".task-text").textContent
//           );
//         });
//         console.log(index, todos);
//         todos.splice(index, 1);
//         console.log(todos);
//         event.target.parentElement.remove();
//         saveTodos();
//       });

//     if (todos[i].category === "home") {
//       categoryHome.appendChild(content);
//     } else if (todos[i].category === "work") {
//       categoryWork.appendChild(content);
//     } else {
//       categoryChill.appendChild(content);
//     }
//   }
//   textArea.value = "";
// }

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
};

window.addEventListener("beforeunload", function () {
  saveTodos();
});

function loadTodos() {
  const cache = localStorage.getItem("todos");

  if (cache) {
    todos = JSON.parse(cache);
    todos.forEach((todo) => {
      addTask(todo);
    });
  };
};

loadTodos();
// remove.item.localstorage storage.clear()

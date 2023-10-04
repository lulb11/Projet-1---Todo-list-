const categoryHome = document.querySelector(".section-category-home");
const categoryWork = document.querySelector(".section-category-work");
const categoryChill = document.querySelector(".section-category-chill");
const myForm = document.querySelector(".myForm");
let todos = [];
const textArea = document.querySelector("#todo-description");

textArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    myForm.dispatchEvent(new Event("submit"));
  }
});

const uuidGenerator = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });


function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
};

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTodo = {
    uuid: uuidGenerator(),
    category: event.target.elements[0].value,
    description: event.target.elements[1].value,
    status: "to-do",
  };

  todos.push(newTodo);
  saveTodos();

  addTask(newTodo);

  textArea.value = "";
});

const setDeleteEventListener = (task, content) => {
  content.querySelector(".delete-button").addEventListener("click", (event) => {
    const index = todos.findIndex((todo) => todo.uuid === task.uuid);
    todos.splice(index, 1);
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


  const statusButton = content.querySelector(".status-button");
  statusButton.value = task.status;

  statusButton.addEventListener("change", (event) => {
    task.status = event.target.value;
    saveTodos();
  });

  setDeleteEventListener(task, content);
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

let btnClearStorage = document.querySelector("#btn-clear-storage");

btnClearStorage.addEventListener("click", () => {
  localStorage.clear();
  if ((todos = [])) {
    window.location.reload();
  }
});
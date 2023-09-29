const myForm = document.getElementById('myForm');
const categoryHome = document.getElementById('section-category-home');
const categoryWork = document.getElementById('section-category-work');
const categoryChill = document.getElementById('section-category-chill');
const output = document.getElementById('output');


function createTodo(event) {
    const newTodo = {
        category: event.target.elements[0].value,
        status: "ToDo",
        description: event.target.elements[1].value
    }
    return newTodo;
}

function createTodoHTMLBody(todo) {
    return `<p>${todo.category} ${todo.description} ${todo.status}</p> `;
}


function injectTodoInHTML(todoToInject) {
    if (todoToInject.category === "home") {
        categoryHome.innerHTML += createTodoHTMLBody(todoToInject);
    }

    else if (todoToInject.category === "work") {
        categoryWork.innerHTML += createTodoHTMLBody(todoToInject);
    }

    else {
        categoryChill.innerHTML += createTodoHTMLBody(todoToInject);
    }

}

myForm.addEventListener('submit', (eventEmittedWhenFormIsSubmitted) => {
    eventEmittedWhenFormIsSubmitted.preventDefault();
    const newTodo = createTodo(eventEmittedWhenFormIsSubmitted);
    localStorage.setItem('todoKey', JSON.stringify(newTodo));
    injectTodoInHTML(newTodo);
});

window.addEventListener('load', function () {
  const userDataJSON = localStorage.getItem('todoKey');
  if (userDataJSON) {
    const userData = JSON.parse(userDataJSON);
    injectTodoInHTML(userData); // Affichez les données sauvegardées lors du chargement de la page.
  }
});

let btnTest = document.querySelector('.btn-test');
let divTest = document.querySelector('.div-test');

window.addEventListener('load', function () {
  const userDataJSON = localStorage.getItem('todoKey');
  if (userDataJSON) {
    const userData = JSON.parse(userDataJSON);
    injectTodoInHTML(userData); // Affichez les données sauvegardées lors du chargement de la page.
  }
});

btnTest.addEventListener('click', (event) => {
    event.preventDefault();
    // Supprimez tous les enfants de la divTest
    while (divTest.firstChild) {
        divTest.removeChild(divTest.firstChild);
    }
});

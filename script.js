const myForm = document.getElementById('myForm');
const categoryHome = document.getElementById('section-category-home');
const categoryWork = document.getElementById('section-category-work');
const categoryChill = document.getElementById('section-category-chill');


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
    injectTodoInHTML(newTodo);
});
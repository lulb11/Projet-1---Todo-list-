myFormOMG.addEventListener('submit', (event) => {
    event.preventDefault();

    // Créer une nouvelle todo depuis le formulaire
    const newTodo = {
        category: event.target.elements[0].value, // work chill home
        status: "Todo",
        description: event.target.elements[1].value
    }

    // En fonction de la catégorie de la todo créée, on injecte la todo dans le HTML
    if (newTodo.category === "home") {
        categoryHome.innerHTML += `<p>${newTodo.category} ${newTodo.description} ${newTodo.status}</p>`;
    }

    else if (newTodo.category === "work") {
        categoryWork.innerHTML += `<p>${newTodo.category} ${newTodo.description} ${newTodo.status}</p>`;
    }

    else {
        categoryChill.innerHTML += `<p>${newTodo.category} ${newTodo.description} ${newTodo.status}</p>`;
    }

});






// récupère des elements html en js pour pouvoir interagir avec 
// const myFormOMG = document.getElementById('myForm');
// const categoryHome = document.getElementById('section-category-home');
// const categoryWork = document.getElementById('section-category-work');
// const categoryChill = document.getElementById('section-category-chill');


// function createTodo(event) {
//     const newTodo = {
//         category: event.target.elements[0].value, // work chill home
//         status: "ToDo",
//         description: event.target.elements[1].value
//     }
//     return newTodo;

// }

// function createTodoHTMLBody(todo) {
//     return `<p>${todo.category} ${todo.description} ${todo.status}</p> `;
// }


// function injectTodoInHTML(todoToInject) {
//     if (todoToInject.category === "home") {
//         categoryHome.innerHTML += createTodoHTMLBody(todoToInject);
//     }

//     else if (todoToInject.category === "work") {
//         categoryWork.innerHTML += createTodoHTMLBody(todoToInject);
//     }

//     else {
//         categoryChill.innerHTML += createTodoHTMLBody(todoToInject);
//     }

// }

// myFormOMG.addEventListener('submit', (eventEmittedWhenFormIsSubmitted) => {
//     eventEmittedWhenFormIsSubmitted.preventDefault();
//     const newTodo = createTodo(eventEmittedWhenFormIsSubmitted);
//     injectTodoInHTML(newTodo);
// });
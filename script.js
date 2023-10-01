const categoryHome = document.querySelector('.section-category-home');
const categoryWork = document.querySelector('.section-category-work');
const categoryChill = document.querySelector('.section-category-chill');
const myForm = document.querySelector('.myForm');


myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTodo = {
    category: event.target.elements[0].value, // home work chill
    description: event.target.elements[1].value, // text area
    status: "ToDo" // a adapter selon la gestion du status
  };
//proposition à patir d'ici
  if (newTodo.category === "home") {
    categoryHome.innerHTML += `<div class="section-task">
    <div class="merge-delete-text">
      <div class="delete-button">
        <div class="delete-button-content">-</div>
      </div>
      <div class="task-text">${newTodo.description}</div>
        <select id="status-button" class="status-button" onchange="myCallback">
            <option value="to-do">🔴 Tâche à faire</option>
            <option value="in-progress">🟠 Tâche en cours</option>
            <option value="done">🟢 Tâche terminée</option>
        </select>`
  }

  else if (newTodo.category === "work") {
    categoryWork.innerHTML += `<div class="section-task">
    <div class="merge-delete-text">
      <div class="delete-button">
        <div class="delete-button-content">-</div>
      </div>
      <div class="task-text">${newTodo.description}</div>
        <select id="status-button" class="status-button" onchange="myCallback">
            <option value="to-do">🔴 Tâche à faire</option>
            <option value="in-progress">🟠 Tâche en cours</option>
            <option value="done">🟢 Tâche terminée</option>
        </select>`
  }
  
  else {
    categoryChill.innerHTML += `<div class="section-task">
    <div class="merge-delete-text">
      <div class="delete-button">
        <div class="delete-button-content">-</div>
      </div>
      <div class="task-text">${newTodo.description}</div>
        <select id="status-button" class="status-button" onchange="myCallback">
            <option value="to-do">🔴 Tâche à faire</option>
            <option value="in-progress">🟠 Tâche en cours</option>
            <option value="done">🟢 Tâche terminée</option>
        </select>`}
});

//Je propose, comme axe d'amélioration ://

// const content = document.createElement('div');
// content.className = 'section-task';
// content.innerHTML = `
// <div class="merge-delete-text">
//   <div class="delete-button">
//     <div class="delete-button-content">-</div>
//   </div>
//   <div class="task-text">${newTodo.description}</div>
//     <select id="status-button" class="status-button" onchange="myCallback">
//       <option value="to-do">🔴 Tâche à faire</option>
//       <option value="in-progress">🟠 Tâche en cours</option>
//       <option value="done">🟢 Tâche terminée</option>
//     </select>
// </div>
// </div>`;

// if (newTodo.category === "home") {
//   categoryHome.appendChild(content);
// }
// else if (newTodo.category === "work") {
//   categoryWork.appendChild(content);
// }
// else {
//   categoryChill.appendChild(content);
// }
// });


//Pour le bouton de status :
function myCallback() {
  const selectElement = document.getElementById("status-button");
  // je vais chercher l'élement <select> avec son ID //
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  // je vais chercher l'option qui est sélectionnée en lui disant avec selectElement.selectedIndex 
  //que je récupère l'index de l'option puis j'accède à cet index avec "selectElement.options"//
  const selectedValue = selectedOption.value;
  // j'extrait la valeur de l'option sélectionnée. J'accède à la propriété "value" de mes options//

  
  selectElement.className = selectedValue;
  // On applique la classe CSS correspondante à la valeur sélectionnée //
}

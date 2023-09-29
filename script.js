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

  if (newTodo.category === "home") {
    categoryHome.innerHTML += `<div class="section-task">
    <div class="merge-delete-text">
      <div class="delete-button">
        <div class="delete-button-content">-</div>
      </div>
      <div class="task-text">${newTodo.description}</div>
    </div>
    <div class="status-button"></div>
  </div>`
  }

  else if (newTodo.category === "work") {
    categoryWork.innerHTML += `<div class="section-task">
    <div class="merge-delete-text">
      <div class="delete-button">
        <div class="delete-button-content">-</div>
      </div>
      <div class="task-text">${newTodo.description}</div>
    </div>
    <div class="status-button"></div>
  </div>`
  }

  else  {
    categoryChill.innerHTML += `<div class="section-task">
      <div class="merge-delete-text">
      <div class="delete-button">
        <div class="delete-button-content">-</div>
      </div>
      <div class="task-text">${newTodo.description}</div>
    </div>
    <div class="status-button"></div>
  </div>`}

});
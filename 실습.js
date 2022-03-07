const todoBoard = document.querySelector("#todo-Board");

const todoInput = document.querySelector("#todo-form input");
const todoButton = document.querySelector("#todo-button");



todoButton.addEventListener("click",todoFormButton);

function todoFormButton () {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("click", todoCheck);

    const text = document.createTextNode(todoInput.value);

    const button = document.createElement("button");
    button.textContent = "X";

    button.addEventListener("click",todoDelete);
    
    
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    todoInput.value="";  
    
    
}

function todoCheck (event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        checkbox.parentNode.style.color="lightgray";
    }
    else {
        checkbox.parentNode.style.color="black";
    }
}

function todoDelete (event) {
    event.target.parentNode.remove();
}

todoBoard.appendChild("li");
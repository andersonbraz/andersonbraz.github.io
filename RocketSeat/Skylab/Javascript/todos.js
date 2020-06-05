var listElement =  document.querySelector("#listaTodos");
var inputElement =  document.querySelector("#campoTodo");
var buttonElement =  document.querySelector("#adicionaTodo");

var todos = [
    'Arrumar a Cama',
    'Escovar os Dentes',
    'Tomar Café',
    'Bater o Ponto',
    'Entrar na Daily'
];

function renderTodos(){

    listElement.innerHTML = "";

    for(todo of todos){
        
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        todoElement.setAttribute("class", "list-group-item");

        var pos = todos.indexOf(todo);

        var linkElement = document.createElement("a");
        var linkText = document.createTextNode("Excluir");

        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("class", "btn btn-outline-danger float-right");
        linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

function addTodo(){

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();

}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}

buttonElement.onclick = addTodo;

renderTodos();
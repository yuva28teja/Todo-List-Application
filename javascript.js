let todoItemContainer=document.getElementById("todo-item-container");
let addTodoButton=document.getElementById("addTodo");
/*let todoList=[
    {
        text:"Learn HTML",
        uniqueNo:1
    },
    {
        text:"Learn CSS",
        uniqueNo:2
    },
    {
        text:"Learn JavaScript",
        uniqueNo:3
    }
];*/
let todoCount=0;

function onTodoStatus(checkboxId,labelId){
    let checkboxIdEle=document.getElementById(checkboxId);
    let labelIdEle=document.getElementById(labelId);
    labelIdEle.classList.toggle('checked');
}

function onDeleteTodo(todoId){
    let todoEle=document.getElementById(todoId);
    if(todoEle){
         todoItemContainer.removeChild(todoEle);
    }
}

function createAppendItem(todo){

    let todoId='todo'+todo.uniqueNo;
    let checkboxId='checkbox'+todo.uniqueNo;
    let labelId='label'+todo.uniqueNo;

    let todoElement=document.createElement("li");
    todoElement.classList.add("input-item-container","d-flex","flex-row");
    todoElement.id=todoId;
    todoItemContainer.appendChild(todoElement);

    let inputElement=document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id=checkboxId;

    inputElement.onclick=function(){
        onTodoStatus(checkboxId,todoId);
    }

    inputElement.classList.add("input-checkbox");
    todoElement.appendChild(inputElement);

    let checkboxContainer=document.createElement("div");
    checkboxContainer.classList.add("checkbox-item","d-flex","flex-row");
    todoElement.appendChild(checkboxContainer);

    let labelCon=document.createElement("label");
    labelCon.setAttribute("for",checkboxId);
    labelCon.id=labelId;
    labelCon.classList.add("checkbox-input");
    labelCon.textContent=todo.text;
    checkboxContainer.appendChild(labelCon);

    let deleteCon=document.createElement("div");
    deleteCon.classList.add("d-flex","flex-row","justify-content-right","delete-con",);
    checkboxContainer.appendChild(deleteCon);

    let deleteIcon=document.createElement("i");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
    deleteIcon.onclick=function(){
        onDeleteTodo(todoId);
    };

    deleteCon.appendChild(deleteIcon);




}

/*for(let todo of todoList){
    createAppendItem(todo);
}*/

function onAddTodo(){
    let inputUserElement=document.getElementById("inputUser");
    let userInput=inputUserElement.value;
    if (userInput===""){
        alert("Enter Valid text");
        return;
    }
    todoCount=todoCount+1;
    let newTodo={
        text:userInput,
        uniqueNo:todoCount
    };
    createAppendItem(newTodo);
    userInput.value=" ";
}
addTodoButton.onclick=function(){
    onAddTodo();
}
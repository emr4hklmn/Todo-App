const todoContent=document.querySelector(".content")
const add=document.querySelector(".add")
const todoList=document.querySelector(".todoBar")
add.onclick=()=>{
    if(todoList.value){
    console.log("clicked")
    const newDiv=document.createElement("div")
    newDiv.classList.add("todoRow")
    todoContent.append(newDiv)
    const newTodo=document.createElement('label')
    const newCheck=document.createElement("input")
    const newBtn=document.createElement("button")
    newBtn.classList.add("newbutton")
    newBtn.innerHTML = String.fromCodePoint(0x1F5D1);
    newCheck.type="checkbox";
    newCheck.classList.add("todoCheckbox")
    newTodo.classList.add("newTodo")
    newTodo.innerText=todoList.value
    newDiv.append(newCheck,newTodo,newBtn)
    console.log(newTodo)
    todoList.value="";
    newBtn.onclick=()=>{
    if(confirm("Are you sure to delete this todo ?")){
        newDiv.remove()
    }
        
    }
}
}
  
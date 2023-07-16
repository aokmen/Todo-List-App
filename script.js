const addButton = document.querySelector("#addBtn");
const ulList = document.querySelector("#list");
const todoInput = document.querySelector("#inputText");


let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

/* ------------------------------------------------------------ */
/*                      Windows Load Event                      */
/*------------------------------------------------------------- */

window.addEventListener("load",()=>{
  takeData();
});

const takeData = () => {
  todoList.forEach(todo => {
    listsCreate(todo);
  });
};

/* ------------------------------------------------------------ */
/*                        Add Button Click                      */
/*------------------------------------------------------------- */

todoInput.onkeydown = (e) => {
  e.keyCode === 13 && addButton.click();

}

addButton.addEventListener("click", (e) => {
  if (todoInput.value === ""){
    todoInput.placeholder = "Please add a todo list...";
    // alert ("please add a todo list...");
    return;
  }
  todoInput.placeholder = "";

  const newTodo = {
    id: new Date().getTime(),
    text: todoInput.value,
    completed: false
  };

  todoList.push(newTodo);
  listsCreate(newTodo);

  /* --------------- localStorage updated ----------------- */

  localStorage.setItem("todoList",JSON.stringify(todoList))
  todoInput.value = "";
  todoInput.focus();
})

/* ------------------------------------------------------------ */
/*                     create a list function                   */
/*------------------------------------------------------------- */

const listsCreate = (newTodo) => {
  
  let {id, text, completed} = newTodo;
  const li = document.createElement("li");
  li.setAttribute("id",id);

  completed ? li.classList.add("checked") : "";

  const tik = document.createElement("i");
  tik.setAttribute("class","fas fa-check");
  li.append(tik);

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  const delIcon = document.createElement("i");
  delIcon.setAttribute("class","fas fa-trash");
  li.append(delIcon)

  ulList.append(li);
}

/* ------------------------------------------------------------ */
/*                        add ul lists Event                    */
/*------------------------------------------------------------- */


ulList.addEventListener("click", (e) => {
  let et = e.target;
  const chooseId = et.closest("li").getAttribute("id");
  /* -------------------- remove List--------------------- */

  if (et.classList.contains("fa-trash")) {
    et.parentElement.remove();
    todoList = todoList.filter((todo) => todo.id != chooseId);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    return;
  }

  /* --------------------Control CheckList --------------------- */

  if (et.classList.contains("fa-check")) {
    et.parentElement.classList.toggle("checked");
    todoList.forEach((todo) => {
      if (todo.id == chooseId) {
        todo.completed = !todo.completed;
        //- todo.completed= todo.completed ? todo.completed=true : false
      }
    });
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
});

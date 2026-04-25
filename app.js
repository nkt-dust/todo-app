const addBtn=document.getElementById("add-btn");
const input=document.getElementById("todo-input");
const list=document.getElementById("todo-list");

addBtn.addEventListener("click",function(){
    const text=input.value;
    if(text==="")return;

    const li=document.createElement("li");
    li.textContent=text;
    list.appendChild(li);
    input.value="";
});
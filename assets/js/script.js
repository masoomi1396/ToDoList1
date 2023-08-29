let todoListCounter = 0;
const addButton = document.getElementsByClassName("add")[0];
let myInput = document.getElementsByClassName("inputList")[0];
const showCounter = () => {
    document.getElementsByClassName("counter")[0].textContent = todoListCounter;
}
const showInput = (text) =>{
    myInput.value = "";
    myInput.focus();
}
const checkedList = (element)=>{
    element.classList.toggle("bg-orange-400");
}
addButton.addEventListener('click',(e)=>{
    const text = myInput.value;
    myInput.classList.add("placeholder:text-slate-300");
    myInput.classList.remove("placeholder:text-red-600");
    if ( text != "") {
        const list = createTodoList(text);
        appendChildToDoList(list);
        showInput();
        showCounter();
        console.log("heloo")
    }
    else{
        alert("Please enter something!");
        myInput.classList.remove("placeholder:text-slate-300");
        myInput.classList.add("placeholder:text-red-600");
    }
})
const createTodoList = (text) => {
    console.log("text : "+text);
    const list = document.createElement('div');
    list.innerHTML = '<div class="flex flex-nowrap justify-start space-x-2 items-center w-auto"><i class="text-slate-200 text-2xl border border-black rounded-full w-[40px] h-[40px] flex justify-center items-center hover:cursor-pointer" onclick="checkedList(this)">⎷</i><h3 class="text-lg md:text-xl text-black font-medium">'+text+'</h3></div><i class="text-2xl font-bold  bg-clip-text text-red-500 w-[20px] hover:cursor-pointer" onclick="removeElement(this)">X</i>';
    list.className = 'w-full flex flex-nowrap justify-between items-center';
    return list;
}
const appendChildToDoList = (element)=>{
    document.getElementsByClassName("todoList")[0].appendChild(element);
    todoListCounter++;
}
const removeElement = (element) => {
    console.log("Remove()")
    element.parentElement.remove();
    todoListCounter--;
    showCounter();
}
const inputBox = document.getElementById("input-box");
const taskConatiner = document.getElementById("task-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("Error! No Task written.");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

taskConatiner.addEventListener("click" , function(tap){
    if(tap.target.tagName === "LI"){
        tap.target.classList.toggle("checked");
        saveData();
    }
    else if(tap.target.tagName === "SPAN")
    {
        tap.target.parentElement.remove();
        saveData();


    }

   
},false);

function saveData(){
    localStorage.setItem("data", taskConatiner.innerHTML);
}

function showData(){
   taskConatiner.innerHTML = localStorage.getItem("data");
}
showData();


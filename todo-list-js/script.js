var input = document.getElementById("search-bar");
var listContainer =document.getElementById("list");

function addtask(){

    if ( input.value === ''){
        alert("write some task");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML= input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="delete";
        li.appendChild(span);
    }
    input.value='';
    savedata();
}

listContainer.addEventListener("click",function(e){
    if( e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    } 
});

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
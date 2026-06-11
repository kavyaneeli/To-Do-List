function addAppend(){
    const newItem = document.createElement("li");
    newItem.innerText=" Banana";
    const list = document.getElementById("shopping-list");
    list.append(newItem);
}
 function addPrepend(){
    const newItem = document.createElement("li");
    newItem.innerText ="Mango";
    const list = document.getElementById("shopping-list");
    list.prepend(newItem);
}
function addBefore(){
    const newItem = document.createElement("li");
    newItem.innerText ="Orange";
    const list = document.getElementById("shopping-list");
    list.prepend(newItem);
}

function addAfter(){
    const newItem = document.createElement("li");
    newItem.innerText ="Grapes";
    const list = document.getElementById("shopping-list");
    list.prepend(newItem);
}
function addRemove(){
    
    
    const list = document.getElementById("shopping-list");
    list.lastElementChild.remove();
}

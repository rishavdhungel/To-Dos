const titleinput = document.querySelector("#titleInput");
const discriptionInput = document.querySelector("#discriptionInput");
const inputbutton = document.querySelector(".inputbtn");
const displayContainer = document.querySelector(".displayContainer");

function rgbavalue(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let transparency = Math.random().toFixed(2);
    let randomvalue = "rgba("+red+","+green+","+blue+","+transparency+")";
    return randomvalue;
}


inputbutton.addEventListener("click", function(){

    if (titleinput.value.length > 2 && discriptionInput.value.length > 2){
        let parentitem = document.createElement('div');
        parentitem.classList.add('parentitem');
        let title = document.createElement('div');
        title.classList.add('title');
        let discription = document.createElement('div');
        discription.classList.add('discription');

        title.innerText = titleinput.value;
        discription.innerText = discriptionInput.value;
        displayContainer.appendChild(parentitem);
        parentitem.appendChild(title);
        parentitem.appendChild(discription);
        parentitem.style.backgroundColor= rgbavalue();
    }else{
        alert("You should have at least 3 character title and discription ")
    }



});
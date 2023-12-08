var section=document.getElementById("text")
var container=document.createElement("div")
container.classList.add("conteiner")
section.appendChild(container)

function get(){
    var input = document.getElementById("color-name");
    document.body.style.backgroundColor = input.value;

    var box=document.getElementById("input-color")
    box.style.color = box.value;

}


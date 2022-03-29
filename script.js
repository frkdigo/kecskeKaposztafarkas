window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}

var tomb = []; 

function init(){
    $("footer p")[0].innerHTML = "Furkó Norbert";
    for (let index = 0; index < 3; index++) {
        $("#bal img")[index].addEventListener("click", kattintas);   
        $("#bal img")[index].addEventListener("mouseover", felette);
        $("#bal img")[index].addEventListener("mouseout", alatta);

    }
}

function kattintas(){
    tomb.push(this.src);
    console.log(tomb);
}

function felette(){
    event.target.className = "kiemel"; // ezzel hivatkozunk arra az elemre,amelyik kiváltotta az eseményt
}

function alatta(){
    event.target.className = "";
}
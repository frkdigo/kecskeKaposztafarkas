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
    $("footer p")[0].style.textAlign = "center";
    $("footer p")[0].style.fontSize = "20px";
    for (let index = 0; index < 3; index++) {
        $("#bal img")[index].addEventListener("click", kattintas);   
        $("#bal img")[index].addEventListener("mouseover", felette);
        $("#bal img")[index].addEventListener("mouseout", alatta);
    }
}

function kattintas(){
    var imgtag = `<img src='${event.target.src}' alt='${event.target.alt}' class='kicsi'>`;
    tomb.push(event.target.alt); // lekérjük a képnek az src-jét.
    console.log(tomb.indexOf("kecske"));
    if(tomb.indexOf("kecske") >= 0 && tomb.indexOf("farkas") >= 0){
        alert("Helytelen választás!");
    }else{
        ID("csonak").innerHTML += imgtag;
        event.target.style.display = "none";
    }
}

function felette(){
    event.target.className = "kiemel"; // ezzel hivatkozunk arra az elemre,amelyik kiváltotta az eseményt
}

function alatta(){
    event.target.className = "";
}
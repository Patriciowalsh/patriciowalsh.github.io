

let hidetext_btn = document.getElementById("hidetext_btn");

let hidetext = document.getElementById("hidetext");

hidetext_btn.addEventListener("click", toggleText);

function toggleText() {
    hidetext.classList.toggle("show");

    if(hidetext.classList.contains("show")){
        hidetext_btn.innerHTML = "Leer Menos";
    }
    else{
        hidetext_btn.innerHTML = "Leer Más";
    }
}

alert ("Bienvenido a mi Curriculum, Disfrutalo!")


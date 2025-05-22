let inputName = document.getElementById("name");

//Pesco l'elemento dalla pagina
let form = document.getElementById("my-form");

//Con un listener resto in ascolto dell'evento al click
//del bottone submit
form.addEventListener("submit", formSubmit);

//Funzione da passare al listener
function formSubmit(event) {
    //Impedisce che l'evento sia lanciato tramite "Enter"
    event.preventDefault();
    //Stanziamo un oggetto formdata e lo assegniamo alla variabile data
    let data = new FormData(event.target);
    //Estrapoliamo dai campi di input i valori testuali
    let dataValues = Object.fromEntries(data.entries());

    let nome = data.get("name");
    let email = data.get("email");

    alert(`L'utente registrato si chiama ${nome},
             con email ${email}`);
}

// let btn = document.getElementsByClassName("btnDarkMode")[0];
let btn = $(".btnDarkMode")[0];
// btn.addEventListener("click", toggleDarkMode);
btn.on("click", toggleDarkMode);

function toggleDarkMode() {
    // let body = document.getElementsByTagName("body")[0];
    let body = $("body");

    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")) {
        // btn.innerHTML = " ☼ ";
        btn.append(" ☼ ");
    } else {
        // btn.innerHTML = " ☾ ";
        btn.append(" ☾ ");
    }


}


for (const element of listElementi) {
    let div = document.createElement("div");
    
}

let ul = document.createElement("ul");
let li = document.createElement("li");

container.on("hover", funzione)

function funzione(params) {
    body.append(ul);

    ul.append(li);
    ul.append(li);

    let secondUl = document.createElement("ul");

    ul.append(secondUl);

    secondUl.attr("class", "btn-outline-success");

    secondUl.append(li);
    secondUl.append(li);
}



let btnDM = $(".btnDarkMode");

//btnDM.addEventListener("click", () => {})
btnDM.on("click",() =>{
    $("html").toggleDarkMode();
} );










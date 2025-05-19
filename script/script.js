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

let btn = document.getElementsByClassName("btnDarkMode")[0];
btn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    let body = document.getElementsByTagName("body")[0];

    body.classList.toggle("darkMode");
    
    if (body.classList.contains("darkMode")) {
        btn.innerHTML = " ☼ ";
    }else {
        btn.innerHTML = " ☾ ";
    }
    
}


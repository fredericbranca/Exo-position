//J'ai mit des élements inutiles (pour m'entraîner)

//Constante pour simplifier l'écriture et que ce soit plus lisible
const section = document.querySelector("#page");
const conversion = section.querySelector(".conversion");

//Création élément <h1> pour le titre
var titre = document.createElement("h1");
titre.innerHTML = "Valeur en euros";
//Ajoute le titre à la div conversion
conversion.appendChild(titre);

//Création élement <div> avec id="input" puis ajoute la div dans conversion
var div = document.createElement("div");
div.id = "input";
conversion.appendChild(div);

//Création élement <input> avec class="champ" puis l'ajoute à la div créée juste avant
var form = document.createElement("input");
form.className = "champ";
div.appendChild(form);

//Création nouvelle div pour l'affichage de la conversion (sous l'input)
var div1 = document.createElement("div");
div1.id = "franc";
div1.innerHTML = "francs";
conversion.appendChild(div1);


form.addEventListener("onKeyPress", (event) => {
    div1.innerHTML = form.value + "francs";

});
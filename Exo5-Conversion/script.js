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

//Création élement <input> avec class="champ", puis l'ajoute à la div créée juste avant
const euros = document.createElement("input");
// euros.type = "number"; //alternatif pour accepter uniquement une valeur numérique
euros.min = 0.01;
euros.step = 0.01;
euros.className = "champ";
div.appendChild(euros);

//Création nouvelle div pour l'affichage en franc (sous l'input)
var franc = document.createElement("div");
franc.id = "franc";
franc.innerHTML = "francs";
conversion.appendChild(franc);

//Ajout d'un écouteur d'évènement pour mettre à jour la valeur en franc en temps réel
euros.addEventListener("input", function() {
    let euroValue = euros.value;

    //vérifie si la valeur entrée est numérique avec isNaN. La propriété globale NaN (Not a Number) est une valeur utilisée pour représenter une quantité qui n'est pas un nombre ()
    if (isNaN(euroValue)) {
        franc.textContent = "Veuillez entrer une valeur numérique";
    }
    else {
        let francValue = euroValue * 6.55957;
        franc.textContent = francValue.toFixed(2) + " francs"; //toFixed(2) pour afficher avec 2 décimales
    }
});
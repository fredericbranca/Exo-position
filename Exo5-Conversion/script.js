const section = document.querySelector("#page");
const conversion = section.querySelector(".conversion");
var titre = document.createElement("h1");
titre.innerHTML = "Valeur en euros";
conversion.appendChild(titre);
var div = document.createElement("div");
div.id = "input";
conversion.appendChild(div);
var form = document.createElement("input");
form.className = "champ";
div.appendChild(form);
var div1 = document.createElement("div");
div1.id = "franc";
div1.innerHTML = "francs";
conversion.appendChild(div1);


form.addEventListener("onKeyPress", (event) => {
    div1.innerHTML = form.value + "francs";

});
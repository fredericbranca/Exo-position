const carre = document.createElement("div") // créer une div 
carre.classList.add("carre");

const section = document.querySelector("#morpion")
const divs = section.querySelectorAll("div:not([id])")
const statut = section.querySelector("#statut")

divs.forEach(div => {
    for (var i = 1; i <= 3; i++) {
        const newCarre = carre.cloneNode(); // permet de cloner la div carre
        div.appendChild(newCarre)
    }
});


const h1 = document.createElement("h1")
const p = document.createElement("p")
h1.innerText = "Le jeu du Morpion"
p.innerText = "Joueur X peut commencer à jouer"
statut.appendChild(h1)
statut.appendChild(p)



var boxs = section.querySelectorAll(".carre")


var joueur = ["X", "O"]
var tour = 0 
var fini = false

boxs.forEach((box, index) => {
    box.addEventListener("click", function () {
      if (!fini) {
        if (box.innerText === "") {
          box.innerText = "X";
          p.innerText = "Au joueur O de jouer";
          statut.appendChild(p);
        } else {
          p.innerText = "Case occupée, c'est à vous joueur O";
          statut.appendChild(p);
        }
      } else {
        p.innerText = "test";
        statut.appendChild(p);
      }
    });
  });

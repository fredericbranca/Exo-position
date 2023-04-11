function main() {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.innerText = "Le jeu du Morpion";
  p.innerText = "Joueur X peut commencer à jouer";
  statut.appendChild(h1);
  statut.appendChild(p);

  var boxs = section.querySelectorAll(".carre");
  var joueur = ["X", "O"];
  var tour = 0;
  var fini = false;

  for (let i = 0; i < 9; i++) {

      boxs[i].addEventListener("click", function () {

        if (boxs[i].innterText === "X" || boxs[i].innterText === "O") {
          p.innerText = "Case occupée, c'est à vous joueur " + joueur[tour] + " !";
          statut.appendChild(p);
        }
        else {
          boxs[i].innerHTML = joueur[tour];

          tour++;
          tour = tour % 2;
          p.innerText = "Au joueur " + joueur[tour] + " de jouer";
          statut.appendChild(p);
        }
    })
  }
}

/* ----------------------------------------------- */

const carre = document.createElement("div")
carre.classList.add("carre");

const section = document.querySelector("#morpion")
const divs = section.querySelectorAll("div:not([id])")

const statut = section.querySelector("#statut")



divs.forEach(div => {
    for (var i = 1; i <= 3; i++) {
        const newCarre = carre.cloneNode()
        div.appendChild(newCarre)
    }
});


main()
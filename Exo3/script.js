  //vérifie si la partie est gagnante
  function statutPartie(symbolesJoueur, boxs) {
    const combinaisonsGagnantes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let symbole of symbolesJoueur) {
      for (let combinaison of combinaisonsGagnantes) {
        if (
          boxs[combinaison[0]].innerHTML === symbole &&
          boxs[combinaison[1]].innerHTML === symbole &&
          boxs[combinaison[2]].innerHTML === symbole
        ) {
          return combinaison;
        }
      }
    }
    
    return null;
  }

function main() {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.innerHTML = "Le jeu du Morpion";
  p.innerHTML = "Joueur X peut commencer à jouer";
  statut.appendChild(h1);
  statut.appendChild(p);

  var boxs = section.querySelectorAll(".carre");
  var symbolesJoueur = ["X", "O"];
  var tour = 0;
  var fini = false;

  for (let i = 0; i < 9; i++) {

      boxs[i].addEventListener("click", function () {
        
        if (fini == false) {
          //vérifie si la case a déjà été clické 
          if (boxs[i].innerHTML == symbolesJoueur[0] || boxs[i].innerHTML == symbolesJoueur[1]) {
            p.innerHTML = "Case occupée, c'est à vous joueur " + symbolesJoueur[tour] + " !";
          }
          else {
            boxs[i].innerHTML = symbolesJoueur[tour];
      
            const resultat = statutPartie(symbolesJoueur, boxs)
            if (resultat != null) {
              fini = true; 
              h1.innerHTML = "Joueur " + symbolesJoueur[tour] + " a gagné la partie !"; 
              p.innerHTML = '<a href="">Rejouer</a>';

            }
            else{
              tour++;
              tour = tour % 2;

              p.innerHTML = "Au joueur " + symbolesJoueur[tour] + " de jouer";
            }
            
            
          }
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
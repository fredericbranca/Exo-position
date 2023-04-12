function statutPartie(joueur, boxs) {

  //vérifie si la partie est gagnante
  if (boxs[0].innerHTML == joueur && boxs[1].innerHTML == joueur && boxs[2].innerHTML == joueur) {
    return fini = true;
  }
  if (boxs[3].innerHTML == joueur && boxs[4].innerHTML == joueur && boxs[5].innerHTML == joueur) {
    return fini = true;
  }
  if (boxs[6].innerHTML == joueur && boxs[7].innerHTML == joueur && boxs[8].innerHTML == joueur) {
    return fini = true;
  }
  if (boxs[0].innerHTML == joueur && boxs[3].innerHTML == joueur && boxs[6].innerHTML == joueur) {
    return fini = true;
  }
  if (boxs[1].innerHTML == joueur && boxs[4].innerHTML == joueur && boxs[7].innerHTML == joueur) {
    return fini = true;
  }
  if (boxs[2].innerHTML == joueur && boxs[5].innerHTML == joueur && boxs[8].innerHTML == joueur) {
    return fini = true;
  }
  if (boxs[0].innerHTML == joueur && boxs[4].innerHTML == joueur && boxs[8].innerHTML == joueur) {
    return fini = true;
  }
  if (boxs[2].innerHTML == joueur && boxs[4].innerHTML == joueur && boxs[6].innerHTML == joueur) {
    return fini = true;
  }
  else return fini = false;

}

function main() {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.innerHTML = "Le jeu du Morpion";
  p.innerHTML = "Joueur X peut commencer à jouer";
  statut.appendChild(h1);
  statut.appendChild(p);

  var boxs = section.querySelectorAll(".carre");
  var joueur = ["X", "O"];
  var tour = 0;
  var fini = false;

  for (let i = 0; i < 9; i++) {

      boxs[i].addEventListener("click", function () {
        
        if (fini == false) {
          //vérifie si la case a déjà été clické 
          if (boxs[i].innerHTML == joueur[0] || boxs[i].innerHTML == joueur[1]) {
            p.innerHTML = "Case occupée, c'est à vous joueur " + joueur[tour] + " !";
          }
          else {
            //choix de la case du joueur X ou O
            boxs[i].innerHTML = joueur[tour];
      
            
            fini = statutPartie(joueur[tour], section.querySelectorAll(".carre"));
            if (fini) {
              h1.innerHTML = "Joueur " + joueur[tour] + " a gagné la partie !"; 
              p.innerHTML = "ajouter clic rejouer";

            }
            else{
              tour++;
              tour = tour % 2;
              console.log(fini);

              p.innerHTML = "Au joueur " + joueur[tour] + " de jouer";
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
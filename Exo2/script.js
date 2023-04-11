const carre = document.createElement("div") // créer une div 
carre.classList.add("carre"); //class="carre"
const board = document.querySelector("#board")

for (let i = 1; i <= 4; i++) {
    const newCarre = carre.cloneNode(); // permet de cloner la div carre
    
    newCarre.innerText = i
    board.appendChild(newCarre)

    newCarre.addEventListener("click", function() {
        if(newCarre.classList.contains("clicked")) {
                newCarre.classList.remove("clicked")
        }
        else{
                newCarre.classList.add("clicked")
        }
    })
}
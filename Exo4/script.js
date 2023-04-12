function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//Instance
const block = document.createElement("div") // créer une div 
block.classList.add("block"); //class="block"
const board = document.querySelector("#board")
let nb = 225;



//méthode

document.addEventListener('keydown', (event)=> {
    if (nb > 0) {
        if (event.key === "ArrowDown") {    
            const newBlock = block.cloneNode(); // permet de cloner la div block
            newBlock.style.backgroundColor = "rgb(" + getRandomInt(256) + " ," + getRandomInt(256) + " ," + getRandomInt(256) + ")";
            newBlock.addEventListener("click", function() {
                if (nb === 0) {
                    newBlock.style.backgroundColor = "rgb(0, 0, 0)";
                }
            })
            board.appendChild(newBlock)
            nb--;
        }
    }
    if (nb <= 225) {
        if (event.key === "ArrowUp" && board.hasChildNodes()) {
            board.removeChild(board.lastChild);
            nb++;
        }
    }

   
    
    
})




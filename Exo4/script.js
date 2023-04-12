//Instance
const block = document.createElement("div") // créer une div 
block.classList.add("block"); //class="block"
const board = document.querySelector("#board")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//méthode

document.addEventListener('keydown', (event)=> {  
    if (event.key === "ArrowDown") {
        const newBlock = block.cloneNode(); // permet de cloner la div block
        newBlock.style.backgroundColor = "rgb(" + getRandomInt(256) + " ," + getRandomInt(256) + " ," + getRandomInt(256) + ")";
        console.log(newBlock.style.backgroundColor);
        board.appendChild(newBlock)
    }

    if (event.key === "ArrowUp") {
        console.log("ArrowUp");
        board.removeChild(board.lastChild);
    }
})
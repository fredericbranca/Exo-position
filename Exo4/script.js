//Instance
const block = document.createElement("div") // créer une div 
block.classList.add("block"); //class="block"
const board = document.querySelector("#board")

// const randomColor = () => {
//     let rColor = (Math.floor(Math.random() *0xFFFFFF)).toString(16);
//     document.div.style.backgroundColor = "#" + rColor;
// }

//méthode


document.addEventListener('keydown', (event)=> {  
        console.log(event); // all event related info
        const newBlock = block.cloneNode(); // permet de cloner la div block
});

document.addEventListener('keydown', (event)=> {  
    if (event.key === "ArrowDown") {
        const newBlock = block.cloneNode(); // permet de cloner la div block
        board.appendChild(newBlock)
        newBlock.classList.add("block")
        newBlock.classList.
    }
    
});

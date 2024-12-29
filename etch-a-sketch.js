// Create Empty Grid
let isMouseDown = false

let SIDE_LENGTH = 16
const BORDER_SIZE = 1;


const grid = document.querySelector("#grid");
const dimensionsButton = document.querySelector("#dimensions")

function createEmptyGrid(SIDE_LENGTH, BORDER_SIZE){
    const GRID_SIZE = grid.clientWidth;
    const CELL_SIDE_LENGTH = GRID_SIZE/SIDE_LENGTH - 2 * BORDER_SIZE;
    for (let i = 0; i < SIDE_LENGTH * SIDE_LENGTH; i++) {
        const emptySquare = document.createElement("div");
        emptySquare.setAttribute("id", `square_${i}`)
        emptySquare.classList.add("empty_square");
        emptySquare.style["width"] = `${CELL_SIDE_LENGTH}px`;
        emptySquare.style["height"] = `${CELL_SIDE_LENGTH}px`;
        grid.appendChild(emptySquare);
    }
}

createEmptyGrid(SIDE_LENGTH, BORDER_SIZE);

grid.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    let target = event.target;
    const targetSquare = document.querySelector(`#${target.id}`);
    targetSquare.style["background-color"] = "black"
    console.log(target.id)
    console.log("true")
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

grid.addEventListener("mouseover", (event) => {
    if (isMouseDown){
        let target = event.target;
        const targetSquare = document.querySelector(`#${target.id}`);
        targetSquare.style["background-color"] = "black"
        console.log(target.id)
    }
    
});

dimensionsButton.addEventListener("click", ()=> {
    SIDE_LENGTH = Number(prompt("Enter an integer between 1 and 100 for the new Dimensions"))
    if (SIDE_LENGTH >=1 && SIDE_LENGTH <= 100 && Number.isInteger(SIDE_LENGTH)){
        grid.innerHTML =  '';
        createEmptyGrid(SIDE_LENGTH, BORDER_SIZE);
    }
    else alert("Must be an integer between 1 and 100 my guy")
})
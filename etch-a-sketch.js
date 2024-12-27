// Create Empty Grid
const SIDE_LENGTH = 16;
const BORDER_SIZE = 1;
const grid = document.querySelector("#grid");

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
let isMouseDown = false

document.addEventListener("mousedown", () => {
    isMouseDown = true;
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
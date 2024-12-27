// Create Empty Grid
SIDE_LENGTH = 16;
BORDER_SIZE = 1;
function createEmptyGrid(SIDE_LENGTH, BORDER_SIZE){
    const grid = document.querySelector("#grid");
    const GRID_SIZE = grid.clientWidth;
    const CELL_SIDE_LENGTH = GRID_SIZE/SIDE_LENGTH - 2 * BORDER_SIZE;
    for (let i = 0; i < SIDE_LENGTH * SIDE_LENGTH; i++) {
        const emptySquare = document.createElement("div");
        emptySquare.classList.add("empty_square");
        emptySquare.style.width = `${CELL_SIDE_LENGTH}px`;
        emptySquare.style.height = `${CELL_SIDE_LENGTH}px`;
        grid.appendChild(emptySquare);
    }
}

createEmptyGrid(SIDE_LENGTH, BORDER_SIZE);
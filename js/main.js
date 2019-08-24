function render() {
    let mainGrid = document.querySelector(".grid-container");

    // title
    let titleDiv = document.createElement('div');
    titleDiv.classList.add("title");
    titleDiv.innerHTML = "Tic Tac Toe";

    mainGrid.append(titleDiv);

    // add grid cells
    createCell("top", "left", mainGrid);
    createCell("top", "center", mainGrid);
    createCell("top", "right", mainGrid);
    createCell("middle", "left", mainGrid);
    createCell("middle", "center", mainGrid);
    createCell("middle", "right", mainGrid);
    createCell("bottom", "left", mainGrid);
    createCell("bottom", "center", mainGrid);
    createCell("bottom", "right", mainGrid);

}

function createCell(x, y, parentDiv) {
    let newCell = document.createElement('div');
    newCell.classList.add(x + "-" + y);

    parentDiv.append(newCell);
}

render();
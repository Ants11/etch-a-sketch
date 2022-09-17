const defaultSize = 16;
const defaultColor = "default";
const grid = document.getElementById("grid");
const defaultBtn = document.getElementById("default-btn");
const clearBtn = document.getElementById("clear-btn");
const resetBtn = document.getElementById("reset-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorBtn = document.getElementById("color-btn");

let currentColor = defaultColor;

defaultBtn.addEventListener('click', function () {
    currentColor = defaultColor;
});

colorBtn.addEventListener('click', function () {
    currentColor = "color";
});

eraserBtn.addEventListener('click', function () {
    currentColor = "eraser";
});

resetBtn.addEventListener('click', function () {
    resetGrid();
});

clearBtn.addEventListener('click', function () {
    clearGrid();
})

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box");
        grid.appendChild(div);
        grid.style.height = '500px';
        grid.style.width = '500px';
        div.style.backgroundColor = 'white';
    }
    let gridBoxList = document.querySelectorAll(".grid-box");
        gridBoxList.forEach(gridBox => {
        gridBox.addEventListener("mouseover", changeColor)
    });
}

function changeColor(e) {
    if(currentColor === 'default') {
        e.target.style.backgroundColor = 'black';
    } else if(currentColor === 'color') {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    } else if(currentColor === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}

function resetGrid() {
    let resetPrompt = prompt("How many");
    if (resetPrompt == undefined || resetPrompt == null || resetPrompt == "") {
        return;
    }
    while(resetPrompt > 64) {
        resetPrompt = prompt("Incorrect, input is to over 64 or not a number");
    }
    clearGrid();
    createGrid(resetPrompt);
}

function clearGrid() {
    grid.innerHTML = '';
    createGrid(defaultSize);
}

createGrid(defaultSize);




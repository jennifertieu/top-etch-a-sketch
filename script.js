"use strict"

let gridNumber = 16;

function createGrid(number) {
    for (let i = 0; i <= number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        document.querySelector(".grid-container").appendChild(div);
    }
}

createGrid(gridNumber);
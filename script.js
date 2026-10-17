
const gridContainer = document.querySelector("#grid-container");
const resizeButton = document.querySelector("#resize-button");

const gridSize = 638;


function createGrid(numberOfSquares) {
  
    gridContainer.innerHTML = "";

    const squareSize = gridSize / numberOfSquares;

    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.dataset.interactions = "0";

        square.addEventListener("mouseenter", function () {
            let interactions = Number(square.dataset.interactions);

            if (interactions < 10) {
                interactions++;
                square.dataset.interactions = interactions;
            }

            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            square.style.backgroundColor =
                `rgb(${red}, ${green}, ${blue})`;

            const opacity = interactions / 10;
            square.style.opacity = opacity;
        });

        gridContainer.appendChild(square);
    }
}

resizeButton.addEventListener("click", function () {
    const answer = prompt(
        "Choose a box size between 1 and 100."
    );

    if (answer === null) {
        return;
    }

    const numberOfSquares = Number(answer);

    if (
        !Number.isInteger(numberOfSquares) ||
        numberOfSquares < 1 ||
        numberOfSquares > 100
    ) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(numberOfSquares);
});

createGrid(16);

const player = (name) => {
  const getName = () => name;
};

const gameBoard = (() => {
  let boardArr = new Array(9);
})();

const displayController = (() => {
  const board = document.querySelector(".game-board");
  const startButton = document.querySelector(".btn-start");
  const cells = document.querySelectorAll(".cell");
  let isInPlay = false;

  const toggleGameState = () => {
    if (!isInPlay) {
      startButton.textContent = "Restart";
      board.classList.toggle("inactive");
      isInPlay = true;
    }
  };
  // add marker on clicked cell
  const addMarker = (player) => {
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        console.log("clicked");
      });
    });
  };

  startButton.addEventListener("click", toggleGameState);

  return {
    toggleGameState,
    addMarker,
  };
})();

displayController.toggleGameState;
displayController.addMarker();

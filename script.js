const player = (name) => {
  const getName = () => name;
};

const gameBoard = (() => {})();

const displayController = (() => {
  const board = document.querySelector(".game-board");
  const startButton = document.querySelector(".btn-start");
  const toggleGameState = () => {
    const currentState = startButton.textContent.toLowerCase();
    if (currentState === "start") {
      startButton.textContent = "Restart";
      board.classList.toggle("inactive");
    }
  };
  startButton.addEventListener("click", toggleGameState);

  return {
    toggleGameState,
  };
})();

displayController.toggleGameState;

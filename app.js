const squareEl = document.querySelectorAll(".square");
const result = document.querySelector(".result");
let count = 0;

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (
      //if squareEl[a].textContent exits and squareEl[a].textContent === squareEl[b].textContent and squareEl[a].textContent === squareEl[c].textContent
      squareEl[a].textContent &&
      squareEl[a].textContent === squareEl[b].textContent &&
      squareEl[a].textContent === squareEl[c].textContent
    ) {
      console.log(squareEl[a], squareEl[b], squareEl[c]);
      //"O""O""O" || "X""X""X"
      return squareEl[a].textContent;
      //return "O" or "X" is winner
    }
  }
  return null;
}

squareEl.forEach((square) => {
  square.addEventListener("click", (e) => {
    if (square.textContent === "X" || square.textContent === "O") {
      return;
      //check filled square
    }
    count++;
    //render
    if (count % 2 !== 0) {
      square.textContent = "O";
    } else {
      square.textContent = "X";
    }
    //show the result
    const winner = checkWinner();
    if (winner) {
      console.log("Winner: " + winner);
      result.textContent = "Winner: " + winner;
    } else {
      if (count === 9) {
        result.textContent = "Draw!";
      }
    }
  });
});

/* 
    OBJECTIVE
        - show the available movements (dots)
        - allow the pieces to move
        - remove the piece when attacked, then count towards the attacker
        - track each movement in board coordinates
        - implement timer for each player per round (5 minutes)
        - reset game
    PLAN
        - use Jest for manual mock testing
        - use a 2D array template to visualize the board in JS.
        - to move the pieces, coordinate in a 2D array, flatten, then work with the grid-item DOM objects (1D array).
        - create player objects containing # of pieces & # of downpieces.
*/

import { initialPlacement } from "./initialPlacement";
import { playerBlack, playerWhite } from "./players";
import { movePiece } from "./movePiece";

var boardBox = document.getElementsByClassName("grid-item");

// board layout reference
var board = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64],
];

function pawnMove(coordinate) {
  // find index of current coordinate (not simple as using just indexOf)
  return;
}

function gameControl() {
  initialPlacement();

  var boardArr = Array.from(boardBox);

  var currentGrid = "";
  var currentPiece = "";
  var targetGrid = "";

  boardArr.forEach((grid) => {
    grid.addEventListener("click", (e) => {
      // if a piece is clicked
      if (e.target.src !== undefined) {
        currentGrid = e.target.parentNode;
        currentPiece = e.target.getAttribute("src");
      }
      // if an empty grid is clicked
      if (e.target.src === undefined && currentPiece !== "") {
        targetGrid = e.target;
        movePiece(currentPiece, currentGrid, targetGrid);
        // resets the selections to avoid creating piece at new target
        currentPiece = "";
        currentGrid = "";
        targetGrid = "";
      }
    });
  });
}

gameControl();

export { board, boardBox };

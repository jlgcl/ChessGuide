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
import { playerCheck } from "./PieceMoves/playerCheck";

var boardBox = document.getElementsByClassName("grid-item");

// board layout reference - IMPORTANT: keep the index numbers as the same as boardBox
var board = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30, 31],
  [32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47],
  [48, 49, 50, 51, 52, 53, 54, 55],
  [56, 57, 58, 59, 60, 61, 62, 63],
];

function gameControl() {
  initialPlacement();

  var boardArr = Array.from(boardBox);

  // currentGrid (origin) & targetGrid (target)
  var currentGrid = "";
  var currentPiece = "";
  var targetGrid = "";
  var turn = "white";
  // turn black
  boardArr.forEach((grid) => {
    grid.addEventListener("click", (e) => {
      // if a piece is clicked & currentPiece is not yet defined
      if (e.target.src !== undefined && currentPiece === "") {
        currentGrid = e.target.parentNode;
        currentPiece = e.target.getAttribute("src");

        // TURN CHECKER checks if the piece is black (if & else if important in this case)
        if (
          (playerCheck(currentPiece) && turn === "white") ||
          (!playerCheck(currentPiece) && turn === "black")
        ) {
          currentPiece = "";
          if (playerCheck(currentPiece)) turn = "white";
          if (playerCheck(currentPiece)) turn = "black";
        } else if (
          (playerCheck(currentPiece) && turn === "black") ||
          (!playerCheck(currentPiece) && turn === "white")
        ) {
          if (playerCheck(currentPiece)) turn = "white";
          else if (!playerCheck(currentPiece)) turn = "black";
        }
      }

      // if a piece is clicked & currentPiece is already defined
      else if (e.target.src !== undefined && currentPiece !== "") {
        targetGrid = e.target.parentNode;
        //console.log(currentGrid, currentPiece, targetGrid);
        movePiece(currentPiece, currentGrid, targetGrid);
        currentPiece = "";
        currentGrid = "";
        targetGrid = "";
      }
      // if an empty grid is clicked
      if (e.target.src === undefined && currentPiece !== "") {
        targetGrid = e.target;
        //console.log(currentGrid, currentPiece, targetGrid);
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

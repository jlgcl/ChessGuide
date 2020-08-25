// method to find index of the DOM indices in the 2D board reference array (board)
// to be used as index for boardArray
export function indexFinder(board, index) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === index) {
        return { i, j };
      }
    }
  }
}

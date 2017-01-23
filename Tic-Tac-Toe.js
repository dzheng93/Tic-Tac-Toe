var rowConflict = function() {
  for (var i = 0; i < board.length; i++) {

  }
}


var startGame = function() {
  // instantiate board with all null's, meaning none are placed yet
  // o === o
  // x === x
  var winner;
  var finished = false;
  var currentPlayer = player1;
  var board = [];
  for (var i = 0; i < 3; i++) {
    board.push(Array(3).fill(null));
  }

  // assign players & show whether or not it player 1 or player 2's turn.
  var player1;
  var player2;

  while (finished === false) {
    var currentRow = prompt('Pick the row you would like to place your move, first row starts at 0', '0');
    var currentColumn = prompt('Pick the column you would like to place your move, first column starts at 0', '0');
    if (currentPlayer = player1) {
      board[parseInt(currentRow)][parseInt(currentColumn)] = 'x';
      currentPlayer = player2;
      console.log('Board status - ', board);
      continue;
    }
    if (currentPlayer = player2) {
      board[parseInt(currentRow)][parseInt(currentColumn)] = 'o';
      currentPlayer = player1;
      console.log('Board status - ', board);
      continue;
    }
    // check for row/column/diagonal conflicts for o's & x's to see if there is a winner after each turn.
      // if any conflicts, set finished === true; return player as winner.
  }
  alert(`We have a winner, congrats ${winner}!!`);
};
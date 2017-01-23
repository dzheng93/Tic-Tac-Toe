
var startGame = function() {
  // instantiate board with all null's, meaning none are placed yet
  // o === o
  // x === x
  var board = [];
  for (var i = 0; i < 3; i++) {
    board.push(Array(3).fill(null));
  }

  // show whether or not it player 1 or player 2's turn.
  var player1 = prompt('Enter player 1 name', 'player1');
  var player2 = prompt('Enter player 2 name', 'player2');

  // add an eventhandler on each spot inside the board, to detect what spot was filled up.

// check for row/column/diagonal conflicts for o's & x's to see if there is a winner after each turn.
};
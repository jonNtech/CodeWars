// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!






function rps(p1, p2) {
  if (p1 === p2) {
    return 'Draw!'
  } else if ((p1.toLowerCase() === 'rock' && p2.toLowerCase() === 'scissors') 
             || (p1.toLowerCase() === 'paper' && p2.toLowerCase() === 'rock') 
             || (p1.toLowerCase() === 'scissors' && p2.toLowerCase() === 'paper')) {
    return 'Player 1 won!'
  } else{
    return 'Player 2 won!'
  }
}

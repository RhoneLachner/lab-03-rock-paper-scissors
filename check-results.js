export { checkResults };


function checkResults(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'rock' && computer === 'scissors') { 
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }
}


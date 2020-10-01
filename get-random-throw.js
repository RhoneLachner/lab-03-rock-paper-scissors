export function getRandomThrow() {
    const computerRandom = Math.floor(Math.random() * 3);

    let landedOn;
    
    if (computerRandom === 1) {
        landedOn = 'rock!';
    } else if 
    (computerRandom === 2) {
        landedOn = 'paper!';
    } else {
        landedOn = 'scizzors!';
    }
            
    return landedOn;
}



//checkResult; 

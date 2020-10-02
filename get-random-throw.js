export function getRandomThrow() {
    const computerRandom = Math.ceil(Math.random() * 3);

    let landedOn;
    
    if (computerRandom === 1) {
        landedOn = 'rock';
    } 
 
    if(computerRandom === 2) {
        landedOn = 'paper';
    } 
     if(computerRandom === 3){
     landedOn = 'scissors';
    }
            
    return landedOn;
}



//checkResult; 

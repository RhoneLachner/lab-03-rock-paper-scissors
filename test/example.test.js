// IMPORT MODULES under test here:
import { getRandomThrow  } from '../get-random-throw.js';
import { checkResults  } from '../check-results.js';

const test = QUnit.test;

test('computer random will return landed on variable with R P or S.', (expect) => {

    const actual = getRandomThrow();
    expect.equal(typeof actual, 'string');

    //Arrange
    // Set up your arguments and expectations
   
    //Act 
    // Call the function you're testing and set the result to a const
 

    //Expect
    // Make assertions about what is expected versus the actual result
  
});
test('if player chooses rock and computer chooses paper return lose', (expect) => {

    
    const player = 'rock';
    const computer = 'paper'
    const expected = 'lose'
    const actual = checkResults(player, computer);
    expect.equal(actual, expected);

    //Arrange
    // Set up your arguments and expectations
   
    //Act 
    // Call the function you're testing and set the result to a const
 

    //Expect
    // Make assertions about what is expected versus the actual result
  
});

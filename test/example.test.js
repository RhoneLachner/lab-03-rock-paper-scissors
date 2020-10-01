// IMPORT MODULES under test here:
import { getRandomThrow } from '../get-random-throw.js';

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

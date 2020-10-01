# lab-03-rock-paper-scissors


/* Learning Objectives
Use styled radio buttons to get user input in mutually-exclusive situations
Maintain global state of total wins and losses.
Show global state in the DOM.
Write, test and use a function to generate a rock, paper, scissors throw for the computer player.
Write, test and use a function to figure out if a user's throw beats the compuet's throw.
*/


STATE: 
total wins
total losses
user draw


VIEW of state (HTML):
--Divs with three radio buttons (rock, paper, scizzors) 
--Submit button

--span text content with win or lose results 
--span text content with how many wins out of three
--span text content with turns remaining

FUNCTIONS needed(app.JS):
set variables for rock paper and scizzors in DOM equal to their html elements
set variable for selectButton equal to its element in DOM

create event listener for selectButton

create randomized throw function (get-random-throw.js)

determine if user won! - compare user choice to randomized choice:
set const turnWin variable and turnLose variable in function with if else statement comparing randomized choice to computer choice in four scenarios


// set let variables for userWinsGame and userLosesGame, counting how many turnWins are made ( > 2 /3???)

EVENT LISTENER:
compare user choice to random choice, and determine if they have won or lost round

print text to page in HTML Span element saying if they have won or lost round

// Count how many choices they have left out of 3

print how many choices they have left in HTML span element

if 0 turns remaining, count how many wins out of three to see if they have won or lost game. 

print to HTML span element if they have won or lost game.


TEST:
win round and lose round functions

R P or C??



// win game or lose game functions

// choices remaining out of 3 function





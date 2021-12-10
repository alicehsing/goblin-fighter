import { renderGoblin } from './render-utils.js';

// import functions and grab DOM elements
const defeatedNUmberEl = document.querySelector('#defeated-number');
// const defeatedListEl = document.querySelector('.defeated-list');
const playerHPEl = document.querySelector('#player-hp');
const playerImgEl = document.querySelector('#player-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblin-list');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;
const goblins = [
    { name: 'Riokz', hp: 2 },
    { name: 'Madflab', hp: 4 },
    { name: 'Dugu', hp: 3 }
];

// set event listeners 
// New goblin form
// On Submit . . .
//User has supplied a name and submitted the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = new FormData(form);
    // make a new goblin with user input
    const goblinName = data.get('goblin-name');
    // Make a new goblin object with that user input
    const newGoblin = {
        name: goblinName,
        HP: Math.ceil(Math.random() * 4)
    };
    // - Add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});

function displayGoblins() {
   //"update a list"
    // clear out the list DOM
    goblinListEl.textContent = '';
    // loop through the goblins
    for (let goblin of goblins) {
      // render a new goblin DOM element for each item
        const eachGoblinEl = renderGoblin(goblin);
        // make each goblin element clickable if it has an hp > 0
        if (goblin.hp > 0) {
            eachGoblinEl.addEventListener('click', () => {
            //possibly decrement this goblin's HP
                if (Math.random() < 0.33) {
                    goblin.hp--;
                    alert('You hit ' + goblin.name + '!');
                } else {
                    alert('You missed ' + goblin.name + '!');
                }
              //possibly decrement player HP
                if (Math.random() < 0.5) {
                    playerHP--;
                    alert(goblin.name + ' hit you' + '!');
                } else {
                    alert(goblin.name + ' failed to hit you' + '!');
                }
              //possibly increment defeatedGoblins
                if (goblin.hp === 0) {
                    defeatedGoblinsCount++;
                }

                if (playerHP === 0) {
                    alert('Game Over' + ' You lose' + '!');
                    playerImgEl.classList.add('game-over');
                }
                // update the DOM with new goblin, player, and defeated goblin state. 
                playerHPEl.textContent = playerHP;
                defeatedNUmberEl.textContent = defeatedGoblinsCount;
                displayGoblins();
            });
        }
       
        // append the 
        goblinListEl.append(eachGoblinEl);
    }
}

displayGoblins();


// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const defeatedNUmberEl = document.querySelector('#defeated-number');
const defeatedListEl = document.querySelector('.defeated-list');
const playerHPEl = document.querySelector('#player-hp');
const playerImgEl = document.querySelector('#player-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblin-list');
// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;
const goblins = [
    { name: 'Riokz', hp: 2 },
    { name: 'Madflab', hp: 3 },
];
// set event listeners 
// new goblin form
// user has supplied a name and submitted the form; on Submit...
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');
    // make a new goblin object with that user input
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 3)
    };
    // create a new goblin with a random default name if none is provided and add them to the page
    if (newGoblin.name === '') {
        const randomName = ['Sharx', 'Duzz', 'Hokoiszea', 'Ponzu', 'Khinkea', 'Tamif'];
        let i = Math.floor(Math.random() * 5);
        newGoblin.name = randomName[i];
    }
    // add that object to the array of goblins in state
    goblins.push(newGoblin);
    displayGoblins();
});

function displayGoblins() {
   // "update a list"
    // clear out the list DOM
    goblinListEl.textContent = '';
    // loop through the goblins
    for (let goblin of goblins) {
      // render a new goblin DOM element for each item
        const eachGoblinEl = renderGoblin(goblin);
        // make each goblin element clickable if it has an hp > 0
        if (goblin.hp > 0) {
            eachGoblinEl.addEventListener('click', () => {
              // possibly decrement this goblin's HP
                if (Math.random() < 0.33) {
                    goblin.hp--;
                    alert('You hit ' + goblin.name + '!');
                } else {
                    alert('You missed ' + goblin.name + '!');
                }
              // possibly decrement player HP
                if (Math.random() < 0.5) {
                    playerHP--;
                    alert(goblin.name + ' hit you' + '!');
                } else {
                    alert(goblin.name + ' failed to hit you' + '!');
                }
              // possibly increment defeatedGoblins
                if (goblin.hp === 0) {
                    defeatedGoblinsCount++;
                    alert(`You have killed ${goblin.name}! Great job!`);
                    // add defeated goblin to the defeated list
                    defeatedListEl.append(eachGoblinEl);
                    // stretch goal: change the player image to something stronger-looking every time they hit a new threshold (killed first goblin etc.)
                    playerImgEl.classList.add('player-killed-one');
                    playerImgEl.src = './assets/warrior-b.webp';
                    if (defeatedGoblinsCount === 2) {
                        playerImgEl.classList.add('player-killed-two');
                        playerImgEl.src = './assets/warrior-d.webp';
                    }
                    if (defeatedGoblinsCount === 3) {
                        playerImgEl.classList.add('player-killed-three');
                        playerImgEl.src = './assets/warrior-c.webp';
                    }
                    if (defeatedGoblinsCount === 4) {
                        playerImgEl.classList.add('player-killed-four');
                        playerImgEl.src = './assets/warrior-e.webp';
                    }
                }
                // when user's HP is 0, launch a game over message
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
        
        goblinListEl.append(eachGoblinEl);
    }
}

displayGoblins();


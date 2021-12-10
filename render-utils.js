export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('img');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');
    faceEl.classList.add('goblin-img');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = `HP: ${goblinData.hp < 0 ? 0 : goblinData.hp}`;
    faceEl.src = '../assets/goblin.webp';

     //render defeated goblins
    if (goblinData.hp === 0) {
        goblinEl.classList.add('dead');
    }
    // append that element to the HTML
    goblinEl.append(nameEl, faceEl, hpEl);
    return goblinEl;
}

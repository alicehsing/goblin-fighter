# HTML Setup

A 'destination' for:

- player HP (left of the page)
- list of living goblins (right of the page)
    for each goblin show:
      their name
      their HP
- defeated goblins (top let of the page)

## Initial State
- player HP: 10
- goblins=[{name: 'Jolly', HP: 3 }, {}, {}]
-defeatedGoblins = 0
### Clickables

- Each goblin is clickable
  On click . . .
  // if / else
  - possibly decrement this goblin's HP
  - possibly decrement player HP
  - possibly increment defeatedGoblins
  - update the DOM with new goblin, player, and defeated goblin state. (render defeated goblins differently)

- New goblin form
  On Submit . . .
  - User has supplied a name and submitted the form
  - Make a new goblin object with that user input
  - Add that object to the array of goblins in state
  - "update a list"
        clear out the list DOM
        loop through the goblins
        render a new goblin DOM element for each item
        append that element to the HTML

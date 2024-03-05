A simple adventure game by Dexter based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Castle, Church, Dungeon, Market
- **2+ scenes *not* based on `AdventureScene`**: GoodEnding and BadEnding
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: addNorth() adds the up pointing emoji and takes a scene as a parameter so I can choose what scene the up button goes to
    - Enhancement 2: createBob places bob in the middle of the scene for each scene.

Experience requirements:
- **4+ locations in the game world**: InsideCastle, Village, Dark Forest, Market
- **2+ interactive objects in most scenes**: 
    - In the Market scene you can interact with the Merchant and also click on the right arrow
    - Dark Forest has the left arrow and a key you an pick up!
- **Many objects have `pointerover` messages**: 
    - Hovering over the King when you don't have the key he says welcome to my kingdom
    - Merchant says "looking for the princess hmm" 
- **Many objects have `pointerdown` effects**: 
    - Clicking on the King makes him ask you for help and gives you clues on where the princess might be
    - Merchant, gives you clues as to where the princess is when you click on it. 
- **Some objects are themselves animated**: 
    - Villager is moving left and right to simulate a busy working person
    - King is nervous and anxious about his daughers whereabouts so is pacing around the castle.

Asset sources:
- All pictures where generated my ai using https://creator.nightcafe.studio/studio 

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
- `dextergame.js` was created by Dexter Zhang based off of Adam Smith's game.js

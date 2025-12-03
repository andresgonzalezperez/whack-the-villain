# WHACK THE VILLAIN

Link game 

![Logo](/whack-the-villain/images/logo_resized.png)

## Description
Whack the Villain is a Spider-Man themed game where players must hit villains as they appear from random holes. The objective is to score as many points as possible by clicking on villains. However, if the player accidentally hits Aunt May, the game ends immediately. The final score is calculated based on the number of villains successfully hit before the game over.

## MVP
- Start screen with game title and start button  
- Game screen with score counter and 2x2 grid of holes  
- Random spawning of villains and Aunt May (80% villains, 20% Aunt May)  
- Click interaction: villains increase score, Aunt May ends the game  
- Game Over screen showing final score  
- Input field to save player name and score  
- High scores list (top 3) stored in localStorage  
- Restart button to play again  
- Background music toggle button with icon change  

## Backlog
- Difficulty progression (spawn delay decreases as score increases)  
- More characters (heroes and different villains)  
- Responsive design for mobile devices  
- Pause button functionality  
- Animations for score increase or game over  
- Leaderboard with more than 3 scores  
- Option to clear high scores  
- Different sound effects for each villain  

## Data structure  
### Classes  
- **Character**  
  - Properties: `name`, `imagePath`, `isVillain`  
  - Method: `createElement()` → returns `<img>` element  

- **AuntMay extends Character**  
  - Constructor sets name, image, and `isVillain = false`  

- **Villain extends Character**  
  - Constructor sets name, image, and `isVillain = true`  

- **Game**  
  - Properties: DOM elements, score, interval, spawnDelay, villains, AuntMay, holes, music, webSound, highScores  
  - Methods:  
    - `showScreen(target)` → switch between views  
    - `prepareGrid(count)` → create holes  
    - `start()` → initialize game  
    - `gameLoop()` → main loop with interval  
    - `spawnCharacter()` → spawn villain or Aunt May  
    - `end()` → stop game and show Game Over screen  
    - `saveScore()` → save score to localStorage  
    - `renderHighScores()` → display top scores  
    - `restart()` → reset to start screen  

---

## States y States Transitions  
- **Start Screen (`#game-intro`)**  
  - Transition: click "Start Game" → Game Screen  

- **Game Screen (`#game-container`)**  
  - Transition: click Aunt May → Game Over  
  - Transition: timer ends or player loses → Game Over  

- **Game Over Screen (`#game-end`)**  
  - Transition: click "Restart" → Start Screen  

---

## Task  
Order of priority:  
1. Build HTML structure with start, game, and end screens  
2. Style screens with CSS (backgrounds, buttons, grid)  
3. Implement `Character` and subclasses in `character.js`  
4. Implement `Game` class logic in `game.js`  
5. Add event listeners in `script.js`  
6. Add scoring system and localStorage high scores  
7. Integrate background music and sound effects  
8. Polish UI (animations, cursor, responsive design)  
9. Test and debug  

---

## Links  
- Slides Link  
- Github repository [Link](https://github.com/andresgonzalezperez/whack-the-villain.git)
- Deployment Link  
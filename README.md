# WHACK THE VILLAIN

Linnk game 

Logo

## Description
Whack the Villain is a Spider-Man themed game where players must hit villains as they appear from random holes. The objective is to score as many points as possible by clicking on villains. However, if the player accidentally hits Aunt May, the game ends immediately. The final score is calculated based on the number of villains successfully hit before the game over.

## MVP
- Start screen with game title and Start button.
- Game screen with score display and grid of holes.
- Villains appear randomly in holes with 80% probability.
- Aunt May appears occasionally; clicking her ends the game.
- Clicking villains increases the score.
- Spider-web cursor active during gameplay.
- Sound effect when hitting a character.
- Background music toggle button.
- Game Over screen with final score and Restart button.

## Backlog
- Add more character types (heroes, neutrals).
- Implement difficulty scaling (villains appear faster as score increases).
- Add animations or visual effects when hitting villains.
- Track high scores locally with player names.
- Improve UI with dynamic backgrounds or parallax effects.
- Add boss fights or special events after reaching certain scores.

## Data structure
### Classes
**Character**
- `constructor(name, imagePath, isVillain)`
- `createElement()`

**AuntMay**
- Extends `Character` with fixed name and image.

**Villain**
- Extends `Character` with villain flag.

**Game**
- Properties:
  - `startScreen`, `container`, `endScreen`, `gameScreen`
  - `startBtn`, `restartBtn`
  - `scoreElement`, `finalScoreElement`
  - `villains`, `auntMay`
  - `holes`, `musicBtn`, `musicIcon`, `music`
  - `score`, `interval`, `spawnDelay`, `isPlayingMusic`
- Methods:
  - `showScreen(target)`
  - `prepareGrid(count)`
  - `start()`
  - `gameLoop()`
  - `spawnCharacter()`
  - `end()`
  - `restart()`

## States y States Transitions
- **Start Screen** → shown at the beginning, player clicks "Start Game".
- **Game Screen** → score is tracked, villains and Aunt May appear randomly.
- **Game Over Screen** → triggered when Aunt May is clicked, shows final score and Restart button.
- Transition flow:  
  `Start Screen → Game Screen → Game Over Screen → Start Screen (via Restart)`

## Task
1. Build HTML structure with three screens.
2. Style screens with CSS (backgrounds, buttons, grid).
3. Implement `Character` class and subclasses (`AuntMay`, `Villain`).
4. Implement `Game` class with core logic (start, loop, spawn, end, restart).
5. Add event listeners for Start and Restart buttons.
6. Add sound effects and background music toggle.
7. Test gameplay loop and scoring.
8. Polish UI and animations.

## Links
- **Slides**: Link
- **Github repository**: Link
- **Deployment**: Link


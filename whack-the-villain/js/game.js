class Game {
  constructor() {

    // DOM elements
    this.startScreen = document.getElementById("game-intro");
    this.container = document.getElementById("game-container");
    this.endScreen = document.getElementById("game-end");
    this.gameScreen = document.getElementById("game-screen");
    this.startBtn = document.getElementById("start-btn");
    this.restartBtn = document.getElementById("restart-btn");
    this.scoreElement = document.getElementById("score");
    this.finalScoreElement = document.getElementById("final-score");

    // Initial situation
    this.score = 0;
    this.interval = null;
    this.spawnDelay = 1000;

    // Characters
    this.villains = [
      new Villain("Villain1", "images/villain1.png"),
      new Villain("Villain2", "images/villain2.png"),
      new Villain("Villain3", "images/villain3.png"),
    ];
    this.auntMay = new AuntMay();

    // Holes
    this.prepareGrid(4);
    
    // Music 
    this.musicBtn = document.getElementById("music-btn");
    this.musicIcon = document.getElementById("music-icon");
    this.music = new Audio("assets/spiderman-theme.mp3");
    this.music.loop = true;
    this.music.volume = 0.2; 
    this.isPlayingMusic = false;

    // Music button action
    this.musicBtn.addEventListener("click", () => {
      if (this.isPlayingMusic) {
        this.music.pause();
        this.isPlayingMusic = false;
        this.musicIcon.src = "images/speaker-off.png";
      } else {
        this.music.play();
        this.isPlayingMusic = true;
        this.musicIcon.src = "images/speaker-on.png";
      }
    });
  }

  // Show the screen we want
  showScreen(target) {
    this.startScreen.style.display = "none";
    this.container.style.display = "none";
    this.endScreen.style.display = "none";
    target.style.display = "block";
  }

  // Create holes
  prepareGrid(count) {
    this.gameScreen.innerHTML = "";
    this.holes = [];
    for (let i = 0; i < count; i++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      this.gameScreen.appendChild(hole);
      this.holes.push(hole);
    }
  }

  // Start the game
  start() {
    this.score = 0;
    this.spawnDelay = 1000;
    this.scoreElement.textContent = this.score;
    this.showScreen(this.container);
    this.container.classList.add("game-active"); // Activate spider-web cursor
    this.gameLoop();
  }

  // Principal loop
  gameLoop() {
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => this.spawnCharacter(), this.spawnDelay);
  }

  // Generate a character
  spawnCharacter() {
    this.holes.forEach(h => (h.innerHTML = ""));

    const hole = this.holes[Math.floor(Math.random() * this.holes.length)];
    const isVillain = Math.random() < 0.8; // 80% probability that a villain will appear
    const character = isVillain && this.villains[Math.floor(Math.random() * this.villains.length)] || this.auntMay;

    const el = character.createElement();
    let clicked = false;

    el.addEventListener("click", () => {
      if (clicked) return;
      clicked = true;
      const webSound = new Audio("assets/spider-web-sound.wav"); // Add sound to the spider-web courser when its clicked
      webSound.play();
      webSound.volume = 0.2;

      if (character.isVillain) {
        this.score++;
        this.scoreElement.textContent = this.score;
      } else {
        this.end();
      }

      setTimeout(() => {
        if (el.parentElement) el.parentElement.innerHTML = "";
      }, 100);
    });

    hole.appendChild(el);

    setTimeout(() => {
      if (!clicked && el.parentElement) el.parentElement.innerHTML = "";
    }, 1500);
  }

  // Game over
  end() {
    clearInterval(this.interval);
    this.finalScoreElement.textContent = this.score;
    this.showScreen(this.endScreen);
    this.container.classList.remove("game-active"); // Disable spider-web cursor
  }

  // Restart
  restart() {
    this.showScreen(this.startScreen);
  }
}


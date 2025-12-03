window.addEventListener("load", () => {
  const game = new Game();
  
  game.startBtn.addEventListener("click", () => game.start());
  game.restartBtn.addEventListener("click", () => game.restart());
});

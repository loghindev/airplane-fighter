function hideHomeComponents() {
  const homePanel = document.getElementById("home");
  const settingsPanel = document.getElementById("settings");
  homePanel.classList.add("hide-home");
  settingsPanel.classList.add("hide-settings");
}

function handleStartGame() {
  const playButton = document.getElementById("playButton");
  playButton.addEventListener("click", () => {
    hideHomeComponents();
    setTimeout(() => {
      window.location.href = "/pages/game.html";
    }, 800);
  });
}

export default handleStartGame;

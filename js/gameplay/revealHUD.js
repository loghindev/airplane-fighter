function revealHUD() {
  const bottomPanel = document.querySelector("#hud .bottom-panel");
  const topPanel = document.querySelector("#hud .top-panel");
  bottomPanel.classList.add("reveal-bottom-panel");
  topPanel.classList.add("reveal-top-panel");
}

export default revealHUD;

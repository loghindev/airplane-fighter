import { bgPreview } from "../settings/selectBackground.js";

function loadBackground() {
  const source = localStorage.getItem("bg") || "/assets/backgrounds/purple.png";
  bgPreview.src = source;
  document.body.style.backgroundImage = `url(${source})`;
}

export default loadBackground;

let backgroundY = 0;

function moveBackground() {
  backgroundY += 0.6;
  document.body.style.backgroundPositionY = backgroundY + "px";
  requestAnimationFrame(moveBackground);
}

export default moveBackground;

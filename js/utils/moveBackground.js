function moveBackground() {
  let backgroundY = 0;
  function moveUp() {
    backgroundY += 0.6;
    document.body.style.backgroundPositionY = backgroundY + "px";
    requestAnimationFrame(moveUp);
  }
  moveUp();
}

export default moveBackground;

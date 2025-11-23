function loadBackground() {
  const source = localStorage.getItem("bg") || "/assets/backgrounds/purple.png";
  const bgPreview = document.querySelector("#settings .backgrounds img:nth-child(2)");
  if (bgPreview) {
    bgPreview.src = source;
  }
  document.body.style.backgroundImage = `url(${source})`;
}

export default loadBackground;

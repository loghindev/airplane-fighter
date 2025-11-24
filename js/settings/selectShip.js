import { ships } from "../../main.js";
export const shipPreview = document.querySelector("#settings .ship-colors img:nth-child(2)");
export const homeShip = document.querySelector("#home img");
let shipType = localStorage.getItem("shipType") || 0;
let colorIndex = localStorage.getItem("colorIndex") || 0;

function updatePreviews() {
  const source = ships[shipType][colorIndex];
  localStorage.setItem("ship", source);
  shipPreview.src = source;
  homeShip.src = source;
}

function handleTypes() {
  const typesParent = document.querySelector("#settings .types");
  typesParent.addEventListener("click", (event) => {
    if (event.target.matches(".types")) return;
    [...typesParent.children].forEach((type) => type.classList.remove("selected"));
    event.target.classList.add("selected");
    shipType = event.target.textContent.split(" ")[1] - 1;
    localStorage.setItem("shipType", shipType);
    updatePreviews();
  });
}

function handleColors() {
  const prevBtn = document.querySelector("#settings .ship-colors img:first-child");
  const nextBtn = document.querySelector("#settings .ship-colors img:last-child");

  prevBtn.addEventListener("click", () => {
    --colorIndex;
    if (colorIndex < 0) colorIndex = ships[shipType].length - 1;
    localStorage.setItem("colorIndex", colorIndex);
    updatePreviews();
  });

  nextBtn.addEventListener("click", () => {
    ++colorIndex;
    if (colorIndex > ships[shipType].length - 1) colorIndex = 0;
    localStorage.setItem("colorIndex", colorIndex);
    updatePreviews();
  });
}

function selectShip() {
  handleTypes();
  handleColors();
}

export default selectShip;

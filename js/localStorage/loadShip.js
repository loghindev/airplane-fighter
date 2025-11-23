import { ships } from "../../main.js";
import { shipPreview, homeShip } from "../settings/selectShip.js";

function loadShip() {
  const types = document.querySelectorAll("#settings .types span");
  const shipType = localStorage.getItem("shipType") || 0;
  const colorIndex = localStorage.getItem("colorIndex") || 0;
  const activeType = document.querySelector(
    `#settings .types span:nth-child(${Number(shipType) + 1})`
  );
  const source = ships[shipType][colorIndex];
  shipPreview.src = source;
  homeShip.src = source;
  types.forEach((type) => type.classList.remove("selected"));
  activeType.classList.add("selected");
}

export default loadShip;

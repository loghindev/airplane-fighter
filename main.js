import fetchPath from "./js/utils/fetchPath.js";
import loadBackground from "./js/localStorage/loadBackground.js";
import selectBackground from "./js/settings/selectBackground.js";
import selectShip from "./js/settings/selectShip.js";
import loadShip from "./js/localStorage/loadShip.js";

const path = await fetchPath();
export const ships = path.ships;
export const backgrounds = path.backgrounds;

// load assets from localStorage (if exists)
// localStorage.clear();

loadShip();
loadBackground();

// select assets from settings tab
selectShip();
selectBackground();

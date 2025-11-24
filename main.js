import fetchPath from "./js/utils/fetchPath.js";
import loadBackground from "./js/localStorage/loadBackground.js";
import selectBackground from "./js/settings/selectBackground.js";
import selectShip from "./js/settings/selectShip.js";
import loadShip from "./js/localStorage/loadShip.js";
import resetDefaultPreset from "./js/utils/resetDefaultPreset.js";
import handleStartGame from "./js/utils/handleStartGame.js";
import disableDraggables from "./js/utils/disableDraggables.js";

const path = await fetchPath();
export const ships = path.ships;
export const backgrounds = path.backgrounds;

disableDraggables();
// load assets from localStorage (if exists)
// localStorage.clear();

loadShip();
loadBackground();

// handle select assets from settings tab
selectShip();
selectBackground();

// handle restore default preset in settings tab
resetDefaultPreset();

// handle start game
handleStartGame();

import controlShip from "./gameplay/controlShip.js";
import revealShip from "./gameplay/revealShip.js";
import loadBackground from "./localStorage/loadBackground.js";
import disableDraggables from "./utils/disableDraggables.js";
import loader from "./utils/loader.js";

// load background preset
loadBackground();
disableDraggables();

// handle loader (async)
// await loader();
revealShip();
controlShip();

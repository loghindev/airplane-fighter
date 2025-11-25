import controlShip from "./gameplay/controlShip.js";
import revealShip from "./gameplay/revealShip.js";
import loadBackground from "./localStorage/loadBackground.js";
import disableDraggables from "./utils/disableDraggables.js";
import loader from "./utils/loader.js";
import moveBackground from "./utils/moveBackground.js";

// load background preset
loadBackground();
disableDraggables();

// start moving background animation
moveBackground();

// handle loader (async)
await loader();
// localStorage.clear();
revealShip();
controlShip();

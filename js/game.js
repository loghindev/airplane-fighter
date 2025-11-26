import controlShip from "./gameplay/controlShip.js";
import revealHUD from "./gameplay/revealHUD.js";
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

// load game (async)
// await loader();
revealHUD();
revealShip();
controlShip();

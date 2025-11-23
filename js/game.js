import revealShip from "./gameplay/revealShip.js";
import loadBackground from "./localStorage/loadBackground.js";
import loader from "./utils/loader.js";

// load background preset
loadBackground();

// handle loader (async)
await loader();
revealShip();

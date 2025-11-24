// revealing ship from bottom after the loading bar is complete
function revealShip() {
  const ship = document.getElementById("ship");
  ship.src = localStorage.getItem("ship") || "/assets/ships/playerShip1_blue.png";

  ship.classList.add("reveal-ship");
}

export default revealShip;

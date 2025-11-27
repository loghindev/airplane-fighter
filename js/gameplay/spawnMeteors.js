import fetchPath from "../utils/fetchPath.js";
const path = await fetchPath();
const meteors = path.meteors;
let meteorsInterval = null;

function createMeteor() {
  const meteorsContainer = document.querySelector(".meteors-container");
  const newMeteor = document.createElement("img");
  newMeteor.classList.add("meteor");
  newMeteor.style.left = `${Math.random() * 100}%`;
  newMeteor.src = meteors[Math.floor(Math.random() * meteors.length)];
  meteorsContainer.appendChild(newMeteor);
  return newMeteor;
}

function moveMeteor(meteor, speed) {
  let y = parseInt(window.getComputedStyle(meteor).top.split("p")[0]);
  console.log(speed);
  function moveDown() {
    y += speed;
    meteor.style.top = y + "px";
    if (y < window.innerHeight - 100) {
      requestAnimationFrame(moveDown);
    }
  }
  moveDown();
}

function spawnMeteros() {
  const delay = Math.random() * 2000 + 500;
  const meteor = createMeteor();
  moveMeteor(meteor, Math.floor(Math.random() * 7) + 1);
  setTimeout(spawnMeteros, delay);
}

export default spawnMeteros;

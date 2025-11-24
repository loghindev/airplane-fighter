function createBullet(x, y) {
  const bulletsContainer = document.querySelector(".bullets-container");
  const newBullet = document.createElement("div");
  newBullet.classList.add("bullet");
  newBullet.style.left = x + "px";
  newBullet.style.top = y + "px";
  bulletsContainer.appendChild(newBullet);
  return newBullet;
}

function moveProjectile(bullet, y) {
  y -= 9;
  bullet.style.top = y + "px";
  if (y > -80) {
    requestAnimationFrame(() => {
      moveProjectile(bullet, y);
    });
  } else {
    bullet.remove();
  }
}

function controlShip() {
  const ship = document.getElementById("ship");
  ship.addEventListener(
    "mouseover",
    () => {
      // handle ship movement (mouse)
      document.addEventListener("mousemove", (event) => {
        ship.style.left = event.clientX + "px";
        ship.style.top = event.clientY + "px";
      });
      // handle ship bullets
      document.addEventListener("click", (event) => {
        const bullet = createBullet(event.clientX, event.clientY);
        const y = getComputedStyle(bullet).top.split("p")[0];
        moveProjectile(bullet, y);
      });
    },
    { once: true }
  );
}

export default controlShip;

import revealShip from "../gameplay/revealShip.js";

function startLoading() {
  return new Promise((resolve) => {
    const value = document.querySelector("#loader .value");
    const fill = document.querySelector("#loader .bar .fill");
    let percentage = 0;
    let interval = setInterval(() => {
      percentage += Math.floor(Math.random() * 6) + 2;
      if (percentage >= 100) {
        percentage = 100;
        clearInterval(interval);
        resolve();
      }
      value.textContent = percentage + " %";
      fill.style.width = percentage + "%";
    }, Math.random() * 120 + 120);
  });
}

function loader() {
  return new Promise((resolve) => {
    const loader = document.getElementById("loader");
    loader.classList.add("show-loading-bar");
    loader.addEventListener("animationend", async () => {
      await startLoading();
      setTimeout(() => {
        loader.classList.replace("show-loading-bar", "hide-loading-bar");
        loader.addEventListener("animationend", () => {
          loader.remove();
          resolve();
        });
      }, 800);
    });
  });
}

export default loader;

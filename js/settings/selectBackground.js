import { backgrounds } from "../../main.js";

const bgPreview = document.querySelector("#settings .backgrounds img:nth-child(2)");

function selectBackground() {
  const prevBtn = document.querySelector("#settings .backgrounds img:first-child");
  const nextBtn = document.querySelector("#settings .backgrounds img:last-child");
  let bgIndex = 0;

  prevBtn.addEventListener("click", () => {
    --bgIndex;
    if (bgIndex < 0) bgIndex = backgrounds.length - 1;
    const source = backgrounds[bgIndex];
    localStorage.setItem("bg", source);
    bgPreview.src = source;
    document.body.style.backgroundImage = `url(${source})`;
  });

  nextBtn.addEventListener("click", () => {
    ++bgIndex;
    if (bgIndex > backgrounds.length - 1) bgIndex = 0;
    const source = backgrounds[bgIndex];
    localStorage.setItem("bg", source);
    bgPreview.src = source;
    document.body.style.backgroundImage = `url(${source})`;
  });
}

export default selectBackground;

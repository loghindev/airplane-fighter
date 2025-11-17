function resetDefaultPreset() {
  const defaultPresetButton = document.querySelector("#settings .bottom span");
  defaultPresetButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}
export default resetDefaultPreset;

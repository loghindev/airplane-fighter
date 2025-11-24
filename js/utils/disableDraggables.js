function disableDraggables() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => img.setAttribute("draggable", "false"));
}

export default disableDraggables;

const galleryImages = document.querySelectorAll(".gallery-image");
const viewer = document.querySelector(".viewer");
const viewerImage = document.querySelector(".viewer-image");
const viewerCaption = document.querySelector(".viewer-caption");
const closeButton = document.querySelector(".close-viewer");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    viewerImage.src = image.dataset.full || image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = image.alt;
    viewer.showModal();
    closeButton.focus();
  });
});

closeButton.addEventListener("click", () => viewer.close());

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) viewer.close();
});

viewer.addEventListener("close", () => {
  viewerImage.src = "";
  const lastImage = [...galleryImages].find((image) => image.alt === viewerImage.alt);
  if (lastImage) lastImage.focus();
});
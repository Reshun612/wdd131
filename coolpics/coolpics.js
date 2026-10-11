const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#main-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "Close" : "Menu";
  });
}

const viewer = document.querySelector(".viewer");
const viewerImage = document.querySelector(".viewer-image");
const viewerCaption = document.querySelector(".viewer-caption");
const closeViewer = document.querySelector(".close-viewer");

document.querySelectorAll(".gallery img").forEach((image) => {
  image.tabIndex = 0;
  const showImage = () => {
    viewerImage.src = image.dataset.full || image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = image.closest("figure")?.querySelector("figcaption")?.textContent || image.alt;
    viewer.showModal();
  };
  image.addEventListener("click", showImage);
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showImage();
    }
  });
});

closeViewer?.addEventListener("click", () => viewer.close());
viewer?.addEventListener("click", (event) => {
  if (event.target === viewer) viewer.close();
});
viewer?.addEventListener("close", () => {
  viewerImage.src = "";
});

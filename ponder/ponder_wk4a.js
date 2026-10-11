const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#primary-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    const icon = menuButton.querySelector(".menu-icon");
    if (icon) icon.textContent = isOpen ? "✕" : "☰";
    const label = menuButton.querySelector(".menu-button-label");
    if (label) label.textContent = isOpen ? "Close" : "Menu";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 699px)").matches) {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        const icon = menuButton.querySelector(".menu-icon");
        if (icon) icon.textContent = "☰";
        const label = menuButton.querySelector(".menu-button-label");
        if (label) label.textContent = "Menu";
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 700px)").matches) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      const icon = menuButton.querySelector(".menu-icon");
      if (icon) icon.textContent = "☰";
      const label = menuButton.querySelector(".menu-button-label");
      if (label) label.textContent = "Menu";
    }
  });
}

let selectElem = document.querySelector("#theme-select");
let pageContent = document.querySelector("body");
let logo = document.querySelector("#logo");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === "dark") {
        pageContent.classList.add("dark");
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.webp";
    } else {
        pageContent.classList.remove("dark");
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
    }
}

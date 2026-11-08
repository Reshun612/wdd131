// Keep the character's latest stats when the page reloads.
const savedCharacter = JSON.parse(localStorage.getItem("wdd131-character"));

const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: savedCharacter?.level ?? 5,
  health: savedCharacter?.health ?? 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

  // The attacked method subtracts 20 health points.
  attacked() {
    if (this.health > 0) {
      this.health = Math.max(0, this.health - 20);
    }

    if (this.health === 0) {
      return "Snortleblat has died!";
    }

    return "Snortleblat was attacked and lost 20 health.";
  },

  // The levelUp method increases the character's level by one.
  levelUp() {
    this.level += 1;
    return "Snortleblat leveled up!";
  }
};

// Save the object properties so they remain updated after a page reload.
function saveCharacter() {
  localStorage.setItem(
    "wdd131-character",
    JSON.stringify({ level: character.level, health: character.health })
  );
}

// Display the character object's properties on the page.
function displayCharacter() {
  document.querySelector("#character-image").src = character.image;
  document.querySelector("#character-image").alt = character.name;
  document.querySelector("#character-name").textContent = character.name;
  document.querySelector("#character-class").textContent = character.class;
  document.querySelector("#character-level").textContent = character.level;
  document.querySelector("#character-health").textContent = character.health;

  if (character.health === 0) {
    document.querySelector("#log").textContent = "Snortleblat has died!";
    document.querySelector("#attacked").disabled = true;
  }
}

// The button calls the attacked() method, saves the object, and reloads the page.
document.querySelector("#attacked").addEventListener("click", function () {
  const message = character.attacked();
  saveCharacter();
  sessionStorage.setItem("wdd131-character-message", message);
  window.location.reload();
});

// The button calls the levelUp() method, saves the object, and reloads the page.
document.querySelector("#levelup").addEventListener("click", function () {
  const message = character.levelUp();
  saveCharacter();
  sessionStorage.setItem("wdd131-character-message", message);
  window.location.reload();
});

// Show the saved character data and the message after the reload.
displayCharacter();
const savedMessage = sessionStorage.getItem("wdd131-character-message");
if (savedMessage) {
  document.querySelector("#log").textContent = savedMessage;
  sessionStorage.removeItem("wdd131-character-message");
}

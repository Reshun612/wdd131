import recipes from './recipes.mjs';

// Use the assignment's recipe images hosted with the WDD 131 course materials.
// The Apple Crisp illustration is already included in this project.
const recipeImages = {
  'apple-crisp.jpg': './images/apple-crisp.svg',
  'black-beans-and-rice.jpg': 'https://wddbyui.github.io/wdd131/images/recipe2/black-beans-and-rice.jpg',
  'chicken-curry.webp': 'https://wddbyui.github.io/wdd131/images/recipe2/chicken-curry.webp',
  'chocolate-chip-cookies.jpg': 'https://wddbyui.github.io/wdd131/images/recipe2/chocolate-chip-cookies.jpg',
  'escalopes-de-poulet-a-la-creme.webp': 'https://wddbyui.github.io/wdd131/images/recipe2/escalopes-de-poulet-a-la-creme.webp',
  'german-gooseberry-cake.jpg': 'https://wddbyui.github.io/wdd131/images/recipe2/german-gooseberry-cake.jpg',
  'roasted-potatoes.webp': 'https://wddbyui.github.io/wdd131/images/recipe2/roasted-potatoes.webp',
  'sweet-potato-waffle-md.jpg': 'https://wddbyui.github.io/wdd131/images/recipe2/sweet-potato-waffle-md.jpg'
};

const recipeList = document.querySelector('#recipe-list');
const searchForm = document.querySelector('#recipe-search');
const searchInput = document.querySelector('#site-search');
const searchHelp = document.querySelector('#search-help');

const allRecipes = recipes.map((recipe) => {
  const imageName = recipe.image.split('/').pop();
  return {
    ...recipe,
    image: recipeImages[imageName] || recipe.image
  };
});

// Create the category labels for each recipe.
function tagsTemplate(tags) {
  return tags.map((tag) => `<li>${tag}</li>`).join('');
}

// Create an accessible star rating.
function ratingTemplate(rating) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
  const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);

  return `
    <p class="recipe__ratings">
      <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${stars}</span>
    </p>
  `;
}

// Build one recipe card from its recipe object.
function recipeTemplate(recipe) {
  const recipeLink = recipe.url
    ? `<a href="${recipe.url}" target="_blank" rel="noopener noreferrer">${recipe.name}</a>`
    : recipe.name;

  return `
    <article class="recipe">
      <img class="recipe__image" src="${recipe.image}" alt="${recipe.name}" loading="lazy">
      <div class="recipe__content">
        <ul class="recipe__tags" aria-label="Recipe categories">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2 class="recipe__title">${recipeLink}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="recipe__description">${recipe.description}</p>
        <p class="recipe__meta">
          <strong>Prep:</strong> ${recipe.prepTime || 'Not listed'}
          <span aria-hidden="true"> · </span>
          <strong>Cook:</strong> ${recipe.cookTime || 'Not listed'}
        </p>
        <p class="recipe__yield"><strong>Yield:</strong> ${recipe.recipeYield || 'Not listed'}</p>
      </div>
    </article>
  `;
}

// Render all recipes passed to the function.
function renderRecipes(recipeArray) {
  if (recipeArray.length === 0) {
    recipeList.innerHTML = '<p class="no-results">No recipes found. Try another search such as chicken, dessert, or potatoes.</p>';
    return;
  }

  recipeList.innerHTML = recipeArray.map(recipeTemplate).join('');
}

// Show one random recipe when the page first loads.
function init() {
  const randomIndex = Math.floor(Math.random() * allRecipes.length);
  renderRecipes([allRecipes[randomIndex]]);

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerms = searchInput.value.trim().toLowerCase().split(/\\s+/).filter(Boolean);

    if (searchTerms.length === 0) {
      const randomRecipe = allRecipes[Math.floor(Math.random() * allRecipes.length)];
      renderRecipes([randomRecipe]);
      searchHelp.textContent = 'Showing a random recipe. Search by name, description, or tag.';
      return;
    }

    const filteredRecipes = allRecipes.filter((recipe) => {
      const searchableText = [
        recipe.name,
        recipe.description,
        ...recipe.tags
      ].join(' ').toLowerCase();

      return searchTerms.every((term) => searchableText.includes(term));
    });

    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
    renderRecipes(filteredRecipes);
    searchHelp.textContent = `${filteredRecipes.length} recipe(s) found for "${searchInput.value.trim()}".`;
  });
}

init();
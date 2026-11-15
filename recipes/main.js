// Recipe Book Part 1: the page content is intentionally static.
// Part 2 will use recipes.mjs to build the recipe list and add search.
import recipes from './recipes.mjs';

console.info(`Recipe Book ready: ${recipes.length} recipes are available.`);

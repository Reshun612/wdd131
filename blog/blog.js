// Build article markup from the data in articles.js.
const articleList = document.querySelector("#article-list");

function createArticle(article) {
  const review = document.createElement("article");
  review.classList.add("book-review");

  const details = document.createElement("div");
  details.classList.add("review-details");

  const date = document.createElement("time");
  date.dateTime = article.dateISO;
  date.textContent = article.date;

  const genre = document.createElement("p");
  genre.textContent = article.genre;

  const rating = document.createElement("p");
  rating.classList.add("review-rating");
  rating.setAttribute("aria-label", `Rating: ${article.rating} out of 5`);
  rating.textContent = "★".repeat(article.rating) + "☆".repeat(5 - article.rating);

  details.append(date, genre, rating);

  const content = document.createElement("div");
  content.classList.add("review-content");

  const title = document.createElement("h2");
  title.textContent = article.title;

  const author = document.createElement("p");
  author.classList.add("book-author");
  author.textContent = article.author;

  const cover = document.createElement("img");
  cover.classList.add("book-cover");
  cover.src = article.image;
  cover.alt = article.imageAlt;
  cover.width = 180;
  cover.height = 270;
  cover.loading = "lazy";

  const description = document.createElement("p");
  description.textContent = article.description;

  content.append(title, author, cover, description);
  review.append(details, content);
  return review;
}

if (articleList && Array.isArray(articles)) {
  articles.forEach((article) => articleList.append(createArticle(article)));
}
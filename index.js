// Card Bookmark
const bookmarkButton = document.querySelector(".bookmark");
bookmarkButton.addEventListener("click", toggleBookmark);

function toggleBookmark() {
  bookmarkButton.classList.toggle("bookmark--active");
}

// Card Answer Toggle
const answerButton = document.querySelector(".card__button-answer");
answerButton.addEventListener("click", toggleAnswer);

function toggleAnswer() {
  const answer = document.querySelector(".card__answer");
  const button = document.querySelector(".card__button-answer");

  answer.classList.toggle("card__answer--active");
  button.textContent = answer.classList.contains("card__answer--active")
    ? "Hide Answer"
    : "Show Answer";
}

// Add Question

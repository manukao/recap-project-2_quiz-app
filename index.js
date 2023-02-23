const bookmarkButton = document.querySelector(".bookmark");
bookmarkButton.addEventListener("click", toggleBookmark);

function toggleBookmark() {
  bookmarkButton.classList.toggle("bookmark--active");
}

const answerButton = document.querySelector(".card__button-answer");
answerButton.addEventListener("click", toggleAnswer);

function toggleAnswer() {
  const answer = document.querySelector(".card__answer");
  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
}

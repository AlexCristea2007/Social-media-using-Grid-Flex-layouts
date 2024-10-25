const body = document.body;
const topBg = document.querySelector(".top-bg");

const titles = document.querySelectorAll("[class*=title]");
const paragraphsL = document.querySelectorAll(".paragraphL");
const paragraphsMM = document.querySelectorAll(".paragraphMM");
const paragraphsMS = document.querySelectorAll(".paragraphMS");
const greenTextElements = document.querySelectorAll(".green");
const redTextElements = document.querySelectorAll(".red");

const darkModeText = document.querySelector(".toggle-wrapper > p");
const toggleBtn = document.querySelector("#toggle-btn");
const toggleIndicator = document.querySelector("#toggle-indicator");

const growthCards = document.querySelectorAll(".growth-card");
const overviewCards = document.querySelectorAll(".overview-card");

let darkMode = true;

// Hover functions that apply style based on the current darkMode for growth and overview cards
function cardHover(element) {
  if (darkMode) {
    element.style.filter = "brightness(1.2)";
  } else {
    element.style.backgroundColor = "hsl(227, 47%, 86%)";
  }
}

function cardUnhover(element) {
  if (darkMode) {
    element.style.filter = "brightness(1)";
  } else {
    element.style.backgroundColor = "hsl(227, 47%, 96%)";
  }
}

// Attach hover event listeners to growthCards and overviewCards
[...growthCards, ...overviewCards].forEach((card) => {
  card.addEventListener("mouseover", () => cardHover(card));
  card.addEventListener("mouseout", () => cardUnhover(card));
});

toggleBtn.addEventListener("click", () => {
  body.style.backgroundColor = darkMode
    ? "var(--white-bg)"
    : "var(--very-dark-blue-bg)";
  topBg.style.backgroundColor = darkMode
    ? "var(--very-pale-blue-top-bg-pattern)"
    : "var(--very-dark-blue-top-bg-pattern)";

  titles.forEach((title, index) => {
    title.style.color = darkMode
      ? index === 1
        ? "var(--dark-grayish-blue-text)"
        : "var(--very-dark-blue-text)"
      : "var(--white-text)";
  });

  paragraphsL.forEach((paragraphL) => {
    paragraphL.style.color = darkMode
      ? "var(--very-dark-blue-text)"
      : "var(--white-text)";
  });
  paragraphsMM.forEach((paragraphMM) => {
    paragraphMM.style.color = darkMode
      ? "var(--dark-grayish-blue-text)"
      : "var(--desaturated-blue-text)";
  });
  paragraphsMS.forEach((paragraphMS) => {
    paragraphMS.style.color = darkMode
      ? "var(--dark-grayish-blue-text)"
      : "var(--desaturated-blue-text)";
  });
  greenTextElements.forEach((greenTextElement) => {
    greenTextElement.style.color = "var(--lime-green)";
  });
  redTextElements.forEach((redTextElement) => {
    redTextElement.style.color = "var(--bright-red)";
  });

  darkModeText.style.color = darkMode
    ? "var(--toggle-light)"
    : "var(--desaturated-blue-text)";
  toggleBtn.style.backgroundColor = darkMode ? "var(--toggle-light)" : "x";
  toggleBtn.style.backgroundImage = darkMode
    ? "none"
    : "var(--toggle-gradient)";
  toggleIndicator.style.backgroundColor = darkMode
    ? "var(--white-bg)"
    : "var(--very-dark-blue-bg)";
  toggleIndicator.style.transform = darkMode
    ? "translateX(calc(var(--width) - var(--height)))"
    : "translateX(calc((var(--width) - var(--height))) * -1)";

  growthCards.forEach((growthCard) => {
    growthCard.style.backgroundColor = darkMode
      ? "var(--light-grayish-blue-card-bg)"
      : "var(--dark-desaturated-blue-card-bg)";
  });
  overviewCards.forEach((overviewCard) => {
    overviewCard.style.backgroundColor = darkMode
      ? "var(--light-grayish-blue-card-bg)"
      : "var(--dark-desaturated-blue-card-bg)";
  });

  darkMode = !darkMode;
});

const n = document.querySelectorAll(".n");
const pl = document.querySelector(".pl");
const mn = document.querySelector(".mn");
const ml = document.querySelector(".ml");
const dv = document.querySelector(".dv");
const sq = document.querySelector(".sq");
const pt = document.querySelector(".pt");
const eq = document.querySelector(".eq");
const calcScreen = document.querySelector(".calculator output");

let sum = 0;
let lastAction = (x, screenContent) => screenContent;
let isNewInput = false;
let isFirstType = true;

function getDisplayedNumber() {
  return Number(calcScreen.textContent);
}
function setDisplayedNumber(num) {
  calcScreen.textContent = String(num);
}

function handelNumpad(input) {
  const calcText = calcScreen.textContent;

  if (!isNewInput) calcScreen.textContent = input;
  else if (calcText.length <= 10) {
    calcScreen.textContent += input;
  }
  if (isFirstType) sum = Number(calcScreen.textContent);

  isNewInput = true;
}

function act(action = lastAction) {
  if (isNewInput && !isFirstType) {
    sum = action(sum, Number(calcScreen.textContent));
    calcScreen.textContent = String(sum);
  }
  lastAction = action;
  isNewInput = false;
  isFirstType = false;
}

n.forEach((number) => {
  number.addEventListener("click", (e) => {
    handelNumpad(e.target.textContent);
  });
});

pl.addEventListener("click", function () {
  act((x, y) => x + y);
});
mn.addEventListener("click", function () {
  act((x, y) => x - y);
});
ml.addEventListener("click", function () {
  act((x, y) => x * y);
});
dv.addEventListener("click", function () {
  act((x, y) => x / y);
});
sq.addEventListener("click", function () {
  setDisplayedNumber(Math.sqrt(getDisplayedNumber()));
  isFirstType = false;
});
pt.addEventListener("click", function () {
  if (calcScreen.textContent.endsWith("."))
    calcScreen.textContent = String(Number(calcScreen.textContent));
  else if (!calcScreen.textContent.includes(".")) calcScreen.textContent += ".";
});
eq.addEventListener("click", function () {
  act();
});

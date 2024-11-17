const n = document.querySelectorAll(".n");
const pl = document.querySelector(".pl");
const mn = document.querySelector(".mn");
const ml = document.querySelector(".ml");
const dv = document.querySelector(".dv");
const eq = document.querySelector(".eq");
const calcScreen = document.querySelector(".calculator output");

let sum = 0;
let lastAction = (x, screenContent) => screenContent;
let isNewInput = false;
let isFirstType = true;

function handelNumpad(input) {
  const calcText = calcScreen.textContent;

  if (isFirstType) sum = Number(input);
  if (!isNewInput) calcScreen.textContent = input;
  else if (calcText.length <= 10) {
    calcScreen.textContent += input;
  }

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
eq.addEventListener("click", function () {
  act();
});

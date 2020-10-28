import colors from "../data/data.js";

const dom_body = document.querySelector('body');
const dom_container = document.querySelector('.container')

let start;
let isStart = false;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = function(e) {
  if (e.target.innerText === "start" && !isStart) {
    isStart = true;
    start = setInterval(() => {
      randomIntegerFromInterval(0, colors.length)
      dom_body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  } else if (e.target.innerText === "stop") {
    clearInterval(start);
    isStart = false;
  }
}

dom_container.addEventListener('click', changeColor);



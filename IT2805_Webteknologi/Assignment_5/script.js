/* Part 2 */
console.log('PART 2');
for (let i = 1; i <=20; i ++) {
  console.log(i);
}
/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/*A for-loop iterates through the numbers-array.*/
for (let i = 0; i < numbers.length; i++) {
  /*If the number from the array is divisible by both
  3 and 5, "eplekake" is written to console.*/
  if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
    console.log("eplekake");
  /*If the number is only divisible by 3 or 5, "eple" or
  "kake" is written to console, respectively.*/
  } else if (numbers[i] % 3 == 0) {
    console.log("eple");
  } else if (numbers[i] % 5 == 0) {
    console.log("kake");
  /*In all other cases, the plain number is written.*/
  } else {
    console.log(numbers[i]);
  }
}

/* Part 4 */
const title = document.getElementById("title");
title.innerText = "Hello, JavaScript";

/* Part 5 */
const displayButton = document.querySelector("#display");
const visibilityButton = document.querySelector("#visibility");
const resetButton = document.querySelector("#reset");

displayButton.addEventListener('click', changeDisplay);
visibilityButton.addEventListener('click', changeVisibility);
resetButton.addEventListener('click', reset);

function changeDisplay() {
  document.querySelector("#magic").style.display = "none";
}

function changeVisibility () {
  document.querySelector("#magic").style.cssText = "visibility: hidden; display: block";
}

function reset () {
  document.querySelector("#magic").style.cssText = "display: block; visibility: visible";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

for(let i = 0; i < technologies.length; i++) {
  let node = document.createElement("li");
  let text = document.createTextNode(technologies[i]);
  node.appendChild(text);
  document.querySelector("#tech").appendChild(node)
}

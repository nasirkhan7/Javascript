const colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const generateRandom = () => {
  let random = Math.random() * colors.length
  let floor = Math.floor(random)
  return floor
}
console.log(colors[generateRandom()]);

// for (i = 0; i < 6; i++){
//     console.log(colors[generateRandom()]);
// }


// for (i = 0; i < 6; i++){
//     hex+= colors[generateRandom()];
// }
// console.log(hex);

const generatecolor = () => {
  let hex = '#'
  for (i = 0; i < 6; i++) {
    hex += colors[generateRandom()];
  }
  return hex
}
window.addEventListener('keydown', () => {
  console.log(generatecolor());
  document.getElementById("color-display").textContent = "Color Code: " + generatecolor();
  document.body.style.background = generatecolor()
})
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colour");

btn.addEventListener("click", function() {
    const randomHex = getRandomHex();
    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
});

function getRandomHex() {

    let hexValue = "#";
    for(let i = 0; i < 6; i++) {
        hexValue += hex[getRandomValue()];
    }
   
    return hexValue;
}

function getRandomValue() {
    return Math.floor(Math.random() * hex.length);
}
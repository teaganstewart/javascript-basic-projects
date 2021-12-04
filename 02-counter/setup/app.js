let count = 0;

const value = document.querySelector("#value")
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");

const btns = document.querySelectorAll(".btn");

btns.forEach(function(item) {
    item.addEventListener('click', function(item) {
        const style = item.currentTarget.classList;
        if(style.contains('decrease')) {
            count--;
        }
        else if(style.contains('reset')) {
            count = 0;
        }
        else {
            count++;
        }

        if(count > 0) {
            value.style.color = "green"
        }
        else if(count < 0) {
            value.style.color = "red"
        }
        else {
            value.style.color = "black"
        }

        value.textContent = count;
    });
});


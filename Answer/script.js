let currentNumber = document.getElementById("counter").innerHTML;
const colorOptions = ["#8B0000", "#32CD32", "#FFFF00"];

document.getElementById("btnMin").addEventListener("click", function () {
    currentNumber--;
    if (currentNumber <= -1) {
        currentNumber = generateRandomNumber();
        document.getElementById("counter").style.color = getRandomColor();
        document.getElementById("counter").innerHTML = currentNumber;
    } else {
        document.getElementById("counter").innerHTML = currentNumber;
    }
});

document.getElementById("btnPlus").addEventListener("click", function () {
    currentNumber++;
    document.getElementById("counter").innerHTML = currentNumber;
});

function generateRandomNumber() {
    let min = 5;
    let max = 10;

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
    return colorOptions[Math.floor(Math.random() * colorOptions.length)];
}
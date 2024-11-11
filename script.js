const input = document.getElementById("number");
const message = document.getElementById("output")
const romanNumerals = [
    { number: 1, roman: "I"},
    { number: 4, roman: "IV"},
    { number: 5, roman: "V"},
    { number: 9, roman: "IX"},
    { number: 10, roman: "X"},
    { number: 40, roman: "XL"},
    { number: 50, roman: "L"},
    { number: 90, roman: "XC"},
    { number: 100, roman: "C"},
    { number: 400, roman: "CD"},
    { number: 500, roman: "D"},
    { number: 900, roman: "CM"},
    { number: 1000, roman: "M"},
]

function checkInput(input) {
    invalidInput(input);
}

function invalidInput(input) {
    if (input.value == "") {
        alert("Please enter a valid number.")
    } else if (input.value <= 0) {
        alert("Please enter a number greater than 0.")
    } else if (input.value > 3999) {
        alert("Please enter a number lesser than 3999.")
    }
}


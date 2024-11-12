const input = document.getElementById("number");
const message = document.getElementById("output");
const numbers = [
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

function checkInput() {
    let value = input.value;
    let error="";
    if (value == "") {
        error = "Please enter a valid number.";
        message.innerHTML = `<span style="
        display: flex;
        margin: 20px;
        border: solid var(--errorBorder);
        background-color: var(--errorBox);
        width: 350px;
        height: 50px;
        text-align: center;
        font-size: 30px;
        color: var(--errorColor);
        font-weight: bold;
        align-items: center;
        justify-content: center;
        padding: 30px;">
        ${error}
        </span>`;  
    }else if (value <= 0) {
       error = "Please enter a number greater than or equal to 1.";
       message.innerHTML = `<span style="
       display: flex;
       margin: 20px;
       border: solid var(--errorBorder);
       background-color: var(--errorBox);
       width: 350px;
       height: 50px;
       text-align: center;
       font-size: 30px;
       color: var(--errorColor);
       font-weight: bold;
       align-items: center;
       justify-content: center;
       padding: 30px;">
       ${error}
       </span>`;  
    } else if (value > 3999) {
        error = "Please enter a number less than or equal to 3999."
        message.innerHTML = `<span style="
        display: flex;
        margin: 20px;
        border: solid var(--errorBorder);
        background-color: var(--errorBox);
        width: 350px;
        height: 50px;
        text-align: center;
        font-size: 30px;
        color: var(--errorColor);
        font-weight: bold;
        align-items: center;
        justify-content: center;
        padding: 30px;">
        ${error}
        </span>`;        
    } else {
        let result = convertInput(value);
        message.innerHTML = `<span style="
        display: flex;
        margin: 20px;
        border: solid white;
        background-color: var(--boxColor);
        width: 350px;
        height: 50px;
        text-align: center;
        font-size: 50px;
        color: white;
        font-weight: bold;
        align-items: center;
        justify-content: center;
        padding: 30px;">
        ${result}
        </span>`;
    }
}


function convertInput (value) {
    let result ="";
        for (let i = numbers.length - 1; i >= 0; i--) {
                while (value >= numbers[i].number) {
                    result += numbers[i].roman;
                    value -= numbers[i].number;
            }
        }
        return result;
    }

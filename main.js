const form = document.getElementById("form-comparison");
let firstNumber = document.getElementById("number-one");
let secondNumber = document.getElementById("number-two");


let validForm = false;

function isBigger (numberOne, numberTwo) {
    return numberTwo > numberOne;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const successMessage = `Great! The second number is bigger than the first number.`;
    let firstNumberParsed = parseFloat(firstNumber.value);
    let secondNumberParsed = parseFloat(secondNumber.value);

    validForm = isBigger(firstNumberParsed, secondNumberParsed);
    if (validForm) {
        const messageContainer = document.querySelector(".success-message");
        messageContainer.innerHTML = successMessage;
        messageContainer.style.display = "block";

        firstNumber.value = "";
        secondNumber.value = "";

    } else {
        document.querySelector(".error-message").style.display = "block";
    }
})
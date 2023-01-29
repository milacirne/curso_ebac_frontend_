const form = document.getElementById("form-comparison");


let validForm = false;

function isBigger (numberOne, numberTwo) {
    return numberTwo > numberOne;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const successMessage = `Great! The second number is bigger than the first number.`;
    const firstNumber = parseFloat(document.getElementById("number-one").value);
    const secondNumber = parseFloat(document.getElementById("number-two").value);

    validForm = isBigger(firstNumber, secondNumber);
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
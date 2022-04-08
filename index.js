const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const name = document.getElementById("name");
const email = document.getElementById("email");

function toggleOn() {
    document.getElementById("form").style.display = "flex";
    document.getElementById("content").style.opacity = "0.2";
}

function toggleOff() {
    document.getElementById("form").style.display = "none";
    document.getElementById("content").style.opacity = "1";
}

form.addEventListener('submit', (e) => {
    let errorMessages = [];
    if (name.value === "" || name.value == null) {
        errorMessages.push("Name is required!")
    }

    if (email.value.length <= 6) {
        errorMessages.push("Email must have atleast 6 characters!")
    }

    if (errorMessages > 0) {
        e.preventDefault();
        errorElement.innerText = errorMessages.join(", ");
    }
})

// Captcha //////////////////////////////////////////////////////////////////////////////////////

const captcha = document.querySelector(".captcha"),
    reloadBtn = document.querySelector(".reload-btn"),
    inputField = document.querySelector(".input-area"),
    checkBtn = document.querySelector(".check-btn"),
    statusTxt = document.querySelector(".status-text");

//storing all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha() {
    for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
    }
}
getCaptcha(); //calling getCaptcha when the page open
//calling getCaptcha & removeContent on the reload btn click
reloadBtn.addEventListener("click", () => {
    removeContent();
    getCaptcha();
});

checkBtn.addEventListener("click", e => {
    e.preventDefault(); //preventing button from it's default behaviour
    statusTxt.style.display = "block";
    //adding space after each character of user entered values because I've added spaces while generating captcha
    let inputVal = inputField.value.split('').join(' ');
    if (inputVal == captcha.innerText) { //if captcha matched
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "Nice! You don't appear to be a robot.";
        setTimeout(() => { //calling removeContent & getCaptcha after 4 seconds
            removeContent();
            getCaptcha();
        }, 2000);
    } else {
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Captcha not matched. Please try again!";
    }
});

function removeContent() {
    inputField.value = "";
    captcha.innerText = "";
    statusTxt.style.display = "none";
}


const form = document.getElementById("form")
const content = document.getElementById("content")
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const close = document.getElementById("close");

buttons = new Array;
buttons.push(btn1);
buttons.push(btn2);
buttons.push(btn3);

buttons.forEach(btn => btn.addEventListener("click", () => {
    form.style.display = "flex";
    content.style.opacity = "0.2";
}));

close.addEventListener("click", () => {
    form.style.display = "none";
    content.style.opacity = "1";
});


const captcha = document.querySelector(".form_wrapper_captcha_img"),
    reloadBtn = document.querySelector(".form_wrapper_captcha_reloadbutton"),
    inputField = document.querySelector(".form_wrapper_input input"),
    checkBtn = document.querySelector(".checkbutton"),
    statusTxt = document.querySelector(".form_wrapper_status");

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
        statusTxt.style.color = "#EE325C";
        statusTxt.innerText = "Pekne! Nevyzeráš že by si bol robot :)";
        setTimeout(() => { //calling removeContent & getCaptcha after 4 seconds
            removeContent();
            getCaptcha();
        }, 2000);
    } else {
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Captcha je nesprávne zadaná. Skús znova!";
    }
});

function removeContent() {
    inputField.value = "";
    captcha.innerText = "";
    statusTxt.style.display = "none";
}



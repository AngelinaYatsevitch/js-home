const firstScreen = document.getElementById('first_screen');
const mainScreen = document.getElementById('main_screen');

const enterPage = document.querySelector('.authentification');
const regPage = document.querySelector('.registration');

const regLink = document.querySelector('.registration_link');
const regBtn = document.getElementById('registrate_btn');
const enterBtn = document.getElementById('enter_btn');

const enterUsername = document.getElementById('enter_username');
const enterPassword = document.getElementById('enter_password');
const regUsername = document.getElementById('reg_username');
const regPassword = document.getElementById('reg_password');
const regPasswordCheck = document.getElementById('reg_password_check');





let usersArray = [];
class newUser {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}

function openRegForm() {
    enterPage.style.display = "none";
    regPage.style.display = "flex";
}

function registrate() {

    let user = new newUser(regUsername.value, regPassword.value);
    usersArray.push(user);
    regPage.style.display = "none";
    enterPage.style.display = "flex";
}


function checkInputs() {
    if (enterUsername.value !== "" && enterPassword.value !== "") {
        enterBtn.classList.remove('disabled');
        enterBtn.removeAttribute('disabled');
        document.querySelector('.errorMessageEmail').style.display = "none";
        document.querySelector('.errorMessagePass').style.display = "none";
    } else {
        if(enterUsername.value === "") {
            document.querySelector('.errorMessageEmail').style.display = "inline";
        } else if (enterPassword.value === "") {
            document.querySelector('.errorMessagePass').style.display = "inline";
        }
        enterBtn.classList.add('disabled');
        enterBtn.setAttribute('disabled', 'true');
    }
}

function checkRegInputs() {
    if (regUsername.value !== "" && regPassword.value !== "" && regPasswordCheck.value !== "") {
        regBtn.classList.remove('disabled');
        regBtn.removeAttribute('disabled');
        document.querySelector('.errorMessageEmail').style.display = "none";
        document.querySelector('.errorMessagePass').style.display = "none";
    } else {
        if(regUsername.value === "") {
            document.querySelector('.errorMessageEmail').style.display = "inline";
        } else if (regPassword.value === "") {
            document.querySelector('.errorMessagePass').style.display = "inline";
        } else if (regPasswordCheck.value === "") {
            document.querySelector('.errorMessagePass').style.display = "inline";
        }
        regBtn.classList.add('disabled');
        regBtn.setAttribute('disabled', 'true');
    }
}

function enterApp() {

    if(localStorage.getItem('email') === null && localStorage.getItem('password') === null) {
        for (let i = 0; i < usersArray.length; i++) {
            if(usersArray[i].userName === enterUsername.value) {
                if(usersArray[i].password === enterPassword.value) {
                    localStorage.setItem('email', enterUsername.value);
                    localStorage.setItem('password', enterPassword.value);
                    firstScreen.style.display = 'none';
                    mainScreen.style.display = 'block';
                }
            } else {
                alert("There's no such a user");
            }
        }
       
        if(usersArray.length === 0) {
            alert("There's no such a user");
        }

      } else {
        enterUsername.value = localStorage.getItem('email');
        enterPassword.value = localStorage.getItem('name');
        firstScreen.style.display = 'none';
        mainScreen.style.display = 'block';
      }
    
}



regLink.addEventListener('click', openRegForm);
regBtn.addEventListener('click', registrate);
enterBtn.addEventListener('click', enterApp);
enterUsername.addEventListener('change', checkInputs);
enterPassword.addEventListener('change', checkInputs);
regUsername.addEventListener('change', checkRegInputs);
regPassword.addEventListener('change', checkRegInputs);
regPasswordCheck.addEventListener('change', checkRegInputs);


//------------------------------------------------
//-------------------deviceInfo-------------------
//------------------------------------------------



let mainTab = document.querySelector('menu')
function getUserDevice() {
    let deviceInfo = document.createElement('p');
    let info = navigator.userAgent;

    deviceInfo.innerHTML = `Добро пожаловать! </br> Вы зашли через: ${info}`;
    mainTab.append(deviceInfo);
}
getUserDevice();





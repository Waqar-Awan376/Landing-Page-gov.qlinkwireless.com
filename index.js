const accordion = document.getElementsByClassName('acc-container');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}
(function checkDevice() {
    if (window.innerWidth <= 780) {
        document.getElementById("nav-contact-no__desktop").style.display = "none";
        document.getElementById("nav-contact-no__mobile").style.display = "inline";
    }
})();


function validateEmail(email) {
    let regexEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
    if (email.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}
function validateZipCode(zipCode) {
    if (zipCode.toString().length === 5) {
        if (parseInt(zipCode) >= 00001 && parseInt(zipCode) <= 99950) {
            return true;
        }
        return false;
    }
    return false;
}
document.getElementById('email').addEventListener('keyup', function (event) {
    if (validateEmail(event.target.value)) {
        document.getElementById("email_error").style.display = 'none';
    }
})
document.getElementById('zipCode').addEventListener('keyup', function (event) {
    if (validateEmail(event.target.value)) {
        document.getElementById("zip_code_error").style.display = 'none';
    }
})
document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zipCode").value;
    if (validateEmail(email)) {
        if (validateZipCode(zipCode)) {
            let encodedMail = window.btoa(email);
            window.location.href = `https://qlinkwireless.com/enroll?auto=1&zip=${zipCode}&email=${encodedMail}`
        }
        else {
            document.getElementById("zip_code_error").style.display = 'block';
        }
    }
    else {
        document.getElementById("email_error").style.display = 'block';
    }
})
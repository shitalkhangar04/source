// JavaScript source code
//retrive the from local storage

document.getElementById('mname').innerHTML = localStorage.getItem('Uname');
document.getElementById('mphone').innerHTML = localStorage.getItem('Uphone');
// generate otp
var digits = '0123456789';

var otpLength = 4;

var otp = '';

for (let i = 1; i <= otpLength; i++) {

    var index = Math.floor(Math.random() * (digits.length));

    otp = otp + digits[index];

} console.log(otp);

//redirect next page
const verify = document.getElementById('verify').value;
//console.log(isNaN(verify));
const submit = document.getElementById('submit');

function redirect() {
    //var valid = verify == otp;
    //valid = false;
    if (verify == otp) {

        submit.onclick = window.open("http://pixel6.co/");
    }
    return false;
}
   
function redirect() {

    window.open("http://pixel6.co/")
}

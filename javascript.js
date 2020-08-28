console.log("this is console");
//var x = phone.slice(0, 3);
/*var phone = document.getElementById('phone').value;
const s = phone.slice(1, 4);
const n = parseInt(s);
if (n >= 621 && n <= 799) {
    document.write("reliance jio, Maharastra");
} else if (n >= 801 && n <= 920) {
    document.write("Idea, Maharastra");
} else if (n >= 921 && n <= 999) {
    document.write("vodafone, Maharastra");
} else {
    document.write("Invalid number");
//
//var k = parseInt(x);
//console.log(isNaN(k));*/
function validation() {
    
        var user = document.getElementById('fname').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
    const s = phone.slice(1, 4);
    const n = parseInt(s);
 /*  // document.write(isNaN(n));
    if (n >= 621 && n <= 799) {
        document.write("reliance jio, Maharastra");
    } else if (n >= 801 && n <= 920) {
        document.write("Idea, Maharastra");
    } else if (n >= 921 && n <= 999) {
        document.write("vodafone, Maharastra");
    } else {
        document.write("Invalid number");
    }*/


        // document.write(typeof (phone))
        /*name validation*/
        if (user == "") {
            document.getElementById('name').innerHTML = "please fill the name";

            return false;
        }
        if (user.length < 4) {
            document.getElementById('name').innerHTML = "please entr the 4 charecter";
            return false;
        }
        if (!isNaN(user)) {
            document.getElementById('name').innerHTML = "please enter alphabits";
            return false;
        }
        /*email validation*/

        if (email == "") {
            document.getElementById('addr').innerHTML = "please fill the email";
            return false;
        }
        const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
        if (email.match(pattern)) {
            return true;
        } else {
            document.getElementById('addr').innerHTML = "invalid email";
            return false;
        }
        /*phone Number validation*/
        if (phone == "") {
            document.getElementById('number').innerHTML = "please fill the phone number";
            return false;
        }
       

}








//save the data in local storage

var Uname = localStorage.getItem("Uname");
var Uemail = localStorage.getItem("Uemail");
var Uphone = localStorage.getItem("Uphone");
function save() {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    localStorage.setItem("Uname", name);
    localStorage.setItem("Uemail", email);
    localStorage.setItem("Uphone", phone);
}
   

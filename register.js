window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    var RegisteredUsername = document.forms["myForm"]["username"];
    var RegisteredPassword = document.forms["myForm"]["password"];
    var RegisteredRePassword = document.forms["myForm"]["repassword"];

    if (RegisteredPassword.value == RegisteredRePassword.value){
        sessionStorage.setItem("ThisPersonUsername", RegisteredUsername.value);
        sessionStorage.setItem("ThisPersonPassword", RegisteredPassword.value);

        alert("Perfectly Fine");
        return true;
    }
    document.getElementById("errormsg").innerHTML = ("The Password are not match.");
        return false;
}
window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	var TypedUsername = document.forms["myLogin"]["username"];
    var TypedPassword = document.forms["myLogin"]["password"];

	var ThisPersonUsername = sessionStorage.getItem("ThisPersonUsername");
	var ThisPersonPassword = sessionStorage.getItem("ThisPersonPassword");
	
	if(TypedUsername.value == ThisPersonUsername && TypedPassword.value == ThisPersonPassword){
		alert("OK");
		return true;
	}
	alert("Username or Password are incorrect.");
	return false;
}

			
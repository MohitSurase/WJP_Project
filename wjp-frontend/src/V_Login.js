export function V_login(username, password) {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
      return false;
    }
    if (user.length < 5 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username length must be between 5 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
      return false;
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
      return false;
    }
    if (pass.length < 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords length must be between  5 and 20";
      return false;
    }

  }

  
export default V_login;

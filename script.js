function login() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;
  var storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  if (username.trim() === "" || password.trim() === "") {
    alert("Please enter a username and password");
    return;
  }

  var user = storedUsers.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    alert("Login successful");
    console.log(1);
    window.location.replace("../landingpage_1.html");
  } else {
    alert("Invalid username or password");
  }
}
  
  

  function register() {
    var username = document.getElementById("registerUsername").value;
    var firstName = document.getElementById("registerFirstName").value;
    var lastName = document.getElementById("registerLastName").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("registerConfirmPassword").value;
  
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please enter a username, email, and password");
      return;
    }
  
    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    var userExists = storedUsers.some(function (user) {
      return user.username === username || user.email === email;
    });
  
    if (userExists) {
      alert("User already registered");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    var newUser = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
  
    storedUsers.push(newUser);
  
    localStorage.setItem("users", JSON.stringify(storedUsers));
  
    alert("Registration successful");
  }
  
function resetPassword() {
  var email = document.getElementById("resetEmail").value;
  var oldPassword = document.getElementById("oldPassword").value;
  var newPassword = document.getElementById("resetNewPassword").value;
  var confirmPassword = document.getElementById("resetConfirmPassword").value;

  if (email.trim() === "" || oldPassword.trim() === "" || newPassword.trim() === "" || confirmPassword.trim() === "") {
    alert("Please fill in all fields");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  var storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  var user = storedUsers.find(function (user) {
    return user.email === email;
  });

  if (user) {
    if (user.password === oldPassword) {
      user.password = newPassword;
      localStorage.setItem("users", JSON.stringify(storedUsers));
      alert("Password reset successful");
    } else {
      alert("Incorrect old password");
    }
  } else {
    alert("Invalid email");
  }
}

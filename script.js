document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Here you would typically perform authentication with a backend service
    // For this example, we'll just log the username and password to the console
    console.log("Username: " + username);
    console.log("Password: " + password);

    // Redirect to another page after successful login
    window.location.href = "dashboard.html";
});

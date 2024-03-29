// Delete soon


const forms = document.querySelector(".form-container"),
    passwordShowHide = document.querySelectorAll(".hide-icon"),
    links = document.querySelectorAll(".link");


const loginForm = document.querySelector(".login form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    login(event);
});

// Show or Hide Password
passwordShowHide.forEach(hideIcon =>{
    hideIcon.addEventListener("click", ()=> {
        let passwordField = hideIcon.parentElement.parentElement.querySelectorAll(".password");
        
        passwordField.forEach(password => {
            // Show password
            if( password.type === "password"){
                password.type = "text";
                hideIcon.classList.replace("bxs-hide", "bxs-show");
                return
            }

            // Hide password
            password.type = "password";
            hideIcon.classList.replace("bxs-show", "bxs-hide")
        })
    })
})

// Redirect to product page

function redirectToProductPage() {
    setTimeout(function() {
        window.location.replace("/HTML/product.html");
    }, 3000);
}

// Reload login page when login attempt failed

function reloadPage() {
    window.location.reload();
}

// Function login

function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userFound = false;

    Object.keys(localStorage).forEach(function(key) {
        let storedUser = JSON.parse(localStorage.getItem(key))
        if (storedUser.email === email && storedUser.pass === password) {
            userFound = true
        }
    });

    if (userFound) {
        console.log("Login successfull")
        document.getElementById("result").innerHTML="Login berhasil!";
        redirectToProductPage()
    }
    else {
        console.log("login failed")
        document.getElementById("result").innerHTML="Login gagal. Email atau kata sandi salah!";
        setTimeout(function() {
            reloadPage();
        }, 3000);
    }

}



const forms = document.querySelector(".form-container"),
    passwordShowHide = document.querySelectorAll(".hide-icon"),
    links = document.querySelectorAll(".link");


const loginForm = document.querySelector(".login form");
const signupForm = document.querySelector(".signup form");


loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    login(event);
});

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (signupValidation(event)) { 
        signup(event); 
    }
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

// Sign Up Function

function signup(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        username : username,
        email : email,
        pass : password,
    }

    let json = JSON.stringify(user);

    let idUser = username + '-' + email;

    localStorage.setItem(idUser, json)
    console.log("user added succesfully")
    setTimeout(function() {
        reloadPage();
    }, 3000);
}


// Function validation

// function signupValidation(event) {
//     event.preventDefault()

//     if(document.Form.Username.value == "" ){
//         document.getElementById("result").innerHTML="Masukkan nama pengguna anda!";
//         return false;
//     }
//     else if(document.Form.Email.value == "" ){
//         document.getElementById("result").innerHTML="Masukkan email anda!";
//         return false;
//     }
//     else if(document.Form.Password.value == "" ){
//         document.getElementById("result").innerHTML="Anda belum memasukkan password!";
//         return false;
//     }
//     else if(document.Form.Password.value.length < 8 ){
//         document.getElementById("result").innerHTML="Minimal password 8 karakter!";
//         return false;
//     }
//     else if(document.Form.confirmPassword.value == "" ){
//         document.getElementById("result").innerHTML="Masukkan konfirmasi password!";
//         return false;
//     }
//     else if(document.Form.confirmPassword.value !== document.Form.Password.value ){
//         document.getElementById("result").innerHTML="Masukkan password yang sama!";
//         return false;
//     }
//     else {
//         signup()
//         document.getElementById("result").innerHTML="Akun anda berhasil didaftarkan!";
//         return true;
//     }
// }


function signupValidation(event) {
    event.preventDefault(); // Prevent form submission by default

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const resultContainer = document.getElementById("result");

    if (username.trim() === "") {
        resultContainer.innerHTML = "Masukkan nama pengguna anda!";
        return false;
    } else if (email.trim() === "") {
        resultContainer.innerHTML = "Masukkan email anda!";
        return false;
    } else if (password.trim() === "") {
        resultContainer.innerHTML = "Anda belum memasukkan password!";
        return false;
    } else if (password.length < 8) {
        resultContainer.innerHTML = "Minimal password 8 karakter!";
        return false;
    } else if (confirmPassword.trim() === "") {
        resultContainer.innerHTML = "Masukkan konfirmasi password!";
        return false;
    } else if (confirmPassword !== password) {
        resultContainer.innerHTML = "Masukkan password yang sama!";
        return false;
    }

    // Clear any previous error messages if validation passes
    resultContainer.innerHTML = "";
    return true; // Validation passed
}

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



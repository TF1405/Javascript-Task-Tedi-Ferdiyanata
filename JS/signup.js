const forms = document.querySelector(".form-container"),
    passwordShowHide = document.querySelectorAll(".hide-icon"),
    links = document.querySelectorAll(".link");


const signupForm = document.querySelector(".signup form");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    signupValidation(event)
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
}


// Function validation

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
    resultContainer.innerHTML = "Akun anda berhasil didaftarkan";
    signup(event);
    resetForm();
    return true; // Validation passed
}

// Reset form

function resetForm() {
    const inputs = document.querySelectorAll("input");

    // Clear filled form
    inputs.forEach(input => {
        input.value = "";
    })
}


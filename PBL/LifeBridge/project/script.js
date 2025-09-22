// SIGNUP FUNCTION
/*function signup() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const phone = document.getElementById("signup-phone").value;

    const messageElem = document.getElementById("message");

    if (name && email && password && phone) {
        // Save user info in localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("userPhone", phone);

        // Show success message
        if (messageElem) {
            messageElem.innerText = "Account created successfully! Redirecting to login...";
            messageElem.style.color = "green";
        }

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    } else {
        if (messageElem) {
            messageElem.innerText = "Please fill all fields.";
            messageElem.style.color = "red";
        }
    }
}

// LOGIN FUNCTION
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    localStorage.setItem("username", enteredName);
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    const messageElem = document.getElementById("message");

    if (!savedEmail || !savedPassword) {
        if (messageElem) {
            messageElem.innerText = "Account does not exist. Please create an account.";
            messageElem.style.color = "red";
        }
    } else if (email === savedEmail && password === savedPassword) {
        if (messageElem) {
            messageElem.innerText = "Login successful! Redirecting to Homepage...";
            messageElem.style.color = "green";
        }

        // Redirect after 1.5 seconds
        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 1500);
    } else {
        if (messageElem) {
            messageElem.innerText = "Invalid credentials. Try again.";
            messageElem.style.color = "red";
        }
    }
}*/
// SIGNUP FUNCTION
function signup() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const phone = document.getElementById("signup-phone").value;

    const messageElem = document.getElementById("message");

    if (name && email && password && phone) {
        // Save user info in localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("userPhone", phone);

        if (messageElem) {
            messageElem.innerText = "Account created successfully! Redirecting to login...";
            messageElem.style.color = "green";
        }

        // Redirect after 2s
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    } else {
        if (messageElem) {
            messageElem.innerText = "Please fill all fields.";
            messageElem.style.color = "red";
        }
    }
}

// LOGIN FUNCTION
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const messageElem = document.getElementById("message");

    // Get saved credentials
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    const savedName = localStorage.getItem("userName"); // 👈 get name too

    if (!savedEmail || !savedPassword) {
        if (messageElem) {
            messageElem.innerText = "Account does not exist. Please create an account.";
            messageElem.style.color = "red";
        }
    } else if (email === savedEmail && password === savedPassword) {
        if (messageElem) {
            messageElem.innerText = "Login successful! Redirecting to Homepage...";
            messageElem.style.color = "green";
        }

        // ✅ Save username for homepage greeting
        localStorage.setItem("username", savedName);

        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 1500);
    } else {
        if (messageElem) {
            messageElem.innerText = "Invalid credentials. Try again.";
            messageElem.style.color = "red";
        }
    }
}

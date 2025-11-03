/*window.onload = function() {
    const name = localStorage.getItem("userName");
    if (!name) {
        window.location.href = "login.html"; // Redirect if no user is found
    } else {
        document.getElementById("username").textContent = "Welcome, " + name;
        document.getElementById("welcome-text").textContent = "Welcome, " + name;
    }
};*/
document.addEventListener("DOMContentLoaded", () => {
        const profileMenu = document.querySelector(".profile-menu");
        const profileBtn = document.querySelector(".profile-btn");

        profileBtn.addEventListener("click", () => {
            profileMenu.classList.toggle("active");
        });

        // Close dropdown if clicked outside
        window.addEventListener("click", (e) => {
            if (!profileMenu.contains(e.target)) {
                profileMenu.classList.remove("active");
            }
        });
    });

function logout() {
    // Only remove session-specific data if you have any
    // But don't remove user data so that they can log in again
    window.location.href = "login.html";
}

function goDonor() {
    window.location.href = "donor.html";
}

function goHelp() {
    window.location.href = "help.html";
}
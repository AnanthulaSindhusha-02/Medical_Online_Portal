// Dropdown toggle
/*document.addEventListener("DOMContentLoaded", () => {
  const profileMenu = document.querySelector(".profile-menu");
  const profileBtn = document.querySelector(".profile-btn");

  profileBtn.addEventListener("click", () => {
    profileMenu.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target)) {
      profileMenu.classList.remove("active");
    }
  });
});

// Logout function
function logout() {
  alert("Logging out...");
  window.location.href = "login.html"; // redirect to login page
}

// Example of updating progress dynamically
window.onload = function () {
  let progress = document.querySelector(".progress");
  progress.style.width = "60%"; // example, later you can calculate based on points
};
*/
// Dropdown toggle
document.addEventListener("DOMContentLoaded", () => {
  const profileMenu = document.querySelector(".profile-menu");
  const profileBtn = document.querySelector(".profile-btn");

  if (profileBtn) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent window click from closing immediately
      profileMenu.classList.toggle("active");
    });
  }

  // Close dropdown when clicking outside
  window.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target)) {
      profileMenu.classList.remove("active");
    }
  });
});

// Logout function
function logout() {
  alert("Logging out...");
  window.location.href = "login.html"; // redirect to login page
}

// Navigation buttons
function goBack() {
  window.history.back(); // Go to previous page
}

function goHomepage() {
  window.location.href = "homepage.html"; // Change this to your homepage file
}

// Example of updating progress dynamically
window.onload = function () {
  let progress = document.querySelector(".progress");
  if (progress) {
    progress.style.width = "60%"; // Example, later calculate based on points
  }
};

window.onload = function() {
    var map = L.map('map').setView([17.385044, 78.486671], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample organ donation requests
    var organRequests = [
        {
            name: "Kiran Reddy",
            organ: "Kidney",
            location: [17.400, 78.500],
            contact: "9876543210",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/50.jpg"
        },
        {
            name: "Meena Sharma",
            organ: "Liver",
            location: [17.370, 78.480],
            contact: "9123456780",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/women/60.jpg"
        },
        {
            name: "Ramesh G",
            organ: "Heart",
            location: [17.390, 78.510],
            contact: "9988776655",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        }
    ];

    // Add markers
    organRequests.forEach(function(request) {
        L.marker(request.location).addTo(map)
            .bindPopup("<b>" + request.name + "</b><br>Organ Needed: " + request.organ + "<br>City: " + request.city + "<br>Contact: <a href='tel:" + request.contact + "'>" + request.contact + "</a>");
    });

    // Show details in panel
    var detailsDiv = document.getElementById("all-details");
    organRequests.forEach(function(request) {
        var card = document.createElement("div");
        card.className = "request-card";

        card.innerHTML = `
            <img src="${request.image}" alt="User Image" />
            <div class="request-content">
                <h4>${request.name}</h4>
                <p><strong>Organ Needed:</strong> ${request.organ}</p>
                <p><strong>City:</strong> ${request.city}</p>
                <p><strong>Contact:</strong> <a href="tel:${request.contact}">${request.contact}</a></p>
            </div>
        `;
        detailsDiv.appendChild(card);
    });

    // Optional: user location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            L.marker([lat, lon]).addTo(map)
                .bindPopup("You are here").openPopup();
            map.setView([lat, lon], 13);
        });
    }
};
// Dropdown toggle for profile menu
document.addEventListener("DOMContentLoaded", () => {
  const profileMenu = document.querySelector(".profile-menu");
  const profileBtn = document.querySelector(".profile-btn");

  if (profileBtn) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle("active");
    });
  }

  window.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target)) {
      profileMenu.classList.remove("active");
    }
  });
});

// Logout function
function logout() {
  alert("Logging out...");
  window.location.href = "login.html";
}

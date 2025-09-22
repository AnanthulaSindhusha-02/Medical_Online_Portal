window.onload = function() {
    var map = L.map('map').setView([17.385044, 78.486671], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample medical equipment donation requests
    var equipmentRequests = [
        {
            name: "Anita Rao",
            equipment: "Oxygen Cylinder",
            location: [17.395, 78.485],
            contact: "9876501234",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
            name: "Suresh Kumar",
            equipment: "Wheelchair",
            location: [17.375, 78.495],
            contact: "9988771122",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/70.jpg"
        },
        {
            name: "Lakshmi Devi",
            equipment: "Ventilator",
            location: [17.385, 78.505],
            contact: "9123456789",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/women/25.jpg"
        }
    ];

    // Add markers
    equipmentRequests.forEach(function(request) {
        L.marker(request.location).addTo(map)
            .bindPopup("<b>" + request.name + "</b><br>Equipment Needed: " + request.equipment + "<br>City: " + request.city + "<br>Contact: <a href='tel:" + request.contact + "'>" + request.contact + "</a>");
    });

    // Show details in panel
    var detailsDiv = document.getElementById("all-details");
    equipmentRequests.forEach(function(request) {
        var card = document.createElement("div");
        card.className = "request-card";

        card.innerHTML = `
            <img src="${request.image}" alt="User Image" />
            <div class="request-content">
                <h4>${request.name}</h4>
                <p><strong>Equipment Needed:</strong> ${request.equipment}</p>
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

window.onload = function() {
    var map = L.map('map').setView([17.385044, 78.486671], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample equipment donors
    var donors = [
        {
            name: "Ramesh Gupta",
            equipment: "Wheelchair",
            location: [17.400, 78.480],
            contact: "9123456789",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/88.jpg"
        },
        {
            name: "Sita Devi",
            equipment: "Oxygen Cylinder",
            location: [17.420, 78.510],
            contact: "9988771122",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/women/99.jpg"
        },
        {
            name: "Aruna Reddy",
            equipment: "Crutches",
            location: [17.370, 78.490],
            contact: "9876509876",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/women/27.jpg"
        }
    ];

    // Handle form submission
    document.getElementById("equipment-form").addEventListener("submit", function(e) {
        e.preventDefault();
        var selectedEquipment = document.getElementById("equipment").value;
        if (!selectedEquipment) {
            alert("Please select an equipment.");
            return;
        }
        showMatchingDonors(selectedEquipment);
    });

    function showMatchingDonors(equipment) {
        var detailsDiv = document.getElementById("all-details");
        detailsDiv.innerHTML = "";

        // Clear existing markers
        map.eachLayer(function(layer){
            if(layer instanceof L.Marker && !layer._popup._content.includes("You are here")) {
                map.removeLayer(layer);
            }
        });

        var matchingDonors = donors.filter(donor => donor.equipment === equipment);

        if (matchingDonors.length === 0) {
            detailsDiv.innerHTML = "<p>No donors available for this equipment.</p>";
            return;
        }

        matchingDonors.forEach(function(donor) {
            L.marker(donor.location).addTo(map)
                .bindPopup(`<b>${donor.name}</b><br>Equipment: ${donor.equipment}<br>City: ${donor.city}<br>Contact: <a href='tel:${donor.contact}'>${donor.contact}</a>`);

            var card = document.createElement("div");
            card.className = "request-card";

            card.innerHTML = `
                <img src="${donor.image}" alt="Donor Image" />
                <div class="request-content">
                    <h4>${donor.name}</h4>
                    <p><strong>Equipment:</strong> ${donor.equipment}</p>
                    <p><strong>City:</strong> ${donor.city}</p>
                    <p><strong>Contact:</strong> <a href="tel:${donor.contact}">${donor.contact}</a></p>
                </div>
            `;
            detailsDiv.appendChild(card);
        });
    }

    // Show user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            L.marker([lat, lon]).addTo(map).bindPopup("You are here").openPopup();
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

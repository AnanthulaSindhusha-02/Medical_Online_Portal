window.onload = function() {
    var map = L.map('map').setView([17.385044, 78.486671], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);

    // Sample organ donors
    var donors = [
        {
            name: "Rajesh Kumar",
            organ: "Kidney",
            location: [17.410, 78.520],
            contact: "9876543211",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            name: "Sneha Reddy",
            organ: "Liver",
            location: [17.365, 78.480],
            contact: "9876543222",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            name: "Anil Sharma",
            organ: "Heart",
            location: [17.395, 78.500],
            contact: "9876543233",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/34.jpg"
        }
    ];

    document.getElementById("organ-form").addEventListener("submit", function(e) {
        e.preventDefault();
        var selectedOrgan = document.getElementById("organ").value;
        if (!selectedOrgan) {
            alert("Please select an organ.");
            return;
        }
        showMatchingDonors(selectedOrgan);
    });

    function showMatchingDonors(organ) {
        var detailsDiv = document.getElementById("all-details");
        detailsDiv.innerHTML = "";

        // Clear old markers
        map.eachLayer(function(layer){
            if(layer instanceof L.Marker && !layer._popup._content.includes("You are here")) {
                map.removeLayer(layer);
            }
        });

        var matching = donors.filter(donor => donor.organ === organ);

        if (matching.length === 0) {
            detailsDiv.innerHTML = "<p>No donors available for this organ.</p>";
            return;
        }

        matching.forEach(function(donor) {
            L.marker(donor.location).addTo(map)
                .bindPopup("<b>" + donor.name + "</b><br>Organ: " + donor.organ + "<br>City: " + donor.city + "<br>Contact: <a href='tel:" + donor.contact + "'>" + donor.contact + "</a>");

            var card = document.createElement("div");
            card.className = "request-card";
            card.innerHTML = `
                <img src="${donor.image}" alt="Donor Image" />
                <div class="request-content">
                    <h4>${donor.name}</h4>
                    <p><strong>Organ:</strong> ${donor.organ}</p>
                    <p><strong>City:</strong> ${donor.city}</p>
                    <p><strong>Contact:</strong> <a href="tel:${donor.contact}">${donor.contact}</a></p>
                </div>
            `;
            detailsDiv.appendChild(card);
        });
    }

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
window.onload = function() {
    var map = L.map('map').setView([17.385044, 78.486671], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample donors stored in localStorage or defined here
    var donors = [
        {
            name: "Vikram Singh",
            bloodGroup: "A+",
            location: [17.410, 78.520],
            contact: "9988776655",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name: "Latha Reddy",
            bloodGroup: "O-",
            location: [17.360, 78.470],
            contact: "9876543210",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        {
            name: "Mahesh Babu",
            bloodGroup: "B+",
            location: [17.395, 78.500],
            contact: "9123456780",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        {
            name: "Ravi Kumar",
            bloodGroup: "A+",
            location: [17.420, 78.510],
            contact: "9988991122",
            city: "Hyderabad",
            image: "https://randomuser.me/api/portraits/men/44.jpg"
        }
    ];

    // Handle form submission
    document.getElementById("request-form").addEventListener("submit", function(e) {
        e.preventDefault();
        var selectedGroup = document.getElementById("blood-group").value;
        if (!selectedGroup) {
            alert("Please select a blood group.");
            return;
        }
        showMatchingDonors(selectedGroup);
    });

    function showMatchingDonors(group) {
        var detailsDiv = document.getElementById("all-details");
        detailsDiv.innerHTML = ""; // clear previous results

        // Clear existing markers
        map.eachLayer(function(layer){
            if(layer instanceof L.Marker && !layer._popup._content.includes("You are here")) {
                map.removeLayer(layer);
            }
        });

        var matchingDonors = donors.filter(donor => donor.bloodGroup === group);

        if (matchingDonors.length === 0) {
            detailsDiv.innerHTML = "<p>No donors available for this blood group.</p>";
            return;
        }

        matchingDonors.forEach(function(donor) {
            // Add marker
            L.marker(donor.location).addTo(map)
                .bindPopup("<b>" + donor.name + "</b><br>Blood Group: " + donor.bloodGroup + "<br>City: " + donor.city + "<br>Contact: <a href='tel:" + donor.contact + "'>" + donor.contact + "</a>");

            // Add to details panel
            var card = document.createElement("div");
            card.className = "request-card";
            
            card.innerHTML = `
                <img src="${donor.image}" alt="Donor Image" />
                <div class="request-content">
                    <h4>${donor.name}</h4>
                    <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
                    <p><strong>City:</strong> ${donor.city}</p>
                    <p><strong>Contact:</strong> <a href="tel:${donor.contact}">${donor.contact}</a></p>
                </div>
            `;
            detailsDiv.appendChild(card);
        });
    }

    // Optional: Show donor's current location
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

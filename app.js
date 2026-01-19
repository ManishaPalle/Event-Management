async function searchEvents() {
  const query = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  const defaultCards = document.getElementById("defaultCards");
  const container = document.getElementById("dynamicResults");

  container.innerHTML = "";

  // If search is empty → show all default cards
  if (query === "") {
    defaultCards.style.display = "grid";
    Array.from(defaultCards.children).forEach(
      (card) => (card.style.display = "block"),
    );
    return;
  }

  // Hide unmatched default cards
  defaultCards.style.display = "grid";
  Array.from(defaultCards.children).forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });

  const apiKey = "K2SvLnIewKuo7bN0p5e68PzfwC0LmFIW";
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&apikey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (
      data._embedded &&
      data._embedded.events &&
      data._embedded.events.length > 0
    ) {
      data._embedded.events.forEach((event) => {
        const imgUrl =
          event.images?.[0]?.url ||
          "https://via.placeholder.com/460x230?text=No+Image";
        const venueName = event._embedded?.venues?.[0]?.name || "Venue N/A";
        const date = event.dates?.start?.localDate || "Date N/A";

        container.innerHTML += `
          <div class="card">
            <img src="${imgUrl}">
            <h3>${event.name}</h3>
            <p>${date}</p>
            <p class="loc">${venueName}</p>
          </div>
        `;
      });
    }

    const hasDefaultMatches = Array.from(defaultCards.children).some(
      (card) => card.style.display === "block",
    );
    if (container.innerHTML === "" && !hasDefaultMatches) {
      container.innerHTML = "<p>No events found</p>";
    }
  } catch (err) {
    console.error("Error fetching events:", err);
    container.innerHTML = "<p>Something went wrong</p>";
  }
}

window.onload = function () {
  const defaultCards = document.getElementById("defaultCards");
  let events = JSON.parse(localStorage.getItem("events")) || [];

  events.forEach((e, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${e.img}">
      <span class="tag">New</span>
      <h3>${e.title}</h3>
      <p>${e.date}</p>
      <p class="loc">${e.location}</p>
      <button class="delete-btn" onclick="deleteEvent(${index})">Delete</button>
    `;

    defaultCards.prepend(card);
  });
};

function deleteEvent(index) {
  let events = JSON.parse(localStorage.getItem("events")) || [];

  if (confirm("Are you sure you want to delete this event?")) {
    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));
    location.reload();
  }
}

function checkAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    window.location.href = "create.html";
  } else {
    window.location.href = "login.html?fromCreate=true";
  }
}

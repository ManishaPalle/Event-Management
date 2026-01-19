function saveEvent() {
  const img = document.getElementById("eventImage").files[0];
  const title = eventTitle.value;
  const location = eventLocation.value;
  const date = eventDate.value;

  if (!img || !title || !location || !date) {
    alert("Fill all fields");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const event = {
      img: reader.result,
      title,
      location,
      date,
    };

    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));

    window.location.href = "index.html";
  };

  reader.readAsDataURL(img);
}

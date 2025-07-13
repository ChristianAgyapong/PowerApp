const sessions = [
  {
    time: "9:00 AM",
    title: "Opening Keynote: The Future of Tech",
    speaker: "Dr. Ama Owusu"
  },
  {
    time: "10:30 AM",
    title: "Design for Impact",
    speaker: "Nana Adwoa Asante"
  },
  {
    time: "12:00 PM",
    title: "AI in Healthcare",
    speaker: "Prof. Samuel Yeboah"
  },
  {
    time: "2:00 PM",
    title: "Building Startups in Africa",
    speaker: "Kofi Mensah"
  },
  {
    time: "4:00 PM",
    title: "Closing Panel & Networking",
    speaker: "All Speakers"
  }
];

const scheduleList = document.getElementById("scheduleList");

sessions.forEach((session) => {
  const div = document.createElement("div");
  div.className = "session";
  div.innerHTML = `
    <div class="session-time">${session.time}</div>
    <div class="session-title">${session.title}</div>
    <div class="session-speaker">Speaker: ${session.speaker}</div>
  `;
  scheduleList.appendChild(div);
});

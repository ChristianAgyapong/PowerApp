const speakers = [
  {
    name: "Dr. Ama Owusu",
    title: "AI Researcher, MIT",
    bio: "Pioneer in ethical machine learning and speaker at international AI summits."
  },
  {
    name: "Kofi Mensah",
    title: "CEO, FutureTech Africa",
    bio: "Tech entrepreneur driving innovation in West Africa’s startup ecosystem."
  },
  {
    name: "Nana Adwoa Asante",
    title: "UX Designer, Google",
    bio: "Focuses on inclusive design and mobile-first experiences for global products."
  },
  {
    name: "Prof. Samuel Yeboah",
    title: "Data Scientist, IBM",
    bio: "Leads AI in healthcare data analytics and speaks globally on ML in medicine."
  }
];

const grid = document.getElementById('speakerGrid');

speakers.forEach((speaker) => {
  const card = document.createElement('div');
  card.className = 'speaker-card';
  card.innerHTML = `
    <div class="speaker-name">${speaker.name}</div>
    <div class="speaker-title">${speaker.title}</div>
    <div class="speaker-bio">${speaker.bio}</div>
  `;
  grid.appendChild(card);
});

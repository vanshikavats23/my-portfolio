const projects = [
  {
    title: "College ERP Portal",
    description:
      "A full-stack ERP system for managing attendance, grades, and student events.",
    code: "https://github.com/vanshikavats23",
    demo: "#"
  },
  {
    title: "AgroMitra",
    description:
      "AI-powered soil analysis and smart farming platform with real-time weather data.",
    code: "https://github.com/vanshikavats23",
    demo: "#"
  }
];

const grid = document.getElementById("projectsGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-actions">
      <a href="${project.code}" target="_blank">View Code</a>
      <a href="${project.demo}" target="_blank">View Project</a>
    </div>
  `;

  grid.appendChild(card);
});


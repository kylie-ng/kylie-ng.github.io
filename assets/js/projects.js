const projects = [
    {
    title: "Skin Cancer Detection CNN",
    img: "/assets/img/cnn.png",
    desc: "An AI CNN classifying skin lesions.",
    tools: "Python, Pandas, Numpy, PyTorch, Git, Google Colab",
    accomplishments: [
      "Classified 10k+ images into 7 classes including malignant & benign"
    ],
    liveLink: "https://galvanic-music.herokuapp.com/",
    repoLink: "https://github.com/varadbhogayata/music-player"
  },
  {
    title: "GISelle",
    img: "/assets/img/giselle.jpg",
    desc: "A GIS made by women, for women.",
    tools: "C++, Glade, Git, OpenStreetMap API",
    accomplishments: [
      "Designed GUI for usability",
      "Developed and optimized algorithms (2-Opt, Multi-Start, TSP, Simulated Annealing)"
    ],
    liveLink: "https://quiz-up-app.herokuapp.com/",
    repoLink: "https://github.com/varadbhogayata/QuizUp"
  },
    {
    title: "Gyroball",
    img: "/assets/img/gyroball.png",
    desc: "A game of the classic Gyroball.",
    tools: "C, Assembly, CPULator",
    accomplishments: [
      "Connected PS/2 keyboard and VGA to render graphics",
      "Programmed on FPGA DE1-SoC board using Nios-V Processor"
    ],
    liveLink: "https://flask-heroku-blog.herokuapp.com/",
    repoLink: "https://github.com/varadbhogayata/flask-blog"
  }
];

let projectsToShow = 1; // show only latest initially

function displayProjects(count) {
  const container = document.getElementById("recent-projects");
  container.innerHTML = ""; // clear existing content

  for (let i = 0; i < count && i < projects.length; i++) {
    const proj = projects[i];

    const card = document.createElement("div");
    card.className = "col s12 m6 l4";

    card.innerHTML = `
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img src="${proj.img}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${proj.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${proj.desc}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            ${proj.accomplishments.map(a => `<li>${a}</li>`).join("")}
            <li><b>Tools:</b> ${proj.tools}</li>
          </ul>
          <div class="card-action">
            <a href="${proj.liveLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
            <a href="${proj.repoLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  }
}

// Initial display
displayProjects(projectsToShow);

// Load more button
document.getElementById("load-more").addEventListener("click", () => {
  projectsToShow++;
  displayProjects(projectsToShow);
});
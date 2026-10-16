const projects = [
  {
    number: "01",
    name: "EcoTrack",
    category: "Environmental Web App",
    description:
      "A carbon footprint tracker designed to help users understand their environmental impact.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahra263/project-eco-track.git",
    demo: "https://zahra263.github.io/project-eco-track/",
    symbol: "🌿",
    color: "from-emerald-100 to-teal-50",
  },
  {
    number: "02",
    name: "Digital Clock",
    category: "JavaScript Project",
    description:
      "A digital clock interface that displays the current time with a clean, responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahra263/digital-clock.git",
    demo: "https://zahra263.github.io/digital-clock/",
    symbol: "🕒",
    color: "from-purple-100 to-pink-100",
  },
  {
    number: "03",
    name: "Dice Game",
    category: "Interactive Web Game",
    description:
      "A fun dice game built to practice JavaScript logic, random numbers and DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahra263/dice-game.git",
    demo: "https://zahra263.github.io/dice-game/",
    symbol: "🎲",
    color: "from-rose-100 to-orange-50",
  },
  {
    number: "04",
    name: "myTunes",
    category: "Music Website",
    description:
      "A music-themed website focused on responsive layouts, typography and frontend styling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahra263/6-project.git",
    demo: "https://zahra263.github.io/6-project/",
    symbol: "🎧",
    color: "from-blue-100 to-violet-100",
  },
   {
    number: "05",
    name: "coloer-changer",
    category: "JavaScript Project",
    description:
      "A simple and interactive Color Changer app built with React.js that allows users to change background colors with a click. It helps practice React components, state management using `useState`, and event handling.",
    tech: ["Reaxt"],
    github: "https://github.com/zahra263/coloer-changer.git",
    demo: "https://coloer-changer.vercel.app/",
    symbol: "🎨",
    color: "from-purple-100 to-pink-100",
  },
   {
    number: "06",
    name: "Votting App",
    category: "React Project",
    description:
      "An interactive React Voting App where users can vote for candidates and view live vote counts.",
    tech: ["Reaxt"],
    github: "https://github.com/zahra263/Votting-App.git",
    demo: "https://votting-app-uo83.vercel.app/",
    symbol: "📨",
    color: "from-purple-100 to-pink-100",
  },
   {
    number: "07",
    name: "Todo-list",
    category: "React Project",
    description:
      "A simple React Todo List app to add, manage, and delete daily tasks efficiently.",
    tech: ["React"],
    github: "https://github.com/zahra263/Todo-List.git",
    demo: "https://todo-list-zahra263.vercel.app",
    symbol: ";-/",
    color: "from-purple-100 to-pink-100",
  },
   {
    number: "08",
    name: "Developer | Landing Page",
    category: "Practice Project",
    description:
      "A modern, responsive Developer Landing Page showcasing services, skills, and projects with a clean and professional design.",
    tech: ["HTML", "CSS",],
    github: "https://github.com/zahra263/4-project.git",
    demo: "https://zahra263.github.io/4-project/",
    symbol: "📄",
    color: "from-purple-100 to-pink-100",
  },
   {
    number: "09",
    name: "Fuel checker",
    category: "JavaScript Project",
    description:
      "A simple Fuel Checker app that helps users check fuel availability and manage fuel-related information with ease.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahra263/Fuel-Checker.git",
    demo: "https://zahra263.github.io/Fuel-Checker/",
    symbol: "⛽",
    color: "from-purple-100 to-pink-100",
  },
   {
    number: "10",
    name: "Counter-App",
    category: "React Project",
    description:
      "A simple React Counter App that lets users increment, decrement, and reset the count using interactive buttons.",
    tech: ["React"],
    github: "https://github.com/zahra263/Counter-App.git",
    demo: "https://counter-react-bay.vercel.app/",
    symbol: "🕒",
    color: "from-purple-100 to-pink-100",
  },
   {
    number: "11",
    name: "Hackathon-QuickServer",
    category: "JavaScript Project",
    description:
      "QuickServe is a hackathon project that connects users with service providers through an easy-to-use booking platform.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahra263/Hackathon-QuickServer.git",
    demo: "https://hackathon-quick-server-n1bone5oe-zahra263.vercel.app/",
    symbol: "⚙",
    color: "from-purple-100 to-pink-100",
  },
   {
    number: "12",
    name: "Mood App",
    category: "JavaScript Project",
    description:
     "A simple Mood App that lets users select their current mood using interactive emojis and enjoy a personalized experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/zahra263/Mood-app.git",
    demo: "https://zahra263.github.io/Mood-app/",
    symbol: "😔",
    color: "from-purple-100 to-pink-100",
  },
];

 function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-pink-100 bg-pink-50/50 px-5 py-20 dark:border-pink-950 dark:bg-[#201520] sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-pink-600 dark:text-pink-300">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Things I've <span className="text-pink-500">built.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-500 dark:text-pink-100/60">
            A collection of projects that reflect my learning,
            creativity and growing frontend experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="overflow-hidden rounded-3xl border border-pink-100 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-100 dark:border-pink-900 dark:bg-[#291b2a] dark:hover:shadow-none"
            >
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <span className="text-7xl transition duration-300 hover:scale-110">
                  {project.symbol}
                </span>

                <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-gray-700">
                  PROJECT {project.number}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-pink-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.name}
                </h3>

                <p className="mt-3 min-h-14 leading-7 text-gray-500 dark:text-pink-100/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-pink-50 px-3 py-1.5 text-xs font-medium text-pink-700 dark:bg-pink-950 dark:text-pink-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-5 border-t border-pink-100 pt-5 dark:border-pink-900">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-pink-600 hover:text-pink-800 dark:text-pink-300"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    className="font-semibold text-gray-600 hover:text-pink-600 dark:text-pink-100"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-pink-100/50">
          Replace the example GitHub and demo URLs with your
          actual project links before publishing.
        </p>
      </div>
    </section>
  );
}
export default Projects;
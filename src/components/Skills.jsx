const skills = [
  { name: "HTML5", level: "Comfortable", icon: "🌐" },
  { name: "CSS3", level: "Comfortable", icon: "🎨" },
  { name: "JavaScript", level: "Learning & Practicing", icon: "⚡" },
  { name: "React.js", level: "Learning & Building", icon: "⚛️" },
  { name: "Tailwind CSS", level: "Learning & Practicing", icon: "💨" },
  { name: "Bootstrap", level: "Familiar", icon: "🧩" },
  { name: "Git & GitHub", level: "Project workflow", icon: "🔗" },
  { name: "Firebase", level: "Project practice", icon: "🔥" },
];
function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-5 py-20 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-pink-600 dark:text-pink-300">
            My toolkit
          </p>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Skills & <span className="text-pink-500">tools.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-500 dark:text-pink-100/60">
            Technologies I use and continue to explore while
            building my frontend development skills.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-pink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100 dark:border-pink-900 dark:bg-[#211722] dark:hover:shadow-none"
            >
              <span className="text-3xl">{skill.icon}</span>

              <h3 className="mt-5 font-bold">{skill.name}</h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-pink-100/60">
                {skill.level}
              </p>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-pink-100 dark:bg-pink-950">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 transition-transform group-hover:scale-x-105" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;

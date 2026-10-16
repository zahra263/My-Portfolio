 function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-pink-100 bg-pink-50/60 px-5 py-20 dark:border-pink-950 dark:bg-[#201520] sm:py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-pink-600 dark:text-pink-300">
            Get to know me
          </p>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            A little about{" "}
            <span className="text-pink-500">me.</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-600 dark:text-pink-100/70">
            I'm a student and aspiring frontend developer
            passionate about turning ideas into interactive
            web experiences. I'm learning through hands-on
            practice, projects and continuous improvement.
          </p>

          <p className="mt-4 leading-8 text-gray-600 dark:text-pink-100/70">
            My focus is on writing clean code, building
            responsive layouts and improving my React skills
            one project at a time.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-pink-600 hover:gap-3 dark:text-pink-300"
          >
            Let's connect <span>→</span>
          </a>
        </div>
        

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              icon: "🎨",
              title: "Creative Design",
              text: "Thoughtful layouts with a clean, consistent look.",
            },
            {
              icon: "📱",
              title: "Responsive UI",
              text: "Interfaces designed for different screen sizes.",
            },
            {
              icon: "💻",
              title: "Clean Code",
              text: "Reusable React components and readable code.",
            },
            {
              icon: "🌱",
              title: "Always Learning",
              text: "Exploring new tools and improving my skills.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-pink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100 dark:border-pink-900 dark:bg-[#291b2a] dark:hover:shadow-none"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-pink-100/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;
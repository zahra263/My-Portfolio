 function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 py-20 sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl dark:bg-pink-600/10" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700 dark:border-pink-900 dark:bg-pink-950/60 dark:text-pink-200">
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            Frontend Developer in Progress
          </span>

          <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm
            <span className="block bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Fatima Zahra.
            </span>
            <span className="text-3xl sm:text-4xl">
              I build for the web.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 dark:text-pink-100/70 sm:text-lg">
            I'm a passionate frontend developer learning to
            create beautiful, responsive and user-friendly
            websites with React and modern web technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-pink-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-1 hover:bg-pink-600 dark:shadow-none"
            >
              Explore My Work ↗
            </a>

            <a
              href="#contact"
              className="rounded-full border border-pink-300 px-7 py-3.5 font-semibold transition hover:bg-pink-100 dark:border-pink-800 dark:hover:bg-pink-950"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-5 text-sm text-gray-500 dark:text-pink-100/60">
            <span>♡ Always learning</span>
            <span>✦ Building projects</span>
            
          </div>

<div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-pink-100/60">
  <div className="flex flex-col min-w-0">
    <strong className="text-xl font-bold text-gray-900 dark:text-pink-100">12+</strong>
    <span className="break-words">Projects</span>
  </div>

  <div className="flex flex-col min-w-0">
    <strong className="text-xl font-bold text-gray-900 dark:text-pink-100">8</strong>
    <span className="break-words">Technologies</span>
  </div>

  <div className="flex flex-col min-w-0">
    <strong className="text-xl font-bold text-gray-900 dark:text-pink-100">100%</strong>
    <span className="break-words">Responsive</span>
  </div>
</div>
          
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
          <div className="absolute inset-4 rotate-6 rounded-[2.5rem] bg-pink-200 dark:bg-pink-900/40" />

          <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-8 shadow-2xl shadow-pink-200/50 dark:border-pink-900 dark:from-[#301827] dark:via-[#211322] dark:to-[#24162f] dark:shadow-none">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-300 to-purple-300 text-5xl font-black text-white shadow-xl dark:border-pink-900">
              FZ
            </div>

            <p className="mt-7 text-2xl font-bold">Fatima Zahra</p>
            <p className="mt-2 text-center text-sm text-pink-700 dark:text-pink-200">
              Frontend Developer
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["React", "JavaScript", "Tailwind"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-pink-200 bg-white/80 px-3 py-2 text-xs font-medium text-pink-700 dark:border-pink-800 dark:bg-pink-950/70 dark:text-pink-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <span className="absolute right-7 top-7 text-3xl">✿</span>
            <span className="absolute bottom-7 left-7 text-3xl">♡</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
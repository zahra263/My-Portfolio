 function Navbar({ dark, setDark }) {
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pink-200/60 bg-white/85 backdrop-blur-xl dark:border-pink-900/50 dark:bg-[#160f18]/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-pink-600 dark:text-pink-300"
        >
          F.Z<span className="text-pink-400"></span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium transition hover:text-pink-500"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle color theme"
            className="rounded-full border border-pink-200 p-2.5 transition hover:bg-pink-100 dark:border-pink-800 dark:hover:bg-pink-950"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-600 sm:inline-block dark:shadow-none"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-3 pb-3 md:hidden">
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="text-xs font-medium text-pink-700 hover:text-pink-500 dark:text-pink-200"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
export default Navbar;
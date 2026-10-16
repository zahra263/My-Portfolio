function Footer() {
  return (
    <footer className="border-t border-pink-200 bg-pink-50/70 px-5 py-8 dark:border-pink-950 dark:bg-[#160f18] lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a
          href="#home"
          className="text-xl font-extrabold text-pink-600 dark:text-pink-300"
        >
          F.Z<span className="text-pink-400"></span>
        </a>

        <p className="text-sm text-gray-500 dark:text-pink-100/50">
          Designed with ♡ and built with React & Tailwind CSS.
        </p>

        <a
          href="#home"
          className="text-sm font-semibold text-pink-600 hover:text-pink-800 dark:text-pink-300"
        >
          Back to top ↑
        </a>
      </div>

      <p className="mt-6 text-center text-xs text-gray-400 dark:text-pink-100/40">
        © {new Date().getFullYear()} Fatima Zahra. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
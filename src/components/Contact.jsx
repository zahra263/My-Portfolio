import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 py-20 sm:py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-pink-600 dark:text-pink-300">
            Get in touch
          </p>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Let's create
            <span className="block text-pink-500">something lovely.</span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-gray-500 dark:text-pink-100/60">
            Have a project idea, internship opportunity or
            collaboration in mind? Feel free to reach out.
            I'd love to hear from you.
          </p>

          <div className="mt-9 space-y-5">
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="flex items-center gap-4"
            >
              
              <div>
                
                
                
                <p className="mt-1 font-semibold"> 
                  <a  
                  href="https://www.linkedin.com/in/fatima-zahra-0a924938a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4"
                  >
                     <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-xl dark:bg-pink-950">

                      💙
                
              </span>
               <div>
                <p className="text-sm text-gray-500 dark:text-pink-100/50">
                  Linkedin
                </p>
                <p className="mt-1 font-semibold">
                  https://www.linkedin.com/in/fatima-zahra
                </p>
              </div>

                  </a>
                </p>
              </div>
            </a>

            <a
              href="https://github.com/zahra263"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-xl dark:bg-pink-950">
                🔗
                
              </span>
              <div>
                <p className="text-sm text-gray-500 dark:text-pink-100/50">
                  GitHub
                </p>
                <p className="mt-1 font-semibold">
                  https://github.com/zahra263
                </p>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-pink-100 bg-white p-6 shadow-xl shadow-pink-100/60 dark:border-pink-900 dark:bg-[#291b2a] dark:shadow-none sm:p-8"
        >
          <h3 className="text-2xl font-bold">Send a message</h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-pink-100/50">
            Fill in the details to prepare an email.
          </p>

          <label className="mt-6 block text-sm font-semibold">
            Your name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-pink-900 dark:bg-[#1c131e] dark:focus:ring-pink-950"
          />

          <label className="mt-5 block text-sm font-semibold">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="sadiqfatima974@gmail.com"
            className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-pink-900 dark:bg-[#1c131e] dark:focus:ring-pink-950"
          />

          <label className="mt-5 block text-sm font-semibold">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell me about your idea..."
            className="mt-2 w-full resize-y rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-pink-900 dark:bg-[#1c131e] dark:focus:ring-pink-950"
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-pink-500 px-6 py-3.5 font-semibold text-white transition hover:bg-pink-600"
          >
            Prepare Email ↗
          </button>

          <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-pink-100/50">
            This form opens your email application. It does not
            send or store messages on a server.
          </p>
        </form>
      </div>
    </section>
  );
}
export default Contact;
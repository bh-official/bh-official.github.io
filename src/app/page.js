export default function Portfolio() {
  const projects = [
    {
      n: "CareerCraft",
      d: "AI Job Application Platform",
      l: "https://career-craftt.vercel.app/",
    },
    {
      n: "Meridian",
      d: "Global Appointments Tracker",
      l: "https://global-appointments-tracker.onrender.com/",
    },
    {
      n: "BookVerse",
      d: "Book Review Social Platform",
      l: "https://book-verse-blond.vercel.app/",
    },
    {
      n: "TechThreads",
      d: "Developer Discussion Forum",
      l: "https://tech-threads-nu.vercel.app",
    },
    {
      n: "Community Events Hub",
      d: "Full-Stack Event Management Platform",
      l: "https://fullstack-community-events-hub-client.onrender.com/",
    },
    {
      n: "Secure Auth System",
      d: "JWT Authentication Backend Project",
      l: "https://fullstack-community-events-hub-client.onrender.com/",
    },
    {
      n: "Guestbook App",
      d: "CRUD Guestbook with Likes & Validation",
      l: "https://full-stack-project-guest-book-client.onrender.com",
    },
    {
      n: "Accessible Image Gallery",
      d: "Responsive React gallery with search, accessibility & Unsplash API",
      l: "https://accessible-gallery-react-icec.onrender.com/",
    },
  ];

  const skillGroups = {
    Frontend: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
    Backend: ["Node.js", "Express.js", "REST APIs", "Server Actions"],
    Database: ["PostgreSQL", "MongoDB", "Supabase"],
    AuthSecurity: ["JWT", "Clerk", "Supabase Auth", "bcrypt"],
    Tools: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Render",
      "VS Code",
    ],
    Other: [
      "Accessibility",
      "Responsive Design",
      "State Management",
      "AI Integration",
      "OpenRouter API",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white font-sans scroll-smooth">
      <section className="px-8 md:px-20 py-24">
        <p className="text-emerald-400 font-semibold tracking-widest uppercase">
          Open to Opportunities
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-3 leading-tight">
          Bhuvaneswari Babu
        </h1>

        <p className="mt-4 text-2xl text-slate-200">Full Stack Developer</p>

        <p className="mt-6 max-w-2xl text-slate-300">
          I create secure, scalable and user-focused digital products with
          modern frontend experiences and reliable backend systems.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-5 py-3 rounded-2xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="px-8 md:px-20 pb-16">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                {group}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-8 md:px-20 pb-16">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              href={p.l}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-2xl font-bold">{p.n}</h3>

              <p className="mt-2 text-slate-300">{p.d}</p>

              <span className="mt-4 inline-block text-emerald-400">
                View Project →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 pb-24">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <p className="text-slate-300">info.bhuvaneswari@gmail.com</p>

        <p className="text-slate-300">
          LinkedIn: linkedin.com/in/bhuvaneswari-babu-60b8772b6
        </p>

        <p className="text-slate-500 mt-6">
          Available for junior developer opportunities.
        </p>

        <p className="text-slate-600 mt-2">© 2026 Bhuvaneswari Babu</p>
      </section>
    </div>
  );
}

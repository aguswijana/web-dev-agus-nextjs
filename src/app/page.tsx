"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    const themeStr = newTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeStr);
    localStorage.setItem("theme", themeStr);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container px-4">
          <a className="navbar-brand logo fw-bold fs-3 text-indigo" href="#">
            Agus.
          </a>
          <div className="d-flex align-items-center gap-3">
            <ul className="navbar-nav d-none d-md-flex flex-row gap-4 me-4">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#experience">Experience</a>
              </li>
            </ul>
            <button
              onClick={toggleTheme}
              className="btn btn-link theme-btn text-decoration-none p-2 border border-secondary-subtle rounded-3"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <i className="bi bi-sun-fill fs-5"></i>
              ) : (
                <i className="bi bi-moon-fill fs-5"></i>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="container mt-5 pt-5 pb-5 px-4" style={{ maxWidth: "900px" }}>
        {/* Section 1: About/Hero */}
        <section id="about" className="py-5 hero d-flex align-items-center">
          <div className="row w-100 g-5 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <p className="text-primary fw-bold mb-2 fs-5">Halo, perkenalkan saya</p>
              <h1 className="display-1 fw-bold tracking-tight mb-2">
                I Putu Agus Wijana
              </h1>
              <p className="fs-3 text-muted mb-4">Mahasiswa Primakara University</p>
              <p className="fs-5 text-muted-main leading-relaxed mb-0">
                Saya adalah individu yang aktif berorganisasi dan memiliki ketertarikan yang tinggi dalam
                pengembangan diri. Menggabungkan kehidupan akademis dan komitmen sosial adalah motivasi utama saya.
              </p>
            </div>
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div className="profile-img-wrapper position-relative">
                <img
                  src="/profil.JPG"
                  alt="I Putu Agus Wijana"
                  className="rounded-circle shadow-lg border border-4 border-white shadow-lg"
                  style={{ width: "220px", height: "220px", objectFit: "cover" }}
                />
                <div className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"
                  style={{ width: "24px", height: "24px", transform: "translate(-15%, -15%)" }}>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Education */}
        <section id="education" className="py-5">
          <h2 className="section-title h2 fw-bold mb-5 pb-2">Pendidikan</h2>
          <div className="card shadow-sm border-0 p-4 d-flex flex-row align-items-center gap-4">
            <div className="bg-light dark:bg-dark p-4 rounded-circle fs-1 shadow-sm">
              🎓
            </div>
            <div>
              <h3 className="h4 fw-bold mb-1">Primakara University</h3>
              <p className="text-muted mb-0">Mahasiswa Aktif</p>
            </div>
          </div>
        </section>

        {/* Section 3: Experience */}
        <section id="experience" className="py-5">
          <h2 className="section-title h2 fw-bold mb-5 pb-2">Pengalaman</h2>
          <div className="timeline">
            {[
              { title: "Panitia", org: "Xd fiesta" },
              { title: "Panitia Keamanan", org: "Makrab IF 2025" },
              { title: "Panitia Keamanan", org: "PMB Gemilang 2025" },
            ].map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="card shadow-sm p-4 border-0">
                  <h3 className="h5 fw-bold text-primary mb-1">{exp.title}</h3>
                  <h4 className="h6 text-muted mb-0 fw-normal">{exp.org}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-5 mt-5 border-top border-secondary-subtle">
        <div className="container text-center text-muted small">
          <p className="mb-0">&copy; 2025 I Putu Agus Wijana. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .text-indigo { color: #4f46e5; }
        :global([data-theme='dark']) .bg-light { background-color: #374151 !important; }
        .text-muted-main { color: var(--text-muted); }
      `}</style>
    </>
  );
}

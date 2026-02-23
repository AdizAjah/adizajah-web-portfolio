"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Briefcase,
  Mail,
  Download,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Terminal,
  Languages,
  Menu,
  X
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- FUNGSI SMOOTH SCROLL ---
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Mencegah lompatan instan default

    // Tutup menu mobile jika terbuka
    if (isMenuOpen) setIsMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Hitung posisi scroll
      // Jika di mobile (header fixed), kita butuh offset. 
      // Di desktop, header tidak fixed di atas, jadi offset 0.
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 70 : 0; // 70px kira-kira tinggi header mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navIcons = {
    ME: <User size={18} />,
    EDUCATION: <GraduationCap size={18} />,
    SKILL: <Code2 size={18} />,
    PROJECT: <FolderGit2 size={18} />,
    EXPERIENCE: <Briefcase size={18} />,
    SAYA: <User size={18} />,
    PENDIDIKAN: <GraduationCap size={18} />,
    KEAHLIAN: <Code2 size={18} />,
    PROYEK: <FolderGit2 size={18} />,
    PENGALAMAN: <Briefcase size={18} />,
  };

  const navItems = [
    { name: t.nav.me, href: "#me" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.skill, href: "#skill" },
    { name: t.nav.project, href: "#project" },
    { name: t.nav.experience, href: "#experience" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-white selection:text-black relative">

      {/* --- Mobile Header --- */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black border-b-2 border-white z-50 flex items-center justify-between px-4 md:hidden">
        <h1 className="text-lg font-bold tracking-wider">PORTFOLIO_</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="p-2 border-2 border-zinc-700 hover:border-white transition-colors"
            aria-label="Toggle Language"
          >
            <Languages size={18} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border-2 border-zinc-700 hover:border-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* --- Overlay --- */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* --- Navigation Sidebar --- */}
      <nav className={`
        fixed left-0 top-0 h-full w-64 bg-black border-r-2 border-white flex flex-col justify-between p-6 z-40
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:w-64
      `}>
        <div>
          <h1 className="hidden md:block text-2xl font-bold border-b-2 border-white pb-2">
            PORTFOLIO_
          </h1>
          <div className="flex justify-between items-center md:hidden border-b-2 border-zinc-800 pb-2 mb-4">
            <span className="font-bold">MENU_</span>
            <button onClick={() => setIsMenuOpen(false)}><X size={20} /></button>
          </div>
        </div>

        <div className="mb-4 md:mb-0 hidden md:block">
          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="w-full flex items-center justify-center gap-2 px-2 py-2 border-2 border-zinc-700 hover:border-white hover:bg-white hover:text-black transition-colors text-xs font-bold tracking-wider"
          >
            <Languages size={16} />
            <span>{language === 'en' ? 'INDONESIA' : 'ENGLISH'}</span>
          </button>
        </div>

        <div className="flex flex-col gap-1 mt-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)} // Diubah: Tambahkan handler smooth scroll
              className="flex items-center gap-4 px-2 py-2 border border-transparent hover:border-white hover:bg-white hover:text-black transition-colors duration-100 group"
            >
              <span>{navIcons[item.name as keyof typeof navIcons] || <User size={18} />}</span>
              <span className="text-sm font-bold tracking-wider">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")} // Diubah: Tambahkan handler smooth scroll
            className="flex items-center justify-center gap-2 px-2 py-3 border-2 border-white bg-white text-black font-bold hover:bg-black hover:text-white transition-colors text-sm tracking-wider"
          >
            <Mail size={18} />
            <span>{t.nav.contact}</span>
          </a>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="ml-0 md:ml-64 border-l-0 md:border-l-2 border-white min-h-screen pt-16 md:pt-0 relative z-10">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>

        {/* === HERO / ME SECTION === */}
        <section id="me" className="min-h-screen flex flex-col justify-center p-6 md:p-16 border-b-2 border-white">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-12">

            {/* IMAGE CONTAINER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative w-[220px] h-[280px] md:w-[320px] md:h-[400px] border-2 border-white bg-zinc-900">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Profile Photo"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            </motion.div>

            {/* TEXT CONTAINER */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 md:gap-6 text-center md:text-left w-full"
            >
              <div>
                <p className="text-zinc-500 mb-2 text-xs md:text-sm">{t.hero.greeting}</p>
                <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tight border-b-4 border-white pb-2 inline-block">
                  {t.hero.name}
                </h1>
              </div>

              <h2 className="text-lg md:text-2xl font-bold text-white">
                {t.hero.role}
              </h2>

              <div className="border-2 border-zinc-700 p-4 bg-zinc-950 max-w-lg mx-auto md:mx-0 w-full">
                <p className="text-zinc-300 leading-relaxed text-xs md:text-sm mb-4">
                  {t.hero.about1}
                </p>
                <p className="text-zinc-400 leading-relaxed text-xs md:text-sm flex items-center justify-center md:justify-start gap-1">
                  {t.hero.about2} <MapPin size={12} className="inline text-white" />
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center md:justify-start">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")} // Diubah: Tambahkan handler smooth scroll
                  className="px-6 py-3 border-2 border-white bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors text-sm"
                >
                  <Terminal size={16} /> {t.hero.hire_me}
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-white text-white font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors text-sm"
                >
                  <Download size={16} /> {t.hero.resume}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 border-t-2 border-zinc-800 pt-6 mt-4 justify-center md:justify-start items-center">
                <div className="flex gap-4 text-zinc-400">
                  <a href="#" className="hover:text-white border border-zinc-800 p-2 hover:border-white transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-white border border-zinc-800 p-2 hover:border-white transition-colors"><Linkedin size={20} /></a>
                </div>
                <div className="flex gap-6 text-xs md:text-sm text-zinc-500 border-l-0 sm:border-l-2 border-zinc-800 pl-0 sm:pl-6">
                  <span><span className="text-white font-bold">3+</span> {t.hero.years_exp}</span>
                  <span><span className="text-white font-bold">10+</span> {t.hero.projects}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* === EDUCATION SECTION === */}
        <section id="education" className="py-16 md:py-20 px-6 md:px-16 border-b-2 border-white">
          {/* Konten Education tetap sama... */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-wider">&lt;{t.education.title}&gt;</h2>
            <div className="w-20 md:w-32 h-1 bg-white mb-8 md:mb-10"></div>

            <div className="space-y-6 border-l-4 border-zinc-700 pl-6 md:pl-8 ml-2">
              {t.education.list.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[1.85rem] md:-left-[2.65rem] top-0 w-4 h-4 bg-white border-2 border-white"></div>
                  <div className="border-2 border-zinc-700 p-4 md:p-5 hover:border-white transition-colors bg-zinc-950">
                    <span className="text-xs font-bold text-zinc-500 border border-zinc-700 px-2 py-1">{edu.year}</span>
                    <h3 className="text-lg md:text-xl font-bold mt-3 text-white uppercase">{edu.title}</h3>
                    <p className="text-zinc-400 mt-2 text-xs md:text-sm">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-10 text-zinc-600 uppercase tracking-wider">&lt;/{t.education.title}&gt;</h2>
          </div>
        </section>

        {/* === SKILLS SECTION === */}
        <section id="skill" className="py-16 md:py-20 px-6 md:px-16 bg-zinc-950 border-b-2 border-white">
          {/* Konten Skill tetap sama... */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-wider">&lt;{t.skills.title}&gt;</h2>
            <div className="w-20 md:w-32 h-1 bg-white mb-8 md:mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="border-2 border-zinc-700 p-5 hover:border-white transition-colors group">
                <h3 className="text-base md:text-lg font-bold text-white mb-4 uppercase border-b-2 border-zinc-800 pb-2">{t.skills.languages}</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'Python', 'Go'].map((skill) => (
                    <span key={skill} className="px-3 py-1 border border-zinc-700 text-xs md:text-sm text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-2 border-zinc-700 p-5 hover:border-white transition-colors group">
                <h3 className="text-base md:text-lg font-bold text-white mb-4 uppercase border-b-2 border-zinc-800 pb-2">{t.skills.frameworks}</h3>
                <div className="flex flex-wrap gap-2">
                  {['React / Next.js', 'Tailwind CSS', 'Node.js', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 border border-zinc-700 text-xs md:text-sm text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-10 text-zinc-600 uppercase tracking-wider">&lt;/{t.skills.title}&gt;</h2>
          </div>
        </section>

        {/* === PROJECTS SECTION === */}
        <section id="project" className="py-16 md:py-20 px-6 md:px-16 border-b-2 border-white">
          {/* Konten Project tetap sama... */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-wider">&lt;{t.projects.title}&gt;</h2>
            <div className="w-20 md:w-32 h-1 bg-white mb-8 md:mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.projects.list.map((project, index) => (
                <div key={index} className="border-2 border-zinc-700 hover:border-white transition-colors group bg-zinc-950 flex flex-col">
                  <div className="h-40 bg-zinc-900 border-b-2 border-zinc-700 relative">
                    <span className="absolute top-2 right-2 text-xs border border-zinc-700 px-2 py-1 text-zinc-500">IMG_00{index + 1}</span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-base md:text-lg font-bold text-white uppercase">{project.title}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-2 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs text-zinc-500 border border-zinc-800 px-2">{tech}</span>
                      ))}
                    </div>
                    <button className="mt-4 w-full border-2 border-white py-2 text-xs md:text-sm font-bold text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                      {t.projects.view} <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-10 text-zinc-600 uppercase tracking-wider">&lt;/{t.projects.title}&gt;</h2>
          </div>
        </section>

        {/* === EXPERIENCE SECTION === */}
        <section id="experience" className="py-16 md:py-20 px-6 md:px-16 bg-zinc-950 border-b-2 border-white">
          {/* Konten Experience tetap sama... */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-wider">&lt;{t.experience.title}&gt;</h2>
            <div className="w-20 md:w-32 h-1 bg-white mb-8 md:mb-10"></div>

            <div className="space-y-6">
              {t.experience.list.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row border-2 border-zinc-700 hover:border-white transition-colors p-4 md:p-6 gap-2 md:gap-4">
                  <div className="md:w-1/4 text-zinc-500 text-xs md:text-sm font-bold border-b md:border-b-0 md:border-r border-zinc-800 pb-2 md:pb-0 md:pr-4 flex items-center">
                    {exp.period}
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1">@ {exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-10 text-zinc-600 uppercase tracking-wider">&lt;/{t.experience.title}&gt;</h2>
          </div>
        </section>

        {/* === CONTACT SECTION === */}
        <section id="contact" className="py-16 md:py-20 px-6 md:px-16">
          <div className="text-center max-w-2xl mx-auto border-2 border-white p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wider">{t.contact.title}</h2>
            <p className="text-zinc-400 mb-6 md:mb-8 text-xs md:text-sm mt-4">
              {t.contact.subtitle}
            </p>
            <a
              href="mailto:youremail@example.com"
              className="inline-block px-6 md:px-8 py-3 md:py-4 border-2 border-white bg-white text-black font-bold text-base md:text-lg hover:bg-black hover:text-white transition-colors tracking-wider"
            >
              {t.contact.button} &rarr;
            </a>
          </div>
        </section>

        <footer className="py-8 text-center text-zinc-600 border-t-2 border-zinc-900 text-xs font-bold tracking-widest px-4">
          <p>© {new Date().getFullYear()} WEWOOOO // BUILT WITH NEXT_JS</p>
        </footer>

      </main>
    </div>
  );
}
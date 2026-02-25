"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
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
  X,
  Wrench,
  MessageCircle, // Icon untuk WhatsApp
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

const skillIcons: { [key: string]: string } = {
  JavaScript: "https://cdn.simpleicons.org/javascript/white",
  PHP: "https://cdn.simpleicons.org/php/white",
  Dart: "https://cdn.simpleicons.org/dart/white",
  Python: "https://cdn.simpleicons.org/python/white",
  Laravel: "https://cdn.simpleicons.org/laravel/white",
  Flutter: "https://cdn.simpleicons.org/flutter/white",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/white",
  Git: "https://cdn.simpleicons.org/git/white",
  Figma: "https://cdn.simpleicons.org/figma/white",
  "VS Code": "https://cdn.simpleicons.org/visualstudiocode/white",
};

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const bgTextTopRef = useRef<HTMLDivElement>(null);
  const bgTextBottomRef = useRef<HTMLDivElement>(null);

  const images = ["/Museum Angkut.jpg", "/haha.png"];

  useEffect(() => {
    if (bgTextTopRef.current) {
      gsap.to(bgTextTopRef.current, {
        xPercent: -50,
        duration: 35,
        repeat: -1,
        ease: "none",
      });
    }
    if (bgTextBottomRef.current) {
      // Different speed or direction can be nice, let's go same but slightly offset or reversed
      gsap.set(bgTextBottomRef.current, { xPercent: -50 });
      gsap.to(bgTextBottomRef.current, {
        xPercent: 0,
        duration: 35,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  // --- FUNGSI SMOOTH SCROLL ---
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 70 : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
        <div className="fixed inset-0 bg-black bg-opacity-60 z-30 md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* --- Navigation Sidebar --- */}
      <nav className={`
        fixed left-0 top-0 h-full w-64 bg-black border-r-2 border-white flex flex-col justify-between p-6 z-40
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:w-64
      `}>
        <div>
          <h1 className="hidden md:block text-2xl font-bold border-b-2 border-white pb-2">ADIZ_PORT...</h1>
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
              onClick={(e) => handleNavClick(e, item.href)}
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
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center justify-center gap-2 px-2 py-3 border-2 border-white bg-white text-black font-bold hover:bg-black hover:text-white transition-colors text-sm tracking-wider"
          >
            <Mail size={18} />
            <span>{t.nav.contact}</span>
          </a>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="ml-0 md:ml-64 border-l-0 md:border-l-2 border-white min-h-screen pt-16 md:pt-0 relative z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>

        {/* === HERO / ME SECTION === */}
        <section id="me" className="min-h-screen flex flex-col justify-center p-6 md:p-16 border-b-2 border-white relative overflow-hidden">
          {/* Background Animation - Top */}
          <div className="absolute top-10 inset-x-0 pointer-events-none -z-10 opacity-[0.10] select-none flex items-start whitespace-nowrap">
            <div
              ref={bgTextTopRef}
              className="text-[100px] md:text-[200px] font-black uppercase flex gap-20 w-max"
            >
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              {/* Duplicate set for seamless loop */}
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
            </div>
          </div>

          {/* Background Animation - Bottom */}
          <div className="absolute bottom-10 inset-x-0 pointer-events-none -z-10 opacity-[0.10] select-none flex items-end whitespace-nowrap">
            <div
              ref={bgTextBottomRef}
              className="text-[100px] md:text-[200px] font-black uppercase flex gap-20 w-max"
            >
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              {/* Duplicate set for seamless loop */}
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
              <span>ADIZAJAH</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="shrink-0 cursor-pointer group/img"
              onClick={() => setActiveImage((prev) => (prev === 0 ? 1 : 0))}
            >
              <div className="relative w-[220px] h-[280px] md:w-[320px] md:h-[400px] border-2 border-white bg-zinc-900 overflow-hidden">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={images[activeImage]}
                    alt="Rainadiz Danendra Nugroho"
                    layout="fill"
                    objectFit="cover"
                    className="grayscale group-hover/img:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-4 md:gap-6 text-center md:text-left w-full">
              <div>
                <p className="text-zinc-500 mb-2 text-xs md:text-sm">{t.hero.greeting}</p>
                <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tight border-b-4 border-white pb-2 inline-block">
                  {t.hero.name}
                </h1>
              </div>

              <h2 className="text-lg md:text-2xl font-bold text-white">{t.hero.role}</h2>

              <div className="border-2 border-zinc-700 p-4 bg-zinc-950 max-w-lg mx-auto md:mx-0 w-full">
                <p className="text-zinc-300 leading-relaxed text-xs md:text-sm mb-4">{t.hero.about1}</p>
                <p className="text-zinc-400 leading-relaxed text-xs md:text-sm flex items-center justify-center md:justify-start gap-1">
                  {t.hero.about2} <MapPin size={12} className="inline text-white" />
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center md:justify-start">
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="px-6 py-3 border-2 border-white bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors text-sm">
                  <Terminal size={16} /> {t.hero.hire_me}
                </a>
                <a href="/Resume - Rainadiz Nugroho.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-white text-white font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors text-sm">
                  <Download size={16} /> {t.hero.resume}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 border-t-2 border-zinc-800 pt-6 mt-4 justify-center md:justify-start items-center">
                <div className="flex gap-4 text-zinc-400">
                  <a href="https://github.com/AdizAjah" target="_blank" className="hover:text-white border border-zinc-800 p-2 hover:border-white transition-colors"><Github size={20} /></a>
                  <a href="https://www.linkedin.com/in/rainadiz-danendra-nugroho-834b5331b/" target="_blank" className="hover:text-white border border-zinc-800 p-2 hover:border-white transition-colors"><Linkedin size={20} /></a>
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
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-wider">&lt;{t.skills.title}&gt;</h2>
            <div className="w-20 md:w-32 h-1 bg-white mb-8 md:mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Programming Languages */}
              <div className="border-2 border-zinc-700 p-5 hover:border-white transition-colors group">
                <h3 className="text-base md:text-lg font-bold text-white mb-4 uppercase border-b-2 border-zinc-800 pb-2">{t.skills.languages}</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'PHP', 'Dart', 'Python'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 border border-zinc-700 text-xs md:text-sm text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer flex items-center gap-2 group/skill">
                      {skillIcons[skill] && (
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          className="w-4 h-4 transition-all group-hover/skill:invert"
                        />
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="border-2 border-zinc-700 p-5 hover:border-white transition-colors group">
                <h3 className="text-base md:text-lg font-bold text-white mb-4 uppercase border-b-2 border-zinc-800 pb-2">{t.skills.frameworks}</h3>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'Flutter', 'Next.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 border border-zinc-700 text-xs md:text-sm text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer flex items-center gap-2 group/skill">
                      {skillIcons[skill] && (
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          className="w-4 h-4 transition-all group-hover/skill:invert"
                        />
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="border-2 border-zinc-700 p-5 hover:border-white transition-colors group">
                <h3 className="text-base md:text-lg font-bold text-white mb-4 uppercase border-b-2 border-zinc-800 pb-2">{t.skills.tools}</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Figma', 'VS Code'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 border border-zinc-700 text-xs md:text-sm text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer flex items-center gap-2 group/skill">
                      {skillIcons[skill] && (
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          className="w-4 h-4 transition-all group-hover/skill:invert"
                        />
                      )}
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
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-wider">&lt;{t.projects.title}&gt;</h2>
            <div className="w-20 md:w-32 h-1 bg-white mb-8 md:mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.projects.list.map((project, index) => (
                <div key={index} className="border-2 border-zinc-700 hover:border-white transition-colors group bg-zinc-950 flex flex-col">
                  <div className="h-40 bg-zinc-900 border-b-2 border-zinc-700 relative">
                    <span className="absolute top-2 right-2 text-xs border border-zinc-700 px-2 py-1 text-zinc-500">IMG_00{index + 1}</span>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="grayscale hover:grayscale-0 transition-all duration-200"
                    />
                  </div>
                  <div className="p-5 grow flex flex-col">
                    <h3 className="text-base md:text-lg font-bold text-white uppercase">{project.title}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-2 grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs text-zinc-500 border border-zinc-800 px-2">{tech}</span>
                      ))}
                    </div>

                    {/* Tombol diubah menjadi tag <a> */}
                    <a
                      href={project.link || "#"} // Mengambil link dari data
                      target="_blank" // Membuka di tab baru
                      rel="noopener noreferrer" // Keamanan standar
                      className="mt-4 w-full border-2 border-white py-2 text-xs md:text-sm font-bold text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                    >
                      {t.projects.view} <ExternalLink size={14} />
                    </a>

                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-10 text-zinc-600 uppercase tracking-wider">&lt;/{t.projects.title}&gt;</h2>
          </div>
        </section>

        {/* === EXPERIENCE SECTION === */}
        <section id="experience" className="py-16 md:py-20 px-6 md:px-16 bg-zinc-950 border-b-2 border-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 uppercase tracking-wider">&lt;{t.experience.title}&gt;</h2>
            <div className="w-20 md:w-32 h-1 bg-white mb-8 md:mb-10"></div>

            <div className="space-y-6">
              {t.experience.list.map((exp: any, index: number) => (
                <div key={index} className="flex flex-col md:flex-row border-2 border-zinc-700 hover:border-white transition-colors p-4 md:p-6 gap-2 md:gap-4 group/exp">
                  <div className="md:w-1/4 relative overflow-hidden text-zinc-500 text-xs md:text-sm font-bold border-b md:border-b-0 md:border-r border-zinc-800 pb-2 md:pb-0 md:pr-4 flex items-center min-h-[60px] md:min-h-[100px]">
                    {/* DEBUG: Background Image */}
                    {exp.image ? (
                      <>
                        <img
                          src={exp.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                        />
                        {/* <span className="absolute bottom-0 left-0 text-[8px] bg-red-500 z-50">{exp.image}</span> */}
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-red-900/20 z-0">MISSING</div>
                    )}
                    <span className="relative z-10 bg-black/80 px-3 py-1 backdrop-blur-md border border-white/20 text-white">
                      {exp.period}
                    </span>
                  </div>
                  <div className="md:w-3/4 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1">@ {exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-10 text-zinc-600 uppercase tracking-wider">&lt;/{t.experience.title}&gt;</h2>
          </div>
        </section>

        {/* === CONTACT SECTION (MODIFIED) === */}
        <section id="contact" className="py-16 md:py-20 px-6 md:px-16 relative overflow-hidden">
          {/* Wall of Text Background Pattern - Randomized Stagger */}
          <div className="absolute inset-0 -z-10 opacity-[0.15] select-none pointer-events-none overflow-hidden flex flex-col">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="whitespace-nowrap text-[20px] md:text-[32px] leading-tight tracking-[0.2em] font-black uppercase text-white"
                style={{ marginLeft: `-${Math.random() * 200}px` }}
              >
                {Array(40).fill("ADIZAJAH ").join("")}
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto border-2 border-white p-6 md:p-10 bg-black/80 backdrop-blur-sm relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wider">{t.contact.title}</h2>
            <p className="text-zinc-400 mb-6 md:mb-8 text-xs md:text-sm mt-4">{t.contact.subtitle}</p>

            {/* Container untuk Tombol */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Tombol Email (Existing) */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rainadizdanendra@gmail.com"
                target="_blank"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white bg-white text-black font-bold text-sm md:text-base hover:bg-black hover:text-white transition-colors tracking-wider"
              >
                <Mail size={18} />
                {t.contact.button}
              </a>

              {/* Tombol WhatsApp (New) */}
              <a
                href="https://wa.me/6285727149998" // GANTI DENGAN NOMOR WHATSAPP ANDA (Format: 628xxx tanpa + atau spasi)
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold text-sm md:text-base hover:bg-white hover:text-black transition-colors tracking-wider"
              >
                <MessageCircle size={18} />
                WHATSAPP
              </a>

            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-zinc-600 border-t-2 border-zinc-900 text-xs font-bold tracking-widest px-4">
          <p>© {new Date().getFullYear()} ADIZ // BUILT WITH NEXT_JS</p>
        </footer>
      </main>
    </div>
  );
}
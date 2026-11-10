import { ArrowRight, Download, Atom, Wind, Code, FileCode, GitBranch } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects, stack } from "../data/projects";

const stackIcons = { atom: Atom, wind: Wind, code: Code, html: FileCode, git: GitBranch };

const label = "text-[9px] uppercase tracking-[0.16em] text-neutral-600";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-10 pt-5.5 sm:pl-7.5 sm:pr-5 xl:max-w-6xl xl:px-12 xl:py-12 2xl:max-w-[1500px] 2xl:px-16 2xl:py-16">
      {/* Hero */}
      <section id="home" className="grid items-center gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(220px,30%)] xl:gap-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-800/70 bg-green-900/60 px-2.5 py-0.5 text-[9px] leading-none text-green-400 xl:px-3 xl:py-1 xl:text-xs 2xl:gap-2 2xl:px-4 2xl:py-2 2xl:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Available for opportunities
        </span>

        <p className="mt-1 text-[10px] text-green-400 xl:mt-3 xl:text-sm 2xl:mt-5 2xl:text-lg">Hi, I&apos;m Prenz John Paul Belir</p>

        <h1 className="-mt-0.25 max-w-2xl text-[30px] font-bold leading-[1.15] tracking-tight text-white sm:text-[30px] xl:mt-1 xl:max-w-4xl xl:text-5xl xl:leading-[1.1] 2xl:max-w-6xl 2xl:text-7xl">
          Computer Engineer. Aspiring Software Developer.
        </h1>

        <p className="mt-3.5 max-w-[320px] text-[9px] leading-[1.1] text-neutral-400 xl:mt-5 xl:max-w-xl xl:text-sm xl:leading-relaxed 2xl:mt-6 2xl:max-w-3xl 2xl:text-lg">
          A Computer Engineering graduate building practical web applications and exploring AI-powered
          solutions. Focused on learning, solving problems, and turning ideas into functional software.
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5 xl:mt-6 xl:gap-3 2xl:mt-8">
          <a
            href="#projects"
            className="inline-flex h-[21px] items-center gap-1.5 rounded-md bg-white px-2.5 text-[9px] font-medium text-black transition-colors hover:bg-neutral-200 xl:h-10 xl:gap-2 xl:px-4 xl:text-sm 2xl:h-12 2xl:px-5 2xl:text-base"
          >
            View projects <ArrowRight size={14} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-[21px] items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 text-[9px] font-medium text-neutral-200 transition-colors hover:border-neutral-500 xl:h-10 xl:gap-2 xl:px-4 xl:text-sm 2xl:h-12 2xl:px-5 2xl:text-base"
          >
            <Download size={14} /> Download resume
          </a>
        </div>
        </div>
        <figure className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-2xl border border-neutral-700 bg-[#191919] xl:max-w-none 2xl:max-h-[480px]">
          <img
            src="/graduation-photo.jpg"
            alt="Prenz John Paul Belir in graduation attire"
            className="absolute inset-0 h-full w-full object-cover object-[center_50%]"
          />
          <figcaption className="absolute bottom-2 left-3 right-3 rounded-xl border border-white/15 bg-[#191919]/90 px-3 py-1.5 shadow-lg backdrop-blur-sm xl:bottom-3 xl:left-4 xl:right-4">
            <p className="text-[10px] font-semibold text-white xl:text-xs">BS Computer Engineering</p>
            <p className="mt-0.5 text-[9px] text-neutral-300 xl:text-[10px]">RTU Pasig, 2025</p>
          </figcaption>
        </figure>
      </section>

      {/* Tech */}
      <section className="mt-6 xl:mt-12 2xl:mt-16">
        <p className={`${label} mb-1 xl:mb-3 xl:text-[11px] 2xl:mb-4 2xl:text-sm`}>Tech I use</p>
        <div className="flex flex-wrap gap-1.5 xl:gap-2 2xl:gap-3">
          {stack.map(({ name, icon, color }) => {
            const Icon = stackIcons[icon];
            return (
              <span
                key={name}
                className="inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-900/60 px-2 py-0.5 text-[9px] text-neutral-300 xl:gap-2 xl:px-3 xl:py-1.5 xl:text-xs 2xl:gap-3 2xl:px-4 2xl:py-2 2xl:text-sm"
              >
                <Icon size={12} className={`xl:h-4 xl:w-4 2xl:h-5 2xl:w-5 ${color}`} />
                {name}
              </span>
            );
          })}
        </div>
      </section>

      {/* Featured projects */}
      <section id="projects" className="mt-[23px] xl:mt-12 2xl:mt-16">
        <div className="mb-0.5 flex items-center justify-between xl:mb-3 2xl:mb-4">
          <p className={`${label} xl:text-[11px] 2xl:text-sm`}>Featured projects</p>
          <a href="#projects" className="text-[9px] text-green-500 hover:text-green-400 xl:text-xs 2xl:text-sm">
            See all
          </a>
        </div>
        <div className="grid gap-2 sm:grid-cols-3 xl:gap-4 2xl:gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}

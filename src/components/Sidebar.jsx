"use client";

import { Home, User, FolderKanban, Code2, FileText, GitBranch, Mail, Moon, Sun } from "lucide-react";
import { projects } from "../data/projects";

const nav = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Stack", href: "#stack", icon: Code2 },
  { label: "Resume", href: "#resume", icon: FileText },
];

const socials = [
  { label: "GitHub", href: "https://github.com/your-username", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", text: "in" },
  { label: "Email", href: "mailto:you@email.com", icon: Mail },
];

export default function Sidebar({ active, onNavigate, isDayTheme, onToggleTheme }) {
  return (
    <>
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-neutral-800 bg-[#1d1d1f] px-4 md:hidden">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-[9px] font-semibold text-white">
            PB
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-[#1d1d1f] bg-green-500" />
          </div>
          <span className="text-xs font-medium text-white">Prenz Belir</span>
        </div>
        <button
          type="button"
          aria-label={isDayTheme ? "Switch to night theme" : "Switch to day theme"}
          aria-pressed={isDayTheme}
          onClick={onToggleTheme}
          className="text-neutral-400 transition-colors hover:text-white"
        >
          {isDayTheme ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </header>

      <aside className="hidden w-[130px] shrink-0 flex-col border-r border-neutral-800 bg-[#1d1d1f] md:flex md:w-[152px] xl:w-[152px] 2xl:w-[188px]">
        <div className="flex items-center gap-1.5 border-b border-neutral-800 p-2.5 xl:gap-2.5 xl:p-3.5 2xl:gap-3 2xl:p-5">
          <div className="relative">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-[9px] font-semibold text-white xl:h-9 xl:w-9 xl:text-xs 2xl:h-11 2xl:w-11 2xl:text-sm">
              PB
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-[#1a1a1a] bg-green-500" />
          </div>
          <div className="leading-tight">
            <p className="text-[8px] font-semibold leading-tight text-white xl:text-[10px] 2xl:text-sm">Prenz John Paul Belir</p>
            <p className="text-[8px] leading-tight text-neutral-500 xl:text-[10px] 2xl:text-xs">Available</p>
          </div>
        </div>

        <nav className="flex-1 p-2 xl:p-3 2xl:p-5">
          <p className="mb-1.5 px-1 text-[7px] font-medium uppercase tracking-wider text-neutral-600 xl:mb-2 xl:text-[9px] 2xl:mb-3 2xl:text-[10px]">Navigate</p>
          <ul className="space-y-0.5 xl:space-y-1 2xl:space-y-1">
            {nav.map(({ label, href, icon: Icon }, index) => (
              <li key={label}>
                <a
                  href={href}
                  aria-keyshortcuts={`${index + 1}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(label, href)
                  }}
                  className={`flex items-center gap-2 rounded-md px-1.5 py-1.5 text-[9px] transition-colors xl:gap-2.5 xl:px-2 xl:py-2 xl:text-xs 2xl:gap-3 2xl:px-3 2xl:py-2.5 2xl:text-sm ${
                    active === label
                      ? label === 'Resume'
                        ? 'border-l-2 border-blue-400 bg-blue-500/15 text-blue-400'
                        : 'border-l-2 border-green-400 bg-green-500/15 text-green-400'
                      : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-white'
                  }`}
                >
                  <kbd className="w-2 text-center text-[8px] text-neutral-500 xl:text-[9px]">{index + 1}</kbd>
                  <Icon size={14} className="2xl:h-[18px] 2xl:w-[18px]" />
                  <span className="flex-1">{label}</span>
                  {label === 'Projects' && <span className="text-[10px] text-neutral-500 2xl:text-xs">{projects.length}</span>}
                </a>
              </li>
            ))}
          </ul>

          <p className="mb-1.5 mt-5 px-1 text-[7px] font-medium uppercase tracking-wider text-neutral-600 xl:mt-6 xl:text-[9px] 2xl:mb-3 2xl:mt-8 2xl:text-[10px]">Find me</p>
          <div className="flex gap-1 px-0.5 xl:gap-1.5 2xl:gap-2">
            {socials.map(({ label, href, icon: Icon, text }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-6 w-6 items-center justify-center rounded-md border border-neutral-700 text-neutral-400 transition-colors hover:border-neutral-500 hover:text-white xl:h-8 xl:w-8 2xl:h-10 2xl:w-10"
              >
                {Icon ? <Icon size={13} className="2xl:h-[18px] 2xl:w-[18px]" /> : <span className="text-[10px] font-bold 2xl:text-sm">{text}</span>}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-between border-t border-neutral-800 px-2.5 py-2 xl:px-3 xl:py-3 2xl:px-5 2xl:py-4">
          <span className="text-[7px] text-neutral-600 xl:text-[9px] 2xl:text-[10px]">Learning React + Tailwind</span>
          <button
            type="button"
            aria-label={isDayTheme ? 'Switch to night theme' : 'Switch to day theme'}
            aria-pressed={isDayTheme}
            onClick={onToggleTheme}
            className="text-neutral-500 transition-colors hover:text-white"
          >
            {isDayTheme ? <Sun size={12} className="2xl:h-[18px] 2xl:w-[18px]" /> : <Moon size={12} className="2xl:h-[18px] 2xl:w-[18px]" />}
          </button>
        </div>
      </aside>

      <nav aria-label="Mobile navigation" className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-neutral-800 bg-[#1d1d1f] pb-[env(safe-area-inset-bottom)] md:hidden">
        {nav.map(({ label, href, icon: Icon }, index) => (
          <a
            key={label}
            href={href}
            aria-keyshortcuts={`${index + 1}`}
            aria-current={active === label ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault()
              onNavigate(label, href)
            }}
            className={`flex min-h-[58px] flex-col items-center justify-center gap-1 text-[9px] transition-colors ${
              active === label ? 'text-green-400' : 'text-neutral-500'
            }`}
          >
            <Icon size={17} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

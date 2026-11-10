import { Cpu, Eye, Globe } from "lucide-react";

const label = "text-[9px] uppercase tracking-[0.16em] text-neutral-500 xl:text-[8px]";
const card = "rounded-xl border border-neutral-800 bg-[#191919] p-4";

const details = [
  ["Based in", "Cainta, Rizal"],
  ["Education", "Computer Engineering"],
  ["Focus", "Web + AI"],
  ["Status", "Available for opportunities"],
];

const journey = [
  { date: "Now", title: "Learning React + Tailwind", current: true },
  { date: "[Project dates]", title: "AI fish sorting system" },
  { date: "[Graduation year]", title: "Graduated, Computer Engineering" },
];

const interests = ["Photography", "Basketball", "Favorite activity", "New interest"];

const focusAreas = [
  {
    title: "Web apps",
    description: "Clean, responsive UIs.",
    icon: Globe,
    color: "bg-blue-500/15 text-blue-400",
  },
  {
    title: "Computer vision",
    description: "AI that sees and decides.",
    icon: Eye,
    color: "bg-green-500/15 text-green-400",
  },
  {
    title: "Automation",
    description: "Software meets hardware.",
    icon: Cpu,
    color: "bg-amber-500/15 text-amber-400",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pb-10 pt-8 sm:pl-7.5 sm:pr-5 md:mx-0 md:pb-10 md:pl-[36px] md:pr-[39px] md:pt-[35px] xl:mx-auto xl:max-w-[930px] xl:py-0 xl:pt-4 xl:pl-[36px] xl:pr-[36px] 2xl:max-w-[1500px] 2xl:pt-12 2xl:pl-[56px] 2xl:pr-[56px]">
      <p className={`${label} text-green-500 2xl:text-[11px]`}>About</p>
      <h2 className="mt-1 text-2xl font-bold leading-tight text-white md:text-[26px] xl:mt-1 xl:text-lg 2xl:mt-2 2xl:text-[32px]">
        A bit about me
      </h2>

      <div className="mt-4 grid gap-3.5 sm:grid-cols-3 md:mt-[7px] md:grid-cols-[1.6fr_1fr] md:gap-x-[15px] md:gap-y-[15px] xl:mt-0 xl:grid-cols-[1.6fr_1fr] xl:gap-x-[10px] xl:gap-y-[10px] 2xl:mt-4 2xl:gap-x-4 2xl:gap-y-4">
        <article className={`${card} flex gap-3.5 sm:col-span-2 md:col-span-1 md:min-h-[161px] md:p-[18px] xl:col-span-1 xl:min-h-[115px] xl:gap-3 xl:p-3 2xl:min-h-[210px] 2xl:gap-5 2xl:p-7`}>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-900 text-base font-semibold text-white md:h-[52px] md:w-[52px] md:text-lg xl:h-[38px] xl:w-[38px] xl:text-sm 2xl:h-16 2xl:w-16 2xl:text-xl">
            PB
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white xl:text-xs 2xl:text-xl">Hi, I&apos;m Prenz John Paul Belir</h3>
            <p className="mt-1.5 max-w-2xl text-[11px] leading-relaxed text-neutral-400 md:text-xs xl:mt-1.5 xl:text-[9px] 2xl:mt-3 2xl:text-base">
              A Computer Engineering graduate building practical web applications and exploring AI-powered
              solutions. Focused on learning, solving problems, and turning ideas into functional software.
            </p>
          </div>
        </article>

        <article className={`${card} md:min-h-[161px] md:p-[18px] xl:min-h-[115px] xl:p-3 2xl:min-h-[210px] 2xl:p-7`}>
          <dl className="divide-y divide-neutral-800">
            {details.map(([term, value]) => (
              <div key={term} className="flex items-center justify-between gap-3 py-2 first:pt-0 last:pb-0 md:py-1.5 xl:py-0.5 2xl:py-2">
                <dt className="text-[10px] text-neutral-500 xl:text-[9px] 2xl:text-sm">{term}</dt>
                <dd className={`text-right text-[10px] xl:text-[9px] 2xl:text-sm ${term === "Status" ? "text-green-400" : "text-neutral-200"}`}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        <article className={`${card} sm:col-span-2 md:col-span-1 md:min-h-[172px] md:p-3 xl:col-span-1 xl:min-h-[122px] xl:p-3 2xl:min-h-[230px] 2xl:p-6`}>
          <h3 className={`${label} 2xl:text-[11px]`}>My journey</h3>
          <ol className="mt-3 space-y-2 xl:mt-2 xl:space-y-1 2xl:mt-5 2xl:space-y-4">
            {journey.map(({ date, title, current }) => (
              <li key={date} className="relative flex gap-3">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full 2xl:mt-2 2xl:h-2.5 2xl:w-2.5 ${current ? "bg-green-400" : "bg-neutral-600"}`} />
                <div>
                  <p className={`text-[10px] xl:text-[8px] xl:leading-tight 2xl:text-sm ${current ? "text-green-400" : "text-neutral-500"}`}>{date}</p>
                  <p className="mt-0.5 text-[11px] font-medium text-neutral-200 xl:mt-0 xl:text-[9px] xl:leading-tight 2xl:mt-1 2xl:text-base">{title}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className={`${card} md:min-h-[172px] xl:min-h-[122px] xl:p-3 2xl:min-h-[230px] 2xl:p-6`}>
          <h3 className={`${label} 2xl:text-[11px]`}>Beyond code</h3>
          <div className="mt-3 flex flex-wrap gap-1.5 xl:mt-2 xl:gap-1 2xl:mt-5 2xl:gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-neutral-800 px-2.5 py-1 text-[10px] text-neutral-400 xl:px-2 xl:py-0.5 xl:text-[9px] 2xl:px-4 2xl:py-2 2xl:text-sm"
              >
                [{interest}]
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-5 md:mt-5 xl:mt-5 2xl:mt-8">
        <h3 className={`${label} mb-2.5 md:mb-0 xl:mb-[-4px] 2xl:mb-1 2xl:text-[11px]`}>What I&apos;m focused on</h3>
        <div className="grid gap-3 sm:grid-cols-3 md:gap-2.5 xl:gap-2 2xl:gap-4">
          {focusAreas.map(({ title, description, icon: Icon, color }) => (
            <article key={title} className={`${card} min-h-0 md:min-h-[110px] md:p-[18px] xl:min-h-[78px] xl:p-3 2xl:min-h-[145px] 2xl:p-6`}>
              <div className={`flex h-7 w-7 items-center justify-center rounded-md md:h-6 md:w-6 xl:h-4 xl:w-4 2xl:h-9 2xl:w-9 ${color}`}>
                <Icon size={14} className="2xl:h-5 2xl:w-5" />
              </div>
              <h4 className="mt-2 text-xs font-semibold text-white xl:mt-1.5 xl:text-[10px] 2xl:mt-3 2xl:text-base">{title}</h4>
              <p className="mt-1 text-[10px] text-neutral-400 xl:mt-0.5 xl:text-[8px] 2xl:mt-1 2xl:text-sm">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

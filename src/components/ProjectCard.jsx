import { Table2, Tablet, Cloud } from "lucide-react";

const icons = { table: Table2, tablet: Tablet, cloud: Cloud };

export default function ProjectCard({ title, desc, tags, icon, color }) {
  const Icon = icons[icon] ?? Table2;

  return (
    <article className="self-start overflow-hidden rounded-lg border border-neutral-800 bg-[#1a1a1a] transition-colors hover:border-neutral-600">
      <div className={`flex h-[66px] items-center justify-center xl:h-28 2xl:h-40 ${color}`}>
        <Icon size={18} className="text-white/70 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8" />
      </div>
      <div className="p-1.5 xl:p-4 2xl:p-6">
        <h3 className="text-[9px] font-semibold leading-none text-white xl:text-sm xl:leading-snug 2xl:text-lg">{title}</h3>
        <p className="mt-1 text-[8px] leading-[1.1] text-neutral-500 xl:mt-2 xl:text-xs xl:leading-relaxed 2xl:mt-3 2xl:text-base">{desc}</p>
        <div className="mt-1.5 flex flex-col items-start gap-1 xl:mt-3 xl:gap-2 2xl:mt-4 2xl:gap-3">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-neutral-700 px-2 py-0 text-[7px] text-neutral-300 xl:px-2.5 xl:py-0.5 xl:text-[10px] 2xl:px-3 2xl:py-1 2xl:text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

import { useMemo, useState } from 'react'
import {
  Atom,
  Brain,
  Camera,
  Cloud,
  Code2,
  Cpu,
  Database,
  Eye,
  FileCode2,
  Flame,
  GitBranch,
  Globe,
  MessageSquareText,
  ScanLine,
  Search,
  Terminal,
  Wind,
} from 'lucide-react'
import { tools } from '../data/tools'

const icons = {
  atom: Atom,
  brain: Brain,
  camera: Camera,
  cloud: Cloud,
  code: Code2,
  cpu: Cpu,
  database: Database,
  eye: Eye,
  file: FileCode2,
  flame: Flame,
  git: GitBranch,
  globe: Globe,
  message: MessageSquareText,
  scan: ScanLine,
  terminal: Terminal,
  wind: Wind,
}

const tones = {
  blue: 'bg-blue-950 text-blue-400',
  green: 'bg-green-950 text-green-400',
  amber: 'bg-amber-950 text-amber-400',
  purple: 'bg-purple-950 text-purple-400',
  cyan: 'bg-cyan-950 text-cyan-400',
}

const categories = ['All', ...new Set(tools.map(({ category }) => category))]

export default function Stack() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const normalizedQuery = query.trim().toLowerCase()

  const filteredTools = useMemo(
    () => tools.filter((tool) => {
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory
      const searchableText = `${tool.name} ${tool.category} ${tool.description} ${tool.usedIn ?? ''}`
      return matchesCategory && searchableText.toLowerCase().includes(normalizedQuery)
    }),
    [activeCategory, normalizedQuery],
  )

  const groupedTools = categories
    .slice(1)
    .map((category) => ({
      category,
      items: filteredTools.filter((tool) => tool.category === category),
    }))
    .filter(({ items }) => items.length > 0)

  return (
    <div className="mx-auto max-w-6xl px-5 pb-10 pt-5 sm:px-7 xl:px-12 xl:py-12 2xl:max-w-[1500px] 2xl:px-16 2xl:py-16">
      <header className="mb-5 flex items-end justify-between gap-4 xl:mb-7">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-400 xl:text-xs">Stack</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white xl:text-3xl">Tools I work with</h1>
        </div>
        <span className="pb-1 text-xs text-neutral-500">{filteredTools.length} tools</span>
      </header>

      <label className="flex h-10 items-center gap-2 rounded-lg border border-neutral-800 bg-[#191919] px-3 text-neutral-500 focus-within:border-neutral-600">
        <Search size={16} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tools..."
          aria-label="Search tools"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-neutral-200 outline-none placeholder:text-neutral-600"
        />
      </label>

      <div className="mt-3 flex flex-wrap gap-2" aria-label="Filter tools by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
              activeCategory === category
                ? 'border-neutral-100 bg-neutral-100 text-neutral-900'
                : 'border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6 xl:mt-8 xl:space-y-8">
        {groupedTools.map(({ category, items }) => (
          <section key={category} aria-label={category}>
            <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-neutral-500">
              <h2>{category}</h2>
              <span className="h-px flex-1 bg-neutral-800" />
              <span>{items.length} {items.length === 1 ? 'tool' : 'tools'}</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 xl:gap-3">
              {items.map(({ name, description, usedIn, icon, tone }) => {
                const Icon = icons[icon]
                return (
                  <article
                    key={name}
                    className="min-w-0 rounded-xl border border-neutral-800 bg-[#191919] p-3 transition-colors hover:border-neutral-700 xl:p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tones[tone]}`}>
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xs font-semibold text-neutral-100 xl:text-sm">{name}</h3>
                        <p className="mt-1 text-[11px] leading-relaxed text-neutral-400 xl:text-xs">{description}</p>
                        {usedIn && <p className="mt-2 text-[10px] text-neutral-500">Used in: {usedIn}</p>}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
        {filteredTools.length === 0 && (
          <p className="rounded-xl border border-neutral-800 bg-[#191919] px-4 py-8 text-center text-sm text-neutral-400">
            No tools match your search.
          </p>
        )}
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Stack from '@/components/Stack'
import Sidebar from '@/components/Sidebar'

export default function App() {
  const mainRef = useRef(null)
  const initialHash = window.location.hash
  const [activePage, setActivePage] = useState(
    initialHash === '#about'
      ? 'About'
      : initialHash === '#resume'
        ? 'Resume'
        : initialHash === '#stack'
          ? 'Stack'
          : 'Home',
  )
  const [isDayTheme, setIsDayTheme] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'day',
  )
  const [activeNav, setActiveNav] = useState(
    ['#about', '#projects', '#stack', '#resume'].includes(initialHash)
      ? initialHash.slice(1).replace(/^./, (letter) => letter.toUpperCase())
      : 'Home',
  )

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', isDayTheme ? 'day' : 'night')
  }, [isDayTheme])

  useEffect(() => {
    const syncPageToLocation = () => {
      const hash = window.location.hash
      setActivePage(
        hash === '#about'
          ? 'About'
          : hash === '#resume'
            ? 'Resume'
            : hash === '#stack'
              ? 'Stack'
              : 'Home',
      )
      setActiveNav(
        ['#about', '#projects', '#stack', '#resume'].includes(hash)
          ? hash.slice(1).replace(/^./, (letter) => letter.toUpperCase())
          : 'Home',
      )
      mainRef.current?.scrollTo(0, 0)
    }

    window.addEventListener('popstate', syncPageToLocation)
    window.addEventListener('hashchange', syncPageToLocation)
    return () => {
      window.removeEventListener('popstate', syncPageToLocation)
      window.removeEventListener('hashchange', syncPageToLocation)
    }
  }, [])

  const handleNavigate = (label, href) => {
    setActiveNav(label)
    setActivePage(
      label === 'About' ? 'About' : label === 'Resume' ? 'Resume' : label === 'Stack' ? 'Stack' : 'Home',
    )
    window.history.pushState(null, '', href)

    if (label !== 'Projects') {
      mainRef.current?.scrollTo(0, 0)
      return
    }

    requestAnimationFrame(() => {
      document.getElementById('projects')?.scrollIntoView({ block: 'start' })
    })
  }

  useEffect(() => {
    const shortcuts = [
      ['Home', '#home'],
      ['About', '#about'],
      ['Projects', '#projects'],
      ['Stack', '#stack'],
      ['Resume', '#resume'],
    ]

    const handleKeyDown = (event) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return

      const target = event.target
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
      ) {
        return
      }

      const shortcut = shortcuts[Number(event.key) - 1]
      if (shortcut) {
        event.preventDefault()
        handleNavigate(...shortcut)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      data-theme={isDayTheme ? 'day' : 'night'}
      className="min-h-screen bg-[#111111] p-2.5 text-neutral-200 antialiased md:p-3.5 xl:p-2.5 2xl:p-5"
    >
      <div className="relative flex h-[calc(100dvh-1.25rem)] min-h-0 flex-col overflow-hidden rounded-xl border border-neutral-800 bg-[#111111] md:h-[calc(100vh-1.75rem)] md:flex-row md:rounded-none md:border-0 2xl:h-[calc(100vh-2.5rem)]">
        <Sidebar
          active={activeNav}
          isDayTheme={isDayTheme}
          onNavigate={handleNavigate}
          onToggleTheme={() => setIsDayTheme((current) => !current)}
        />
        <main ref={mainRef} className="min-h-0 min-w-0 flex-1 overflow-y-auto pb-[58px] md:pb-0">
          <div key={activePage} className="page-transition">
            {activePage === 'About'
              ? <About />
              : activePage === 'Resume'
                ? <Resume />
                : activePage === 'Stack'
                  ? <Stack />
                  : <Home />}
          </div>
        </main>
      </div>
    </div>
  )
}

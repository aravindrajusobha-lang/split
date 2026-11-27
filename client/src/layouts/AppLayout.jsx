import { NavLink, Outlet } from 'react-router-dom'
import { Bell, ChartNoAxesCombined, CircleHelp, CreditCard, LayoutDashboard, Menu, Moon, Settings2, Sun, UsersRound, WalletCards } from 'lucide-react'
import { useTheme } from '../app/ThemeProvider'
import Brand from '../components/Brand'

const nav = [
  { label: 'Overview', to: '/', icon: LayoutDashboard },
  { label: 'Household', to: '/household', icon: UsersRound },
  { label: 'Bills', to: '/bills', icon: WalletCards },
  { label: 'Payments', to: '/payments', icon: CreditCard },
  { label: 'Reports', to: '/reports', icon: ChartNoAxesCombined },
]

export default function AppLayout() {
  const { theme, toggleTheme } = useTheme()
  return <div className="min-h-screen bg-[#f6f8fb] text-ink dark:bg-slate-950 dark:text-slate-100 lg:flex">
    <aside className="hidden h-screen w-[248px] shrink-0 flex-col border-r border-line bg-white px-5 py-6 dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-0 lg:flex">
      <Brand />
      <button className="mt-9 flex w-full items-center gap-3 rounded-xl border border-line p-3 text-left hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:hover:bg-slate-800" aria-label="Switch household">
        <span className="grid size-9 place-items-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-500/10"><UsersRound size={18} /></span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">The Parkers</span><span className="text-xs text-muted">Household</span></span><span className="text-muted">⌄</span>
      </button>
      <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Workspace</p>
      <nav aria-label="Main navigation" className="space-y-1">{nav.map(({ label, to, icon: Icon }) => <NavLink end={to === '/'} key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-100' : 'text-slate-500 hover:bg-slate-50 hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`}><Icon size={18} />{label}</NavLink>)}</nav>
      <div className="mt-auto rounded-2xl bg-gradient-to-br from-brand-600 to-[#2860a8] p-4 text-white"><div className="mb-3 grid size-9 place-items-center rounded-lg bg-white/15"><CircleHelp size={18} /></div><p className="text-sm font-semibold">Need a hand?</p><p className="mt-1 text-xs leading-5 text-blue-100">We’re here to make shared bills easier.</p><button className="mt-3 text-xs font-semibold underline underline-offset-4">Visit help center</button></div>
      <div className="mt-5 flex items-center gap-3 border-t border-line pt-5 dark:border-slate-800"><div className="grid size-9 place-items-center rounded-full bg-[#f3d6c7] text-xs font-bold text-[#82543d]">JD</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Jordan Davis</p><p className="text-xs text-muted">Admin</p></div><button aria-label="Settings" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"><Settings2 size={17} /></button></div>
    </aside>
    <div className="min-w-0 flex-1">
      <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-line bg-white/90 px-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 sm:px-8 lg:px-10"><div className="flex items-center gap-3 lg:hidden"><button aria-label="Open menu" className="rounded-lg p-2 text-slate-500"><Menu size={20} /></button><Brand compact /><span className="text-sm font-semibold text-[#e8444d]">Split</span></div><div className="hidden text-sm text-slate-400 lg:block">Friday, November 27, 2026</div><div className="ml-auto flex items-center gap-2 sm:gap-4"><button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:text-slate-300 dark:hover:bg-slate-800">{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</button><button aria-label="Notifications" className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><Bell size={19} /><span className="absolute right-2 top-2 size-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" /></button><div className="ml-1 grid size-9 place-items-center rounded-full bg-[#f3d6c7] text-xs font-bold text-[#82543d] lg:hidden">JD</div></div></header>
      <main className="mx-auto max-w-[1440px] px-4 pb-24 pt-7 sm:px-8 sm:pt-9 lg:px-10 lg:pb-10"><Outlet /></main>
    </div>
    <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-white/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95 lg:hidden">{nav.map(({ label, to, icon: Icon }) => <NavLink end={to === '/'} key={to} to={to} className={({ isActive }) => `flex flex-col items-center gap-1 rounded-lg py-1 text-[10px] font-medium ${isActive ? 'text-brand-600 dark:text-brand-300' : 'text-slate-400'}`}><Icon size={19} />{label}</NavLink>)}</nav>
  </div>
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/75">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-zinc-50">
          ClosetIQ
        </h1>

        <div className="hidden gap-8 font-medium text-zinc-600 md:flex dark:text-zinc-300">

          <a href="#" className="transition-all duration-300 hover:text-violet-500">
            Features
          </a>

          <a href="#" className="transition-all duration-300 hover:text-violet-500">
            Dashboard
          </a>

          <a href="#" className="transition-all duration-300 hover:text-violet-500">
            Pricing
          </a>

          <a href="#" className="transition-all duration-300 hover:text-violet-500">
            Contact
          </a>

        </div>

        <button className="premium-button-primary px-6 py-3">
          Get Started
        </button>

      </div>

    </nav>
  )
}

export default Navbar

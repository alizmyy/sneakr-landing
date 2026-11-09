function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="flex items-center gap-1.5 font-display text-lg font-bold uppercase">
          Sneakr
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-volt" aria-hidden="true">
            <path d="M13 2 4 14h6l-1 8 11-12h-6l-1-8Z" />
          </svg>
        </p>

        <nav className="flex gap-6 text-sm text-white/50">
          <a className="transition-colors hover:text-volt" href="#drop">Дроп</a>
          <a className="transition-colors hover:text-volt" href="#collection">Коллекция</a>
          <a className="transition-colors hover:text-volt" href="#about">О нас</a>
        </nav>

        <p className="text-sm text-white/40">© 2026 SNEAKR — все права защищены</p>
      </div>
    </footer>
  )
}

export default Footer

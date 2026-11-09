import { motion } from 'framer-motion'

/* Шапка сайта. Она «прилипает» к верху экрана (fixed) и выглядит как
   матовое стекло: полупрозрачный фон + backdrop-blur */
function Header() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }} /* стартует выше экрана и невидимой */
      animate={{ y: 0, opacity: 1 }} /* приезжает на место при загрузке */
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-md sm:px-6">
        {/* Логотип */}
        <a href="#drop" className="flex items-center gap-1.5 font-display text-xl font-bold uppercase">
          Sneakr
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-volt" aria-hidden="true">
            <path d="M13 2 4 14h6l-1 8 11-12h-6l-1-8Z" />
          </svg>
        </a>

        {/* Меню (на телефонах прячется, md:flex — видно от планшета и выше) */}
        <nav className="hidden gap-8 text-sm font-semibold text-white/70 md:flex">
          <a className="transition-colors hover:text-volt" href="#drop">Дроп</a>
          <a className="transition-colors hover:text-volt" href="#collection">Коллекция</a>
          <a className="transition-colors hover:text-volt" href="#about">О нас</a>
        </nav>

        {/* Кнопка корзины со свечением при наведении */}
        <button className="rounded-full border border-volt/50 px-5 py-2 text-sm font-bold text-volt transition-all hover:bg-volt hover:text-black hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]">
          Корзина · 0
        </button>
      </div>
    </motion.header>
  )
}

export default Header

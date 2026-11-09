import { motion } from 'framer-motion'
import Sneaker from './Sneaker.jsx'

/* Данные товаров. В реальном магазине они приходят с сервера,
   а пока храним прямо в коде */
const products = [
  {
    id: 1,
    name: 'Volt Runner',
    type: 'Беговые',
    tag: 'New',
    price: '12 990 ₽',
    colors: { body: '#ccff00', sole: '#f5f5f5', accent: '#141414' },
  },
  {
    id: 2,
    name: 'Nebula X',
    type: 'Хайкор',
    tag: 'Hot',
    price: '14 490 ₽',
    colors: { body: '#8b5cf6', sole: '#e8e6ff', accent: '#1a1033' },
  },
  {
    id: 3,
    name: 'Solar Flare',
    type: 'Скейт',
    tag: 'New',
    price: '11 990 ₽',
    colors: { body: '#ff6b35', sole: '#ffe8dc', accent: '#2a1206' },
  },
  {
    id: 4,
    name: 'Ice Break',
    type: 'Лимитка',
    tag: 'LTD',
    price: '15 990 ₽',
    colors: { body: '#38bdf8', sole: '#e6f6ff', accent: '#0b2437' },
  },
]

/* Родитель даёт детям появляться по очереди (stagger) */
const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const card = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Products() {
  return (
    <section id="collection" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Заголовок секции */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-volt">Дроп 001</p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-5xl">Коллекция</h2>
        </div>
        <a
          href="#"
          className="text-sm font-semibold text-white/60 underline-offset-4 transition-colors hover:text-volt hover:underline"
        >
          Все модели →
        </a>
      </div>

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show" /* анимация срабатывает, когда секция попадает в экран */
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {products.map((p) => (
          <motion.article
            key={p.id}
            variants={card}
            whileHover={{ y: -12 }} /* карточка всплывает при наведении */
            className="group overflow-hidden rounded-3xl border border-white/10 bg-panel"
          >
            <div className="relative bg-gradient-to-b from-white/5 to-transparent p-6">
              {p.tag && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-volt px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
                  {p.tag}
                </span>
              )}
              {/* Кроссовок увеличивается и чуть наклоняется при наведении */}
              <Sneaker
                {...p.colors}
                className="w-full transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110"
              />
            </div>
            <div className="p-6 pt-2">
              <h3 className="font-display text-lg font-bold uppercase">{p.name}</h3>
              <p className="mt-1 text-sm text-white/50">{p.type}</p>
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="text-lg font-extrabold text-volt">{p.price}</span>
                <button className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition-colors hover:border-volt hover:bg-volt hover:text-black">
                  В корзину
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Products

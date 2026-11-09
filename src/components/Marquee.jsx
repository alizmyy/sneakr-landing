import { motion } from 'framer-motion'

/* Молния-разделитель между фразами */
function Bolt() {
  return (
    <svg viewBox="0 0 24 24" className="mx-6 h-5 w-5 shrink-0 fill-ink" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 11-12h-6l-1-8Z" />
    </svg>
  )
}

const items = [
  'Новый дроп каждую пятницу',
  'Доставка за 24 часа',
  '100% оригинал',
  'Ограниченные коллекции',
]

/* Бегущая строка. Секрет бесшовности: две ОДИНАКОВЫЕ половины,
   лента едет на -50% своей ширины — и всё выглядит как бесконечный круг */
function Marquee() {
  const half = [...items, ...items, ...items]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative my-10"
    >
      <div className="-rotate-2 scale-105 overflow-hidden border-y-4 border-black bg-volt py-3">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {half.map((text, i) => (
                <span
                  key={i}
                  className="flex items-center font-display text-lg font-bold uppercase text-ink md:text-xl"
                >
                  {text}
                  <Bolt />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Marquee

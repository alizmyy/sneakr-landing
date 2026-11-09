import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    title: 'Только оригинал',
    text: 'Работаем напрямую с брендами. Каждая пара проходит проверку подлинности перед отправкой.',
  },
  {
    num: '02',
    title: 'Доставка за 24 часа',
    text: 'Курьером или в пункт выдачи по всей стране. Бесплатно при заказе от 10 000 ₽.',
  },
  {
    num: '03',
    title: '30 дней на возврат',
    text: 'Не подошёл размер или просто передумал — вернём деньги без лишних вопросов.',
  },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Features() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-10 md:grid-cols-3"
      >
        {features.map((f) => (
          <motion.div key={f.num} variants={item} className="border-l-2 border-volt pl-6">
            {/* Большая контурная цифра — чистый стиль, без картинок */}
            <p className="text-outline font-display text-6xl font-black">{f.num}</p>
            <h3 className="mt-4 font-display text-xl font-bold uppercase">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{f.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Features

import { motion } from 'framer-motion'
import Sneaker from './Sneaker.jsx'

/* Анимация «по очереди»: родитель (container) запускает детей (line)
   один за другим с задержкой staggerChildren */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const line = {
  hidden: { y: 90, opacity: 0 }, /* старт: ниже на 90px и прозрачный */
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }, /* easing как у хороших сайтов */
  },
}

function Hero() {
  return (
    <section id="drop" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Светящиеся пятна на фоне (blur-круги), медленно «дышат» */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-volt/15 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        {/* Левая колонка: текст. Появляется построчно */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={line}
            className="mb-4 inline-block rounded-full border border-volt/40 bg-volt/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-volt"
          >
            Дроп 001 уже здесь
          </motion.p>

          <motion.h1
            variants={line}
            className="font-display text-4xl font-black uppercase leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Сделай <span className="text-volt">шаг</span>
            <br />
            <span className="text-outline">в будущее</span>
          </motion.h1>

          <motion.p variants={line} className="mt-6 max-w-md text-base text-white/60 sm:text-lg">
            Ограниченные дропы и вечная классика улиц. 100% оригинал, доставка за 24 часа.
          </motion.p>

          <motion.div variants={line} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#collection"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-volt px-8 py-4 font-bold text-black transition-shadow hover:shadow-[0_0_40px_rgba(204,255,0,0.45)]"
            >
              Смотреть дроп
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/25 px-8 py-4 font-semibold text-white/80 transition-colors hover:border-volt hover:text-volt"
            >
              О бренде
            </motion.a>
          </motion.div>

          {/* Цифры-статистика */}
          <motion.div variants={line} className="mt-12 flex gap-10">
            <div>
              <p className="font-display text-3xl text-volt">50К+</p>
              <p className="mt-1 text-sm text-white/50">клиентов</p>
            </div>
            <div>
              <p className="font-display text-3xl text-volt">120+</p>
              <p className="mt-1 text-sm text-white/50">моделей</p>
            </div>
            <div>
              <p className="font-display text-3xl text-volt">4.9</p>
              <p className="mt-1 text-sm text-white/50">рейтинг</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Правая колонка: парящий кроссовок */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.6, rotate: -18 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Медленно вращающийся пунктирный круг за кроссовком.
              x/y в style — чтобы framer-motion не конфликтовал с классами */}
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] rounded-full border border-dashed border-white/15 sm:h-[24rem] sm:w-[24rem]"
            style={{ x: '-50%', y: '-50%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />

          {/* Бесконечное «парение» вверх-вниз */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sneaker body="#ccff00" sole="#ffffff" accent="#141414" className="relative w-full" />
          </motion.div>

          {/* Плавающий бейдж NEW DROP */}
          <motion.div
            className="absolute right-2 top-8 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-volt" />
            new drop
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

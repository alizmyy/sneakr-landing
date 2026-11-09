import { useState } from 'react'
import { motion } from 'framer-motion'

/* Секция подписки. Здесь мы учим хук useState: он «помнит» данные
   между перерисовками компонента. После отправки формы текст меняется */
function CallToAction() {
  const [email, setEmail] = useState('') /* что напечатано в поле */
  const [sent, setSent] = useState(false) /* отправлена ли форма */

  function handleSubmit(e) {
    e.preventDefault() /* отменяем перезагрузку страницы */
    setSent(true)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-6xl px-4 pb-24 sm:px-6"
    >
      <div className="rounded-[2.5rem] border border-volt/25 bg-panel px-6 py-16 text-center sm:px-12">
        <h2 className="font-display text-3xl font-black uppercase sm:text-5xl">
          Готов к <span className="text-volt">дропу?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          Подпишись на рассылку и узнавай о новых коллекциях раньше всех.
        </p>

        {sent ? (
          /* Это видно только ПОСЛЕ отправки формы */
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mx-auto mt-8 inline-block rounded-full border border-volt/40 bg-volt/10 px-6 py-3 font-bold text-volt"
          >
            Ты в списке! Первым узнаешь о дропе 002.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="твой@email.ru"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-white placeholder-white/35 outline-none transition-colors focus:border-volt"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-volt px-8 py-4 font-bold text-black transition-shadow hover:shadow-[0_0_40px_rgba(204,255,0,0.45)]"
            >
              Подписаться
            </button>
          </form>
        )}
      </div>
    </motion.section>
  )
}

export default CallToAction

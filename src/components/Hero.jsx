import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-violet-500 transition-all duration-300 dark:text-violet-300"
      >
        AI Powered Wardrobe Management
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}

        className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-zinc-950 md:text-7xl dark:text-zinc-50"
      >
        Organize Your Closet Like a

        <span className="text-violet-500">
          {" "}Pro
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

        className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-400"
      >
        Manage outfits, track clothes, plan your fashion,
        and get AI-powered style recommendations —
        all in one beautiful platform.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}

        className="flex flex-col md:flex-row gap-5 mt-12"
      >

        <button className="premium-button-primary px-10 py-5 text-lg">
          Start Free
        </button>

        <button className="premium-button-secondary px-10 py-5 text-lg">
          Watch Demo
        </button>

      </motion.div>

    </section>
  )
}

export default Hero

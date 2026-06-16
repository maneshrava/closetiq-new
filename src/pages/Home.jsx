import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="premium-app-shell relative overflow-hidden bg-zinc-100 text-zinc-900 transition-all duration-300 dark:bg-zinc-950 dark:text-zinc-100">

      {/* Background Glows */}
      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-200/80 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/75">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <h1 className="text-4xl font-extrabold tracking-wide">
            Closet<span className="text-purple-500">IQ</span>
          </h1>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="rounded-xl border border-zinc-200 px-5 py-2 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/10 dark:border-zinc-700"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-violet-600 px-6 py-2 text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:bg-violet-500"
            >
              Get Started
            </Link>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10"
          >

            <p className="uppercase tracking-[8px] text-purple-400 mb-6">
              Smart Fashion Management
            </p>

            <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8">
              Upgrade
              <br />
              Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {" "}Wardrobe
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Organize outfits, manage your closet, track fashion
              trends, and build your digital wardrobe experience
              with a premium fashion-tech platform.
            </p>

            <div className="flex gap-5">

              <Link
                to="/signup"
                className="rounded-2xl bg-violet-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-violet-600/20 transition-all duration-300 hover:bg-violet-500"
              >
                Start Free
              </Link>

              <Link
                to="/login"
                className="rounded-2xl border border-zinc-200 px-10 py-5 text-lg transition-all duration-300 hover:border-violet-400 hover:bg-white/70 dark:border-zinc-700 dark:hover:bg-zinc-800/60"
              >
                Explore
              </Link>

            </div>

          </motion.div>

          {/* Right Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[700px] hidden lg:block"
          >

            {/* Main Card */}
            <div className="premium-card absolute right-10 top-10 w-[320px] rotate-6 p-6 transition-all duration-300 hover:rotate-0 hover:scale-105">

              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800"
                alt=""
                className="rounded-2xl h-72 w-full object-cover"
              />

              <h2 className="text-2xl font-bold mt-5">
                Outfit Analytics
              </h2>

              <p className="muted-text mt-2">
                Track fashion trends and wardrobe insights.
              </p>

            </div>

            {/* Floating Card */}
            <div className="premium-card absolute bottom-20 left-0 w-[280px] -rotate-6 p-5 transition-all duration-300 hover:rotate-0 hover:scale-105">

              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800"
                alt=""
                className="rounded-2xl h-56 w-full object-cover"
              />

              <h2 className="text-xl font-bold mt-4">
                Smart Closet
              </h2>

              <p className="muted-text mt-2">
                Organize every outfit beautifully.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black mb-6"
          >
            Why Choose
            <span className="text-purple-500"> ClosetIQ</span>
          </motion.h2>

          <p className="muted-text mx-auto mb-20 max-w-3xl text-xl">
            A premium fashion-tech platform designed to organize,
            visualize, and elevate your wardrobe experience.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="premium-card p-10 transition-all duration-300 hover:border-violet-400"
            >

              <div className="text-6xl mb-6">👗</div>

              <h3 className="text-3xl font-bold mb-4">
                Smart Wardrobe
              </h3>

              <p className="muted-text leading-relaxed">
                Organize outfits beautifully with categories,
                filters, and visual wardrobe management.
              </p>

            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="premium-card p-10 transition-all duration-300 hover:border-rose-400"
            >

              <div className="text-6xl mb-6">📊</div>

              <h3 className="text-3xl font-bold mb-4">
                Analytics
              </h3>

              <p className="muted-text leading-relaxed">
                Track wardrobe insights, seasonal trends,
                and fashion usage with beautiful charts.
              </p>

            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="premium-card p-10 transition-all duration-300 hover:border-sky-400"
            >

              <div className="text-6xl mb-6">⚡</div>

              <h3 className="text-3xl font-bold mb-4">
                Fast Experience
              </h3>

              <p className="muted-text leading-relaxed">
                Built with React, Firebase, and modern frontend
                technologies for ultra smooth performance.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
}

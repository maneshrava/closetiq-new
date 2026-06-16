import {
  Shirt,
  Sparkles,
  BarChart3
} from "lucide-react"

import { motion } from "framer-motion"

function Features() {

  const features = [
    {
      title: "Outfit Builder",
      description:
        "Create stylish outfit combinations and save your favorite looks.",
      icon: <Shirt size={40} />,
      color: "text-purple-400",
    },

    {
      title: "AI Suggestions",
      description:
        "Get AI-powered recommendations based on weather and trends.",
      icon: <Sparkles size={40} />,
      color: "text-blue-400",
    },

    {
      title: "Wardrobe Analytics",
      description:
        "Track your most used outfits, colors, and fashion habits.",
      icon: <BarChart3 size={40} />,
      color: "text-pink-400",
    },
  ]

  return (
    <section className="px-8 py-24 relative z-10">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Powerful Features
        </h2>

        <p className="muted-text mt-4 text-lg">
          Everything you need to manage your wardrobe smartly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((feature, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}

            className="premium-card p-8"
          >

            <div className={`${feature.color} mb-6`}>
              {feature.icon}
            </div>

            <h3 className={`text-2xl font-semibold mb-4 ${feature.color}`}>
              {feature.title}
            </h3>

            <p className="muted-text leading-relaxed">
              {feature.description}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Features

import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex items-center space-x-2"
    >
      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <span className="text-white font-heading font-bold text-xl">SK</span>
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-primary"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      <span className="text-2xl font-heading font-bold gradient-text">SanjayKumar</span>
    </motion.div>
  )
}

export default Logo 
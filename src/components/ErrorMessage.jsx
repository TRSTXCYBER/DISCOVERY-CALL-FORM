import { AnimatePresence, motion } from 'framer-motion'

export default function ErrorMessage({ id, children }) {
  return (
    <AnimatePresence initial={false}>
      {children ? (
        <motion.p
          id={id}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="mt-1.5 text-xs font-medium text-[color:var(--color-danger)]"
        >
          {children}
        </motion.p>
      ) : null}
    </AnimatePresence>
  )
}

import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors select-none disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary:
    'bg-[color:var(--color-accent)] text-[#04141a] hover:bg-[color:var(--color-accent-strong)] shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_8px_24px_-12px_rgba(34,211,238,0.6)]',
  secondary:
    'bg-[color:var(--color-surface)] text-[color:var(--color-text)] border border-[color:var(--color-border)] hover:bg-[color:var(--color-surface-2)]',
  ghost:
    'bg-transparent text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)]',
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
  ...rest
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

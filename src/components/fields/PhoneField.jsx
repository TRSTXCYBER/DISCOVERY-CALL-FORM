import FieldShell from './FieldShell'

const baseInput =
  'w-full rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] px-4 py-3 text-[15px] text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-mute)] transition-colors focus:border-[color:var(--color-accent)] focus:bg-[color:var(--color-surface-2)]'

// Format a digit string (up to 10 digits) as (###) ###-####
function formatPhone(raw) {
  const digits = (raw || '').replace(/\D/g, '').slice(0, 10)
  const len = digits.length
  if (len === 0) return ''
  if (len < 4) return `(${digits}`
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export default function PhoneField({ field, value, error, onChange }) {
  return (
    <FieldShell id={field.id} label={field.label} required={field.required} helper={field.helper} error={error}>
      {({ errorId, helperId }) => (
        <input
          id={field.id}
          name={field.id}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={14}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.id, formatPhone(e.target.value))}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[helperId, errorId].filter(Boolean).join(' ') || undefined}
          className={`${baseInput} ${error ? 'border-[color:var(--color-danger)]' : ''}`}
        />
      )}
    </FieldShell>
  )
}

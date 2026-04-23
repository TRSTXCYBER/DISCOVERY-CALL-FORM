import FieldShell from './FieldShell'

const baseInput =
  'w-full appearance-none rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] px-4 py-3 pr-10 text-[15px] text-[color:var(--color-text)] transition-colors focus:border-[color:var(--color-accent)] focus:bg-[color:var(--color-surface-2)]'

export default function SelectField({ field, value, error, onChange }) {
  return (
    <FieldShell id={field.id} label={field.label} required={field.required} helper={field.helper} error={error}>
      {({ errorId, helperId }) => (
        <div className="relative">
          <select
            id={field.id}
            name={field.id}
            value={value || field.options[0]}
            onChange={(e) => onChange(field.id, e.target.value)}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={[helperId, errorId].filter(Boolean).join(' ') || undefined}
            className={`${baseInput} ${error ? 'border-[color:var(--color-danger)]' : ''}`}
          >
            {field.options.map((opt) => (
              <option key={opt} value={opt} disabled={opt === 'Please Select'}>
                {opt}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-dim)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
          </svg>
        </div>
      )}
    </FieldShell>
  )
}

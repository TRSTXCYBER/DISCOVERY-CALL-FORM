import FieldShell from './FieldShell'

export default function RadioGroup({ field, value, error, onChange }) {
  return (
    <FieldShell id={field.id} label={field.label} required={field.required} helper={field.helper} error={error}>
      {({ errorId, helperId }) => (
        <div
          role="radiogroup"
          aria-labelledby={undefined}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[helperId, errorId].filter(Boolean).join(' ') || undefined}
          className="grid grid-cols-1 gap-2 sm:grid-cols-3"
        >
          {field.options.map((opt) => {
            const checked = value === opt
            const optId = `${field.id}-${opt.replace(/\s+/g, '-').toLowerCase()}`
            return (
              <label
                key={opt}
                htmlFor={optId}
                className={[
                  'cursor-pointer rounded-xl border px-4 py-3 text-sm transition-colors',
                  checked
                    ? 'border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] text-[color:var(--color-text)]'
                    : 'border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)] hover:border-[color:var(--color-border-strong)]',
                  error && !checked ? 'border-[color:var(--color-danger)]/60' : '',
                ].join(' ')}
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={[
                      'grid h-4 w-4 place-items-center rounded-full border',
                      checked
                        ? 'border-[color:var(--color-accent)]'
                        : 'border-[color:var(--color-border-strong)]',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'h-2 w-2 rounded-full transition-transform',
                        checked
                          ? 'scale-100 bg-[color:var(--color-accent)]'
                          : 'scale-0 bg-transparent',
                      ].join(' ')}
                    />
                  </span>
                  <span className="font-medium text-[color:var(--color-text)]">{opt}</span>
                </span>
                <input
                  id={optId}
                  type="radio"
                  name={field.id}
                  value={opt}
                  checked={checked}
                  onChange={() => onChange(field.id, opt)}
                  className="sr-only"
                />
              </label>
            )
          })}
        </div>
      )}
    </FieldShell>
  )
}

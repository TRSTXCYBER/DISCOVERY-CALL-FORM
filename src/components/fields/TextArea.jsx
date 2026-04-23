import FieldShell from './FieldShell'

const baseInput =
  'w-full resize-y min-h-[120px] rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] px-4 py-3 text-[15px] text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-mute)] transition-colors focus:border-[color:var(--color-accent)] focus:bg-[color:var(--color-surface-2)]'

export default function TextArea({ field, value, error, onChange }) {
  return (
    <FieldShell id={field.id} label={field.label} required={field.required} helper={field.helper} error={error}>
      {({ errorId, helperId }) => (
        <textarea
          id={field.id}
          name={field.id}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.id, e.target.value)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[helperId, errorId].filter(Boolean).join(' ') || undefined}
          className={`${baseInput} ${error ? 'border-[color:var(--color-danger)]' : ''}`}
        />
      )}
    </FieldShell>
  )
}

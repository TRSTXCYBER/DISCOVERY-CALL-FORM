import FieldShell from './FieldShell'

const baseInput =
  'w-full rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] px-4 py-3 text-[15px] text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-mute)] transition-colors focus:border-[color:var(--color-accent)] focus:bg-[color:var(--color-surface-2)]'

export default function TextField({ field, value, error, onChange, inputType }) {
  const type = inputType || (field.type === 'url' ? 'url' : 'text')
  return (
    <FieldShell id={field.id} label={field.label} required={field.required} helper={field.helper} error={error}>
      {({ errorId, helperId }) => (
        <input
          id={field.id}
          name={field.id}
          type={type}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.id, e.target.value)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[helperId, errorId].filter(Boolean).join(' ') || undefined}
          autoComplete={autoCompleteFor(field.id)}
          className={`${baseInput} ${error ? 'border-[color:var(--color-danger)]' : ''}`}
        />
      )}
    </FieldShell>
  )
}

function autoCompleteFor(id) {
  switch (id) {
    case 'first_name':
      return 'given-name'
    case 'last_name':
      return 'family-name'
    case 'company_name':
    case 'business_name':
      return 'organization'
    case 'company_website':
      return 'url'
    default:
      return 'off'
  }
}

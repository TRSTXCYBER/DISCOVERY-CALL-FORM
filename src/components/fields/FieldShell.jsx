import ErrorMessage from '../ErrorMessage'

export default function FieldShell({ id, label, required, helper, error, children }) {
  const errorId = error ? `${id}-error` : undefined
  const helperId = helper ? `${id}-helper` : undefined
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-1.5 text-sm font-medium text-[color:var(--color-text)]"
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-[color:var(--color-accent)]">*</span>
        ) : (
          <span className="ml-1 text-xs font-normal text-[color:var(--color-text-mute)]">
            (optional)
          </span>
        )}
      </label>
      {helper ? (
        <p id={helperId} className="mb-1.5 text-xs text-[color:var(--color-text-dim)]">
          {helper}
        </p>
      ) : null}
      {typeof children === 'function' ? children({ errorId, helperId }) : children}
      <ErrorMessage id={errorId}>{error}</ErrorMessage>
    </div>
  )
}

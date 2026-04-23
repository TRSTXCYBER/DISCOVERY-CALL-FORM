export default function Progress({ sections, currentIndex }) {
  const total = sections.length
  const safeIndex = Math.min(Math.max(currentIndex, 0), total - 1)
  const currentTitle = sections[safeIndex]?.title

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-medium text-[color:var(--color-text-dim)]">
          Step {safeIndex + 1} of {total}
        </span>
        <span className="truncate pl-3 text-[color:var(--color-text-dim)]">{currentTitle}</span>
      </div>
      <div className="flex gap-1.5">
        {sections.map((s, i) => (
          <div
            key={s.id}
            className={[
              'h-1 flex-1 rounded-full transition-colors',
              i <= safeIndex
                ? 'bg-[color:var(--color-accent)]'
                : 'bg-[color:var(--color-surface-2)]',
            ].join(' ')}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}

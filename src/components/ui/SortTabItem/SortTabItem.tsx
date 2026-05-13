import { Icon } from '../Icon/Icon'

export interface SortTabItemProps {
  label: string
  isSelected?: boolean
  onClick?: () => void
  className?: string
}

export function SortTabItem({
  label,
  isSelected = false,
  onClick,
  className = '',
}: SortTabItemProps) {
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      onClick={onClick}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSelected ? 'var(--spacing-4)' : undefined,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-family-pretendard)',
        fontSize: 'var(--font-size-body-sm)',
        fontWeight: isSelected
          ? 'var(--font-weight-bold)'
          : 'var(--font-weight-regular)',
        color: isSelected
          ? 'var(--color-text-primary)'
          : 'var(--color-text-secondary)',
        lineHeight: 'var(--font-line-height-base)',
        whiteSpace: 'nowrap',
      }}
    >
      {isSelected && <Icon name="check" size={16} />}
      {label}
    </button>
  )
}

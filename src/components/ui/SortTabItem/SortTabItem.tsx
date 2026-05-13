export interface SortTabItemProps {
  /** 탭 레이블 */
  label: string
  /** 선택 여부 */
  isSelected?: boolean
  /** 클릭 핸들러 */
  onClick?: () => void
  /** 추가 클래스 */
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
        justifyContent: 'center',
        paddingLeft: 'var(--spacing-12)',
        paddingRight: 'var(--spacing-12)',
        paddingTop: 'var(--spacing-8)',
        paddingBottom: 'var(--spacing-8)',
        border: 'none',
        borderBottom: isSelected
          ? '2px solid var(--color-border-brand)'
          : '2px solid transparent',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-family-pretendard)',
        fontSize: 'var(--font-size-body-sm)',
        fontWeight: isSelected
          ? 'var(--font-weight-bold)'
          : 'var(--font-weight-regular)',
        color: isSelected
          ? 'var(--color-interactive-primary)'
          : 'var(--color-text-secondary)',
        lineHeight: 'var(--font-line-height-base)',
        whiteSpace: 'nowrap',
        transition: 'color 0.15s, border-color 0.15s',
      }}
    >
      {label}
    </button>
  )
}

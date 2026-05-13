import React from 'react'
import { Icon } from '../Icon/Icon'

export type ChipType = 'category' | 'notice'

export interface ChipProps {
  type?: ChipType
  label: string
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

const chipConfig: Record<
  ChipType,
  {
    bg: string
    color: string
    icon: 'design' | 'notification'
  }
> = {
  category: {
    bg: 'var(--color-bg-muted)',
    color: 'var(--color-content-strong)',
    icon: 'design',
  },
  notice: {
    bg: 'var(--color-bg-danger)',
    color: 'var(--color-text-danger)',
    icon: 'notification',
  },
}

export function Chip({
  type = 'category',
  label,
  onClick,
  className = '',
  style,
}: ChipProps) {
  const config = chipConfig[type]

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={className}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onClick()
            }
          : undefined
      }
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-8)',
        paddingRight: 'var(--spacing-8)',
        paddingTop: 'var(--spacing-4)',
        paddingBottom: 'var(--spacing-4)',
        borderRadius: 'var(--radius-8)',
        backgroundColor: config.bg,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        ...style,
      }}
    >
      <Icon name={config.icon} size={16} color={config.color} />
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-body-sm)',
          fontWeight: 'var(--font-weight-bold)',
          color: config.color,
          lineHeight: 'var(--font-line-height-base)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  )
}

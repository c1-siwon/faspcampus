import React from 'react'
import { Icon } from '../Icon/Icon'

export interface PostCardStatsProps {
  views?: number
  likes?: number
  className?: string
  style?: React.CSSProperties
}

function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return String(count)
}

export function PostCardStats({
  views = 0,
  likes = 0,
  className = '',
  style,
}: PostCardStatsProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 20,
        gap: 'var(--spacing-24)',
        ...style,
      }}
    >
      {/* 조회수 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          justifyContent: 'center',
        }}
      >
        <Icon name="eye-on" size={16} color="var(--color-text-tertiary)" />
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-lg)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-tertiary)',
            lineHeight: 'var(--font-line-height-base)',
            whiteSpace: 'nowrap',
          }}
        >
          {formatCount(views)}
        </span>
      </div>

      {/* 좋아요 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          justifyContent: 'center',
        }}
      >
        <Icon name="heart_empty" size={16} color="var(--color-text-tertiary)" />
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-lg)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-tertiary)',
            lineHeight: 'var(--font-line-height-base)',
            whiteSpace: 'nowrap',
          }}
        >
          {formatCount(likes)}
        </span>
      </div>
    </div>
  )
}

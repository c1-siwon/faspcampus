import React from 'react'

export type DateFormat = 'relative' | 'absolute' | 'datetime'

export interface DateProps {
  date: string | Date | number
  format?: DateFormat
  className?: string
  style?: React.CSSProperties
}

function formatDate(date: string | Date | number, format: DateFormat): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  if (format === 'absolute') {
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (format === 'datetime') {
    return d.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // relative
  const diff = Date.now() - d.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return '방금 전'
  if (minutes < 60) return `${minutes}분 전`
  if (hours < 24) return `${hours}시간 전`
  if (days < 7) return `${days}일 전`
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function DateLabel({
  date,
  format = 'relative',
  className = '',
  style,
}: DateProps) {
  return (
    <time
      dateTime={new Date(date).toISOString()}
      className={className}
      style={{
        fontFamily: 'var(--font-family-pretendard)',
        fontSize: 'var(--font-size-caption-sm)',
        fontWeight: 'var(--font-weight-regular)',
        color: 'var(--color-text-tertiary)',
        lineHeight: 'var(--font-line-height-base)',
        ...style,
      }}
    >
      {formatDate(date, format)}
    </time>
  )
}

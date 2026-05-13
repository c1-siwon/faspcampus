import React from 'react'

export interface PostWriteHeaderProps {
  title?: string
  description?: string
  className?: string
  style?: React.CSSProperties
}

export function PostWriteHeader({
  title = '게시글 쓰기',
  description,
  className = '',
  style,
}: PostWriteHeaderProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-12)',
        maxWidth: 840,
        width: '100%',
        ...style,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-display-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-content-strong)',
          lineHeight: 'var(--font-line-height-base)',
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-title-lg)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

import React from 'react'

export interface ImagesmallProps {
  /** 이미지 src URL */
  src?: string
  /** 대체 텍스트 */
  alt?: string
  /** 고정 너비 (px). Figma 기준 160px */
  width?: number
  /** 고정 높이 (px). Figma 기준 102px */
  height?: number
  /** 클릭 핸들러 */
  onClick?: () => void
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Imagesmall({
  src,
  alt = '',
  width = 160,
  height = 102,
  onClick,
  className = '',
  style,
}: ImagesmallProps) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        width,
        height,
        borderRadius: 'var(--radius-4)',
        overflow: 'hidden',
        border: '1px solid var(--color-border-default)',
        backgroundColor: 'var(--color-bg-muted)',
        flexShrink: 0,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        /* 이미지 없을 때 플레이스홀더 */
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-tertiary)',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <polyline
              points="21 15 16 10 5 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

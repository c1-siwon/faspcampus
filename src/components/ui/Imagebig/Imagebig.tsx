import React from 'react'

export interface ImagebigProps {
  /** 이미지 src URL */
  src?: string
  /** 대체 텍스트 */
  alt?: string
  /** 클릭 핸들러 */
  onClick?: () => void
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Imagebig({
  src,
  alt = '',
  onClick,
  className = '',
  style,
}: ImagebigProps) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        width: '100%',
        /* ⚠️ 누락된 토큰: aspect-ratio 16/9 — 토큰 없음, 직접 지정 */
        aspectRatio: '16 / 9',
        borderRadius: 'var(--radius-8)',
        overflow: 'hidden',
        border: '1px solid var(--color-border-default)',
        backgroundColor: 'var(--color-bg-muted)',
        cursor: onClick ? 'pointer' : 'default',
        flexShrink: 0,
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
            width="48"
            height="48"
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

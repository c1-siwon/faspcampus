import React from 'react'
import { Chip } from '../Chip/Chip'
import { PostCardStats } from '../PostCardStats/PostCardStats'

export interface PostCardChip {
  type: 'category' | 'notice'
  label: string
}

export interface PostCardProps {
  title?: string
  preview?: string
  thumbnail?: string
  chips?: PostCardChip[]
  views?: number
  likes?: number
  timeAgo?: string
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function PostCard({
  title = '',
  preview,
  thumbnail,
  chips = [],
  views = 0,
  likes = 0,
  timeAgo,
  onClick,
  className = '',
  style,
}: PostCardProps) {
  return (
    <article
      className={className}
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-12)',
        paddingTop: 'var(--spacing-24)',
        paddingBottom: 'var(--spacing-24)',
        cursor: onClick ? 'pointer' : 'default',
        width: '100%',
        ...style,
      }}
    >
      {/* PostCardContent */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
          width: '100%',
        }}
      >
        {/* ChipArea */}
        {chips.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {chips.map((chip, i) => (
              <Chip key={i} type={chip.type} label={chip.label} />
            ))}
          </div>
        )}

        {/* PostCardBody */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          {/* 텍스트 콘텐츠 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-8)',
              flex: '1 0 0',
              minWidth: 0,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: 'var(--font-family-pretendard)',
                fontSize: 'var(--font-size-title-sm)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                lineHeight: 'var(--font-line-height-base)',
                width: '100%',
              }}
            >
              {title}
            </h3>
            {preview && (
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-family-pretendard)',
                  fontSize: 'var(--font-size-body-lg)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--color-content-default)',
                  lineHeight: 'var(--font-line-height-base)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}
              >
                {preview}
              </p>
            )}
          </div>

          {/* 썸네일 이미지 */}
          {thumbnail && (
            <div
              style={{
                width: 160,
                height: 102,
                flexShrink: 0,
                borderRadius: 'var(--radius-4)',
                border: '1px solid var(--color-text-disabled)',
                overflow: 'hidden',
              }}
            >
              <img
                src={thumbnail}
                alt={title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* PostCardFooter */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <PostCardStats views={views} likes={likes} />
        {timeAgo && (
          <span
            style={{
              fontFamily: 'var(--font-family-pretendard)',
              fontSize: 'var(--font-size-caption-lg)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--font-line-height-base)',
              whiteSpace: 'nowrap',
            }}
          >
            {timeAgo}
          </span>
        )}
      </div>
    </article>
  )
}

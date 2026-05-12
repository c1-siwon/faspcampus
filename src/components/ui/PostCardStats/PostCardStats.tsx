import React from 'react'
import { Icon } from '../Icon/Icon'

export interface PostCardStatsProps {
  /** 좋아요 수 */
  likes?: number
  /** 조회수 */
  views?: number
  /** 댓글 수 */
  comments?: number
  /** 좋아요 여부 */
  isLiked?: boolean
  /** 좋아요 클릭 핸들러 */
  onLike?: () => void
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return String(count)
}

export function PostCardStats({
  likes = 0,
  views = 0,
  comments = 0,
  isLiked = false,
  onLike,
  className = '',
  style,
}: PostCardStatsProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-12)',
        ...style,
      }}
    >
      {/* 좋아요 */}
      <button
        type="button"
        aria-label={`좋아요 ${likes}개`}
        aria-pressed={isLiked}
        onClick={onLike}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-4)',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: onLike ? 'pointer' : 'default',
          color: isLiked
            ? 'var(--color-interactive-destructive)'
            : 'var(--color-text-secondary)',
        }}
      >
        <Icon
          name={isLiked ? 'heart-filled' : 'heart'}
          size={16}
          color="currentColor"
        />
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {formatCount(likes)}
        </span>
      </button>

      {/* 조회수 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-4)',
          color: 'var(--color-text-secondary)',
        }}
      >
        <Icon name="eye" size={16} color="currentColor" />
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {formatCount(views)}
        </span>
      </div>

      {/* 댓글 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-4)',
          color: 'var(--color-text-secondary)',
        }}
      >
        <Icon name="comment" size={16} color="currentColor" />
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {formatCount(comments)}
        </span>
      </div>
    </div>
  )
}

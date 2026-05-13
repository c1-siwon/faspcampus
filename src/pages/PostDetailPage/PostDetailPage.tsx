import React from 'react'
import { NavigationBar } from '../../components/ui/NavigationBar/NavigationBar'
import { PostWriteHeader } from '../../components/ui/PostWriteHeader/PostWriteHeader'
import { DateLabel } from '../../components/ui/Date/Date'
import { Divider } from '../../components/ui/Divider/Divider'
import { PostCardStats } from '../../components/ui/PostCardStats/PostCardStats'
import { Imagebig } from '../../components/ui/Imagebig/Imagebig'
import { Icon } from '../../components/ui/Icon/Icon'

export interface PostDetailPageProps {
  title?: string
  description?: string
  content?: string
  imageUrl?: string
  date?: string | Date | number
  views?: number
  likes?: number
  onBack?: () => void
  onAuthClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function PostDetailPage({
  title = '피그마피디아 발명',
  description,
  content = '',
  imageUrl,
  date = new Date().toISOString(),
  views = 0,
  likes = 0,
  onBack,
  onAuthClick,
  className = '',
  style,
}: PostDetailPageProps) {
  return (
    <div
      className={className}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-default)',
        ...style,
      }}
    >
      <NavigationBar
        state="logout"
        categories={['커뮤니티']}
        selectedCategory="커뮤니티"
        onAuthClick={onAuthClick}
      />

      <main
        style={{
          maxWidth: 840,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-12)',
        }}
      >
        {/* 뒤로가기 버튼 헤더 */}
        <div
          style={{
            paddingTop: 'var(--spacing-12)',
            paddingBottom: 'var(--spacing-12)',
          }}
        >
          <button
            type="button"
            onClick={onBack}
            aria-label="뒤로가기"
            style={{
              width: 32,
              height: 32,
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border-default)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              padding: 0,
            }}
          >
            <Icon name="arrow_left" size={16} />
          </button>
        </div>

        {/* 게시글 헤더 */}
        <PostWriteHeader title={title} description={description} />

        {/* 날짜 */}
        <DateLabel date={date} format="absolute" />

        <Divider />

        {/* 본문 콘텐츠 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-32)',
            paddingBottom: 80,
          }}
        >
          {imageUrl && (
            <Imagebig
              src={imageUrl}
              style={{ width: 500, height: 319, aspectRatio: 'unset' }}
            />
          )}
          {content && (
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--font-family-pretendard)',
                fontSize: 'var(--font-size-body-md)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--color-content-strong)',
                lineHeight: 'var(--font-line-height-base)',
                whiteSpace: 'pre-wrap',
              }}
            >
              {content}
            </p>
          )}
        </div>

        {/* 통계 */}
        <PostCardStats views={views} likes={likes} />
      </main>
    </div>
  )
}

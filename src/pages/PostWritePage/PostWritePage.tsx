import React, { useState } from 'react'
import { NavigationBar } from '../../components/ui/NavigationBar/NavigationBar'
import { PostWriteHeader } from '../../components/ui/PostWriteHeader/PostWriteHeader'
import { TitleInput } from '../../components/ui/TitleInput/TitleInput'
import { ContentInputContainer } from '../../components/ui/ContentInputContainer/ContentInputContainer'
import { Button } from '../../components/ui/Button/Button'
import { Icon } from '../../components/ui/Icon/Icon'

export interface PostWritePageProps {
  onSubmit?: (data: { title: string; content: string }) => void
  onBack?: () => void
  onAuthClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function PostWritePage({
  onSubmit,
  onBack,
  onAuthClick,
  className = '',
  style,
}: PostWritePageProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

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

        {/* 본문 영역 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-40)',
            paddingBottom: 'var(--spacing-48)',
          }}
        >
          <PostWriteHeader
            title="게시글 쓰기"
            description="건전한 커뮤니티를 위해 바른말 고운말을 씁시다."
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-20)',
            }}
          >
            <TitleInput
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <ContentInputContainer
              placeholder="게시글 내용을 입력해주세요."
              value={content}
              onChange={setContent}
              minRows={20}
            />
          </div>

          <Button
            size="large"
            variant="core"
            style={{ width: '100%' }}
            onClick={() => onSubmit?.({ title, content })}
          >
            등록하기
          </Button>
        </div>
      </main>
    </div>
  )
}

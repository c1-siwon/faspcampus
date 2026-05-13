import React from 'react'
import { NavigationBar } from '../../components/ui/NavigationBar/NavigationBar'
import { PostFilterHeader } from '../../components/ui/PostFilterHeader/PostFilterHeader'
import { Divider } from '../../components/ui/Divider/Divider'
import { PostCard } from '../../components/ui/PostCard/PostCard'

export interface HomePost {
  id: string
  title: string
  preview?: string
  thumbnail?: string
  chips?: { type: 'category' | 'notice'; label: string }[]
  views?: number
  likes?: number
  timeAgo?: string
}

export interface HomePageProps {
  posts?: HomePost[]
  sortValue?: string
  onSortChange?: (value: string) => void
  onWrite?: () => void
  onPostClick?: (id: string) => void
  onAuthClick?: () => void
  className?: string
  style?: React.CSSProperties
}

const DEFAULT_POSTS: HomePost[] = [
  {
    id: '1',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview:
      "안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.",
    thumbnail: '/images/showcase/imagesmall-01.png',
    chips: [{ type: 'notice', label: '공지사항' }],
    views: 0,
    likes: 0,
    timeAgo: '1분 전',
  },
  {
    id: '2',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview:
      '피그마피디아(Figmapedia)는 Figma 중심의 디자인 지식, 템플릿, 프로세스, 그리고 AI 기반 워크플로우를 체계적으로 정리•아카이빙하는 크리에이티브 지식 플랫폼입니다.',
    thumbnail: '/images/showcase/imagesmall-02.png',
    chips: [{ type: 'category', label: '디자인' }],
    views: 0,
    likes: 0,
    timeAgo: '1분 전',
  },
  {
    id: '3',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview:
      "안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.",
    thumbnail: '/images/showcase/imagesmall-03.png',
    chips: [{ type: 'notice', label: '공지사항' }],
    views: 0,
    likes: 0,
    timeAgo: '1분 전',
  },
  {
    id: '4',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview:
      '피그마피디아(Figmapedia)는 Figma 중심의 디자인 지식, 템플릿, 프로세스, 그리고 AI 기반 워크플로우를 체계적으로 정리•아카이빙하는 크리에이티브 지식 플랫폼입니다.',
    thumbnail: '/images/showcase/imagesmall-04.png',
    chips: [
      { type: 'notice', label: '공지사항' },
      { type: 'category', label: '디자인' },
    ],
    views: 0,
    likes: 0,
    timeAgo: '1분 전',
  },
  {
    id: '5',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview:
      "안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.",
    thumbnail: '/images/showcase/imagesmall-05.png',
    chips: [{ type: 'category', label: '디자인' }],
    views: 0,
    likes: 0,
    timeAgo: '1분 전',
  },
  {
    id: '6',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview:
      '피그마피디아(Figmapedia)는 Figma 중심의 디자인 지식, 템플릿, 프로세스, 그리고 AI 기반 워크플로우를 체계적으로 정리•아카이빙하는 크리에이티브 지식 플랫폼입니다.',
    thumbnail: '/images/showcase/imagesmall-06.png',
    chips: [{ type: 'category', label: '디자인' }],
    views: 0,
    likes: 0,
    timeAgo: '1분 전',
  },
]

export function HomePage({
  posts = DEFAULT_POSTS,
  sortValue,
  onSortChange,
  onWrite,
  onPostClick,
  onAuthClick,
  className = '',
  style,
}: HomePageProps) {
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
          paddingTop: 'var(--spacing-48)',
          paddingBottom: 'var(--spacing-48)',
        }}
      >
        <PostFilterHeader
          title="전체 게시글"
          sortValue={sortValue}
          onSortChange={onSortChange}
          onWrite={onWrite}
        />

        <Divider />

        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <PostCard
              title={post.title}
              preview={post.preview}
              thumbnail={post.thumbnail}
              chips={post.chips}
              views={post.views}
              likes={post.likes}
              timeAgo={post.timeAgo}
              onClick={onPostClick ? () => onPostClick(post.id) : undefined}
            />
            {index < posts.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </main>
    </div>
  )
}

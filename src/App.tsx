import { useState } from 'react'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { HomePage } from './pages/HomePage/HomePage'
import { PostWritePage } from './pages/PostWritePage/PostWritePage'
import { PostDetailPage } from './pages/PostDetailPage/PostDetailPage'

type Page =
  | { name: 'login' }
  | { name: 'home' }
  | { name: 'write' }
  | { name: 'detail'; postId: string }

export default function App() {
  const [page, setPage] = useState<Page>({ name: 'login' })

  if (page.name === 'login') {
    return (
      <LoginPage
        onLogin={() => setPage({ name: 'home' })}
        onGoogleLogin={() => setPage({ name: 'home' })}
        onSignUp={() => setPage({ name: 'home' })}
      />
    )
  }

  if (page.name === 'home') {
    return (
      <HomePage
        onWrite={() => setPage({ name: 'write' })}
        onPostClick={(id) => setPage({ name: 'detail', postId: id })}
        onAuthClick={() => setPage({ name: 'login' })}
      />
    )
  }

  if (page.name === 'write') {
    return (
      <PostWritePage
        onSubmit={() => setPage({ name: 'home' })}
        onBack={() => setPage({ name: 'home' })}
        onAuthClick={() => setPage({ name: 'login' })}
      />
    )
  }

  if (page.name === 'detail') {
    return (
      <PostDetailPage
        title="피그마피디아 짱짱"
        description="피튜"
        imageUrl="/images/showcase/imagebig-detail.png"
        content={`안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.\n\n안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.\n\n안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.\n\n안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.\n\n안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.\n\n안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.`}
        date="2026-05-06"
        views={56654}
        likes={99999}
        onBack={() => setPage({ name: 'home' })}
        onAuthClick={() => setPage({ name: 'login' })}
      />
    )
  }

  return null
}

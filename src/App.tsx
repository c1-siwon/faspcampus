import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { HomePage } from './pages/HomePage/HomePage'
import { PostWritePage } from './pages/PostWritePage/PostWritePage'
import { PostDetailPage } from './pages/PostDetailPage/PostDetailPage'

const DETAIL_CONTENT = `안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.

안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.

안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.

안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.

안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.

안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요.`

function LoginRoute() {
  const navigate = useNavigate()
  return (
    <LoginPage
      onLogin={() => navigate('/home')}
      onGoogleLogin={() => navigate('/home')}
      onSignUp={() => navigate('/home')}
    />
  )
}

function HomeRoute() {
  const navigate = useNavigate()
  return (
    <HomePage
      onWrite={() => navigate('/page')}
      onPostClick={(id) => navigate(`/view/${id}`)}
      onAuthClick={() => navigate('/login')}
    />
  )
}

function PageRoute() {
  const navigate = useNavigate()
  return (
    <PostWritePage
      onSubmit={() => navigate('/home')}
      onBack={() => navigate('/home')}
      onAuthClick={() => navigate('/login')}
    />
  )
}

function ViewRoute() {
  const navigate = useNavigate()
  useParams<{ id: string }>()
  return (
    <PostDetailPage
      title="피그마피디아 짱짱"
      description="피튜"
      imageUrl="/images/showcase/imagebig-detail.png"
      content={DETAIL_CONTENT}
      date="2026-05-06"
      views={56654}
      likes={99999}
      onBack={() => navigate('/home')}
      onAuthClick={() => navigate('/login')}
    />
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/page" element={<PageRoute />} />
        <Route path="/view/:id" element={<ViewRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

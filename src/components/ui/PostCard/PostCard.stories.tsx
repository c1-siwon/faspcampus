import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { PostCard } from './PostCard'

const BASE_ARGS = {
  title: '피그마 커뮤니티는 역시 피그마피디아',
  preview:
    '피그마피디아(Figmapedia)는 Figma 중심의 디자인 지식, 템플릿, 프로세스, 그리고 AI 기반 워크플로우를 체계적으로 정리•아카이빙하는 크리에이티브 지식 플랫폼입니다.',
  chips: [
    { type: 'notice' as const, label: '공지사항' },
    { type: 'category' as const, label: '디자인' },
  ],
  views: 128,
  likes: 42,
  timeAgo: '1분 전',
}

const meta = {
  title: 'UI/PostCard',
  component: PostCard,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=137-1364',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 840, padding: 'var(--spacing-16)' }}>
        <Story />
      </div>
    ),
  ],
  args: BASE_ARGS,
} satisfies Meta<typeof PostCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('article')).toBeInTheDocument()
    await expect(canvas.getByText(BASE_ARGS.title)).toBeInTheDocument()
  },
}

export const WithThumbnail: Story = {
  args: {
    thumbnail: '/images/showcase/imagesmall-01.svg',
  },
}

export const CategoryOnly: Story = {
  args: {
    chips: [{ type: 'category', label: '디자인' }],
  },
}

export const NoticeOnly: Story = {
  args: {
    chips: [{ type: 'notice', label: '공지사항' }],
  },
}

export const NoChips: Story = {
  args: { chips: [] },
}

export const HighEngagement: Story = {
  args: { views: 9870, likes: 2340 },
}

export const WithCodeExample: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-16)',
      }}
    >
      <PostCard {...args} />
      <CodePreview
        code={`<PostCard
  title="피그마 커뮤니티는 역시 피그마피디아"
  preview="피그마피디아는..."
  chips={[
    { type: 'notice', label: '공지사항' },
    { type: 'category', label: '디자인' },
  ]}
  views={128}
  likes={42}
  timeAgo="1분 전"
  onClick={() => navigate('/posts/1')}
/>`}
      />
    </div>
  ),
}

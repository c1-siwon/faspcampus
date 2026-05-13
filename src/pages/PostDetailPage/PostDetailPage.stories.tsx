import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { PostDetailPage } from './PostDetailPage'

const meta = {
  title: 'Pages/PostDetailPage',
  component: PostDetailPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=783-3370',
    },
  },
  args: {
    title: '피그마피디아 발명',
    content:
      '안녕하세요, 피그마피디아입니다. 피그마피디아는 함께 성장하면서 48명이 함께 참여하여 성장하기 원하시는 분들을 위해 운영하는 커뮤니티입니다.\n\n매주 새로운 피그마 팁과 트릭을 공유합니다. 이번 주에는 컴포넌트 시스템 구축 방법에 대해 알아보겠습니다.',
    date: '2024-05-01T09:00:00',
    views: 120,
    likes: 34,
  },
} satisfies Meta<typeof PostDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('banner')).toBeInTheDocument()
    await expect(
      canvas.getByRole('button', { name: '뒤로가기' })
    ).toBeInTheDocument()
  },
}

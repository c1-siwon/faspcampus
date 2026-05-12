import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { PostCardStats } from './PostCardStats'

const meta = {
  title: 'UI/PostCardStats',
  component: PostCardStats,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    likes: { control: 'number' },
    views: { control: 'number' },
    comments: { control: 'number' },
    isLiked: { control: 'boolean' },
  },
  args: {
    likes: 24,
    views: 312,
    comments: 8,
    isLiked: false,
  },
} satisfies Meta<typeof PostCardStats>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const likeBtn = canvas.getByLabelText('좋아요 24개')
    await expect(likeBtn).toBeInTheDocument()
    await expect(likeBtn).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(likeBtn)
  },
}

export const Liked: Story = {
  args: { isLiked: true, likes: 25 },
}

export const LargeNumbers: Story = {
  args: { likes: 1200, views: 45000, comments: 340 },
}

export const ZeroStats: Story = {
  args: { likes: 0, views: 0, comments: 0 },
}

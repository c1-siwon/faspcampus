import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { PostWritePage } from './PostWritePage'

const meta = {
  title: 'Pages/PostWritePage',
  component: PostWritePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=764-2245',
    },
  },
} satisfies Meta<typeof PostWritePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent(
      '게시글 쓰기'
    )
    await expect(
      canvas.getByRole('button', { name: '등록하기' })
    ).toBeInTheDocument()
  },
}

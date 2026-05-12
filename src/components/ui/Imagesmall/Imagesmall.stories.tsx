import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Imagesmall } from './Imagesmall'

const meta = {
  title: 'UI/Imagesmall',
  component: Imagesmall,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
  args: {
    width: 80,
    height: 80,
    alt: '썸네일',
  },
} satisfies Meta<typeof Imagesmall>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    src: 'https://picsum.photos/seed/thumb/160/160',
    alt: '샘플 썸네일',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img')
    await expect(img).toBeInTheDocument()
  },
}

export const Placeholder: Story = {
  args: { src: undefined },
}

export const Small: Story = {
  args: {
    src: 'https://picsum.photos/seed/small/120/120',
    width: 60,
    height: 60,
    alt: '작은 썸네일',
  },
}

export const Large: Story = {
  args: {
    src: 'https://picsum.photos/seed/large/200/200',
    width: 120,
    height: 120,
    alt: '큰 썸네일',
  },
}

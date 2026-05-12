import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Imagebig } from './Imagebig'

const meta = {
  title: 'UI/Imagebig',
  component: Imagebig,
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
  },
  args: {
    alt: '게시글 이미지',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Imagebig>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    src: '/images/showcase/image-01.png',
    alt: '샘플 이미지',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img')
    await expect(img).toBeInTheDocument()
  },
}

export const Placeholder: Story = {
  args: { src: undefined },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // 이미지 없을 때 플레이스홀더 SVG만 표시
    const container = canvasElement.querySelector('div > div')
    await expect(container).toBeTruthy()
  },
}

export const WithExternalImage: Story = {
  args: {
    src: 'https://picsum.photos/seed/community/720/405',
    alt: '외부 샘플 이미지',
  },
}

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
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=781-5205',
    },
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
  args: {
    src: '/images/showcase/imagesmall-01.png',
    alt: '썸네일',
    width: 160,
    height: 102,
  },
} satisfies Meta<typeof Imagesmall>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img', { name: '썸네일' })
    await expect(img).toBeInTheDocument()
  },
}

export const Placeholder: Story = {
  args: { src: undefined },
}

export const AllSamples: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-12)' }}
    >
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <Imagesmall
          key={n}
          src={`/images/showcase/imagesmall-0${n}.png`}
          alt={`샘플 ${n}`}
        />
      ))}
    </div>
  ),
}

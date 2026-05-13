import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Logo } from './Logo'

const meta = {
  title: 'UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=783-4211',
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const logo = canvas.getByRole('img', { name: 'FigmaPedia 로고' })
    await expect(logo).toBeInTheDocument()
    await expect(canvas.getByText('FigmaPedia')).toBeInTheDocument()
    await expect(canvas.getByText('Fp')).toBeInTheDocument()
  },
}

export const Clickable: Story = {
  args: {
    onClick: () => alert('로고 클릭'),
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Divider } from './Divider'

const meta = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    weight: { control: 'radio', options: ['thin', 'thick'] },
  },
  args: {
    orientation: 'horizontal',
    weight: 'thin',
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 300, padding: 'var(--spacing-16)' }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const divider = canvas.getByRole('separator')
    await expect(divider).toBeInTheDocument()
  },
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal', weight: 'thin' },
  decorators: [
    (Story) => (
      <div style={{ width: 300, padding: 'var(--spacing-16)' }}>
        <Story />
      </div>
    ),
  ],
}

export const HorizontalThick: Story = {
  args: { orientation: 'horizontal', weight: 'thick' },
  decorators: [
    (Story) => (
      <div style={{ width: 300, padding: 'var(--spacing-16)' }}>
        <Story />
      </div>
    ),
  ],
}

export const Vertical: Story = {
  args: { orientation: 'vertical', weight: 'thin' },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          height: 48,
          alignItems: 'stretch',
          padding: 'var(--spacing-16)',
          gap: 'var(--spacing-8)',
        }}
      >
        <span style={{ fontSize: 'var(--font-size-body-sm)' }}>왼쪽</span>
        <Story />
        <span style={{ fontSize: 'var(--font-size-body-sm)' }}>오른쪽</span>
      </div>
    ),
  ],
}

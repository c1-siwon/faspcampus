import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { Chip } from './Chip'

const meta = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=137-1763',
    },
  },
  argTypes: {
    type: { control: 'radio', options: ['category', 'notice'] },
    label: { control: 'text' },
  },
  args: {
    label: '디자인',
    type: 'category',
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('디자인')).toBeInTheDocument()
  },
}

export const Category: Story = {
  args: { type: 'category', label: '디자인' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('디자인')).toBeInTheDocument()
  },
}

export const Notice: Story = {
  args: { type: 'notice', label: '공지' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('공지')).toBeInTheDocument()
  },
}

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-8)', flexWrap: 'wrap' }}>
      <Chip type="category" label="디자인" />
      <Chip type="category" label="프론트엔드" />
      <Chip type="notice" label="공지" />
      <Chip type="notice" label="이벤트" />
    </div>
  ),
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
      <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
        <Chip {...args} />
        <Chip type="notice" label="공지" />
      </div>
      <CodePreview
        code={`<Chip type="category" label="디자인" />\n<Chip type="notice" label="공지" />`}
      />
    </div>
  ),
}

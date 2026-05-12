import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Chip } from './Chip'

const meta = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A1%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    variant: { control: 'radio', options: ['default', 'selected', 'outlined'] },
    isSelected: { control: 'boolean' },
    removable: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: '프론트엔드',
    variant: 'default',
    isSelected: false,
    removable: false,
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const chip = canvas.getByRole('option')
    await expect(chip).toBeInTheDocument()
    await expect(chip).toHaveAttribute('aria-selected', 'false')
  },
}

export const Selected: Story = {
  args: { variant: 'selected', label: '선택됨' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('option')).toHaveAttribute(
      'aria-selected',
      'true'
    )
  },
}

export const Outlined: Story = {
  args: { variant: 'outlined', label: '아웃라인' },
}

export const Removable: Story = {
  args: { label: '제거 가능', removable: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const removeBtn = canvas.getByLabelText('제거 가능 제거')
    await expect(removeBtn).toBeInTheDocument()
    await userEvent.click(removeBtn)
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-8)', flexWrap: 'wrap' }}>
      <Chip label="기본" variant="default" />
      <Chip label="선택됨" variant="selected" />
      <Chip label="아웃라인" variant="outlined" />
      <Chip label="제거 가능" removable />
    </div>
  ),
}

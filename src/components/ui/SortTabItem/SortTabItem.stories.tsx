import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SortTabItem } from './SortTabItem'

const meta = {
  title: 'UI/SortTabItem',
  component: SortTabItem,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    isSelected: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: '최신순',
    isSelected: false,
  },
} satisfies Meta<typeof SortTabItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tab = canvas.getByRole('tab')
    await expect(tab).toBeInTheDocument()
    await expect(tab).toHaveAttribute('aria-selected', 'false')
  },
}

export const Selected: Story = {
  args: { isSelected: true, label: '인기순' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tab = canvas.getByRole('tab')
    await expect(tab).toHaveAttribute('aria-selected', 'true')
  },
}

export const Unselected: Story = {
  args: { isSelected: false, label: '최신순' },
}

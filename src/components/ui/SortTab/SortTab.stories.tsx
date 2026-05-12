import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { SortTab } from './SortTab'

const defaultOptions = [
  { value: 'latest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'comments', label: '댓글순' },
]

const meta = {
  title: 'UI/SortTab',
  component: SortTab,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  args: {
    options: defaultOptions,
  },
} satisfies Meta<typeof SortTab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tablist = canvas.getByRole('tablist')
    await expect(tablist).toBeInTheDocument()
    const tabs = canvas.getAllByRole('tab')
    await expect(tabs).toHaveLength(3)
    await userEvent.click(tabs[1])
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  },
}

export const FirstSelected: Story = {
  args: { value: 'latest', options: defaultOptions },
}

export const SecondSelected: Story = {
  args: { value: 'popular', options: defaultOptions },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('latest')
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-16)',
        }}
      >
        <SortTab options={defaultOptions} value={value} onChange={setValue} />
        <span
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-secondary)',
          }}
        >
          선택됨: {value}
        </span>
      </div>
    )
  },
}

export const TwoOptions: Story = {
  args: {
    options: [
      { value: 'latest', label: '최신순' },
      { value: 'popular', label: '인기순' },
    ],
  },
}

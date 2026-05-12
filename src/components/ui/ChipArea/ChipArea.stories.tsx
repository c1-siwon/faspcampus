import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { ChipArea } from './ChipArea'

const meta = {
  title: 'UI/ChipArea',
  component: ChipArea,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    singleSelect: { control: 'boolean' },
    selectedValues: { control: 'object' },
  },
  args: {
    options: [
      { value: 'frontend', label: '프론트엔드' },
      { value: 'backend', label: '백엔드' },
      { value: 'design', label: '디자인' },
      { value: 'devops', label: 'DevOps' },
      { value: 'mobile', label: '모바일' },
    ],
    selectedValues: [],
    singleSelect: false,
  },
} satisfies Meta<typeof ChipArea>

export default meta
type Story = StoryObj<typeof meta>

/** 기본 다중 선택 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const listbox = canvas.getByRole('listbox')
    await expect(listbox).toBeInTheDocument()
    await expect(listbox).toHaveAttribute('aria-multiselectable', 'true')
    const chips = canvas.getAllByRole('option')
    await expect(chips).toHaveLength(5)
  },
}

/** 단일 선택 모드 */
export const SingleSelect: Story = {
  args: {
    singleSelect: true,
    selectedValues: ['frontend'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const listbox = canvas.getByRole('listbox')
    await expect(listbox).toHaveAttribute('aria-multiselectable', 'false')
    const selected = canvas.getAllByRole('option', { selected: true })
    await expect(selected).toHaveLength(1)
  },
}

/** 여러 항목 선택된 상태 */
export const MultipleSelected: Story = {
  args: {
    selectedValues: ['frontend', 'design', 'mobile'],
  },
}

/** 인터랙티브 — 클릭으로 선택/해제 */
export const Interactive: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-12)',
        }}
      >
        <ChipArea {...args} selectedValues={selected} onChange={setSelected} />
        <span
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-secondary)',
          }}
        >
          선택됨: {selected.length > 0 ? selected.join(', ') : '없음'}
        </span>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const chips = canvas.getAllByRole('option')
    // 첫 번째 칩 클릭
    await userEvent.click(chips[0])
    await expect(chips[0]).toHaveAttribute('aria-selected', 'true')
    // 두 번째 칩 클릭
    await userEvent.click(chips[1])
    await expect(chips[1]).toHaveAttribute('aria-selected', 'true')
  },
}

/** 인터랙티브 단일 선택 */
export const InteractiveSingleSelect: Story = {
  args: {
    singleSelect: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-12)',
        }}
      >
        <ChipArea {...args} selectedValues={selected} onChange={setSelected} />
        <span
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-secondary)',
          }}
        >
          선택됨: {selected[0] ?? '없음'}
        </span>
      </div>
    )
  },
}

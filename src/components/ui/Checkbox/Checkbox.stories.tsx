import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: '항목 선택',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/** 미선택 상태 */
export const Unchecked: Story = {
  args: { checked: false, label: '미선택' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    await expect(checkbox).toBeInTheDocument()
    await expect(checkbox).not.toBeChecked()
  },
}

/** 선택된 상태 */
export const Checked: Story = {
  args: { checked: true, label: '선택됨' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('checkbox')).toBeChecked()
  },
}

/** 중간 상태 */
export const Indeterminate: Story = {
  args: { checked: false, indeterminate: true, label: '일부 선택됨' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    await expect(checkbox).toHaveAttribute('aria-checked', 'mixed')
  },
}

/** 비활성화 — 미선택 */
export const DisabledUnchecked: Story = {
  args: { disabled: true, checked: false, label: '비활성화 (미선택)' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('checkbox')).toBeDisabled()
  },
}

/** 비활성화 — 선택됨 */
export const DisabledChecked: Story = {
  args: { disabled: true, checked: true, label: '비활성화 (선택됨)' },
}

/** 레이블 없음 */
export const NoLabel: Story = {
  args: { label: undefined },
}

/** 인터랙티브 — 클릭으로 토글 */
export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    await expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

/** 모든 상태 한 눈에 보기 */
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-12)',
      }}
    >
      <Checkbox label="미선택" checked={false} />
      <Checkbox label="선택됨" checked={true} />
      <Checkbox label="중간 상태" indeterminate={true} />
      <Checkbox label="비활성화 (미선택)" disabled />
      <Checkbox label="비활성화 (선택됨)" disabled checked />
    </div>
  ),
}

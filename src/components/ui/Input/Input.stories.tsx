import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Input } from './Input'
import { Icon } from '../Icon/Icon'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
  },
  args: {
    label: '레이블',
    placeholder: '입력하세요',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/** 기본 상태 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await expect(input).toBeInTheDocument()
    await expect(input).not.toBeDisabled()
    await userEvent.type(input, '테스트 입력')
    await expect(input).toHaveValue('테스트 입력')
  },
}

/** 레이블 없음 */
export const NoLabel: Story = {
  args: { label: undefined, placeholder: '레이블 없이 입력' },
}

/** 에러 상태 */
export const ErrorState: Story = {
  args: {
    label: '이메일',
    placeholder: 'example@email.com',
    error: '올바른 이메일 형식을 입력해주세요.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByRole('alert')).toBeInTheDocument()
  },
}

/** 비활성화 상태 */
export const Disabled: Story = {
  args: {
    label: '비활성화 필드',
    placeholder: '입력 불가',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('textbox')).toBeDisabled()
  },
}

/** 왼쪽 아이콘 */
export const WithLeadingIcon: Story = {
  args: {
    label: '검색',
    placeholder: '검색어를 입력하세요',
    leadingIcon: <Icon name="search" size={20} />,
  },
}

/** 오른쪽 아이콘 */
export const WithTrailingIcon: Story = {
  args: {
    label: '캘린더',
    placeholder: '날짜를 선택하세요',
    trailingIcon: <Icon name="calendar" size={20} />,
  },
}

/** 양쪽 아이콘 */
export const WithBothIcons: Story = {
  args: {
    label: '검색 필드',
    placeholder: '검색어 입력',
    leadingIcon: <Icon name="search" size={20} />,
    trailingIcon: <Icon name="close" size={16} />,
  },
}

/** 인터랙티브 — 실시간 입력 */
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
        }}
      >
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-secondary)',
          }}
        >
          입력값: {value || '(없음)'}
        </span>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, '안녕하세요')
    await expect(input).toHaveValue('안녕하세요')
  },
}

/** 모든 상태 한 눈에 보기 */
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-16)',
        width: 320,
      }}
    >
      <Input label="기본" placeholder="기본 상태" />
      <Input
        label="에러"
        placeholder="에러 상태"
        error="필수 입력 항목입니다."
      />
      <Input label="비활성화" placeholder="비활성화" disabled />
      <Input
        label="왼쪽 아이콘"
        placeholder="검색어"
        leadingIcon={<Icon name="search" size={20} />}
      />
    </div>
  ),
}

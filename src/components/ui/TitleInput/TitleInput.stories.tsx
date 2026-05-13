import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { TitleInput } from './TitleInput'

const meta = {
  title: 'UI/TitleInput',
  component: TitleInput,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    maxLength: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: '제목을 입력하세요',
    value: '',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 480, padding: 'var(--spacing-16)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TitleInput>

export default meta
type Story = StoryObj<typeof meta>

/** 기본 상태 */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <TitleInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox', { name: '제목 입력' })
    await expect(textarea).toBeInTheDocument()
    await userEvent.type(textarea, '새 게시글 제목')
    await expect(textarea).toHaveValue('새 게시글 제목')
  },
}

/** 값이 입력된 상태 */
export const WithValue: Story = {
  args: {
    value: '패스트캠퍼스 디자인 시스템 실습 후기',
  },
}

/** 최대 글자 수 카운터 */
export const WithMaxLength: Story = {
  args: {
    maxLength: 100,
    value: '제목 예시',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(/\/100/)).toBeInTheDocument()
  },
}

/** 비활성화 상태 */
export const Disabled: Story = {
  args: {
    disabled: true,
    value: '수정 불가 제목',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('textbox', { name: '제목 입력' })
    ).toBeDisabled()
  },
}

/** 인터랙티브 — 실시간 입력 + 글자 수 */
export const Interactive: Story = {
  args: { maxLength: 100 },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <TitleInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox', { name: '제목 입력' })
    await userEvent.type(textarea, '인터랙티브 제목 입력 테스트')
    await expect(textarea).toHaveValue('인터랙티브 제목 입력 테스트')
  },
}

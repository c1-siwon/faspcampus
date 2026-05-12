import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Searchbar } from './Searchbar'

const meta = {
  title: 'UI/Searchbar',
  component: Searchbar,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    placeholder: '검색어를 입력하세요',
    value: '',
    disabled: false,
  },
} satisfies Meta<typeof Searchbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('searchbox')
    await expect(input).toBeInTheDocument()
    await userEvent.type(input, '검색어')
    await expect(input).toHaveValue('검색어')
  },
}

export const WithValue: Story = {
  args: { value: '검색어 입력됨' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export const Disabled: Story = {
  args: { disabled: true, placeholder: '비활성화된 검색바' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div
        style={{
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
        }}
      >
        <Searchbar
          value={value}
          onChange={setValue}
          onSearch={(v) => alert(`검색: ${v}`)}
          onClear={() => setValue('')}
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
}

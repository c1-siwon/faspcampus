import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { ContentInputContainer } from './ContentInputContainer'

const meta = {
  title: 'UI/ContentInputContainer',
  component: ContentInputContainer,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    maxLength: { control: 'number' },
    minRows: { control: 'number' },
    label: { control: 'text' },
    error: { control: 'text' },
  },
  args: {
    placeholder: '내용을 입력하세요',
    disabled: false,
  },
} satisfies Meta<typeof ContentInputContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return <ContentInputContainer {...args} value={value} onChange={setValue} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox')
    await expect(textarea).toBeInTheDocument()
    await userEvent.type(textarea, '안녕하세요')
    await expect(textarea).toHaveValue('안녕하세요')
  },
}

export const WithLabel: Story = {
  args: { label: '본문' },
}

export const WithMaxLength: Story = {
  args: { maxLength: 1000, value: '샘플 텍스트입니다.' },
}

export const WithError: Story = {
  args: { error: '내용을 입력해 주세요' },
}

export const Disabled: Story = {
  args: { disabled: true, value: '수정할 수 없는 내용입니다.' },
}

export const WithImage: Story = {
  args: {
    imageUrl: '/images/content-showcase.png',
    value:
      '안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다.',
    disabled: true,
  },
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
      <ContentInputContainer {...args} label="본문" maxLength={2000} />
      <CodePreview
        code={`<ContentInputContainer
  label="본문"
  placeholder="내용을 입력하세요"
  maxLength={2000}
  value={content}
  onChange={setContent}
/>`}
      />
    </div>
  ),
}

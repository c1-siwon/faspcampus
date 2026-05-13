import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { PostWriteHeader } from './PostWriteHeader'

const meta = {
  title: 'UI/PostWriteHeader',
  component: PostWriteHeader,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=764-2338',
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: { title: '게시글 쓰기', description: '디스크립션' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 840, padding: 'var(--spacing-24)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PostWriteHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent(
      '게시글 쓰기'
    )
  },
}

export const TitleOnly: Story = {
  args: { description: undefined },
}

export const CustomTitle: Story = {
  args: { title: '질문하기', description: '궁금한 점을 자유롭게 질문해보세요' },
}

export const WithCodeExample: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-24)',
      }}
    >
      <PostWriteHeader {...args} />
      <CodePreview
        code={`<PostWriteHeader
  title="게시글 쓰기"
  description="디스크립션"
/>`}
      />
    </div>
  ),
}

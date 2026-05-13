import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { PostFilterHeader } from './PostFilterHeader'

const meta = {
  title: 'UI/PostFilterHeader',
  component: PostFilterHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=764-2375',
    },
  },
  argTypes: {
    title: { control: 'text' },
    sortValue: { control: 'text' },
  },
  args: { title: '전체 게시글', sortValue: 'latest' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 840, padding: 'var(--spacing-24)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PostFilterHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('전체 게시글')).toBeInTheDocument()
    await expect(
      canvas.getByRole('button', { name: '글쓰기' })
    ).toBeInTheDocument()
  },
}

export const CustomTitle: Story = {
  args: { title: '인기 게시글' },
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
      <PostFilterHeader {...args} />
      <CodePreview
        code={`<PostFilterHeader
  title="전체 게시글"
  sortValue={sort}
  onSortChange={setSort}
  onWrite={() => navigate('/write')}
  onSearch={handleSearch}
/>`}
      />
    </div>
  ),
}

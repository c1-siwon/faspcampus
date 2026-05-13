import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { Category } from './Category'

const meta = {
  title: 'UI/Category',
  component: Category,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=764-2186',
    },
  },
  argTypes: {
    label: { control: 'text' },
    state: { control: 'radio', options: ['default', 'selected'] },
  },
  args: { label: '커뮤니티', state: 'default' },
} satisfies Meta<typeof Category>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('커뮤니티')).toBeInTheDocument()
  },
}

export const Selected: Story = {
  args: { state: 'selected', label: '커뮤니티' },
}

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <Category label="커뮤니티" state="selected" />
      <Category label="스터디" state="default" />
      <Category label="프로젝트" state="default" />
    </div>
  ),
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
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid var(--color-border-default)',
        }}
      >
        <Category {...args} state="selected" />
        <Category label="스터디" state="default" />
      </div>
      <CodePreview
        code={`<Category label="커뮤니티" state="selected" />\n<Category label="스터디" state="default" />`}
      />
    </div>
  ),
}

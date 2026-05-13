import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { Logingoogle } from './Logingoogle'

const meta = {
  title: 'UI/Logingoogle',
  component: Logingoogle,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: { disabled: false, loading: false },
} satisfies Meta<typeof Logingoogle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const btn = canvas.getByRole('button', { name: /구글로 계속하기/ })
    await expect(btn).toBeInTheDocument()
    await expect(btn).not.toBeDisabled()
    await userEvent.click(btn)
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button')).toBeDisabled()
  },
}

export const Loading: Story = {
  args: { loading: true },
}

export const WithCodeExample: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-16)',
        maxWidth: 360,
      }}
    >
      <Logingoogle {...args} />
      <CodePreview
        code={`<Logingoogle onClick={() => signInWithGoogle()} />`}
      />
    </div>
  ),
}

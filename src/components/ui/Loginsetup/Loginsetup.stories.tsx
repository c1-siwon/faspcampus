import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { Loginsetup } from './Loginsetup'

const meta = {
  title: 'UI/Loginsetup',
  component: Loginsetup,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=783-4159',
    },
  },
  argTypes: {
    keepLoggedIn: { control: 'boolean' },
  },
  args: { keepLoggedIn: false },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360, padding: 'var(--spacing-24)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Loginsetup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('로그인 유지')).toBeInTheDocument()
    await expect(
      canvas.getByRole('button', { name: '비밀번호 찾기' })
    ).toBeInTheDocument()
  },
}

export const Checked: Story = {
  args: { keepLoggedIn: true },
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
      <Loginsetup {...args} />
      <CodePreview
        code={`<Loginsetup
  keepLoggedIn={keepLoggedIn}
  onKeepLoggedInChange={setKeepLoggedIn}
  onForgotPassword={() => navigate('/forgot-password')}
/>`}
      />
    </div>
  ),
}

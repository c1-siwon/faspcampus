import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { NavigationBar } from './NavigationBar'

const meta = {
  title: 'UI/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=783-2797',
    },
  },
  argTypes: {
    state: { control: 'radio', options: ['login', 'logout'] },
    selectedCategory: { control: 'text' },
  },
  args: {
    state: 'login',
    categories: ['커뮤니티', '스터디', '프로젝트'],
    selectedCategory: '커뮤니티',
  },
} satisfies Meta<typeof NavigationBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('banner')).toBeInTheDocument()
  },
}

export const StateLogin: Story = {
  args: { state: 'login' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('로그인')).toBeInTheDocument()
  },
}

export const StateLogout: Story = {
  args: { state: 'logout' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('로그아웃')).toBeInTheDocument()
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
      <NavigationBar {...args} />
      <div style={{ padding: 'var(--spacing-16)' }}>
        <CodePreview
          code={`<NavigationBar
  state="login"
  categories={['커뮤니티', '스터디', '프로젝트']}
  selectedCategory="커뮤니티"
  onCategoryChange={setCategory}
  onAuthClick={handleLogin}
/>`}
        />
      </div>
    </div>
  ),
}

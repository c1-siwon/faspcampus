import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { LoginPage } from './LoginPage'

const meta = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=781-4699',
    },
  },
} satisfies Meta<typeof LoginPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('button', { name: '로그인' })
    ).toBeInTheDocument()
    await expect(canvas.getByLabelText('이메일')).toBeInTheDocument()
    await expect(canvas.getByLabelText('비밀번호')).toBeInTheDocument()
  },
}

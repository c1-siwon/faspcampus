import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Toolbar } from './Toolbar'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'

const meta = {
  title: 'UI/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    bordered: { control: 'boolean' },
  },
  args: {
    bordered: true,
  },
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    leading: (
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-title-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }}
      >
        커뮤니티
      </span>
    ),
    trailing: <Icon name="search" size={24} />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toolbar = canvas.getByRole('toolbar')
    await expect(toolbar).toBeInTheDocument()
  },
}

export const WithTitle: Story = {
  args: {
    leading: <Icon name="arrow_left" size={24} />,
    center: (
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-body-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }}
      >
        게시글 작성
      </span>
    ),
    trailing: (
      <Button size="small" variant="core">
        완료
      </Button>
    ),
  },
}

export const WithActions: Story = {
  args: {
    leading: (
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-title-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }}
      >
        홈
      </span>
    ),
    trailing: (
      <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
        <Icon name="search" size={24} />
        <Icon name="notification" size={24} />
      </div>
    ),
  },
}

export const NoBorder: Story = {
  args: {
    bordered: false,
    leading: (
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-title-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }}
      >
        보더 없음
      </span>
    ),
  },
}

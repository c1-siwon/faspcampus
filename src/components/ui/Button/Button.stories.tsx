import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=781-5374',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'core',
        'corelight',
        'mono',
        'monolight',
        'warning',
        'warninglight',
        'outline',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: '버튼',
    variant: 'core',
    size: 'medium',
    disabled: false,
    iconOnly: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '버튼' })
    await expect(button).toBeInTheDocument()
    await expect(button).not.toBeDisabled()
    await userEvent.click(button)
  },
}

export const Core: Story = {
  args: { variant: 'core', children: '확인' },
}

export const CoreLight: Story = {
  args: { variant: 'corelight', children: '확인' },
}

export const Mono: Story = {
  args: { variant: 'mono', children: '확인' },
}

export const MonoLight: Story = {
  args: { variant: 'monolight', children: '확인' },
}

export const Warning: Story = {
  args: { variant: 'warning', children: '삭제' },
}

export const WarningLight: Story = {
  args: { variant: 'warninglight', children: '삭제' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: '취소' },
}

export const Small: Story = {
  args: { size: 'small', children: '작은 버튼' },
}

export const Medium: Story = {
  args: { size: 'medium', children: '중간 버튼' },
}

export const Large: Story = {
  args: { size: 'large', children: '큰 버튼' },
}

export const Disabled: Story = {
  args: { disabled: true, children: '비활성화' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toBeDisabled()
  },
}

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: (
      <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <circle cx="8" cy="8" r="6" />
      </svg>
    ),
    children: '아이콘 포함',
  },
}

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    children: (
      <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <circle cx="8" cy="8" r="6" />
      </svg>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-8)' }}>
      {(
        [
          'core',
          'corelight',
          'mono',
          'monolight',
          'warning',
          'warninglight',
          'outline',
        ] as const
      ).map((variant) => (
        <Button key={variant} variant={variant} size="medium">
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}
    >
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
}

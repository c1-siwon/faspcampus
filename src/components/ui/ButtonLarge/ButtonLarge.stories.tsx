import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Button } from '../Button/Button'

const meta = {
  title: 'UI/ButtonLarge',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
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
    disabled: { control: 'boolean' },
  },
  args: {
    size: 'large',
    variant: 'core',
    children: '큰 버튼',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toBeInTheDocument()
    await expect(button).not.toBeDisabled()
  },
}

export const Core: Story = {
  args: { variant: 'core', children: '확인' },
}

export const CoreLight: Story = {
  args: { variant: 'corelight', children: '확인' },
}

export const Mono: Story = {
  args: { variant: 'mono', children: '완료' },
}

export const MonoLight: Story = {
  args: { variant: 'monolight', children: '완료' },
}

export const Warning: Story = {
  args: { variant: 'warning', children: '삭제' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: '취소' },
}

export const Disabled: Story = {
  args: { disabled: true, children: '비활성화' },
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
        <Button key={variant} size="large" variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Icon } from './Icon'
import type { IconName } from './Icon'

const meta = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'search',
        'close',
        'chevron-down',
        'chevron-up',
        'chevron-left',
        'chevron-right',
        'heart',
        'heart-filled',
        'eye',
        'comment',
        'edit',
        'delete',
        'plus',
        'menu',
        'home',
        'user',
        'bell',
        'check',
        'arrow-left',
        'arrow-right',
        'google',
        'image',
        'calendar',
        'filter',
        'sort',
        'share',
        'bookmark',
        'more',
      ],
    },
    size: {
      control: 'select',
      options: [16, 20, 24, 32],
    },
    color: { control: 'color' },
  },
  args: {
    name: 'search',
    size: 24,
    color: 'var(--color-content-default)',
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('presentation')
    await expect(icon).toBeInTheDocument()
  },
}

export const Search: Story = {
  args: { name: 'search', size: 24 },
}

export const Close: Story = {
  args: { name: 'close', size: 24 },
}

export const Heart: Story = {
  args: { name: 'heart', size: 24 },
}

export const HeartFilled: Story = {
  args: {
    name: 'heart-filled',
    size: 24,
    color: 'var(--color-interactive-destructive)',
  },
}

export const WithLabel: Story = {
  args: { name: 'bell', label: '알림', size: 24 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { name: '알림' })
    await expect(icon).toBeInTheDocument()
  },
}

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-16)',
      }}
    >
      {([16, 20, 24, 32] as const).map((size) => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-4)',
          }}
        >
          <Icon name="search" size={size} />
          <span
            style={{
              fontSize: 'var(--font-size-caption-sm)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {size}px
          </span>
        </div>
      ))}
    </div>
  ),
}

export const AllIcons: Story = {
  render: () => {
    const icons: IconName[] = [
      'search',
      'close',
      'chevron-down',
      'chevron-up',
      'chevron-left',
      'chevron-right',
      'heart',
      'heart-filled',
      'eye',
      'comment',
      'edit',
      'delete',
      'plus',
      'menu',
      'home',
      'user',
      'bell',
      'check',
      'arrow-left',
      'arrow-right',
      'google',
      'image',
      'calendar',
      'filter',
      'sort',
      'share',
      'bookmark',
      'more',
    ]
    return (
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)' }}
      >
        {icons.map((name) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              width: 64,
            }}
          >
            <Icon name={name} size={24} />
            <span
              style={{
                fontSize: 'var(--font-size-caption-sm)',
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                wordBreak: 'break-all',
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    )
  },
}

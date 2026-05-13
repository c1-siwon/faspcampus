import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { CodePreview } from '../../../stories/utils/CodePreview'
import { DateLabel } from './Date'

const NOW = new Date()
const HOUR_AGO = new Date(NOW.getTime() - 60 * 60 * 1000)
const DAY_AGO = new Date(NOW.getTime() - 24 * 60 * 60 * 1000)
const WEEK_AGO = new Date(NOW.getTime() - 7 * 24 * 60 * 60 * 1000)

const meta = {
  title: 'UI/DateLabel',
  component: DateLabel,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
  argTypes: {
    format: { control: 'radio', options: ['relative', 'absolute', 'datetime'] },
  },
  args: { date: HOUR_AGO, format: 'relative' },
} satisfies Meta<typeof DateLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Relative: Story = {
  args: { date: HOUR_AGO, format: 'relative' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const el = canvas.getByRole('time')
    await expect(el).toBeInTheDocument()
    await expect(el).toHaveTextContent(/전$/)
  },
}

export const JustNow: Story = {
  args: { date: new Date(), format: 'relative' },
}

export const DayAgo: Story = {
  args: { date: DAY_AGO, format: 'relative' },
}

export const WeekAgo: Story = {
  args: { date: WEEK_AGO, format: 'relative' },
}

export const Absolute: Story = {
  args: { date: WEEK_AGO, format: 'absolute' },
}

export const Datetime: Story = {
  args: { date: DAY_AGO, format: 'datetime' },
}

export const AllFormats: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-8)',
        fontFamily: 'var(--font-family-pretendard)',
      }}
    >
      {(['relative', 'absolute', 'datetime'] as const).map((fmt) => (
        <div
          key={fmt}
          style={{
            display: 'flex',
            gap: 'var(--spacing-16)',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 'var(--font-size-caption-sm)',
              color: 'var(--color-text-secondary)',
              width: 64,
            }}
          >
            {fmt}
          </span>
          <DateLabel date={DAY_AGO} format={fmt} />
        </div>
      ))}
      <div style={{ marginTop: 'var(--spacing-16)' }}>
        <CodePreview
          code={`<DateLabel date={post.createdAt} format="relative" />\n<DateLabel date={post.createdAt} format="absolute" />`}
        />
      </div>
    </div>
  ),
}

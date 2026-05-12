import type { Meta, StoryObj } from '@storybook/react'
import { CodePreview } from '../utils/CodePreview'

const spacingValues = [
  { token: '--spacing-0', value: '0px' },
  { token: '--spacing-2', value: '2px' },
  { token: '--spacing-4', value: '4px' },
  { token: '--spacing-8', value: '8px' },
  { token: '--spacing-12', value: '12px' },
  { token: '--spacing-16', value: '16px' },
  { token: '--spacing-24', value: '24px' },
  { token: '--spacing-32', value: '32px' },
  { token: '--spacing-40', value: '40px' },
  { token: '--spacing-48', value: '48px' },
  { token: '--spacing-64', value: '64px' },
]

const radiusValues = [
  { token: '--radius-0', value: '0px' },
  { token: '--radius-2', value: '2px' },
  { token: '--radius-4', value: '4px' },
  { token: '--radius-8', value: '8px' },
  { token: '--radius-12', value: '12px' },
  { token: '--radius-16', value: '16px' },
  { token: '--radius-24', value: '24px' },
  { token: '--radius-32', value: '32px' },
  { token: '--radius-full', value: '9999px' },
]

const MAX_BAR_PX = 64

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        margin: '0 0 var(--spacing-12)',
        fontSize: 'var(--font-size-caption-lg)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-text-secondary)',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.06em',
        fontFamily: 'var(--font-family-pretendard)',
      }}
    >
      {children}
    </h3>
  )
}

function SpacingRow({ token, value }: { token: string; value: string }) {
  const px = parseInt(value, 10)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr auto',
        gap: 'var(--spacing-16)',
        padding: 'var(--spacing-12) var(--spacing-16)',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'ui-monospace','Menlo',monospace",
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-interactive-primary)',
          }}
        >
          {token}
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-tertiary)',
            marginTop: '2px',
            fontFamily: 'var(--font-family-pretendard)',
          }}
        >
          {value}
        </div>
      </div>
      <div
        style={{
          height: 20,
          background: 'var(--color-bg-brand-subtle)',
          borderRadius: 'var(--radius-4)',
          border: '1px solid var(--color-border-brand)',
          width: px === 0 ? 2 : `${Math.max((px / MAX_BAR_PX) * 100, 3)}%`,
          minWidth: px === 0 ? 2 : undefined,
          transition: 'width 0.2s',
        }}
      />
      <div
        style={{
          fontFamily: "'ui-monospace','Menlo',monospace",
          fontSize: 'var(--font-size-caption-sm)',
          color: 'var(--color-text-secondary)',
          minWidth: 32,
          textAlign: 'right' as const,
        }}
      >
        {value}
      </div>
    </div>
  )
}

function RadiusRow({ token, value }: { token: string; value: string }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 60px 1fr',
        gap: 'var(--spacing-16)',
        padding: 'var(--spacing-12) var(--spacing-16)',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'ui-monospace','Menlo',monospace",
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-interactive-primary)',
          }}
        >
          {token}
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-tertiary)',
            marginTop: '2px',
            fontFamily: 'var(--font-family-pretendard)',
          }}
        >
          {value}
        </div>
      </div>
      <div
        style={{
          width: 48,
          height: 48,
          background: 'var(--color-bg-brand-subtle)',
          border: '2px solid var(--color-border-brand)',
          borderRadius: `var(${token})`,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          fontFamily: "'ui-monospace','Menlo',monospace",
          fontSize: 'var(--font-size-caption-sm)',
          color: 'var(--color-text-secondary)',
        }}
      >
        border-radius: var({token})
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Tokens/Spacing',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/x26jxBAfU7wMXUPFVdM0il/-%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4--%EC%8B%A4%EC%8A%B5-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2004-1134',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SpacingScale: Story = {
  name: 'Spacing Scale',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 720 }}>
      <SectionTitle>Spacing Scale (11 steps)</SectionTitle>
      <div
        style={{
          background: 'var(--color-bg-default)',
          borderRadius: 'var(--radius-8)',
          border: '1px solid var(--color-border-default)',
          overflow: 'hidden',
        }}
      >
        {spacingValues.map(({ token, value }) => (
          <SpacingRow key={token} token={token} value={value} />
        ))}
      </div>
      <div style={{ marginTop: 'var(--spacing-16)' }}>
        <CodePreview
          code={`/* 스페이싱 토큰 사용 예시 */
padding: var(--spacing-16);
margin: var(--spacing-8) var(--spacing-16);
gap: var(--spacing-12);`}
        />
      </div>
    </div>
  ),
}

export const RadiusScale: Story = {
  name: 'Border Radius Scale',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 720 }}>
      <SectionTitle>Border Radius Scale (9 steps)</SectionTitle>
      <div
        style={{
          background: 'var(--color-bg-default)',
          borderRadius: 'var(--radius-8)',
          border: '1px solid var(--color-border-default)',
          overflow: 'hidden',
        }}
      >
        {radiusValues.map(({ token, value }) => (
          <RadiusRow key={token} token={token} value={value} />
        ))}
      </div>
      <div style={{ marginTop: 'var(--spacing-16)' }}>
        <CodePreview
          code={`/* 라디우스 토큰 사용 예시 */
border-radius: var(--radius-8);
border-radius: var(--radius-full); /* 완전한 원형 */`}
        />
      </div>
    </div>
  ),
}

export const All: Story = {
  name: 'All Spacing & Radius',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 720 }}>
      <h2
        style={{
          margin: '0 0 var(--spacing-24)',
          fontSize: 'var(--font-size-title-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }}
      >
        Spacing &amp; Radius
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-40)',
        }}
      >
        <div>
          <SectionTitle>Spacing Scale (11 steps)</SectionTitle>
          <div
            style={{
              background: 'var(--color-bg-default)',
              borderRadius: 'var(--radius-8)',
              border: '1px solid var(--color-border-default)',
              overflow: 'hidden',
            }}
          >
            {spacingValues.map(({ token, value }) => (
              <SpacingRow key={token} token={token} value={value} />
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Border Radius Scale (9 steps)</SectionTitle>
          <div
            style={{
              background: 'var(--color-bg-default)',
              borderRadius: 'var(--radius-8)',
              border: '1px solid var(--color-border-default)',
              overflow: 'hidden',
            }}
          >
            {radiusValues.map(({ token, value }) => (
              <RadiusRow key={token} token={token} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
}

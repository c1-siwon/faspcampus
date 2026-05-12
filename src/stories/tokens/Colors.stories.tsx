import type { Meta, StoryObj } from '@storybook/react'
import { CodePreview } from '../utils/CodePreview'

// ─── Primitive 색상 데이터 ────────────────────────────────
const primitiveGray = [
  { token: '--primitive-gray-100', hex: '#ffffff', label: 'gray/100' },
  { token: '--primitive-gray-100-alt', hex: '#f9fafb', label: 'Gray/100' },
  { token: '--primitive-gray-200-alt', hex: '#f3f4f6', label: 'Gray/200' },
  { token: '--primitive-gray-300', hex: '#f5f7fa', label: 'gray/300' },
  { token: '--primitive-gray-305', hex: '#f1f5f9', label: 'gray/305' },
  { token: '--primitive-gray-340', hex: '#e2e8f0', label: 'gray/340' },
  { token: '--primitive-gray-360', hex: '#e5e7eb', label: 'gray/360' },
  { token: '--primitive-gray-400', hex: '#d1d5db', label: 'gray/400' },
  { token: '--primitive-gray-490', hex: '#94a3b8', label: 'gray/490' },
  { token: '--primitive-gray-500', hex: '#9ca3af', label: 'gray/500' },
  { token: '--primitive-gray-540', hex: '#7c8484', label: 'gray/540' },
  { token: '--primitive-gray-600', hex: '#6b7280', label: 'gray/600' },
  { token: '--primitive-gray-610', hex: '#64748b', label: 'gray/610' },
  { token: '--primitive-gray-700', hex: '#4b5563', label: 'gray/700' },
  { token: '--primitive-gray-800', hex: '#374151', label: 'gray/800' },
  { token: '--primitive-gray-850', hex: '#2c3030', label: 'gray/850' },
  { token: '--primitive-gray-900', hex: '#262626', label: 'gray/900' },
  { token: '--primitive-gray-1000', hex: '#161c1c', label: 'gray/1000' },
  { token: '--primitive-gray-1050', hex: '#0f172a', label: 'gray/1050' },
  {
    token: '--primitive-white-subtle',
    hex: '#fafafa',
    label: '(background/Subtle 전용)',
  },
]

const primitiveBlue = [
  { token: '--primitive-blue-20', hex: '#f7faff', label: 'blue/20' },
  { token: '--primitive-blue-50', hex: '#eff6ff', label: 'blue/50' },
  { token: '--primitive-blue-100', hex: '#f1f8fe', label: 'blue/100' },
  { token: '--primitive-blue-120', hex: '#dbeafe', label: 'blue/120' },
  { token: '--primitive-blue-200', hex: '#b8dcfc', label: 'blue/200' },
  { token: '--primitive-blue-280', hex: '#93c5fd', label: 'blue/280' },
  { token: '--primitive-blue-300', hex: '#91caff', label: 'blue/300' },
  { token: '--primitive-blue-400', hex: '#69b1ff', label: 'blue/400' },
  { token: '--primitive-blue-440', hex: '#63a3fb', label: 'blue/440' },
  { token: '--primitive-blue-500', hex: '#4096ff', label: 'blue/500' },
  { token: '--primitive-blue-540', hex: '#3b82f6', label: 'blue/540' },
  { token: '--primitive-blue-600', hex: '#1289f6', label: 'blue/600' },
  { token: '--primitive-blue-680', hex: '#1d4ed8', label: 'blue/680' },
  { token: '--primitive-blue-700', hex: '#0958d9', label: 'blue/700' },
  { token: '--primitive-blue-800', hex: '#003eb3', label: 'blue/800' },
  { token: '--primitive-blue-900', hex: '#002c8c', label: 'blue/900' },
  { token: '--primitive-blue-1000', hex: '#001d66', label: 'blue/1000' },
]

const primitiveRed = [
  { token: '--primitive-red-100', hex: '#fffbfc', label: 'red/100' },
  { token: '--primitive-red-200', hex: '#fff2f5', label: 'red/200' },
  { token: '--primitive-red-300', hex: '#ffccc7', label: 'red/300' },
  { token: '--primitive-red-400', hex: '#ffa39e', label: 'red/400' },
  { token: '--primitive-red-500', hex: '#ff4d4f', label: 'red/500' },
  { token: '--primitive-red-600', hex: '#fc2a55', label: 'red/600' },
  { token: '--primitive-red-700', hex: '#cf1322', label: 'red/700' },
  { token: '--primitive-red-800', hex: '#a8071a', label: 'red/800' },
  { token: '--primitive-red-900', hex: '#820014', label: 'red/900' },
  { token: '--primitive-red-1000', hex: '#5c0011', label: 'red/1000' },
]

// ─── Semantic 색상 데이터 ─────────────────────────────────
type SemanticToken = {
  token: string
  hex: string
  label: string
  primitive: string
}

const semanticText: SemanticToken[] = [
  {
    token: '--color-text-primary',
    hex: '#161c1c',
    label: 'text/primary',
    primitive: '--primitive-gray-1000',
  },
  {
    token: '--color-text-secondary',
    hex: '#6b7280',
    label: 'text/secondary',
    primitive: '--primitive-gray-600',
  },
  {
    token: '--color-text-tertiary',
    hex: '#9ca3af',
    label: 'text/tertiary',
    primitive: '--primitive-gray-500',
  },
  {
    token: '--color-text-disabled',
    hex: '#d1d5db',
    label: 'text/disabled',
    primitive: '--primitive-gray-400',
  },
  {
    token: '--color-text-onbrand',
    hex: '#ffffff',
    label: 'text/onbrand',
    primitive: '--primitive-gray-100',
  },
  {
    token: '--color-text-danger',
    hex: '#fc2a55',
    label: 'text/Danger',
    primitive: '--primitive-red-600',
  },
]

const semanticBg: SemanticToken[] = [
  {
    token: '--color-bg-default',
    hex: '#ffffff',
    label: 'background/default',
    primitive: '--primitive-gray-100',
  },
  {
    token: '--color-bg-subtle',
    hex: '#fafafa',
    label: 'background/Subtle',
    primitive: '--primitive-white-subtle',
  },
  {
    token: '--color-bg-muted',
    hex: '#f5f7fa',
    label: 'background/muted',
    primitive: '--primitive-gray-300',
  },
  {
    token: '--color-bg-brand',
    hex: '#1289f6',
    label: 'background/brand',
    primitive: '--primitive-blue-600',
  },
  {
    token: '--color-bg-brand-subtle',
    hex: '#f1f8fe',
    label: 'background/brandsubtle',
    primitive: '--primitive-blue-100',
  },
  {
    token: '--color-bg-danger',
    hex: '#fff2f5',
    label: 'background/danger',
    primitive: '--primitive-red-200',
  },
  {
    token: '--color-bg-danger-subtle',
    hex: '#fffbfc',
    label: 'background/dangersubtle',
    primitive: '--primitive-red-100',
  },
]

const semanticBorder: SemanticToken[] = [
  {
    token: '--color-border-default',
    hex: '#d1d5db',
    label: 'border/Default',
    primitive: '--primitive-gray-400',
  },
  {
    token: '--color-border-strong',
    hex: '#4b5563',
    label: 'border/strong',
    primitive: '--primitive-gray-700',
  },
  {
    token: '--color-border-brand',
    hex: '#1289f6',
    label: 'border/brand',
    primitive: '--primitive-blue-600',
  },
  {
    token: '--color-border-danger',
    hex: '#fc2a55',
    label: 'border/danger',
    primitive: '--primitive-red-600',
  },
]

const semanticInteractive: SemanticToken[] = [
  {
    token: '--color-interactive-primary',
    hex: '#1289f6',
    label: 'interactive/primary',
    primitive: '--primitive-blue-600',
  },
  {
    token: '--color-interactive-primary-hover',
    hex: '#0958d9',
    label: 'interactive/primaryhover',
    primitive: '--primitive-blue-700',
  },
  {
    token: '--color-interactive-destructive',
    hex: '#fc2a55',
    label: 'interactive/destructive',
    primitive: '--primitive-red-600',
  },
  {
    token: '--color-interactive-destructive-hover',
    hex: '#cf1322',
    label: 'interactive/destructivehover',
    primitive: '--primitive-red-700',
  },
]

const semanticContent: SemanticToken[] = [
  {
    token: '--color-content-strong',
    hex: '#262626',
    label: 'content/strong',
    primitive: '--primitive-gray-900',
  },
  {
    token: '--color-content-default',
    hex: '#374151',
    label: 'content/default',
    primitive: '--primitive-gray-800',
  },
  {
    token: '--color-content-muted',
    hex: '#4b5563',
    label: 'content/muted',
    primitive: '--primitive-gray-700',
  },
]

// ─── 공용 UI 헬퍼 ─────────────────────────────────────────
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

function ColorRow({
  token,
  hex,
  label,
  primitive,
}: {
  token: string
  hex: string
  label?: string
  primitive?: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-12)',
        padding: 'var(--spacing-8) 0',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-8)',
          backgroundColor: `var(${token})`,
          border: '1px solid var(--color-border-default)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily:
              "'ui-monospace','SFMono-Regular','Menlo','Consolas',monospace",
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
          }}
        >
          {token}
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-family-pretendard)',
          }}
        >
          {hex}
          {label && (
            <span
              style={{
                marginLeft: 'var(--spacing-8)',
                color: 'var(--color-text-tertiary)',
              }}
            >
              {label}
            </span>
          )}
        </div>
        {primitive && (
          <div
            style={{
              fontSize: '11px',
              color: 'var(--color-interactive-primary)',
              fontFamily: "'ui-monospace','Menlo',monospace",
              marginTop: '2px',
            }}
          >
            → {primitive}
          </div>
        )}
      </div>
    </div>
  )
}

function ColorGroup({
  title,
  tokens,
}: {
  title: string
  tokens: Array<{
    token: string
    hex: string
    label?: string
    primitive?: string
  }>
}) {
  return (
    <div style={{ marginBottom: 'var(--spacing-32)' }}>
      <SectionTitle>{title}</SectionTitle>
      <div
        style={{
          background: 'var(--color-bg-default)',
          borderRadius: 'var(--radius-8)',
          border: '1px solid var(--color-border-default)',
          padding: '0 var(--spacing-16)',
        }}
      >
        {tokens.map((t) => (
          <ColorRow key={t.token} {...t} />
        ))}
      </div>
    </div>
  )
}

// ─── Meta ─────────────────────────────────────────────────
const meta: Meta = {
  title: 'Tokens/Colors',
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

// ─── Stories ──────────────────────────────────────────────
export const Primitive: Story = {
  name: 'Primitive Colors',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 640 }}>
      <ColorGroup title="Primitive · Gray (20)" tokens={primitiveGray} />
      <ColorGroup title="Primitive · Blue (17)" tokens={primitiveBlue} />
      <ColorGroup title="Primitive · Red (10)" tokens={primitiveRed} />
      <CodePreview
        code={`/* 프리미티브는 Semantic 토큰의 참조값으로만 사용하는 것을 권장합니다 */
background-color: var(--primitive-blue-600);
color: var(--primitive-gray-1000);`}
      />
    </div>
  ),
}

export const Semantic: Story = {
  name: 'Semantic Colors',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 640 }}>
      <ColorGroup title="Semantic · Text (6)" tokens={semanticText} />
      <ColorGroup title="Semantic · Background (7)" tokens={semanticBg} />
      <ColorGroup title="Semantic · Border (4)" tokens={semanticBorder} />
      <ColorGroup
        title="Semantic · Interactive (4)"
        tokens={semanticInteractive}
      />
      <ColorGroup title="Semantic · Content (3)" tokens={semanticContent} />
      <CodePreview
        code={`/* 시맨틱 토큰을 우선 사용하세요 */
color: var(--color-text-primary);
background-color: var(--color-bg-brand);
border-color: var(--color-border-default);
/* 호버 상태 */
background-color: var(--color-interactive-primary-hover);`}
      />
    </div>
  ),
}

export const All: Story = {
  name: 'All Colors',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 640 }}>
      <div style={{ marginBottom: 'var(--spacing-48)' }}>
        <h2
          style={{
            margin: '0 0 var(--spacing-24)',
            fontSize: 'var(--font-size-title-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
          }}
        >
          Primitive
        </h2>
        <ColorGroup title="Gray (20)" tokens={primitiveGray} />
        <ColorGroup title="Blue (17)" tokens={primitiveBlue} />
        <ColorGroup title="Red (10)" tokens={primitiveRed} />
      </div>
      <div>
        <h2
          style={{
            margin: '0 0 var(--spacing-24)',
            fontSize: 'var(--font-size-title-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
          }}
        >
          Semantic
        </h2>
        <ColorGroup title="Text (6)" tokens={semanticText} />
        <ColorGroup title="Background (7)" tokens={semanticBg} />
        <ColorGroup title="Border (4)" tokens={semanticBorder} />
        <ColorGroup title="Interactive (4)" tokens={semanticInteractive} />
        <ColorGroup title="Content (3)" tokens={semanticContent} />
      </div>
    </div>
  ),
}

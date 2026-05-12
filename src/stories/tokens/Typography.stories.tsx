import type { Meta, StoryObj } from '@storybook/react'
import { CodePreview } from '../utils/CodePreview'

const fontSizes = [
  { token: '--font-size-display-lg', value: '32px', label: 'Display Large' },
  { token: '--font-size-display-sm', value: '24px', label: 'Display Small' },
  { token: '--font-size-title-lg', value: '20px', label: 'Title Large' },
  { token: '--font-size-title-sm', value: '18px', label: 'Title Small' },
  { token: '--font-size-body-lg', value: '16px', label: 'Body Large' },
  { token: '--font-size-body-sm', value: '14px', label: 'Body Small' },
  { token: '--font-size-caption-lg', value: '13px', label: 'Caption Large' },
  { token: '--font-size-caption-sm', value: '12px', label: 'Caption Small' },
]

const fontWeights = [
  { token: '--font-weight-regular', value: '400', label: 'Regular' },
  { token: '--font-weight-medium', value: '500', label: 'Medium' },
  { token: '--font-weight-bold', value: '700', label: 'Bold' },
]

const SAMPLE_KO = '패스트캠퍼스 디자인 시스템 — 가나다라마바사아'
const SAMPLE_EN = 'The quick brown fox jumps over the lazy dog.'

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

function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--color-border-default)',
        margin: '0',
      }}
    />
  )
}

const meta: Meta = {
  title: 'Tokens/Typography',
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

export const Scale: Story = {
  name: 'Font Size Scale',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 720 }}>
      <SectionTitle>Font Size Scale (8 steps)</SectionTitle>
      <div
        style={{
          background: 'var(--color-bg-default)',
          borderRadius: 'var(--radius-8)',
          border: '1px solid var(--color-border-default)',
          overflow: 'hidden',
        }}
      >
        {fontSizes.map(({ token, value, label }, i) => (
          <div key={token}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 'var(--spacing-16)',
                padding: 'var(--spacing-16)',
                alignItems: 'center',
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
                  }}
                >
                  {value} · {label}
                </div>
              </div>
              <div
                style={{
                  fontSize: `var(${token})`,
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)',
                  lineHeight: 'var(--font-line-height-base)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {SAMPLE_KO}
              </div>
            </div>
            {i < fontSizes.length - 1 && <Divider />}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'var(--spacing-16)' }}>
        <CodePreview
          code={`/* 폰트 사이즈 토큰 사용 예시 */
font-size: var(--font-size-display-lg); /* 32px */
font-size: var(--font-size-title-lg);   /* 20px */
font-size: var(--font-size-body-sm);    /* 14px */
font-size: var(--font-size-caption-sm); /* 12px */`}
        />
      </div>
    </div>
  ),
}

export const Weights: Story = {
  name: 'Font Weights',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 720 }}>
      <SectionTitle>Font Weight Scale (3 steps)</SectionTitle>
      <div
        style={{
          background: 'var(--color-bg-default)',
          borderRadius: 'var(--radius-8)',
          border: '1px solid var(--color-border-default)',
          overflow: 'hidden',
        }}
      >
        {fontWeights.map(({ token, value, label }, i) => (
          <div key={token}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 'var(--spacing-16)',
                padding: 'var(--spacing-16)',
                alignItems: 'center',
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
                  }}
                >
                  {value} · {label}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 'var(--font-size-body-lg)',
                    fontWeight: `var(${token})`,
                    color: 'var(--color-text-primary)',
                    lineHeight: 'var(--font-line-height-base)',
                  }}
                >
                  {SAMPLE_KO}
                </div>
                <div
                  style={{
                    fontSize: 'var(--font-size-body-sm)',
                    fontWeight: `var(${token})`,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--font-line-height-base)',
                    marginTop: 'var(--spacing-4)',
                  }}
                >
                  {SAMPLE_EN}
                </div>
              </div>
            </div>
            {i < fontWeights.length - 1 && <Divider />}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'var(--spacing-16)' }}>
        <CodePreview
          code={`/* 폰트 굵기 토큰 사용 예시 */
font-weight: var(--font-weight-regular); /* 400 */
font-weight: var(--font-weight-medium);  /* 500 */
font-weight: var(--font-weight-bold);    /* 700 */`}
        />
      </div>
    </div>
  ),
}

export const Family: Story = {
  name: 'Font Family',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-pretendard)', maxWidth: 720 }}>
      <SectionTitle>Font Family</SectionTitle>
      <div
        style={{
          background: 'var(--color-bg-default)',
          borderRadius: 'var(--radius-8)',
          border: '1px solid var(--color-border-default)',
          padding: 'var(--spacing-24)',
        }}
      >
        <div
          style={{
            fontFamily: "'ui-monospace','Menlo',monospace",
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-interactive-primary)',
            marginBottom: 'var(--spacing-8)',
          }}
        >
          --font-family-pretendard
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-tertiary)',
            fontFamily: "'ui-monospace','Menlo',monospace",
            marginBottom: 'var(--spacing-16)',
          }}
        >
          'Pretendard Variable', 'Pretendard', sans-serif
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-8)',
          }}
        >
          {[
            '가나다라마바사아자차카타파하',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'abcdefghijklmnopqrstuvwxyz',
            '0123456789 !@#$%^&*()',
          ].map((text) => (
            <div
              key={text}
              style={{
                fontFamily: 'var(--font-family-pretendard)',
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--color-text-primary)',
                lineHeight: 'var(--font-line-height-base)',
              }}
            >
              {text}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 'var(--spacing-16)',
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          line-height: var(--font-line-height-base) = 1.5
        </div>
      </div>
      <div style={{ marginTop: 'var(--spacing-16)' }}>
        <CodePreview
          code={`/* 폰트 패밀리 + 기본 라인높이 */
font-family: var(--font-family-pretendard);
line-height: var(--font-line-height-base); /* 1.5 */`}
        />
      </div>
    </div>
  ),
}

export const All: Story = {
  name: 'All Typography',
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
        타이포그래피 스케일
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-32)',
        }}
      >
        <div>
          <SectionTitle>Font Size Scale</SectionTitle>
          <div
            style={{
              background: 'var(--color-bg-default)',
              borderRadius: 'var(--radius-8)',
              border: '1px solid var(--color-border-default)',
              overflow: 'hidden',
            }}
          >
            {fontSizes.map(({ token, value, label }, i) => (
              <div key={token}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: 'var(--spacing-16)',
                    padding: 'var(--spacing-16)',
                    alignItems: 'center',
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
                      }}
                    >
                      {value} · {label}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: `var(${token})`,
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--color-text-primary)',
                      lineHeight: 'var(--font-line-height-base)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {SAMPLE_KO}
                  </div>
                </div>
                {i < fontSizes.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Font Weights</SectionTitle>
          <div
            style={{
              background: 'var(--color-bg-default)',
              borderRadius: 'var(--radius-8)',
              border: '1px solid var(--color-border-default)',
              overflow: 'hidden',
            }}
          >
            {fontWeights.map(({ token, value, label }, i) => (
              <div key={token}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: 'var(--spacing-16)',
                    padding: 'var(--spacing-16)',
                    alignItems: 'center',
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
                      }}
                    >
                      {value} · {label}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--font-size-body-lg)',
                      fontWeight: `var(${token})`,
                      color: 'var(--color-text-primary)',
                      lineHeight: 'var(--font-line-height-base)',
                    }}
                  >
                    {SAMPLE_KO}
                  </div>
                </div>
                {i < fontWeights.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
}

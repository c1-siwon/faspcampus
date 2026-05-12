import { useState } from 'react'

interface CodePreviewProps {
  code: string
}

export function CodePreview({ code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--color-bg-muted)',
        borderRadius: 'var(--radius-8)',
        border: '1px solid var(--color-border-default)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: 'var(--spacing-8)',
          right: 'var(--spacing-8)',
          padding: '3px var(--spacing-8)',
          background: copied
            ? 'var(--color-bg-brand)'
            : 'var(--color-bg-default)',
          color: copied
            ? 'var(--color-text-onbrand)'
            : 'var(--color-text-secondary)',
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-4)',
          cursor: 'pointer',
          fontSize: 'var(--font-size-caption-sm)',
          fontFamily: 'var(--font-family-pretendard)',
          lineHeight: '1.5',
          transition: 'background 0.15s, color 0.15s',
          zIndex: 1,
        }}
      >
        {copied ? '복사됨 ✓' : '복사'}
      </button>
      <pre
        style={{
          margin: 0,
          padding: 'var(--spacing-16)',
          paddingRight: '72px',
          overflowX: 'auto',
          fontSize: '13px',
          lineHeight: 'var(--font-line-height-base)',
          color: 'var(--color-content-default)',
          fontFamily:
            "'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', monospace",
          whiteSpace: 'pre',
        }}
      >
        <code>{code.trim()}</code>
      </pre>
    </div>
  )
}

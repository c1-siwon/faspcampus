import React from 'react'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant =
  | 'core'
  | 'corelight'
  | 'mono'
  | 'monolight'
  | 'warning'
  | 'warninglight'
  | 'outline'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  variant?: ButtonVariant
  iconOnly?: boolean
  leadingIcon?: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  core: [
    'bg-[var(--color-interactive-primary)]',
    'text-[color:var(--color-text-onbrand)]',
    'hover:bg-[var(--color-interactive-primary-hover)]',
  ].join(' '),
  corelight: [
    'bg-[var(--color-bg-brand-subtle)]',
    'text-[color:var(--color-interactive-primary)]',
  ].join(' '),
  mono: [
    'bg-[var(--color-content-strong)]',
    'text-[color:var(--color-text-onbrand)]',
  ].join(' '),
  monolight: [
    'bg-[var(--color-bg-muted)]',
    'text-[color:var(--color-content-strong)]',
  ].join(' '),
  warning: [
    'bg-[var(--color-interactive-destructive)]',
    'text-[color:var(--color-text-onbrand)]',
    'hover:bg-[var(--color-interactive-destructive-hover)]',
  ].join(' '),
  warninglight: [
    'bg-[var(--color-bg-danger)]',
    'text-[color:var(--color-text-danger)]',
  ].join(' '),
  outline: [
    'bg-[var(--color-bg-default)]',
    'text-[color:var(--color-content-strong)]',
    'border',
    'border-[color:var(--color-border-default)]',
  ].join(' '),
}

/* ⚠️ 누락된 토큰: px=20px(large), py=6px(small) → --spacing-20, --spacing-6 추가 필요 */
const labelSizeClasses: Record<ButtonSize, string> = {
  large:
    'px-[20px] py-[var(--spacing-16)] text-[length:var(--font-size-body-lg)] gap-[var(--spacing-8)]',
  medium:
    'px-[var(--spacing-16)] py-[var(--spacing-12)] text-[length:var(--font-size-body-sm)] gap-[var(--spacing-8)]',
  small:
    'px-[var(--spacing-12)] py-[6px] text-[length:var(--font-size-caption-sm)] gap-[var(--spacing-4)]',
}

const iconOnlySizeClasses: Record<ButtonSize, string> = {
  large: 'p-[var(--spacing-16)]',
  medium: 'p-[var(--spacing-12)]',
  small: 'p-[var(--spacing-8)]',
}

const leadingIconSizes: Record<ButtonSize, number> = {
  large: 24,
  medium: 20,
  small: 16,
}

export function Button({
  size = 'medium',
  variant = 'core',
  iconOnly = false,
  leadingIcon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClass = iconOnly
    ? iconOnlySizeClasses[size]
    : labelSizeClasses[size]
  const iconPx = leadingIconSizes[size]

  return (
    <button
      style={{
        fontFamily: 'var(--font-family-pretendard)',
        fontWeight: 'var(--font-weight-bold)',
        lineHeight: 'var(--font-line-height-base)',
      }}
      className={[
        'inline-flex items-center justify-center rounded-[var(--radius-8)]',
        'transition-colors cursor-pointer whitespace-nowrap',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {!iconOnly && leadingIcon && (
        <span
          style={{ width: iconPx, height: iconPx }}
          className="flex items-center justify-center shrink-0"
        >
          {leadingIcon}
        </span>
      )}
      {iconOnly ? (
        <span
          style={{ width: iconPx, height: iconPx }}
          className="flex items-center justify-center"
        >
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}

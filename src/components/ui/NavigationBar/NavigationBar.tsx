import React from 'react'
import { Category } from '../Category/Category'

export type NavigationBarState = 'login' | 'logout'

export interface NavigationBarProps {
  state?: NavigationBarState
  categories?: string[]
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
  onAuthClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function NavigationBar({
  state = 'login',
  categories = ['커뮤니티'],
  selectedCategory,
  onCategoryChange,
  onAuthClick,
  className = '',
  style,
}: NavigationBarProps) {
  return (
    <header
      role="banner"
      className={className}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--spacing-16)',
        paddingLeft: 'var(--spacing-8)',
        paddingRight: 'var(--spacing-8)',
        borderBottom: '1px solid var(--color-bg-muted)',
        backgroundColor: 'var(--color-bg-default)',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 840,
          width: '100%',
          paddingTop: 'var(--spacing-2)',
          boxShadow: '0px 1px 0px rgba(93,93,93,0.08)',
          overflowX: 'auto',
        }}
      >
        <div style={{ display: 'flex' }}>
          {categories.map((cat) => (
            <Category
              key={cat}
              label={cat}
              state={cat === selectedCategory ? 'selected' : 'default'}
              onClick={
                onCategoryChange ? () => onCategoryChange(cat) : undefined
              }
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onAuthClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-8)',
            paddingLeft: 'var(--spacing-16)',
            paddingRight: 'var(--spacing-16)',
            paddingTop: 'var(--spacing-12)',
            paddingBottom: 'var(--spacing-12)',
            borderRadius: 'var(--radius-8)',
            border: 'none',
            backgroundColor: 'var(--color-bg-brand-subtle)',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-family-pretendard)',
              fontSize: 'var(--font-size-body-sm)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-interactive-primary)',
              whiteSpace: 'nowrap',
            }}
          >
            {state === 'logout' ? '로그아웃' : '로그인'}
          </span>
        </button>
      </div>
    </header>
  )
}

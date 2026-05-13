import React from 'react'

export interface LogoProps {
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function Logo({ onClick, className = '', style }: LogoProps) {
  return (
    <div
      role="img"
      aria-label="FigmaPedia 로고"
      className={className}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        width: 186,
        height: 38,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        flexShrink: 0,
        ...style,
      }}
    >
      <img
        src="/images/logo.svg"
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  )
}

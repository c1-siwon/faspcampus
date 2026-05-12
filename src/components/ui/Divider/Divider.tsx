import React from 'react'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerWeight = 'thin' | 'thick'

export interface DividerProps {
  /** 방향 */
  orientation?: DividerOrientation
  /** 두께 */
  weight?: DividerWeight
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Divider({
  orientation = 'horizontal',
  weight = 'thin',
  className = '',
  style,
}: DividerProps) {
  const isHorizontal = orientation === 'horizontal'
  const thickness = weight === 'thin' ? '1px' : '2px'

  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={className}
      style={{
        border: 'none',
        margin: 0,
        flexShrink: 0,
        backgroundColor: 'var(--color-border-default)',
        ...(isHorizontal
          ? { width: '100%', height: thickness }
          : { width: thickness, height: '100%', alignSelf: 'stretch' }),
        ...style,
      }}
    />
  )
}

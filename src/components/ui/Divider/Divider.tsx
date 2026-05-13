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
    <div
      role="separator"
      aria-orientation={orientation}
      className={className}
      style={{
        display: 'flex',
        flexShrink: 0,
        ...(isHorizontal
          ? {
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingTop: 'var(--spacing-12)',
              paddingBottom: 'var(--spacing-12)',
            }
          : {
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 'var(--spacing-12)',
              paddingRight: 'var(--spacing-12)',
            }),
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--color-bg-muted)',
          flexShrink: 0,
          ...(isHorizontal
            ? { width: '100%', height: thickness }
            : { height: '100%', width: thickness }),
        }}
      />
    </div>
  )
}

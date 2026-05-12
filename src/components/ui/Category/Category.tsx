import React from 'react'
import { ChipArea } from '../ChipArea/ChipArea'
import type { ChipAreaOption } from '../ChipArea/ChipArea'

export type { ChipAreaOption as CategoryOption }

export interface CategoryProps {
  /** 카테고리 옵션 목록 */
  options: ChipAreaOption[]
  /** 선택된 카테고리 값 목록 */
  selectedValues?: string[]
  /** 선택 변경 핸들러 */
  onChange?: (values: string[]) => void
  /** 단일 선택 여부 (기본: true — 카테고리는 보통 단일 선택) */
  singleSelect?: boolean
  /** 섹션 레이블 */
  label?: string
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

/** 카테고리 선택 컴포넌트 — ChipArea를 래핑하여 카테고리 전용 레이아웃 제공 */
export function Category({
  options,
  selectedValues = [],
  onChange,
  singleSelect = true,
  label,
  className = '',
  style,
}: CategoryProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-8)',
        ...style,
      }}
    >
      {/* 섹션 레이블 */}
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-body-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {label}
        </span>
      )}

      {/* ChipArea 재사용 */}
      <ChipArea
        options={options}
        selectedValues={selectedValues}
        onChange={onChange}
        singleSelect={singleSelect}
      />
    </div>
  )
}

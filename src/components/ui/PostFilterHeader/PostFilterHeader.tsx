import React from 'react'
import { Button } from '../Button/Button'
import { SortTab } from '../SortTab/SortTab'
import { Searchbar } from '../Searchbar/Searchbar'

export interface SortTabOption {
  value: string
  label: string
}

export interface PostFilterHeaderProps {
  title?: string
  onWrite?: () => void
  sortOptions?: SortTabOption[]
  sortValue?: string
  onSortChange?: (value: string) => void
  searchValue?: string
  onSearchChange?: (value: string) => void
  onSearch?: (query: string) => void
  className?: string
  style?: React.CSSProperties
}

const DEFAULT_SORT_OPTIONS: SortTabOption[] = [
  { value: 'latest', label: '최신글' },
  { value: 'popular', label: '인기글' },
]

export function PostFilterHeader({
  title = '전체 게시글',
  onWrite,
  sortOptions = DEFAULT_SORT_OPTIONS,
  sortValue,
  onSortChange,
  searchValue = '',
  onSearchChange,
  onSearch,
  className = '',
  style,
}: PostFilterHeaderProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-12)',
        width: '100%',
        maxWidth: 840,
        ...style,
      }}
    >
      {/* 상단: 제목 + 글쓰기 버튼 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-display-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-content-strong)',
            lineHeight: 'var(--font-line-height-base)',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </h2>
        <Button variant="core" size="medium" onClick={onWrite}>
          글쓰기
        </Button>
      </div>

      {/* 하단: SortTab + SearchBar */}
      <div
        role="tablist"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SortTab
          options={sortOptions}
          value={sortValue}
          onChange={onSortChange}
          style={{ border: 'none' }}
        />
        <Searchbar
          placeholder="제목, 내용, 작성자"
          value={searchValue}
          onChange={onSearchChange}
          onSearch={onSearch}
          style={{
            width: 240,
            height: '36px',
            borderRadius: 'var(--radius-full)',
          }}
        />
      </div>
    </div>
  )
}

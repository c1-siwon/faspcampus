# 디자인 토큰 매핑 테이블

> Figma 변수명 ↔ CSS custom property 매핑.
> Claude Code가 Figma 디자인 구현 시 이 문서를 참조합니다.
> 토큰 추가/변경 시 이 문서도 업데이트하세요.
> **출처**: 패스트캠퍼스 실습 디자인 시스템 Figma (node 130:920)
> **최종 업데이트**: 2026-05-13

## 네이밍 규칙

- Figma `/` → CSS `-` 변환. 예: `text/primary` → `--color-text-primary`
- 대소문자 → 소문자 통일. 예: `border/Default` → `--color-border-default`
- Primitive: `--primitive-{스케일}-{단계}` / Semantic: `--color-*`

## Claude용 규칙

1. Figma MCP가 hex 반환 → 아래 테이블에서 찾아 `var(--color-*)` 사용
2. Figma가 spacing 숫자 반환 → `var(--spacing-{n})` 매핑 (예: 8 → `--spacing-8`)
3. 테이블에 없는 값 → 새 변수 만들지 말고 `/* ⚠️ 누락된 토큰 */` 플래그 후 보고

---

## Primitive 색상

### Gray

| Figma 변수명 | CSS Property             | 값      |
| ------------ | ------------------------ | ------- |
| gray/100     | --primitive-gray-100     | #ffffff |
| Gray/100     | --primitive-gray-100-alt | #f9fafb |
| Gray/200     | --primitive-gray-200-alt | #f3f4f6 |
| gray/300     | --primitive-gray-300     | #f5f7fa |
| gray/305     | --primitive-gray-305     | #f1f5f9 |
| gray/340     | --primitive-gray-340     | #e2e8f0 |
| gray/360     | --primitive-gray-360     | #e5e7eb |
| gray/400     | --primitive-gray-400     | #d1d5db |
| gray/490     | --primitive-gray-490     | #94a3b8 |
| gray/500     | --primitive-gray-500     | #9ca3af |
| gray/540     | --primitive-gray-540     | #7c8484 |
| gray/600     | --primitive-gray-600     | #6b7280 |
| gray/610     | --primitive-gray-610     | #64748b |
| gray/700     | --primitive-gray-700     | #4b5563 |
| gray/800     | --primitive-gray-800     | #374151 |
| gray/850     | --primitive-gray-850     | #2c3030 |
| gray/900     | --primitive-gray-900     | #262626 |
| gray/1000    | --primitive-gray-1000    | #161c1c |
| gray/1050    | --primitive-gray-1050    | #0f172a |
| (없음)       | --primitive-white-subtle | #fafafa |

### Blue

| Figma 변수명 | CSS Property          | 값      |
| ------------ | --------------------- | ------- |
| blue/20      | --primitive-blue-20   | #f7faff |
| blue/50      | --primitive-blue-50   | #eff6ff |
| blue/100     | --primitive-blue-100  | #f1f8fe |
| blue/120     | --primitive-blue-120  | #dbeafe |
| blue/200     | --primitive-blue-200  | #b8dcfc |
| blue/280     | --primitive-blue-280  | #93c5fd |
| blue/300     | --primitive-blue-300  | #91caff |
| blue/400     | --primitive-blue-400  | #69b1ff |
| blue/440     | --primitive-blue-440  | #63a3fb |
| blue/500     | --primitive-blue-500  | #4096ff |
| blue/540     | --primitive-blue-540  | #3b82f6 |
| blue/600     | --primitive-blue-600  | #1289f6 |
| blue/680     | --primitive-blue-680  | #1d4ed8 |
| blue/700     | --primitive-blue-700  | #0958d9 |
| blue/800     | --primitive-blue-800  | #003eb3 |
| blue/900     | --primitive-blue-900  | #002c8c |
| blue/1000    | --primitive-blue-1000 | #001d66 |

### Red

| Figma 변수명 | CSS Property         | 값      |
| ------------ | -------------------- | ------- |
| red/100      | --primitive-red-100  | #fffbfc |
| red/200      | --primitive-red-200  | #fff2f5 |
| red/300      | --primitive-red-300  | #ffccc7 |
| red/400      | --primitive-red-400  | #ffa39e |
| red/500      | --primitive-red-500  | #ff4d4f |
| red/600      | --primitive-red-600  | #fc2a55 |
| red/700      | --primitive-red-700  | #cf1322 |
| red/800      | --primitive-red-800  | #a8071a |
| red/900      | --primitive-red-900  | #820014 |
| red/1000     | --primitive-red-1000 | #5c0011 |

---

## Semantic 색상

### Text

| Figma 변수명   | CSS Property           | Primitive 참조        | 값      |
| -------------- | ---------------------- | --------------------- | ------- |
| text/primary   | --color-text-primary   | --primitive-gray-1000 | #161c1c |
| text/secondary | --color-text-secondary | --primitive-gray-600  | #6b7280 |
| text/tertiary  | --color-text-tertiary  | --primitive-gray-500  | #9ca3af |
| text/disabled  | --color-text-disabled  | --primitive-gray-400  | #d1d5db |
| text/onbrand   | --color-text-onbrand   | --primitive-gray-100  | #ffffff |
| text/Danger    | --color-text-danger    | --primitive-red-600   | #fc2a55 |

### Background

| Figma 변수명            | CSS Property             | Primitive 참조           | 값      |
| ----------------------- | ------------------------ | ------------------------ | ------- |
| background/default      | --color-bg-default       | --primitive-gray-100     | #ffffff |
| background/Subtle       | --color-bg-subtle        | --primitive-white-subtle | #fafafa |
| background/muted        | --color-bg-muted         | --primitive-gray-300     | #f5f7fa |
| background/brand        | --color-bg-brand         | --primitive-blue-600     | #1289f6 |
| background/brandsubtle  | --color-bg-brand-subtle  | --primitive-blue-100     | #f1f8fe |
| background/danger       | --color-bg-danger        | --primitive-red-200      | #fff2f5 |
| background/dangersubtle | --color-bg-danger-subtle | --primitive-red-100      | #fffbfc |

### Border

| Figma 변수명   | CSS Property           | Primitive 참조       | 값      |
| -------------- | ---------------------- | -------------------- | ------- |
| border/Default | --color-border-default | --primitive-gray-400 | #d1d5db |
| border/strong  | --color-border-strong  | --primitive-gray-700 | #4b5563 |
| border/brand   | --color-border-brand   | --primitive-blue-600 | #1289f6 |
| border/danger  | --color-border-danger  | --primitive-red-600  | #fc2a55 |

### Interactive

| Figma 변수명                 | CSS Property                          | Primitive 참조       | 값      |
| ---------------------------- | ------------------------------------- | -------------------- | ------- |
| interactive/primary          | --color-interactive-primary           | --primitive-blue-600 | #1289f6 |
| interactive/primaryhover     | --color-interactive-primary-hover     | --primitive-blue-700 | #0958d9 |
| interactive/destructive      | --color-interactive-destructive       | --primitive-red-600  | #fc2a55 |
| interactive/destructivehover | --color-interactive-destructive-hover | --primitive-red-700  | #cf1322 |

### Content

| Figma 변수명    | CSS Property            | Primitive 참조       | 값      |
| --------------- | ----------------------- | -------------------- | ------- |
| content/strong  | --color-content-strong  | --primitive-gray-900 | #262626 |
| content/default | --color-content-default | --primitive-gray-800 | #374151 |
| content/muted   | --color-content-muted   | --primitive-gray-700 | #4b5563 |

---

## Spacing

| Figma 변수명 | CSS Property | 값   |
| ------------ | ------------ | ---- |
| spacing/0    | --spacing-0  | 0px  |
| spacing/2    | --spacing-2  | 2px  |
| spacing/4    | --spacing-4  | 4px  |
| spacing/8    | --spacing-8  | 8px  |
| spacing/12   | --spacing-12 | 12px |
| spacing/16   | --spacing-16 | 16px |
| spacing/24   | --spacing-24 | 24px |
| spacing/32   | --spacing-32 | 32px |
| spacing/40   | --spacing-40 | 40px |
| spacing/48   | --spacing-48 | 48px |
| spacing/64   | --spacing-64 | 64px |

## Radius

| Figma 변수명 | CSS Property  | 값     |
| ------------ | ------------- | ------ |
| radius/0     | --radius-0    | 0px    |
| radius/2     | --radius-2    | 2px    |
| radius/4     | --radius-4    | 4px    |
| radius/8     | --radius-8    | 8px    |
| radius/12    | --radius-12   | 12px   |
| radius/16    | --radius-16   | 16px   |
| radius/24    | --radius-24   | 24px   |
| radius/32    | --radius-32   | 32px   |
| radius/Full  | --radius-full | 9999px |

---

## Typography

| Figma 변수명                 | CSS Property             | 값                                              |
| ---------------------------- | ------------------------ | ----------------------------------------------- |
| Typography 2/FontFamily      | --font-family-pretendard | 'Pretendard Variable', 'Pretendard', sans-serif |
| (line height)                | --font-line-height-base  | 1.5                                             |
| display/lg/\*                | --font-size-display-lg   | 32px                                            |
| display/sm/\*                | --font-size-display-sm   | 24px                                            |
| title/lg/\*                  | --font-size-title-lg     | 20px                                            |
| title/sm/\* (Size/Title)     | --font-size-title-sm     | 18px                                            |
| body/lg/\*                   | --font-size-body-lg      | 16px                                            |
| body/sm/\* (Size/Label)      | --font-size-body-sm      | 14px                                            |
| caption/lg/\* (Size/Caption) | --font-size-caption-lg   | 13px                                            |
| caption/sm/\*                | --font-size-caption-sm   | 12px                                            |
| (regular)                    | --font-weight-regular    | 400                                             |
| (medium)                     | --font-weight-medium     | 500                                             |
| (bold)                       | --font-weight-bold       | 700                                             |

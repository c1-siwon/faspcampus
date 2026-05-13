---
name: community 프로젝트 토큰 현황
description: community 프로젝트의 CSS 토큰 구조, 누락 토큰 목록, Imagesmall 기본 크기
type: project
---

## 토큰 파일 위치

- `src/tokens/colors.css` — semantic + primitive 색상
- `src/tokens/spacing.css` — spacing, radius, typography

## 존재하지 않는 주요 크기 토큰 (⚠️ 누락)

- `--spacing-6`: 6px (Button small py에 필요)
- `--spacing-18`: 18px (Checkbox 크기에 필요)
- `--spacing-20`: 20px (Button large px에 필요)
- `--spacing-44`: 44px (터치 타겟, Input/Searchbar 높이에 필요)
- `--spacing-56`: 56px (Toolbar/NavigationBar/PostWriteHeader 높이에 필요)

**Why:** Figma 디자인 시스템에 이 값들이 사용되지만 토큰으로 등록되지 않음.
**How to apply:** 이 값들은 현재 문자열 px('44px', '56px')로 처리되며, 토큰 추가 전까지 하드코딩 플래그 주석을 유지할 것.

## Imagesmall 기본 크기

- Figma 기준: width=160px, height=102px (이전에 80x80으로 잘못 구현되어 있었음)

## Button 미해결 토큰

- large size: `px-[20px]` — --spacing-20 없으므로 임시 하드코딩 상태
- small size: `py-[6px]` — --spacing-6 없으므로 임시 하드코딩 상태
